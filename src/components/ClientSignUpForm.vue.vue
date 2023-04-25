<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="form.firstName" />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="form.lastName" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="form.password" />
        </div>
        <div>
          <label for="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" v-model="form.phoneNumber" />
        </div>
        <div>
          <label for="imageUrl">Image URL</label>
          <input type="url" id="imageUrl" v-model="form.imageUrl" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div v-if="successMessage">{{ successMessage }}</div>
      <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ClientSignupForm',
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phoneNumber: '',
          imageUrl: '',
        },
        successMessage: '',
        errorMessage: '',
      };
    },
    methods: {
      submitForm() {
        axios.post('https://foodie.bymoen.codes/api/client', this.form, {
          headers: {
            'x-api-key': 'your_api_key_here',
          },
        }).then((response) => {
          this.successMessage = response.data.message;
          this.errorMessage = '';
          this.form = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: '',
            imageUrl: '',
          };
        }).catch((error) => {
          this.errorMessage = error.response.data.message;
          this.successMessage = '';
        });
      },
    },
  };
  </script>
  