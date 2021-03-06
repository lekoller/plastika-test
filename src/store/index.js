import { createStore } from "vuex";
import movie from "../utils/movieMock";
import auth from "./auth";

export default createStore({
  state: {
    isLogged: false,
    moviesList: [movie, movie, movie, movie, movie, movie, movie, movie],
  },
  mutations: {
    SET_LOGIN(state) {
      state.isLogged = true;
    },
  },
  actions: {
    setLogin({ commit }) {
      commit("SET_LOGIN");
    },
  },
  modules: {
    auth,
  },
});
