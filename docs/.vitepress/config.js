import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  title: 'GoRoMa Documentation',
  description: 'Google Workspace, macOS, and Remote Operation administration guides',
  outDir: resolve(__dirname, '../../dist'),
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Google Workspace', link: '/google-workspace/' },
      { text: 'macOS', link: '/macos/' },
      { text: 'Scripts & Automation', link: '/scripts/' }
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
      },
      {
        text: 'Scripts & Automation',
        items: [
          { text: 'Overview', link: '/scripts/' },
          { text: 'macOS Scripts', link: '/scripts/macos/' },
          { text: 'Google Workspace Scripts', link: '/scripts/google-workspace/' },
          { text: 'Microsoft 365 Scripts', link: '/scripts/microsoft365/' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BiosPlus/techDocs' }
    ]
  }
}