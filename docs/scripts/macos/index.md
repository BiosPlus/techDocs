# 🍎 macOS Scripts & Configurations

Production-ready macOS device management scripts and configuration profiles for enterprise deployment.

## 🖼️ Application Configurations

### 💼 Productivity Suite

#### Microsoft Office Complete Suite
- **Word** - Document editing policies
- **Excel** - Spreadsheet security settings
- **PowerPoint** - Presentation controls
- **Outlook** - Email and calendar policies
- **OneDrive** - File sync configuration

#### Collaboration Tools
- **Slack** - Team communication settings
- **Google Drive** - File sync and collaboration

### 🌍 Browser Management
- **Safari** - Native browser security policies
- **Brave** - Privacy-focused configuration
- **Microsoft Edge** - Enterprise browser settings
- **Firefox** - Open-source browser policies

### 🔒 Security Applications
- **1Password** - Enterprise password management

### 🛠️ Utilities
- **Support App** - System information and help desk tools
- **Renew** - License management

## 🔍 Diagnostic Scripts

Real-time system health and compliance monitoring:

### Administrative Checks
```bash
#!/bin/bash
# Check if current user has admin privileges
if dseditgroup -o checkmember -m "%EmailPrefix%" admin &>/dev/null; then
    echo "Current user (%EmailPrefix%) is in the admin group."
else
    echo "Current user (%EmailPrefix%) is not in the admin group."
fi
```

### System Information
- **IP Address Detection** - Network configuration validation
- **Location/Country** - Geolocation compliance checks
- **TouchID Status** - Biometric authentication verification
- **Uptime Monitoring** - System stability tracking
- **Rosetta Detection** - Apple Silicon compatibility

### Software Compliance
- **CrowdStrike Sensor** - Endpoint protection status
- **SwiftDialog** - User interface toolkit detection
- **Installomator** - Software deployment tool status
- **MDMWatchdog** - Mobile device management monitoring

## ⚙️ Management Functions

### Test Pilot Enrollment
Advanced user group management with plist manipulation:

```bash
#!/bin/bash
# Enroll user in Test Pilot program
currentUser=$( scutil <<< "show State:/Users/ConsoleUser" | awk '/Name :/ { print $3 }' )
uid=$(id -u "$currentUser")

runAsUser() {
  launchctl asuser "$uid" sudo -u "$currentUser" "$@"
}

# Set TestPilot flag
runAsUser defaults write /Users/$currentUser/Library/Preferences/tld.domain.user TestPilot -bool true

# Verify and notify
result=$(runAsUser defaults read /Users/$currentUser/Library/Preferences/tld.domain.user TestPilot 2>/dev/null)
if [ "$result" == "1" ]; then
  echo "TestPilot key set to true successfully."
  runAsUser /usr/local/bin/dialog --notification --title "Test Pilot Program" \
    --message "You have successfully enrolled into the Test Pilot program."
fi
```

## 📜 Base Configuration

**Base.mobileconfig** - Foundation settings for:
- System preferences
- Security policies
- Network configurations
- User restrictions

## 🚀 Quick Deployment

1. **Download** the required .mobileconfig files
2. **Test** in a development environment
3. **Deploy** via your MDM solution (Jamf Pro, Intune, etc.)
4. **Monitor** with diagnostic scripts

::: warning License Compliance
All scripts are GNU AGPL v3 licensed. Maintain attribution and share modifications.
:::

::: tip Jamf Pro Users
`.mobileconfig` files may need modification for Jamf compatibility. Test thoroughly.
:::