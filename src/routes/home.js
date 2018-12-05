/**
 ** ********************************************************
 ** The home page route config
 ** @file home.js
 ** @author
 ** @date 2018-03-07 17:26:40
 ** @last_modified_by  hanli
 ** @last_modified_date 2018-10-08 15:19:44
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

export default [
  // {
  //   name: 'home',
  //   path: '/',
  //   component: () => import(/* webpackChunkName: "v-home" */ 'views/VHome'),
  //   meta: {
  //     title: 'home page'
  //   }
  // },
  {
    path: '/projects',
    component: () => import('components/global/LMainNoSide'),
    redirect: '/projects',
    children: [
      {
        path: '',
        name: '基本信息',
        component: () => import('views/v-project')
      }
    ]
  }
];
