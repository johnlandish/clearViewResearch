<template>
    <div id="app">
        <!-- NEW SECTION 1 -->
        <navBar></navBar>
            <v-container class="">
                <router-link to="/"><img src="../assets/plogo.png"  style="float: left; width: 190px; float: left; width: 190px;margin-left: 83px; margin-top: 50px; "></router-link>
                <!--<vue-navigation-bar style="background-color: transparent;" @vnb-item-clicked="vnbItemClicked" :options='navbarOptions' />-->
            </v-container>
            <section class="introTitle" id="onTop">
                <div>
                    <p class="first-title">Our projects</p>
                </div>
                <div class="sl">
                    <img max-width="880px" class="sl" :src="require('../assets/Line7.png')"/>
                </div>
            </section>
            <v-container class=" fluid customRow mb-5">
                <v-card v-for="(card, idx) in cards" cols="12" sm="4" :key="idx" class='columnBox' :style="{backgroundImage:`url(${card.src})` }">
                    <router-link :to="card.routes">
                        <div class="inner">
                            <img :src="card.logo" class='logo' >
                            <p class="boxTitle">
                                {{card.title}}
                            </p>
                        </div>
                    </router-link>
                </v-card>
            </v-container>

        <div style="border-top:1px solid #d3d3d342; margin-top: 50px;">
            <siteFooter></siteFooter>
        </div>

    </div>
</template>

<script>
import siteFooter from './Globals/siteFooter.vue'
import navBar from '../components/Globals/navBar.vue'
// import VueNavigationBar from 'vue-navigation-bar'
// import 'vue-navigation-bar/dist/vue-navigation-bar.css'
// import Count from '@/components/count.js'

export default {
  methods: {
    vnbItemClicked (text) {
      if (text === "LET'S CHAT") {
        var scrollingElement = (document.scrollingElement || document.body)
        scrollingElement.scrollTop = scrollingElement.scrollHeight
      }
    }
  },
  components: {
    'navBar': navBar,
    'siteFooter': siteFooter
  },
  // created () {
  //   if (localStorage.getItem('reloaded')) {
  //     // The page was just reloaded. Clear the value from local storage
  //     // so that it will reload the next time this page is visited.
  //     localStorage.removeItem('reloaded')
  //   } else {
  //     // Set a flag so that we know not to reload the page twice.
  //     localStorage.setItem('reloaded', '1')
  //     location.reload()
  //   }
  // },
  data () {
    return {
      attempt: 0,
      cards: [
        {

          routes: '/wdp',
          title: 'Westminster Drug Project (WDP)',
          src: require('../assets/case-studies/grid/1.jpg'),
          logo: ''
        },
        {

          routes: '/youth-employment',
          title: 'Youth Employment 2030 (YE2030)',
          src: require('../assets/case-studies/grid/2.jpg'),
          logo: ''
        },
        {
          routes: '/ygam',
          title: 'Young Gamers & Gamblers Education Trust (YGAM)',
          src: require('../assets/case-studies/grid/3.jpg'),
          logo: ''
        },
        {
          routes: '/human-rights',
          title: 'Parliamentary Joint Committee on Human Rights',
          src: require('../assets/case-studies/grid/4.jpg'),
          logo: ''
        },
        {
          routes: '/bite-black',
          title: 'Bite Back 2030',
          src: require('../assets/case-studies/grid/5.jpg'),
          logo: ''
        },
        {
          routes: '/gambleAware',
          title: 'GambleAware',
          src: require('../assets/case-studies/grid/6.jpg'),
          logo: ''
        },
        {
          routes: '/unicef-uk',
          title: 'UNICEF UK',
          src: require('../assets/case-studies/grid/7.jpg'),
          logo: ''
        },
        {
          routes: '/nhs-england',
          title: 'NHS England',
          src: require('../assets/case-studies/grid/8.jpg'),
          logo: ''
        },
        {
          routes: '/kings-college',
          title: 'Kings College London University',
          src: require('../assets/case-studies/grid/9.jpg'),
          logo: ''
        },
        {
          routes: '/early-years-foundation',
          title: 'London Early Years Foundation',
          src: require('../assets/case-studies/grid/10.jpg'),
          logo: ''
        },
        {
          routes: '/starbucks-uk',
          title: 'Starbucks UK',
          src: require('../assets/case-studies/grid/11.jpg'),
          logo: ''
        },
        {
          routes: '/uk-youth',
          title: 'UK Youth',
          src: require('../assets/case-studies/grid/12.jpg'),
          logo: ''
        },
        {
          routes: '/youth-cymru',
          title: 'Youth Cymru',
          src: require('../assets/case-studies/grid/12.jpg'),
          logo: ''
        }
      ],
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImage: require('../assets/plogoc.png'),
        brandImagePath: './',
        brandImageAltText: 'brand-image',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        collapseButtonImageOpen: require('../assets/newmenu1.png'),
        collapseButtonImageClose: require('../assets/exit.png'),
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [

          // {
          //   type: 'link',
          //   text: 'Pricing',
          //   path: '/pricing'
          //
          // },
          // {
          //   type: 'link',
          //   text: 'Pay Monthly Give Monthly',
          //   path: './givemonthly'
          // },
          // {
          //   type: 'link',
          //   text: 'Support',
          //   path: '/support'
          // }
        ],
        menuOptionsRight: [
          // {
          //   type: 'link',
          //   text: 'Home',
          //   path: '/'
          //
          // },
          // {
          //   type: 'spacer'
          // },
          {
            type: 'link',
            text: 'Expertise',
            path: './expertise'
          },
          {
            type: 'spacer'
          },
          {
            type: 'link',
            text: 'Our Work',
            path: './casestudies'
          },
          {
            type: 'spacer'
          },
          // {
          //   type: 'link',
          //   text: 'Blog',
          //   path: './blog'
          // },
          // {
          //   type: 'spacer'
          // },
          {
            isLinkAction: true,
            type: 'button',
            text: "LET'S CHAT",
            path: '/',
            class: 'button-red'
          }
        ]

      }

    }
  },
  mounted () {
    if (window.location.toString().includes('casestudies')) {
      var myElement = document.querySelector('#humbergerMenu')
      myElement.style.color = '#363D80'
      var e = document.querySelector('.humbergerMenu')
      e.style.top = '28px'
      e.style.right = '142px'
    }
  }
}
</script>

