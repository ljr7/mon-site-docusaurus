// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Mon CV',
      items: [
        'cv/competences',               // Retirer "cv/"
        'cv/coordonnees',               // Retirer "cv/"
        'cv/experience-professionnelle', // Retirer "cv/"
        'cv/parcours-academique',        // Retirer "cv/"
      ],
    },
  ],
};

module.exports = sidebars;
