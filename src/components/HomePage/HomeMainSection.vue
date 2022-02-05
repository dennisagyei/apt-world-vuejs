<template>
  <section id="main">
          <v-parallax src="home-5-bg.jpg" height="750">
            <div class="tint pa-15"> 
                <v-row justify="center" align="center white--text">
                    <v-col cols="12" lg="12">
                      <div class="text-center">
                          <v-avatar size="80" ><img src="logo.png" alt="AptWorld Logo"></v-avatar>
                          <p>
                                <span class="text-h3">APTWORLD SERVICES</span>
                          </p>
                        
                          <p class="mt-5"><span>Micro credits - Transportation - Investment</span></p>
                          <v-btn color="orange" large class="mt-5" to="/login">GET STARTED</v-btn>
                      </div>
                        
                    </v-col>
                </v-row>
            </div>
          </v-parallax>
  </section>
</template>

<style scoped>
    .tint {
       z-index: 1;
      width: 100%;
      position: relative;
      background: rgba(27, 27, 27, 0.5);
      transition: background .3s linear;
    }
</style>