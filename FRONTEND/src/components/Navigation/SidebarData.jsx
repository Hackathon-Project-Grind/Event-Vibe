import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as ImIcons from 'react-icons/im';
import * as GoIcons from 'react-icons/go';
import * as FiIcons from 'react-icons/fi';
import * as Io5Icons from "react-icons/io5";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Browse',
    path: '/browse',
    icon: <Io5Icons.IoSearch/>, // Ensure this is correct, and matches your import
    cName: 'nav-text'
  },
  {
    title: 'List Your Event',
    path: '/list',
    icon: <MdIcons.MdFormatListBulletedAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Signout',
    path: '/signout',
    icon: <GoIcons.GoSignOut />,
    cName: 'nav-textsignout'
  }
];