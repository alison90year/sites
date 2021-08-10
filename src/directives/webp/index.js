import store from '@store'
export const webp = {
  beforeMount(el) {
    const lang = store.state.user.lang
    const src = el.getAttribute('src');
    const type = el.getAttribute('type')
      if (src && type !== 'base' ) {
        el.setAttribute('src', require(`@imgs/${lang}/${src}`));
      }else{
        el.setAttribute('src', require(`assets/imgs/base/${src}`));
      }
  }
}