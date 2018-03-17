export const state = () => ({
  locales: ['tw', 'en'],
  locale: 'tw',
  carousels: [],
  navMenuShow: false,
  loading: false,
  productsListCategories: [],
  productsListProducts: [],
  productsListSearchText: '',
  productsListTotal: 0,
  productsListCurtPage: 1,
  productsListCurtCatID: 0,
  gasProducts: [],
  gasProductsTags: [],
  gasProductsTagsHtml: [],
  curtGasName: ''
})

export const actions = {
  switchLocale({ commit, state }) {
    const locale = (state.locale === 'tw') ? 'en' : 'tw';
    commit('SET_LANG', locale);
  },
  toggleNavMenu({ commit, state }) {
    commit('SET_NAVMENUSHOW', !state.navMenuShow);
  }
};


export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },
  SET_NAVMENUSHOW(state, show) {
    state.navMenuShow = show;
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
  },
  SET_GASPRODUCTS(state, products) {
    state.gasProducts = products;
  },
  SET_GASPRODUCTSTAGS(state, tags) {
    state.gasProductsTags = tags;
  },
  SET_GASPRODUCTSTAGSHTML(state, html) {
    state.gasProductsTagsHtml = html;
  },
  SET_CURTGASNAME(state, gasName) {
    state.curtGasName = gasName;
  }
}
