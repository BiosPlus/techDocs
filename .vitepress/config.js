import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TechDocs',
  description: 'Technical Documentation',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BiosPlus/techDocs' }
    ]
  }
})