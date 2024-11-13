
<script lang='ts' setup>

  import formLogin from '@/components/forms/login.vue'

</script>

<template>

  <v-container
    fluid
    class='pa-0'
    d-flex
  >
    <v-row
      class='ma-0'
    >
      <v-col
        cols='3'
        class='
          pa-0
        '
        offset=""
        align-self="center"
      >

          <div 
            class='
              d-flex
              align-center
              justify-center
              form-container
            '
          >
            <v-card 
            title='Card title'
            max-width='344'
            width='344'
            class='pa-4'
            flat
            rounded="false"
            >

              <formLogin />
            </v-card>
            
          </div>
      </v-col>
      <v-col
        cols='9'
        class='
          pa-0
        '
      >
        <div
          class='info-container-bg'
        />
        <v-layout>
          <AppBar />



            <!--div
              style="
                height: 100%;
                width: 100%;
              "
            >
              <div
                class='
                  info-container
                '
              >
                <h1>HOLAS</h1>
              </div>
            </div-->

            <v-main class="d-flex align-center justify-center" style="height: 100vh;">
            Main Content
            </v-main>


          <AppFooter />
        </v-layout>
      </v-col>
    </v-row>
  </v-container>

</template>

<style lang='scss'>
  .form-container{
    height: 100vh;
    background-color: aliceblue;
    width: 100%;
  }
  .info-container-bg{
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background-image: url(https://images3.alphacoders.com/137/1372107.jpeg);
    background-position: center;
    filter: blur(4px);
  }
  .info-container{
    position: relative;
    z-index: 2;
    width: 100%;
    height: 99vh;
  }
</style>

<route lang='yaml'>
  meta:
    layout: users
  route:
    path: '/user/login'
</route>