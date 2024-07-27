<template>
  <div class="body">
    <table class="MainTable">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in games" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ juego.precio }}</td>
          <td>
            <button @click="incrementStock(juego.codigo)">+</button>
            <button @click="decrementStock(juego.codigo)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "GameListView",
  computed: {
    ...mapState(['games'])
  },
  methods: {
    ...mapActions(["getJsonData", "incrementStock", "decrementStock"]),
  },
  mounted() {
    this.getJsonData();
  },
};
</script>

<style scoped>
.body {
  display: flex;
  padding-top: 150px;
}

.MainTable {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #cfcfcf;
  font-weight: bolder;
}

th,
td {
  width: 150px;
  border: 1px solid black;
  text-align: center;
  padding: 10px;
}
</style>
