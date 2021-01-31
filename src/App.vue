<template>
        <v-app>
            <router-view class="main"/>
        </v-app>
</template>

<style scoped>

    body {
        height: 100%;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color:"#1E75BA"
    }
    .main{
        display: flex;
        flex-grow: 1;
        background-color:#fafbfc;
        }

    .v-application {
        font-family: 'Roboto', sans-serif !important;
        font-size: 18px;

    }

</style>
