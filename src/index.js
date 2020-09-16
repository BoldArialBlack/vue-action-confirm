import ActionConfirm from './components/action-confirm.vue'
import './styles/less/index.less'

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Vue.component('VueActionConfirm', ActionConfirm)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('VueActionConfirm', ActionConfirm)
}

ActionConfirm.install = install

export default ActionConfirm
