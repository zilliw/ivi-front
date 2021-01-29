<template>
        <v-footer
        padless
        app

        >
                <v-card class="footer"
                width="100%"

                >
                        <v-img class="logo" max-width="100"  max-height="100" contain src="../../../../public/images/logo_bs_ocea.svg"> </v-img>
                        <v-spacer> </v-spacer>
                        <v-card-title >
                                        <router-link class="rl"  to="/cgu">  <div>{{ $t('footer.cgu') }}</div></router-link>
                                        <router-link class="rl"  to="/mentions-legales">  <div>{{ $t('footer.legal') }}</div></router-link>
                        </v-card-title>
                        <v-spacer></v-spacer>
                        <v-card-title >
                        <div>Bornes Solutions&copy; 2020 - {{ new Date().getFullYear() }}</div>
                        </v-card-title>
                </v-card>

        </v-footer>
</template>

<style scoped>
        .footer {
                display:flex;
                white-space: nowrap;
                }
        div {
                padding-left: 10x;
                padding-right: 10px;
                color:"#1E75BA";
                font-size: 16px;
            }
        .logo   {

                padding-left: 10%;
                }
        .rl {
                text-decoration: none;
                font-family: 'Roboto', sans-serif !important;
    }
</style>
