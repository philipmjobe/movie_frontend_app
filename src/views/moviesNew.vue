<template>
  <div class="create-movie">
    <form v-on:submit.prevent="createMovie()">
      <h1>New Movie</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Movie Title:</label>
        <input type="text" v-model="newMovieParams.title" />
      </div>
      <div>
        <label>Plot:</label>
        <input type="text" v-model="newMovieParams.plot" />
      </div>
      <div>
        <label>Year:</label>
        <input type="integer" v-model="newMovieParams.year" />
      </div>
      <div>
        <label>Director:</label>
        <input type="text" v-model="newMovieParams.director" />
      </div>
      <div>
        <label>In English?:</label>
        <input type="text" v-model="newMovieParams.english" />
      </div>
      <p></p>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieParams: {},
      errors: [],
    };
  },
  methods: {
    createMovie: function () {
      axios
        .post("/movies", this.newMovieParams)
        .then(() => {
          this.$router.push("/");
          console.log("Sucess");
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
