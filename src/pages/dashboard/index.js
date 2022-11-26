import React from 'react';

export const dashboardPagesConfigs = [
  {
    path: '/dashboard/teachers',
    component: React.lazy(() => import('./teachers')),
  },
  {
    path: '/dashboard/news',
    component: React.lazy(() => import('./news')),
  },
  {
    path: '/dashboard/results',
    component: React.lazy(() => import('./results')),
  },
  {
    path: '/dashboard/courses',
    component: React.lazy(() => import('./courses')),
  },
  {
    path: '/dashboard/components',
    component: React.lazy(() => import('./Components/forRoute')),
  },
  {
    path: '/dashboard/registeredUsers',
    component: React.lazy(() => import('./registeredUsers')),
  },
  {
    path: '/dashboard/admins',
    component: React.lazy(() => import('./admins')),
  },
];
