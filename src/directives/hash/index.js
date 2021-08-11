import store from '@store'
export const hash = {
  beforeMount(el) {
    const lang = store.state.user.lang
    const src = el.getAttribute('src');
    const type = el.getAttribute('type')
    if (src && type !== 'base' ) {
      el.setAttribute('src', require(`@publicImg/${lang}/${src}`));
    }else{
      el.setAttribute('src', require(`@baseImg/${src}`));
    }
  }
}