<template>
  <div class="home">
    <div>
      <button>Sort Alphabetically</button>
    </div>
    Search by name:
    <input v-model="titleFilter" list="titles" />
    <datalist id="titles">
      <option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
    </datalist>
    <div v-for="movie in orderBy(filterBy(movies, titleFilter, `title`), `title`)" v-bind:key="movie.id">
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
import Vue2Filters from "vue2-filters";
const axios = require("axios");
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      titleFilter: "",
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
