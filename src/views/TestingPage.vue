<template>
    <div>
      <h1>Welcome to Foodie App</h1>
      <div v-if="message">{{ message }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestingPage',
    data() {
      return {
        message: '',
      };
    },
    mounted() {
      this.$axios.get('https://foodie.bymoen.codes/api/validate', {
        headers: {
          'x-api-key': 'y4jzZdD1kW6pn0NcjmsQ',
        },
      }).then((response) => {
        this.message = response.data.message;
      }).catch((error) => {
        this.message = error.response.data.message;
      });
    },
  };
  </script>
  