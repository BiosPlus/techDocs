# ☁️ Microsoft 365 & Intune Configurations

Enterprise security configurations for Microsoft 365 and Intune environments, focusing on Essential 8 compliance.

## 🔒 Essential 8 Compliance

### Office Macro Security Policies

Implementation of Australian Cyber Security Centre's Essential 8 framework for Office application security.

#### Trusted Locations Configuration

**File**: [`Essential 8 - Office - Macros from Trusted Locations.json`](../../scripts/microsoft365/Intune/Configurations/Essential%208%20-%20Office%20-%20Macros%20from%20Trusted%20Locations.json)

```json
{
  "displayName": "Essential 8 - Office - Macros from Trusted Locations",
  "description": "Allow macros only from trusted locations",
  "platforms": "windows10",
  "technologies": "mdm",
  "settings": {
    "macroSettings": {
      "trustedLocationsOnly": true,
      "disableVBAMacros": false,
      "trustedLocations": [
        "%PROGRAMFILES%\\Microsoft Office\\Templates",
        "%APPDATA%\\Microsoft\\Templates",
        "\\\\trusted-server\\shared\\templates"
      ]
    }
  }
}
```

#### Trusted Publishers Configuration  

**File**: [`Essential 8 - Office - Macros from Trusted Publishers.json`](../../scripts/microsoft365/Intune/Configurations/Essential%208%20-%20Office%20-%20Macros%20from%20Trusted%20Publishers.json)

```json
{
  "displayName": "Essential 8 - Office - Macros from Trusted Publishers",
  "description": "Allow macros only from digitally signed trusted publishers",
  "platforms": "windows10", 
  "technologies": "mdm",
  "settings": {
    "macroSettings": {
      "trustedPublishersOnly": true,
      "requireSignedMacros": true,
      "blockUnsignedMacros": true,
      "trustedPublishers": [
        "Microsoft Corporation",
        "Your Organization Name"
      ]
    }
  }
}
```

## 🛡️ Security Benefits

### Macro Protection
- **🚫 Blocks unsigned macros** - Prevents malware execution
- **✅ Allows trusted sources** - Maintains productivity for legitimate use
- **📝 Enforces digital signing** - Verifies macro authenticity
- **📍 Restricts locations** - Limits macro execution to approved paths

### Compliance Framework
- **Essential 8 Alignment** - Meets Australian Cyber Security Centre requirements
- **Zero Trust Architecture** - Assumes breach mentality
- **Defense in Depth** - Multiple security layers
- **Risk Mitigation** - Reduces attack surface

## 🚀 Deployment via Intune

### Step 1: Import Configuration
1. Sign in to **Microsoft Endpoint Manager admin center**
2. Navigate to **Devices > Configuration profiles**
3. Click **Create profile**
4. Select **Windows 10 and later** platform
5. Choose **Custom** profile type

### Step 2: Configure Settings
```powershell
# PowerShell commands for manual configuration
# Trusted Locations Only
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Office\16.0\Word\Security" -Name "VBAWarnings" -Value 3
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Office\16.0\Excel\Security" -Name "VBAWarnings" -Value 3
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Office\16.0\PowerPoint\Security" -Name "VBAWarnings" -Value 3

# Trusted Publishers Only  
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Office\16.0\Word\Security" -Name "VBAWarnings" -Value 2
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Office\16.0\Excel\Security" -Name "VBAWarnings" -Value 2
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Office\16.0\PowerPoint\Security" -Name "VBAWarnings" -Value 2
```

### Step 3: Assign to Groups
1. Select target **Azure AD groups**
2. Configure **applicability rules**
3. Set **deployment schedule**
4. **Monitor** compliance status

## 📊 Monitoring & Compliance

### Intune Reporting
```kusto
// KQL query for compliance monitoring
IntuneDeviceComplianceOrg
| where PolicyName contains "Essential 8"
| summarize 
    TotalDevices = dcount(DeviceId),
    CompliantDevices = dcountif(DeviceId, ComplianceState == "Compliant"),
    NonCompliantDevices = dcountif(DeviceId, ComplianceState == "NonCompliant")
| extend CompliancePercentage = (CompliantDevices * 100.0) / TotalDevices
```

### PowerShell Validation
```powershell
# Check macro security settings
$wordSecurity = Get-ItemProperty -Path "HKCU:\Software\Microsoft\Office\16.0\Word\Security" -Name "VBAWarnings"
$excelSecurity = Get-ItemProperty -Path "HKCU:\Software\Microsoft\Office\16.0\Excel\Security" -Name "VBAWarnings"

Write-Host "Word VBA Warnings: $($wordSecurity.VBAWarnings)"
Write-Host "Excel VBA Warnings: $($excelSecurity.VBAWarnings)"

# Values: 1=Enable all, 2=Disable unsigned, 3=Disable except trusted locations, 4=Disable all
```

## ⚠️ Implementation Notes

::: warning Testing Required
Test configurations in a pilot group before organization-wide deployment. Some line-of-business applications may require allowlisting.
:::

::: tip Gradual Rollout
Implement in phases:
1. **Trusted Publishers** first (less restrictive)
2. **Trusted Locations** second (more restrictive)
3. Monitor user feedback and adjust accordingly
:::

::: info Registry Impact
These configurations modify Windows Registry settings. Ensure you have appropriate backup and rollback procedures.
:::

## 🔗 Additional Resources

- [Essential 8 Maturity Model](https://www.cyber.gov.au/acsc/view-all-content/publications/essential-eight-maturity-model)
- [Microsoft Office Security Documentation](https://docs.microsoft.com/en-us/deployoffice/security/)
- [Intune Configuration Profiles](https://docs.microsoft.com/en-us/mem/intune/configuration/)