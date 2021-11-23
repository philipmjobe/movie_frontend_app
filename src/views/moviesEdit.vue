<template>
  <div>
    <h2>Movie Info:</h2>
    <p>
      Title:
      <input type="text" v-model="movie.title" />
    </p>
    <p>
      Plot:
      <input type="text" v-model="movie.plot" />
    </p>
    <p>
      Year:
      <input type="integer" v-model="movie.year" />
    </p>
    <button v-on:click="updateMovie(movie)">Update Movie</button>
    <button v-on:click="destroyMovie(movie)">Delete Movie</button>
    <router-link v-bind:to="`/`">
      <button>Close</button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
      errors: [],
    };
  },
  created: function () {
    this.moviesShow();
  },
  methods: {
    moviesShow: function () {
      axios.get("/movies/" + this.$route.params.id).then((response) => {
        this.movie = response.data;
      });
    },
    updateMovie: function () {
      axios
        .patch(`/movies/${this.$route.params.id}`, this.currentMovieParams)
        .then((response) => {
          this.$router.push(`/movies/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    destroyMovie: function () {
      axios.delete(`/movies/${this.$route.params.id}`).then((response) => {
        console.log("Movie Destroyed", response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>
