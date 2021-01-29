<template>
    <div>

         <router-view></router-view>
         <component :is="LoginComponent" />
        <TheFooter>
        </TheFooter>
    </div>
</template>

<script>
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import TheFooter from '../common/footer/TheFooter'

export default {
  name: 'LoginHome',
  components: {
    Login,
    TheFooter,
    ForgotPassword
  },

  computed: {
    LoginComponent () {
      return this.$route.name
    }
  }
}

</script>

<style scoped>
    p {
        color: #1E75BA;
        text-align: right;
        padding-right: 10px;
        padding-bottom: 10px;
      }

    .container {
        background-image: url('../../../public/images/login-bg.jpg') ;
        background-size: cover;
        max-width: 100%;
    }

    .rl {
      text-decoration: none;
    }

</style>
