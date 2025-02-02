import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavTitle',
    anchor: 'My Pages',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'MyDashboard',
    to: '/mydashboard',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'TryAnything',
    to: '/tryAnything',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'TryAnything2',
    to: '/tryAnything2',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'UserManager',
    to: '/userManager',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'BranchManager',
    to: '/branchManager',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'HIerarchyManager',
    to: '/hierarchyManager',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'MRF',
    to: '/mrf',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavTitle',
    anchor: 'Theme',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Colors',
    to: '/theme/colors',
    icon: <CIcon name="cil-drop" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Typography',
    to: '/theme/typography',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavTitle',
    anchor: 'Components',
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Base',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Accordion',
        to: '/base/accordion',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Cards',
        to: '/base/cards',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Carousel',
        to: '/base/carousels',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Collapse',
        to: '/base/collapses',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'List group',
        to: '/base/list-groups',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Pagination',
        to: '/base/paginations',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Popovers',
        to: '/base/popovers',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Progress',
        to: '/base/progress',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Spinners',
        to: '/base/spinners',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Tables',
        to: '/base/tables',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Buttons',
    icon: <CIcon name="cil-cursor" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Forms',
    icon: <CIcon name="cil-notes" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Form Control',
        to: '/forms/form-control',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Select',
        to: '/forms/select',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Range',
        to: '/forms/range',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Input Group',
        to: '/forms/input-group',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Layout',
        to: '/forms/layout',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Charts',
    to: '/charts',
    icon: <CIcon name="cil-chart-pie" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavGroup',
    anchor: 'Icons',
    icon: <CIcon name="cil-star" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Notifications',
    icon: <CIcon name="cil-bell" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Badges',
        to: '/notifications/badges',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Modal',
        to: '/notifications/modals',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Widgets',
    to: '/widgets',
    icon: <CIcon name="cil-calculator" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavTitle',
    anchor: 'Extras',
  },
  {
    _component: 'CNavGroup',
    anchor: 'Pages',
    icon: <CIcon name="cil-star" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Login',
        to: '/login',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Register',
        to: '/register',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 404',
        to: '/404',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
