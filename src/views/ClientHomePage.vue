<template>
  <div>
    <h1>Welcome to the Client Home Page</h1>
    <client-signup-form />
  </div>
</template>

<script>
import ClientSignUpForm from '@/components/ClientSignUpForm.vue';


export default {
  name: 'ClientHomePage',
  components: {
    ClientSignupForm,
  },
};
</script>
