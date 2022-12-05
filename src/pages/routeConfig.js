import React from 'react';
import {GiTeacher} from 'react-icons/gi';
import {MdOutlinePlayLesson, MdPlaylistAddCheck} from 'react-icons/md';
import {IoNewspaperOutline} from 'react-icons/io5';
import {AiOutlineLineChart} from 'react-icons/ai';
import {VscTools} from 'react-icons/vsc';
import {RiAdminLine} from 'react-icons/ri';
// import {useAuthUser} from '@crema/utility/AuthHooks';

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
        path: '/dashboard/news',
      },
      {
        id: 'registeredUsers',
        title: 'RegisteredUsers',
        messageId: 'sidebar.dashboard.registeredUsers',
        type: 'item',
        icon: <MdPlaylistAddCheck />,
        path: '/dashboard/registeredUsers',
      },
      {
        id: 'Admins',
        title: 'admins',
        messageId: 'sidebar.dashboard.admins',
        type: 'super',
        icon: <RiAdminLine />,
        path: '/dashboard/admins',
      },
      {
        id: 'components',
        title: 'Components',
        messageId: 'sidebar.dashboard.components',
        type: 'item',
        icon: <VscTools />,
        path: '/dashboard/components',
      },
    ],
  },
];
export default routesConfig;
