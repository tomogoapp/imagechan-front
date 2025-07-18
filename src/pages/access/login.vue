<script lang='ts' setup>

  import formLogin from '@/components/forms/login.vue'
  import formRegister from '@/components/forms/register.vue'
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()

  const tab = ref(null)

  onMounted(() =>{
    console.log(mobile.value)
  })

</script>

<template>

  <v-container fluid class='pa-0' d-flex>
    <v-row class='ma-0'>

      <v-col cols xl='4' lg='4' md='6' sm='false' xs='false' class='pa-0 img-bg' style='background-image: url(https://tourismmedia.italia.it/is/image/mitur/1600X1000_pisa_il_fascino_dell_antica_repubblica_marinara_hero-2);'>
        <!-- https://fastly.picsum.photos/id/404/536/354.jpg?hmac=BVbZ4ixcfdCrcGHOT7Zg6As4TTJ9YlHvB5UhVOv0Wvw -->
        <!-- https://images3.alphacoders.com/137/1372107.jpeg -->
      </v-col>

      <v-col cols xl='8' lg='8' md='6' sm='12' xs='12' class='pa-0' align-self='center'>

        <v-layout>
          <AppBar />

          <v-main class='d-flex align-start justify-center' style='height: 100vh;'>

            <v-container class='d-flex align-start fill-height' fluid v-if='!mobile' > <!-- Desktop -->
              <v-row>
                <v-col cols xl='8' lg='10' class='
                      offset-xl-2
                      offset-lg-1
                    '>
                  <div class='logo-image' />
                </v-col>

                <v-col cols xl='4' lg='5' class='
                      d-flex 
                      justify-center 
                      align-start
                      offset-xl-2
                      offset-lg-1
                    '>
                  <v-card title='Log in' max-width='400' width='400' class='pa-4' flat rounded='false'>

                    <formLogin />
                  </v-card>
                </v-col>
                <v-col cols xl='4' lg='5' class='
                      d-flex 
                      justify-center
                    '>
                  <v-card title='Sign in' max-width='400' width='400' class='pa-4' flat rounded='false'>

                    <formRegister />
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <v-container class='d-flex align-start fill-height' fluid v-if='mobile'> <!-- Mobile -->
              <v-row >
                <v-col cols='12'>
                  <div class='logo-image' />
                </v-col>
                <v-col cols='12'>
                  <v-card>
                    <v-tabs
                      v-model="tab"
                      bg-color="primary"
                      fixed-tabs
                    >
                      <v-tab value="one">Log In</v-tab>
                      <v-tab value="two">Sign In</v-tab>
                    </v-tabs>

                    <v-card-text>
                      <v-tabs-window v-model="tab">
                      <v-tabs-window-item value="one">
                        <formLogin />
                      </v-tabs-window-item>

                      <v-tabs-window-item value="two">
                        <formRegister />
                      </v-tabs-window-item>
                      
                      </v-tabs-window>
                    </v-card-text>
                  </v-card>
                </v-col>

              </v-row>

            </v-container>


          </v-main>

          <AppFooter />
        </v-layout>

      </v-col>

    </v-row>
  </v-container>

</template>

<style lang='scss'>
  .form-container {
    height: 100vh;
    background-color: aliceblue;
    width: 100%;
  }

  .info-container-bg {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-image: url(https://images3.alphacoders.com/137/1372107.jpeg);
    background-size: cover;
    background-image: url(https://images3.alphacoders.com/137/1372107.jpeg);
    background-position-x: center;
    background-position-y: center;
    background-blend-mode: darken;

    filter: blur(4px);
  }

  .info-container {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 99vh;
  }

  .logo-image {
    width: 100%;
    height: 100px;
    background-color: green;
  }
  .img-bg {
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
  }
</style>

<route lang='yaml'>
  meta:
    layout: access
  route:
    path: '/access/'
</route>