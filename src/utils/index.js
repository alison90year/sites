export const getEnvParams = () => {
  return  process.env.NODE_ENV.split(',') || ['blue','temp1']
}
export const getLangObecByFilePrefix = (key,name) => {
  const lang = window.localStorage.getItem('localeLanguage') || 'zh'
  const data = require(`@lang/${lang}/${key}`)
  return data.default[name]
}