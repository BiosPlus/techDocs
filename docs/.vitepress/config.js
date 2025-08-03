export default {
  title: 'TechDocs',
  description: 'Technical documentation collection',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/' }
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Documentation', link: '/docs/' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BiosPlus/techDocs' }
    ]
  }
}