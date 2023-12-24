export const UserModule = {
    state: () => ({
        user: null,
    }),
    actions: {
        setUser({commit}, data) {
            commit('SET_USER', data)
        },
        logout({commit}, context) {
          commit('REMOVE_USER', context)
        }
    },
    mutations: {
        SET_USER(state, info) {
          state.user = info.user;
          localStorage.setItem('token', info.access_token)
          localStorage.setItem('userId', info.user.id)
          info.context.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + info.access_token;
        },
        REMOVE_USER(state, info) {
          state.user = null;
          localStorage.removeItem('token')
          localStorage.removeItem('userId')
          info.context.$axios.defaults.headers.common['Authorization'] = null;
        }
    },
    getters: {
      isLoggedIn(state) {
        console.log(localStorage.getItem('token'));
        console.log(state.user);
        return (Boolean(localStorage.getItem('token')) && Boolean(state.user)); 
      }
    },
    namespaced: true,
}