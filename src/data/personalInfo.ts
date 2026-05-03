export interface SocialLink {
  icon: string
  label: string
  url: string
}

export interface PersonalInfo {
  name: string
  github: string
  email: string
  twitter: string
  blog: string
  skills: string[]
  socials: SocialLink[]
}

export const personalInfo: PersonalInfo = {
  name: 'YourName',
  github: 'https://github.com/yourname',
  email: 'yourname@email.com',
  twitter: 'https://twitter.com/yourname',
  blog: 'https://blog.yourname.com',
  skills: ['Vue 3', 'React', 'TypeScript', 'Python', 'Node.js', 'Go', 'AI Prompting', 'Docker'],
  socials: [
    { icon: '<>', label: 'GitHub', url: 'https://github.com/yourname' },
    { icon: '@', label: 'Email', url: 'mailto:yourname@email.com' },
    { icon: '#', label: 'Twitter', url: 'https://twitter.com/yourname' },
    { icon: '~', label: 'Blog', url: 'https://blog.yourname.com' }
  ]
}