<style lang="css" scoped>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: white !important;
        height: 100vh;
        width: 100%;
    }

    @font-face {
        font-family: 'Lato';
        src: url('~/assets/Fonts/Lato-Regular.tff') format('ttf');
        font-style: normal;
        font-weight: 100;
    }

    >>> html {
        font-size: 20px !important;
        /* color: lightgrey; */
        width: 100%;
        background-color: red;

    }

    .element.style {
        color: white;
    }

    >>> .vnb .button-red {
        font-size: 13.5px;
        font-weight: 600;
        border-width: 100px;
        border-color: #333680;
        border-radius: 20px;
        border: 2px solid #333680;
        background: transparent;
        color: #333680
    }

    >>> .vnb .button-red:hover {
        font-size: 13.5px;
        font-weight: 600;
        border-width: 100px;
        border-color: #333680;
        border-radius: 20px;
        border: 2px solid #333680;
        background: #333680;
        color: white;
    }

    /* .vbn .reel {
      color: #333680 !important;
    } */

    >>> .vnb__menu-options__option__link {
        color: #333680 !important;
        font-size: 20px;
    }

    >>> .eee {
        width: 70% !important;
        margin-top: 40px !important;
    }

    /* .vnb__brand-image-wrapper__link__image {
      max-height: 70px;
    }

    .vnb__popup__top__close-button {
    }

    .vnb__popup__top {
    }

    .vnb__popup {
      background: #1b1b1b;
      margin-right: 0px;
    }

    .vnb__popup__bottom {
      background: #1b1b1b;
    }

    .vnb__popup__top__close-button__image {
      max-height: 25px;
      max-width: 25px
    }

    .vnb__popup__bottom__menu-options {
      padding-left: 1250px;
    }

    .vnb__popup__bottom__menu-options__option__link:hover {
      color:#34387F !important;
      background: #1b1b1b !important;
    } */

    .vnb__popup {
        background: #1b1b1b !important;
        margin-right: 10px;
    }

    .vnb__popup__bottom {
        background: #1b1b1b ;
    }

    .vnb__popup__bottom__menu-options__option__link {
        background: #1b1b1b !important;
        color: white !important;
        border-left: #1b1b1b !important;
        text-transform: lowercase;
        /* justify-content: flex-end !important; */
    }

    .vnb__popup__bottom__menu-options__option__link:hover {
        color:#34387F !important;
        background: #1b1b1b !important;
    }

    .eee2 {
        width: 95% !important;
        margin-top: 10px !important;
        margin-bottom: 20px;
    }

    >>> .vnb__brand-image-wrapper__link__image {
        max-height: 62px;
    }
    >>> .container {
        padding: 0 !important;
    }

    /*my modified css*/

    .columnBox {
        padding: 5px;
        margin: 3px !important;
        height: 280px;
        background-size: cover;
        overflow: hidden;
        position: relative;
        flex-basis: 32%;
    }

    .columnBox {
        padding: 5px;
        margin: 3px !important;
        height: 280px;
        background-size: cover;
        overflow: hidden;
        position: relative;
        flex-basis: 32%;
        transition: all 0.4s ease-in-out;
    }

    .columnBox:hover {
        transform: translateY(-3px);
    }

    .columnBox a{
        text-decoration: none;
    }
    .columnBox:after {
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #0000009e;
        z-index: 0;
        position: absolute;
    }

    .columnBox .inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        position: relative;
        z-index: 1;

    }

    .columnBox .inner img {
        max-width: 100px;
        height: auto;
    }
    .columnBox .inner .boxTitle {
        font-size: 1.2rem;
        color: #fff;
        text-transform: capitalize;
        line-height: 1.3;
        max-width: 80%;
        margin-bottom: 0;
        margin-top: 10px;
    }
    .customRow{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .humbergerMenu{
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        position: absolute;
        z-index: 1;
        right:0;
        top: 0;
        cursor: pointer;
    }
    .humbergerMenu span{
        font-size: 50px;
    }
    .aside-nav {
        position: fixed;
        right: 0;
        left: auto;
        bottom: 0;
        width: 100%;
        background-color: #4a64af;
        height: 0;
        opacity: 0;
        visibility: hidden;
        -webkit-transition: opacity .35s, visibility .35s, height .35s;
        transition: opacity .35s, visibility .35s, height .35s;
        overflow: hidden;
        min-height: 95px;
        z-index: 100;
        top: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .aside-nav.active{
        height: 100vh;
        opacity: 1;
        visibility: visible;
    }
    .aside-nav.active span{
        transform: rotate( 0deg);
    }
    .aside-nav ul li{
        list-style: none;
        font-size: 31px;
    }
    .aside-nav ul li a{
        color: #fff;
    }
    .aside-nav ul li a:hover{
        text-decoration: underline;
    }
    .closeMenu{
        position: absolute;
        color: #fff;
        right: 0;
        top: 0;
        transform: rotate( 90deg);
        cursor: pointer;
        transition: transform .35s;
        font-size: 3.5rem!important;
    }
    @media(max-width:960px){
        .humbergerMenu{
            position: fixed;
        }
    }
    .introTitle{
        width: 80.2%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-wrap: wrap;
        flex-wrap:  wrap;
        /* margin-top: 51px; */
        margin: 0 auto;
        transform: translateY(31px);
    }
    .container{
        padding: 0!important;
    }

    .sl{
        margin-right: 11px;
        margin-top: 7px;
    }
    .first-title{
        font-size:22px; color: #333680;  margin-left: 74px; margin-top: 0; margin-bottom: 100px;
    }
    @media(max-width:768px){
       .sl{
           width: 91.3%;
           margin-top: -74px;
       }
        .first-title{
            margin-left: 16px;
             font-size:22px; color: #333680;
            margin-bottom: 80px!important;
         }
    }

</style>
