import { getAssetUrl } from '../utils';

export const contacts = [
  {
    name: 'GitHub',
    link: 'https://github.com/charliettaylor/',
    image: getAssetUrl('/github.svg'),
    alt: 'GitHub Logo'
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/charliettaylor/',
    image: new URL('/linkedin.svg', import.meta.url).href,
    alt: 'LinkedIn Logo'
  },
  {
    name: 'Email',
    link: 'mailto:cttaylor27@outlook.com',
    image: new URL('/email.svg', import.meta.url).href,
    alt: 'Email Symbol'
  },
  {
    name: 'Resume',
    link: new URL('/resume.pdf', import.meta.url).href,
    image: new URL('/resume.png', import.meta.url).href,
    alt: 'Resume Image'
  }
];
