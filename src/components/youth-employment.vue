<template lang="html">
    <div id="app">

        <v-container class="eee d-flex">
            <router-link to="/" style="float: left;    display: inline-flex;    margin-top: 36px;    margin-left: 22px;">
                <img src="../assets/plogo.png" width="190px">
            </router-link>
            <navBar></navBar>
        </v-container>
        <section class="mt-4 cover">
            <router-link  class="icon" to="/wdp">
                <i class="material-icons">arrow_back</i>
            </router-link>
            <router-link  class="icon_right" to="/ygam">
                <i class="material-icons">arrow_forward</i>
            </router-link>
            <img src="../assets/case-studies/grid/2.jpg" style="width:100%; height:auto; ">
        </section>
        <v-container style="margin-top:50px;" class="animate">
            <v-layout row wrap >
                <v-flex md12 sm12 class="px-4" style="text-align: left;">
                    <p class="workTitle">Youth Employment 2030 (YE2030) </p>
                </v-flex>
                <v-flex md12 sm12 class="px-4">
                    <p style="color: black; text-align: left; font-size: 28px;">
                        The coronavirus pandemic has hit the UK hard both economically and socially, and there is
                        growing evidence that young people will be among the worst affected, with the events since
                        March 2021 tarnishing their career prospects well into the future. While it is clear that the
                        opportunities available to young people are going to be severely diminished due to
                        COVID19, what is less clear is how we can best support young people through this crisis
                        and beyond.
                    </p>

                    <p class="mt-5" style="text-align: left; margin-right: 50px; font-size: 28px;">We were commissioned by The Blagrave Trust, to support and provide our expertise on a
                        peer-research project. As part of this we recruited a group of 10 young people, aged 16 to 25
                        years, from across England to create a co-creation group. This co-creation group worked
                        closely with our team to develop a survey for their peers that sought to understand the
                        impact of COVID19 on young people’s employment and prospects across the country and to
                        find solutions and ways forward to create a better future for this generation.</p>
                    <p class="mt-5" style="text-align: left; margin-right: 50px; font-size: 28px;">Over 1,000 young people completed the survey and analysis of all the data we gathered was
                        conducted with guidance and oversight from the co-creation group. Alongside this piece of
                        research, a group of 13 other young people were recruited from across England and trained
                        to become peer researchers by our partners, Leaders Unlocked. This group of peer
                        researchers spoke to 121 young people from a diverse range of lived experiences to delve
                        deeper into the stories behind their experiences and hear more about the solutions they see
                        working to improve employment and prospects for themselves and their peers.
                        We are currently supporting a group of young people to advocate the recommendations
                        identified in this report. <br>Please find out more about our YE2030 work here: www.ye2030.co.uk
                    </p>
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
    if (window.location.toString().includes('youth-employment')) {
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
