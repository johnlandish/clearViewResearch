<template>
  <div id="app">
    <v-app>
      <main>
        <v-container fluid style="padding: 24px 0">
          <router-view></router-view>
        </v-container>
      </main>

    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  metaInfo () {
    return {
      title: 'ClearView Research',
      meta: [
        {name: 'description', content: 'ClearView Research are an audience insight and strategy agency'},
        {property: 'og:title', content: 'ClearView Research'},
        {property: 'og:site_name', content: 'ClearView Research'},
        {property: 'og:type', content: 'website'},
        {name: 'robots', content: 'index,follow'}
      ]
    }
  }
}
</script>

<style>
    .workTitle{
        font-size: 1.4rem; font-weight: bold;
        color:#323E7C;
    }
    .lifeStyle{
        font-family: Lato;
        max-width: 600px;
        color:white;
        text-align: left;
        font-size: 24px;
        padding-left:80px;
    }
    .cover .icon{
        position: absolute;
        z-index: 2;
        background: #ffff;
        font-size: 1.5rem;
        COLOR: #363d80;
        border-radius: 50%;
        top: 45%;
        left: 11px;
        height: 50px;
        width: 50px;
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-decoration: none;
    }
    .cover .icon_right{
        position: absolute;
        z-index: 2;
        background: #ffff;
        font-size: 1.5rem;
        COLOR: #363d80;
        border-radius: 50%;
        top: 45%;
        right: 11px;
        height: 50px;
        width: 50px;
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-decoration: none;
    }
    .cover{
        max-height: 400px;
        overflow: hidden;
        position: relative;
    }
    .cover img{
        /*transform: translateY(-20%);*/
    }
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.danger-alert{
  color: red;
}

    @media(max-width:768px){
        .lifeStyle{
          padding: 34px;
        }
    }
    @media(max-width:767px){
        .columnBox{
            flex-basis: 99%!important;
        }
    }
    @media(max-width:650px){
        .cover img{
            transform: translateY(0);
        }
    }

</style>
