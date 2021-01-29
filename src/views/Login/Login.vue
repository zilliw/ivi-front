<template>
    <v-container>
        <v-row
        align="center"
        justify="center"
        >
            <v-col
            cols="12"
            sm="8"
            md="4"
            >
                <v-card class="elevation-12">
                    <v-toolbar
                      color="#1E75BA"
                      dark
                      flat
                    >
                    <v-toolbar-title>{{ $t('login.title') }}</v-toolbar-title>                  
                      <v-spacer></v-spacer>
                    </v-toolbar>

                      <v-card-text>
                          <v-form>
                              <v-text-field
                                :label="$t('login.form.username')"
                                name="Identifiant"
                                prepend-icon="mdi-account"
                                type="text"
                              ></v-text-field>

                              <v-text-field
                                id="password"
                                :label="$t('login.form.password')"
                                name="Mot de passe"
                                prepend-icon="mdi-lock"
                                type="password"
                              ></v-text-field>
                          </v-form>
                      </v-card-text>
                      
                  <v-card-actions class="justify-center" >
                      <router-link  to="/home"> 
                          <v-btn  color="#1E75BA" dark>Connexion</v-btn></router-link>
                  </v-card-actions>
                  <router-link  class="rl" to="/forgot-password">
                  <span>
                      <p> {{ $t('login.form.forgot-password') }} </p>
                  </span>
                  </router-link>


                </v-card>

            </v-col>
            
        </v-row>

    </v-container>
</template>

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