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
];
