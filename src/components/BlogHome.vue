<template>
  <div id="blog-home">
      <!--<h1>{{ page_title }}</h1>-->
      <!--<br>-->
      <!--<br>-->
      <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
      <navBar></navBar>
      <v-container class="">
          <router-link to="/" class="toLogo"><img src="../assets/plogo.png"  style="float: left; width: 190px; float: left; width: 190px; margin-top: 15px; "></router-link>
          <!--<vue-navigation-bar style="background-color: transparent;" @vnb-item-clicked="vnbItemClicked" :options='navbarOptions' />-->
      </v-container>
      <div class="blogContainer">
          <div v-for="(post,index) in posts" :key="post.slug + '_' + index" class="blogItem">
              <router-link :to="'/blog/' + post.slug">
                  <article class="media">
                      <figure>
                          <!-- Bind results using a ':' -->
                          <!-- Use a v-if/else if their is a featured_image -->
                          <img v-if="post.featured_image" :src="post.featured_image" alt="">
                          <img v-else src="http://via.placeholder.com/250x250" alt="">
                      </figure>
                      <h2>{{ post.title }}</h2>
                      <p>{{ post.summary }}</p>
                  </article>
              </router-link>
          </div>
      </div>

  </div>
</template>

<script>
import { butter } from '@/buttercms'
import navBar from '../components/Globals/navBar.vue'
export default {
  name: 'blog-home',

  components: {
    'navBar': navBar
  },

  data () {
    return {
      page_title: 'Hot off the press',
      posts: []
    }
  },
  methods: {
    getPosts () {
      butter.post.list({
        page: 1,
        page_size: 10
      }).then((res) => {
        // console.log(res.data)
        this.posts = res.data.data
      })
    }
  },
  created () {
    this.getPosts()
  },
  mounted () {
    if (window.location.toString().includes('blog')) {
      var myElement = document.querySelector('#humbergerMenu')
      myElement.style.color = '#363D80'
      var e = document.querySelector('.humbergerMenu')
      e.style.top = '28px'
      e.style.right = '142px'
    }
  }
}
</script>
<style>
    .toLogo{
        display: flex; margin-top: 36px;
    }
    .blogContainer{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 75px;
    }
    .blogContainer .blogItem{
        max-width: 30.3%;
        margin: 0 15px;
        margin-bottom: 30px;
    }

    @media(max-width:768px){
        .blogContainer .blogItem{
            max-width: 100%;
        }
        .toLogo{
            margin-top: 16px;
            left: 27px;
            position: relative;
        }
    }
    .blogContainer .blogItem a{
        text-decoration: none;
    }

    .blogContainer .blogItem img{
        width: 100%;
        height: auto;
    }
    .blogContainer .blogItem h2{
        text-align: left;
        padding: 20px;
        color: #000;
        font-size: 1.3rem;
        font-style: italic;
        line-height: 1.3;
    }
    .blogContainer .blogItem p{
        text-align: left;
        padding: 0 20px;
        color: #000;
        line-height: 1.7;
    }

</style>
