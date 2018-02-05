export const state = () => ({
  locales: ['tw', 'en'],
  locale: 'tw'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
}
