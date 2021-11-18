<template>
  <div class="home">
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.plot }}</p>
      <router-link v-bind:to="`/movies/${movie.id}`">
        <button v-on:click="showMovie(movies)">More Info</button>
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
const axios = require("axios");
export default {
  data: function () {
    return {
      message: "Welcome to The Movies!",
      movies: [],
      newMovieParams: {},
      currentMovie: {},
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        this.movies = response.data;
      });
    },
    showMovie: function (movie) {
      this.currentMovie = movie;
      console.log(movie);
      document.querySelector("#movie-details").showModal();
    },
  },
};
</script>
