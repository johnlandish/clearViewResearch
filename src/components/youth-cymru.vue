<template lang="html">
    <div id="app">

        <v-container class="eee d-flex">
            <router-link to="/" style="float: left;    display: inline-flex;    margin-top: 36px;    margin-left: 22px;">
                <img src="../assets/plogo.png" width="190px">
            </router-link>
            <navBar></navBar>
        </v-container>
        <section class="mt-4 cover">
            <router-link  class="icon" to="/uk-youth">
                <i class="material-icons">arrow_back</i>
            </router-link>
            <router-link  class="icon_right" to="/wdp">
                <i class="material-icons">arrow_forward</i>
            </router-link>
            <img src="../assets/case-studies/grid/12.jpg" style="width:100%; height:auto;">
        </section>
        <v-container style="margin-top:50px;" class="animate">
            <v-layout row wrap >
                <v-flex md12 sm12 class="px-4" style="text-align: left;">
                    <p class="workTitle">Youth Cymru</p>
                </v-flex>
                <v-flex md12 sm12 class="px-4">
                    <p style="color: black; text-align: left; font-size: 28px;">
                        ClearView Research were commissioned by Youth Cymru, who are the biggest national
                        youth work charity in Wales, to provide our expertise to conduct an evaluation (using a
                        quasi-experimental approach) in relation to a financial education pilot project.</p>

                    <p class="mt-5" style="text-align: left; margin-right: 50px; font-size: 28px;">This project informed the creation of a new, bilingual (English and Welsh) financial capability
                        toolkit for young people, to improve their understanding of financial education and their
                        ability to manage money and so on. For over a year our impact evaluation team worked
                        closely with Youth Cymru to monitor and evaluate the delivery of a successful pilot.
                        <br>Please find a downloadable copy of our report here: Money Smart / Arian Smart</p>
                </v-flex>
            </v-layout>
        </v-container>
        <div style="border-top:1px solid #d3d3d342; margin-top: 50px;">
            <siteFooter></siteFooter>
        </div>
    </div>
</template>

<script>
import siteFooter from './Globals/siteFooter.vue'
import navBar from '../components/Globals/navBar.vue'
export default {
  components: {
    'navBar': navBar,
    'siteFooter': siteFooter
  },
  data () {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImage: require('../assets/CLEARVIEWRES.png'),
        brandImagePath: './',
        brandImageAltText: 'brand-image',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        collapseButtonImageOpen: require('../assets/logo.png'),
        collapseButtonImageClose: require('../assets/logo.png'),
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [],
        menuOptionsRight: [
          {
            type: 'link',
            text: 'HOME',
            path: '/'

          },
          {
            type: 'spacer'
          },
          {
            type: 'link',
            text: 'ABOUT',
            path: './about'
          },
          {
            type: 'spacer'
          },
          {
            type: 'link',
            text: 'SERVICE',
            path: '/'
          },
          {
            type: 'spacer'
          },
          {
            type: 'link',
            text: 'CASESTUDIES',
            path: '/'
          }
        ]
      }

    }
  },
  mounted () {
    if (window.location.toString().includes('youth-cymru')) {
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
    .animate{
        position: relative;
        left: -15%;
        animation: slide 0.6s forwards;
    }

    @-webkit-keyframes slide {
        100% { left: 0; }
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: white;
        height: 100vh;
        margin: 0px;
    }

    .eee {
        width: 100% !important;
        margin-top: 20px !important;
    }

    .sect1 {
        text-align: left;
    }

    .hh {
        /* right: -150px; */
        margin-top: 180px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    html {
        font-size: 20px !important;
        /* color: lightgrey; */
        width: 100%;
    }

    .container {
        padding: 0 !important;
    }

    .hr-line {
        width: 80%;
        color: blue;
        border-color: #30377C;
        margin-top: 3rem;
        margin-bottom: 2rem;
        border-width: 1px;
        border-top: 0;
    }

</style>
