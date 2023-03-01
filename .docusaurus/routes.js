import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '7ac'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '17b'),
    routes: [
      {
        path: '/docs/category/dashboard',
        component: ComponentCreator('/docs/category/dashboard', 'bc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dashboard/disponibilidad',
        component: ComponentCreator('/docs/dashboard/disponibilidad', '624'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dashboard/estadisticas-de-agente',
        component: ComponentCreator('/docs/dashboard/estadisticas-de-agente', 'a75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '211'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
