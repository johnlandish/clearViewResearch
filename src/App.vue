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
    .cover{
        max-height: 400px;
        overflow: hidden;
    }
    .cover img{
        transform: translateY(-20%);
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

</style>
