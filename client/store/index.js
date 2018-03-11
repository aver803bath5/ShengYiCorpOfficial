export const state = () => ({
  locales: ['tw', 'en'],
  locale: 'tw',
  carousels: [],
  loading: false
})

export const actions = {
  switchLocale({ commit, state }) {
    const locale = (state.locale === 'tw') ? 'en' : 'tw';
    commit('SET_LANG', locale);
  }
};


export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  SET_CAROUSELS(state, carousels) {
    state.carousels = carousels;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  }
}
