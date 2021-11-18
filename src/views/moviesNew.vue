<template>
  <div class="movies-new">
    <form v-on:submit.prevent="createMovie()">
      <h1>New Movie</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <label>Movie Title:</label>
      <input type="text" v-model="newMovieParams.title" />
      <label>Plot:</label>
      <input type="text" v-model="newMovieParams.plot" />
      <label>Year:</label>
      <input type="integer" v-model="newMovieParams.year" />
      <label>Director:</label>
      <input type="text" v-model="newMovieParams.director" />
      <p></p>
      <button v-on:click="createMovie()">Create Movie!</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "The Best New Movie App",

      newMovieParams: {},
      currentMovie: {},
    };
  },
  methods: {
    createMovie: function () {
      axios.post("http://localhost:3000/movies", this.newMovieParams).then((response) => {
        console.log(response.data);
        this.movie.push(response.data);
      });
      this.newMovieParams.title = "";
      this.newMovieParams.plot = "";
      this.newMovieParams.year = "";
    },
  },
};
</script>
