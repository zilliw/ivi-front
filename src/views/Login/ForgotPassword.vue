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
                          </v-form>
                      </v-card-text>
                  <v-card-actions class="justify-center" >
                      <router-link class="rl" to="/">
                      <v-row class="mb-2">
                        <v-col>
                          <v-btn  color="#1E75BA" dark>{{ $t('login.form.back') }}</v-btn></v-col>
                          <v-col>
                          <v-btn
                          color="#1E75BA"
                          dark
                          @click="snackbar = true"
                          >{{ $t('login.form.reset-password') }}</v-btn> </v-col>
                      </v-row>
                      </router-link>
                  </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
