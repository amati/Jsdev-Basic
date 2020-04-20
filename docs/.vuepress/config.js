module.exports = {
  title: 'Javascript Development',
  description: '...',
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    '@vuepress/nprogress',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      '@vuepress/last-updated',
      {
        dateOptions: {
          hours12: false,
        },
        transformer: (timestamp, lang) => {
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
  ],
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'amati.io', link: 'https://amati.io' },
    ],
    sidebar: 'auto',
  },
};
