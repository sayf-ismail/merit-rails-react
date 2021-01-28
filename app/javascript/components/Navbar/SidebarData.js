import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: 'SEARCH',
    path: '/',
    icon: <AiIcons.AiOutlineSearch />,
    cName: 'nav-text'
  },
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'REWARDS',
    path: '/rewards',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'ANALYTICS',
    path: '/analytics',
    icon: <FaIcons.FaBandcamp />,
    cName: 'nav-text'
  },
  {
    title: 'INTEGRATIONS',
    path: '/',
    icon: <FaIcons.FaPlug />,
    cName: 'nav-text'
  },
  { // Admin
    title: 'COMPANY',
    path: '/',
    icon: <FaIcons.FaBuilding />,
    cName: 'nav-text'
  },
  {
    title: 'USERS',
    path: '/',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  {
    title: 'BONUSES',
    path: '/',
    icon: <FaIcons.FaChild />,
    cName: 'nav-text'
  },
  {
    title: 'REWARDS',
    path: '/',
    icon: <FaIcons.FaGifts />,
    cName: 'nav-text'
  },
]

export default SidebarData