import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/chatbot_uecci_user_doc/__docusaurus/debug',
    component: ComponentCreator('/chatbot_uecci_user_doc/__docusaurus/debug', '260'),
    exact: true
  },
  {
    path: '/chatbot_uecci_user_doc/__docusaurus/debug/config',
    component: ComponentCreator('/chatbot_uecci_user_doc/__docusaurus/debug/config', '1e9'),
    exact: true
  },
  {
    path: '/chatbot_uecci_user_doc/__docusaurus/debug/content',
    component: ComponentCreator('/chatbot_uecci_user_doc/__docusaurus/debug/content', '81d'),
    exact: true
  },
  {
    path: '/chatbot_uecci_user_doc/__docusaurus/debug/globalData',
    component: ComponentCreator('/chatbot_uecci_user_doc/__docusaurus/debug/globalData', 'f5c'),
    exact: true
  },
  {
    path: '/chatbot_uecci_user_doc/__docusaurus/debug/metadata',
    component: ComponentCreator('/chatbot_uecci_user_doc/__docusaurus/debug/metadata', '4a0'),
    exact: true
  },
  {
    path: '/chatbot_uecci_user_doc/__docusaurus/debug/registry',
    component: ComponentCreator('/chatbot_uecci_user_doc/__docusaurus/debug/registry', '951'),
    exact: true
  },
  {
    path: '/chatbot_uecci_user_doc/__docusaurus/debug/routes',
    component: ComponentCreator('/chatbot_uecci_user_doc/__docusaurus/debug/routes', '7c6'),
    exact: true
  },
  {
    path: '/chatbot_uecci_user_doc/markdown-page',
    component: ComponentCreator('/chatbot_uecci_user_doc/markdown-page', 'fc8'),
    exact: true
  },
  {
    path: '/chatbot_uecci_user_doc/docs',
    component: ComponentCreator('/chatbot_uecci_user_doc/docs', '0c4'),
    routes: [
      {
        path: '/chatbot_uecci_user_doc/docs/category/dashboard',
        component: ComponentCreator('/chatbot_uecci_user_doc/docs/category/dashboard', '8d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/chatbot_uecci_user_doc/docs/dashboard/disponibilidad',
        component: ComponentCreator('/chatbot_uecci_user_doc/docs/dashboard/disponibilidad', '01c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/chatbot_uecci_user_doc/docs/dashboard/estadisticas-de-agente',
        component: ComponentCreator('/chatbot_uecci_user_doc/docs/dashboard/estadisticas-de-agente', '58b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/chatbot_uecci_user_doc/docs/intro',
        component: ComponentCreator('/chatbot_uecci_user_doc/docs/intro', '040'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/chatbot_uecci_user_doc/',
    component: ComponentCreator('/chatbot_uecci_user_doc/', '37b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
