# Google Workspace Scripts & Automation

Scripts and configurations for managing Google Workspace environments, Chrome browser policies, and related automation.

## Chrome Extension Management

### uBlock Origin Configuration
Enterprise-grade ad blocker configuration for Chrome browsers in managed environments.

- **Location**: `Google Workspace/Extensions/Chrome/ublock/`
- **Purpose**: Centralized ad blocking and content filtering
- **Use Case**: Improved security and productivity across managed Chrome installations

## Browser Policy Management

Configurations for managing Chrome browsers in enterprise Google Workspace environments:

### Extension Policies
- Force-install approved extensions
- Block malicious or unapproved extensions
- Configure extension-specific settings

### Security Policies  
- Content filtering and URL blocking
- Download restrictions and safe browsing
- Certificate and authentication management

## Integration with Google Admin Console

These configurations work alongside Google Admin Console policies for:
- Organizational unit targeting
- User group-based policy application
- Centralized management and reporting

## Best Practices

::: tip Policy Testing
Always test browser policies in a limited organizational unit before rolling out to your entire Google Workspace domain.
:::

::: warning Extension Management
Keep track of extension IDs and versions to ensure consistent deployment across your organization.
:::

## Repository Reference

All Google Workspace scripts and configurations are maintained in the [Device-Management repository](https://github.com/BiosPlus/Device-Management/tree/main/Google%20Workspace).