<template>
    <v-parallax dark src="home-5-bg.jpg" height="750">
        <v-row justify="center" align="center">
            <v-col cols="4">
                <v-card class="mt-4 mx-auto" max-width="344" >
                    <v-sheet
                        class="v-sheet--offset mx-auto pa-5 text-center rounded-t-xl"
                        color="cyan"
                        elevation="12"
                        max-width="calc(100% - 32px)"
                        >
                        <span class="text-h5 white--text">APTWORLD ADMIN</span>
                    </v-sheet>
                    <v-card-text>
                        <p class="text-h4 text--primary">Sign In</p>
                        <v-spacer></v-spacer>
                        <div class="text--primary">
                            <v-text-field append-icon="mdi-account" dense clearable label="Email" placeholder="Email" outlined></v-text-field>
                        </div>
                        <div class="text--primary">
                            <v-text-field append-icon="mdi-lock" dense label="Password" placeholder="Password" type="password" outlined></v-text-field>
                        </div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="orange" to="/">CANCEL</v-btn>
                        <v-btn color="orange" to="/admin">SIGN IN</v-btn>
                        
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>

<script>
export default {
    data () {
        return {
            show : false,
            password : 'Password'
        }
    }
}
</script>