<template lang="html">
    <div id="app">

        <v-container class="eee d-flex">
            <router-link to="/" style="float: left;    display: inline-flex;    margin-top: 36px;    margin-left: 22px;">
                <img src="../assets/plogo.png" width="190px">
            </router-link>
            <navBar></navBar>
        </v-container>
        <section class="mt-4 cover">
            <router-link  class="icon" to="/youth-employment">
                <i class="material-icons">arrow_back</i>
            </router-link>
            <router-link  class="icon_right" to="/human-rights">
                <i class="material-icons">arrow_forward</i>
            </router-link>
               <img src="../assets/case-studies/grid/3.jpg" style="width:100%; height:auto;">
        </section>
        <v-container style="margin-top:50px;" class="animate">
            <v-layout row wrap >
                <v-flex md12 sm12 class="px-4" style="text-align: left;">
                    <p class="workTitle">Young Gamers & Gamblers Education Trust (YGAM)</p>
                    <!--<img width='140px' src="../assets/bite.png" style="pointer-events: none;">  -->
                </v-flex>
                <v-flex md12 sm12 class="px-4">
                    <p style="color: black; text-align: justify; font-size: 28px;">
                        Building upon our report commissioned by GambleAware called ‘Gambling: a young BAME
                        perspective.’ YGAM commissioned ClearView Research to undertake a six month two-stage
                        independent evaluation of the charity's products, educational resources and leadership to
                        help them understand how to effectively engage with ethnic minority communities in a
                        purposeful and meaningful way.
                        The first phase of the evaluation was to do an external audit of YGAM as an organisation
                        and their ‘In The Know’ booklet. As part of this phase, CVR also reviewed YGAM’s website,
                        social media channels, staff team, senior leadership team and the board of trustees. The
                        second phase involved working closely with a co-creation group of seven people aged
                        between 16 and 35 from a black, Asian and minority ethnic background to further develop
                        YGAM’s strategy of delivering culturally appropriate materials and services that meet the
                        needs of people from ethnic minority communities.
                    </p>

                    <p class="mt-5" style="text-align: left; margin-right: 50px; font-size: 28px;">Based on the evidence gathered in both phases, as well as insights gathered to shape
                        YGAM’s strategy of delivering culturally appropriate materials and services, CVR presented
                        a number of recommendations to YGAM. The team at YGAM have already started to
                        implement some of these recommendations.
                        <br>Please find a downloadable copy of our (first-stage) report here: <a href="https://www.ygam.org/wp-content/uploads/2020/09/CVR-Insights-Audit-Review-Report.pdf">CVR-Insights YGAM Audit</a></p>
                </v-flex>
            </v-layout>
        </v-container>
        <div style="border-top:1px solid #d3d3d342; margin-top: 50px;">
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
    if (window.location.toString().includes('ygam')) {
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
