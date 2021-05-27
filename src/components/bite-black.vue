<template lang="html">
    <div id="app">

        <v-container class="eee d-flex">
            <router-link to="/" style="float: left;    display: inline-flex;    margin-top: 36px;    margin-left: 22px;">
                <img src="../assets/plogo.png" width="190px">
            </router-link>
            <navBar></navBar>
        </v-container>
        <section class="mt-4 cover">
            <router-link  class="icon" to="/human-rights">
                <i class="material-icons">arrow_back</i>
            </router-link>
            <router-link  class="icon_right" to="/gambleAware">
                <i class="material-icons">arrow_forward</i>
            </router-link>
            <img src="../assets/case-studies/grid/5.jpg" style="width:100%; height:auto;  ">
        </section>
        <v-container style="margin-top:50px; margin-bottom:50px;" class="animate">
            <v-layout row wrap >
                <v-flex md12 sm12 class="px-4" style="text-align: left;">
                    <p class="workTitle">Bite Back 2030</p>
                </v-flex>
                <v-flex md12 sm12 class="px-4">
                    <p style="color: black; text-align: left; font-size: 28px;">
                        We were commissioned to conduct an insight study on behalf of Bite Back 2030, to gather
                        in-depth insights from young people about obesity and healthy eating. In particular, Bite Back
                        wanted to develop an understanding in four main areas:</p>

                    <ul style="text-align: left;list-style: none">
                        <li>(1) What a balanced diet means to children?
                        </li>
                        <li>(2) Whether children care about eating healthily?
                        </li>
                        <li>
                            (3) What perceptions children have in regards to the causes of obesity?
                        </li>
                        <li>
                            What solutions children have in relation to obesity?
                        </li>
                    </ul>
                    <p class="mt-5" style="text-align: left; margin-right: 50px; font-size: 28px;">As part of this project, we conducted five solution labs across England and Wales engaging
                        with nearly 60 children aged between 10 and 16 years old. The research findings have
                        supported Bite Back in the strategic planning of their campaigns, particularly when working
                        with external agencies, and it helped them address some wrongly held assumptions
                        amongst the organisation</p>
                </v-flex>
            </v-layout>
        </v-container>

        <div style="border-top:1px solid #d3d3d342;">
            <siteFooter></siteFooter>
        </div>

    </div>
</template>

<script>
import navBar from '../components/Globals/navBar.vue'
import siteFooter from './Globals/siteFooter.vue'
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
    if (window.location.toString().includes('bite-black')) {
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
    .animate{
        position: relative;
        left: -15%;
        animation: slide 0.6s forwards;
    }

    @-webkit-keyframes slide {
        100% { left: 0; }
    }

</style>
