<template>
    <v-app-bar  short flat color="#1E75BA" >
    <v-spacer></v-spacer>
    <span class="span"> Bonjour William </span>
          <v-menu
            bottom
            left
          >
              <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-account</v-icon>
<!-- mettre un v-for pour récupérer l'icone -->
              </v-btn>
              </template>

              <v-list>
                  <v-list-item
                    v-for="(userProfile, i) in userProfiles"
                    :key="i"
                  >
                    <v-list-item-title> {{ userProfile.title }}</v-list-item-title>
                  </v-list-item>
              </v-list>
          </v-menu>

    </v-app-bar>
</template>

<script>

export default {
  name: 'TheMenuHeader',
  data: () => ({
    userProfiles: [
      { title: 'Mon profil' },
      { title: 'Se déconnecter' }
    ]
  })
}
</script>

<style scoped>

  span {
    color:white;
    padding-right: 6px;
  }

</style>
