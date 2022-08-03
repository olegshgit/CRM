import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'ri_0',
      paths: ['lane'],
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 7, secure: true, HttpOnly: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    })(store);
  });
};
