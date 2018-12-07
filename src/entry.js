/**
 ** ********************************************************
 ** @file entry.js
 ** @author
 ** @date 2018-03-22 09:51:43
 ** @last_modified_by hanli <lihan_li@test.com>
 ** @last_modified_date 2018-12-05 14:42:08
 ** @copyright (c) 2018 @yfe/aldnoah-spa
 ** ********************************************************
 */

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'prismjs/themes/prism.css';
// import Viewer from 'viewerjs';
import 'core-js/shim';
import { isDev } from 'envUtil';
// import '../node_modules/viewerjs/dist/viewer.css';
import './deploy/promise';
import './deploy/component';
import './deploy/directive';
import './deploy/filter';
import './deploy/interceptor';
import './icons';

import App from './App';
import Toast from './ui/c-toast';
import Loading from './ui/c-loading';
import router from './deploy/router';
import store from './deploy/store';
import mTitle from './mixins/m-title';

Vue.config.performance = isDev;
Vue.config.productionTip = false;
Vue.config.errorHandler = function VueErrorHandler(err, vm, info) {
  console.error(err, vm, info);
};

// Vue.use(Viewer);

Vue.mixin(mTitle);
Vue.use(ElementUI);
const EventBus = new Vue();

const props = {
  $bus: {
    value: EventBus,
    writable: false,
    configurable: false
  },
  $toast: {
    value: Toast,
    writable: false,
    configurable: false
  },
  $loader: {
    value: Loading,
    writable: false,
    configurable: false
  }
};

Object.defineProperties(Vue.prototype, props);
Object.defineProperties(Vue, props);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<app/>'
});

// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app');

if (window.location.protocol === 'https:' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}
