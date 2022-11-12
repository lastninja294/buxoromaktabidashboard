import React from 'react';
import {GiTeacher} from 'react-icons/gi';
import {MdOutlinePlayLesson, MdOutlineManageAccounts} from 'react-icons/md';
import {IoNewspaperOutline} from 'react-icons/io5';
import {AiOutlineLineChart} from 'react-icons/ai';

const routesConfig = [
  {
    id: 'app',
    title: 'Dashboard',
    messageId: 'sidebar.sample',
    type: 'group',
    children: [
      {
        id: 'teachers',
        title: 'Teachers',
        messageId: 'sidebar.dashboard.teachers',
        type: 'item',
        icon: <GiTeacher />,
        path: '/dashboard/teachers',
      },
      {
        id: 'courses',
        title: 'Courses',
        messageId: 'sidebar.dashboard.courses',
        type: 'item',
        icon: <MdOutlinePlayLesson />,
        path: '/dashboard/courses',
      },
      {
        id: 'results',
        title: 'Results',
        messageId: 'sidebar.dashboard.results',
        type: 'item',
        icon: <AiOutlineLineChart />,
        path: '/dashboard/results',
      },
      {
        id: 'news',
        title: 'News',
        messageId: 'sidebar.dashboard.news',
        type: 'item',
        icon: <IoNewspaperOutline />,
        path: '/dashboard/results',
      },
    ],
  },
  {
    id: 'extra-pages',
    title: 'Extra Pages',
    messageId: 'sidebar.pages.extraPages',
    path: 'extra-pages',
    type: 'group',
    children: [
      {
        id: 'account',
        title: 'Account',
        messageId: 'sidebar.pages.extraPages.account',
        icon: <MdOutlineManageAccounts />,
        path: '/extra-pages/user-profile',
      },
    ],
  },
];
export default routesConfig;
