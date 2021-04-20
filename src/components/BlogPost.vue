<template>
  <div id="blog-post" class="container animate my-5 ">
    <h1>{{ post.data.title }}</h1>
    <h4 class="bulu">{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
    <div v-html="post.data.body"></div>

    <router-link v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="button">
      {{ post.meta.previous_post.title }}
    </router-link>
    <router-link v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="button">
      {{ post.meta.next_post.title }}
    </router-link>
  </div>
</template>

<script>
import { butter } from '@/buttercms'
export default {
  name: 'blog-post',
  data () {
    return {
      post: {}
    }
  },
  methods: {
    getPost () {
      butter.post.retrieve(this.$route.params.slug)
        .then((res) => {
          // console.log(res.data)
          this.post = res.data
        }).catch((res) => {
          console.log(res)
        })
    }
  },
  watch: {
    $route (to, from) {
      this.getPost()
    }
  },
  created () {
    this.getPost()
  }
}
</script>

<style>
    .p1,.p2,.p3,.p4,.p5,.p6,.p7{
        color: black;
        text-align: left;
        font-size: 23px;
    }
    .bulu{
        font-size: 2rem;
        color: #045398;
        margin: 19px 0;
        border-bottom: 3px double #8080803b;
        padding-bottom: 12px;
    }
    .ul1,.ol1{
        text-align: left;
        margin: 10px 0;
        font-size: 22px;
        text-transform: capitalize;
        color: black;
    }
</style>
