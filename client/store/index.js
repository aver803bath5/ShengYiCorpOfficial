export const state = () => ({
  locales: ['tw', 'en'],
  locale: 'tw',
  carousels: [],
  loading: false,
  productsListCategories: [],
  productsListProducts: [],
  productsListSearchText: '',
  productsListTotal: 0,
  productsListCurtPage: 1,
  productsListCurtCatID: 0
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
  },
  SET_PRODUCTSLISTCATEGORIES(state, categories) {
    state.productsListCategories = categories;
  },
  SET_PRODUCTSLISTPRODUCTS(state, products) {
    state.productsListProducts = products;
  },
  SET_PRODUCTSLISTTOTAL(state, total) {
    state.productsListTotal = total;
  },
  SET_PRODUCTSLISTSEARCHTEXT(state, text) {
    state.productsListSearchText = text;
  },
  SET_PRODUCTSLISTCURTPAGE(state, page) {
    state.productsListCurtPage = page;
  },
  SET_PRODUCTSLISTCURTCATID(state, catID) {
    state.productsListCurtCatID = catID;
  }
}
