<template>
    <v-container class="flex-container">
        <v-row class="flex-item">
          <v-col class="flex-card">
            <v-card
              color="#fafbfc"
            >
              <v-card-title >
                Bornes installés
              </v-card-title>
              <v-card-subtitle>Listen to your.</v-card-subtitle>
              <v-card-actions>
                <v-btn text>
                  Listen Now
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card
              color="#fafbfc"
            >
              <v-card-title >
                Unlimited music now
              </v-card-title>
              <v-card-subtitle>Listen to your favorite.</v-card-subtitle>
              <v-card-actions>
                <v-btn text>
                  Listen Now
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="green">

        </v-row>
    </v-container>
</template>

<style scoped>

.flex-container {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

}

.flex-item {
  background: #fafbfc;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  max-height: 25%;
  max-width: 250;
}

.flex-card {
  display:flex;
  flex-direction: row;
  color:blue;
  align-items: center;
}

</style>
