export default {
  title: 'GoRoMa Documentation',
  description: 'Google Workspace, macOS, and Remote Operation administration guides',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Google Workspace', link: '/google-workspace/' },
      { text: 'macOS', link: '/macos/' }
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' }
        ]
      },
      {
        text: 'Google Workspace',
        items: [
          { text: 'Overview', link: '/google-workspace/' },
          { text: 'Dynamic Groups', link: '/google-workspace/groups' },
          { text: 'User Offboarding', link: '/google-workspace/user-offboarding' },
          { text: 'Troubleshooting', link: '/google-workspace/troubleshooting' },
          { 
            text: 'Chrome Management',
            items: [
              { text: 'Overview', link: '/google-workspace/chrome/' },
              { text: 'Managed Browser Settings', link: '/google-workspace/chrome/managed-browser-settings' }
            ]
          }
        ]
      },
      {
        text: 'macOS Management',
        items: [
          { text: 'Overview', link: '/macos/' },
          { text: 'OS Updates', link: '/macos/os-updates' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BiosPlus/techDocs' }
    ]
  }
}