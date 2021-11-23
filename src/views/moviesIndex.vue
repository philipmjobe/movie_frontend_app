<template>
  <div>
    <h1>{{ message }}</h1>
    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>Plot: {{ movie.plot }}</p>
      <p>Year: {{ movie.year }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the Movies!",
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/movies").then((response) => {
        this.movies = response.data;
        console.log("All Movies", this.movies);
      });
    },
  },
};
</script>
