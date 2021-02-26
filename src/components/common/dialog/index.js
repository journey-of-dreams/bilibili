import SexSelect from './SexSelect.vue'
const obj = {}

obj.install = function (Vue) {
    const DialogConstructor = Vue.extend(SexSelect)
    const sex_select = new DialogConstructor()
    sex_select.$mount(document.createElement('div'))
    // sex_select.$el就是这个div
    document.body.appendChild(sex_select.$el)
    Vue.prototype.$sex_select = sex_select
}
export default obj