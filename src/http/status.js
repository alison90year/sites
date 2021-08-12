const lang = window.localStorage.getItem('localeLanguage')
const langCode = require(`@/http/${lang}/index`).default
export default langCode