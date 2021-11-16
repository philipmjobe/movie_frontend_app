<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Movie Title:</p>
    <input type="string" v-model="newMovieParams.title" />
    <p>Plot:</p>
    <input type="text" v-model="newMovieParams.plot" />
    <p>Year:</p>
    <input type="integer" v-model="newMovieParams.year" />
    <p>Director:</p>
    <input type="string" v-model="newMovieParams.director" />
    <p></p>
    <button v-on:click="createMovie()">Create A Movie!</button>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.plot }}</p>
      <button v-on:click="showMovies(movie)">More Info</button>
      <dialog id="movie-details">
        <form method="dialog">
          <h2>Movie Info:</h2>
          <p>
            Title:
            <input type="text" v-model="currentMovie.title" />
          </p>
          <p>
            Plot:
            <input type="text" v-model="currentMovie.plot" />
          </p>
          <p>
            Year:
            <input type="integer" v-model="currentMovie.year" />
          </p>
          <button v-on:click="updateMovie(currentMovie)">Update Movie</button>
          <button v-on:click="destroyMovie(currentMovie)">Delete Movie</button>
          <button>Close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
