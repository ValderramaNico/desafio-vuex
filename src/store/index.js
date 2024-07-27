import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    games: [],
  },
  mutations: {
    setJsonData(state, games) {
      const gamesObject = {};
      games.forEach((game) => {
        gamesObject[game.codigo] = game;
      });
      state.games = gamesObject;
    },
    incrementStock(state, codigo) {
      const game = state.games[codigo];
      if (game) game.stock++;
    },
    decrementStock(state, codigo) {
      const game = state.games[codigo];
      if (game.stock > 0) game.stock--;
    },
  },
  actions: {
    async getJsonData({ commit }) {
      try {
        const response = await axios.get("/juegos.json");
        commit("setJsonData", response.data);
      } catch (error) {
        console.error("Error al cargar los datos JSON:", error);
      }
    },
    incrementStock({ commit }, codigo) {
      commit("incrementStock", codigo);
    },
    decrementStock({ commit }, codigo) {
      commit("decrementStock", codigo);
    },
  },
});
