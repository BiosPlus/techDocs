# 🏢 Google Workspace Scripts & Automation

Enterprise Chrome browser management and Google Workspace automation tools.

## 💬 Chrome Extension Management

### 🚫 uBlock Origin Enterprise Configuration

Complete enterprise ad-blocking solution with security-focused filter lists.

**Configuration File**: [`configuration.json`](../../scripts/google-workspace/chrome/configuration.json)

```json
{
  "toOverwrite": {
      "Value": {
          "filterLists": [
              "ublock-filters",
              "ublock-badware",
              "ublock-privacy", 
              "ublock-abuse",
              "ublock-unbreak",
              "ublock-quick-fixes",
              "easylist",
              "easyprivacy",
              "urlhaus-1",
              "plowe-0",
              "curben-phishing"
          ]
      }
  },
  "toAdd": {
      "Value": {
          "trustedSiteDirectives": [
              "about-scheme",
              "behind-the-scene",
              "chrome-extension-scheme",
              "chrome-scheme",
              "edge-scheme",
              "moz-extension-scheme", 
              "opera-scheme",
              "vivaldi-scheme",
              "wyciwyg-scheme",
              "domain.tld",
              "localhost"
          ]
      }
  }
}
```

### 🔒 Security Features

**Malware Protection**:
- `ublock-badware` - Known malicious domains
- `urlhaus-1` - Real-time malware URL blocking
- `curben-phishing` - Anti-phishing protection

**Privacy Protection**:
- `ublock-privacy` - Tracking prevention
- `easyprivacy` - Enhanced privacy filtering
- `ublock-abuse` - Anti-abuse measures

**Performance Optimization**:
- `ublock-unbreak` - Fixes for broken sites
- `ublock-quick-fixes` - Rapid compatibility updates

## 🎨 Deployment Methods

### Google Admin Console
1. Navigate to **Device management > Chrome management > Apps & Extensions**
2. Add uBlock Origin extension
3. Upload the configuration JSON
4. Apply to target organizational units

### Chrome Enterprise Policy
```json
{
  "ExtensionSettings": {
    "cjpalhdlnbpafiamejdnhcphjbkeiagm": {
      "installation_mode": "force_installed",
      "update_url": "https://clients2.google.com/service/update2/crx",
      "managed_configuration": {
        // Insert configuration.json content here
      }
    }
  }
}
```

### PowerShell (Windows)
```powershell
# Deploy via Group Policy or Intune
$regPath = "HKLM\SOFTWARE\Policies\Google\Chrome\ExtensionSettings\cjpalhdlnbpafiamejdnhcphjbkeiagm"
New-Item -Path $regPath -Force
Set-ItemProperty -Path $regPath -Name "installation_mode" -Value "force_installed"
```

## 🚀 Quick Start Guide

1. **Download** the [configuration.json](../../scripts/google-workspace/chrome/configuration.json)
2. **Customize** trusted domains (replace `domain.tld` with your domain)
3. **Deploy** via Google Admin Console or GPO
4. **Test** with a pilot organizational unit
5. **Monitor** extension status and user feedback

## 📈 Benefits

- **✅ Enhanced Security** - Blocks malware, phishing, and tracking
- **✅ Improved Performance** - Reduces bandwidth and page load times
- **✅ Centralized Management** - Consistent policies across all Chrome browsers
- **✅ Compliance Ready** - Supports regulatory requirements for web filtering

## ⚠️ Important Notes

::: warning Testing Required
Always test with a small group before organization-wide deployment. Some internal applications may require allowlisting.
:::

::: tip Custom Domains
Replace `domain.tld` in the trusted site directives with your actual domain names.
:::

::: info Extension ID
uBlock Origin extension ID: `cjpalhdlnbpafiamejdnhcphjbkeiagm`
:::