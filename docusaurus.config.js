// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mon Curriculum Vitae',
  tagline: 'Bienvenue !!!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/cybersecurity.jpg',
        },
        items: [
          // Menu déroulant "Mon CV"
          {
            label: 'Mon CV',
            position: 'left',
            items: [
              {
                label: 'Parcours scolaire',
                to: '/docs/cv/parcours-academique', // Lien vers le document Markdown
              },
              {
                label: 'Compétences',
                to: '/docs/cv/competences', // Lien vers le document Markdown
              },
              {
                label: 'Coordonnées',
                to: '/docs/cv/coordonnees', // Lien vers le document Markdown
              },
              {
                label: 'Expériences Professionnelles',
                to: '/docs/cv/experience-professionnelle', // Lien vers le document Markdown
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `
        <div style="text-align: center;">
          <h1>Contact</h1>
          <ul style="list-style: disc; padding-left: 0; display: inline-block; text-align: left;">
            <li><u>Email:</u> <b class="email-black">ib3227394@gmail.com</b></li>
            <li><u>LinkedIn:</u> <a href="https://www.linkedin.com/in/mouhamed-lamine-leye-49b738234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">Mon LinkedIn</a></li>
            <li><u>GitHub:</u> <a href="https://github.com/ljr7" target="_blank">Mon GitHub</a></li>
          </ul>
        </div>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
