/**
 ** ********************************************************
 ** @file sidebar.js
 ** @author  hanli
 ** @date 2018-09-25 14:39:34
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-10-30 20:04:18
 ** @copyright (c) 2018 @itest/itest-front
 ** ********************************************************
 */

export default [
  {
    path: '/',
    component: () => import('components/global/LMain'),
    redirect: '/project',
    name: '项目信息',
    meta: { title: '项目信息', icon: 'example' },
    children: [
      {
        path: 'project',
        name: '项目概况',
        component: () => import('views/v-environment'),
        meta: { title: '项目概况', icon: 'table' }
      }
    ]
  },
  {
    path: '/environment',
    component: () => import('components/global/LMain'),
    redirect: '/environment/info',
    name: '环境',
    meta: { title: '环境', icon: 'example' },
    children: [
      {
        path: 'info',
        name: '基本信息',
        component: () => import('views/v-environment'),
        meta: { title: '环境数据', icon: 'table' }
      }
    ]
  },
  {
    path: '/interface',
    component: () => import('components/global/LMain'),
    redirect: '/interface/info',
    name: '接口',
    meta: { title: '接口', icon: 'example' },
    children: [
      {
        path: 'info',
        name: '基本信息',
        component: () => import('views/v-interface'),
        meta: { title: '接口数据', icon: 'table' }
      },
      {
        path: 'invoke',
        name: '接口调试',
        component: () => import('views/v-environment'),
        meta: { title: '发票数据', icon: 'table' }
      }
    ]
  },
  {
    path: '/use-case',
    component: () => import('components/global/LMain'),
    redirect: '/use-case/info',
    name: '用例',
    meta: { title: '用例', icon: 'example' },
    children: [
      {
        path: 'info',
        name: '基本信息',
        component: () => import('views/v-use-case'),
        meta: { title: '用例数据', icon: 'table' }
      }
    ]
  },
  {
    path: '/test-data',
    component: () => import('components/global/LMain'),
    redirect: '/test-data/image',
    name: '数据',
    meta: { title: '数据', icon: 'example' },
    children: [
      {
        path: 'image',
        name: '图片数据',
        component: () => import('views/v-data/v-data-images/VDataImages'),
        meta: { title: '图片数据', icon: 'table' }
      },
      {
        path: 'params',
        name: '参数数据',
        component: () => import('views/v-use-case'),
        meta: { title: '图片数据', icon: 'table' }
      }
    ]
  },
  {
    path: '/plan',
    component: () => import('components/global/LMain'),
    redirect: '/plan/info',
    name: '计划',
    meta: { title: '任务', icon: 'example' },
    children: [
      {
        path: 'info',
        name: '基本信息',
        component: () => import('views/v-environment'),
        meta: { title: '任务数据', icon: 'table' }
      }
    ]
  },
  {
    path: '/execution',
    component: () => import('components/global/LMain'),
    redirect: '/execution/info',
    name: '结果',
    meta: { title: '任务', icon: 'example' },
    children: [
      {
        path: 'info',
        name: '基本信息',
        component: () => import('views/v-environment'),
        meta: { title: '任务数据', icon: 'table' }
      }
    ]
  }
];
