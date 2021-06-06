<template>
    <div id="app">
        <!-- NEW SECTION 1 -->
        <navBar></navBar>
        <v-container class="">
            <router-link to="/"><img src="../assets/plogo.png"  style="float: left; width: 190px; float: left; width: 190px;margin-left: 83px; margin-top: 50px; "></router-link>
            <!--<vue-navigation-bar style="background-color: transparent;" @vnb-item-clicked="vnbItemClicked" :options='navbarOptions' />-->
        </v-container>
        <br>
        <br>
        <br>
        <v-container fluid style="margin-top:50px; padding: 0px; width: 100%; overflow: hidden;" id="letsChat" >
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-card color="#00308f" dark tile flat style="height:810px; font-size: 22px; position: relative">
                        <div style="color:white; font-size: 36px; text-align: left; max-width: 380px; padding-top: 100px; font-family: Lato"
                             class="contactform"><strong>Whether you’d like to discuss a project or say hi, we always
                            love to hear from you.</strong></div>
                        <v-card-text style="max-width: 500px;    margin: 0 auto;">
                            <v-text-field v-model="userName" style="padding-top: 50px;" label="NAME"
                            ></v-text-field>
                            <v-text-field v-model="userEmail" style="padding-top: 50px;"  label="EMAIL"
                            ></v-text-field>
                            <v-text-field v-model="userMsg" style="padding-top: 50px;" label="MESSAGE"
                            ></v-text-field>
                            <small v-if='sentSuccess' style=" margin-left:40px;">
                                <img v-if="successImg" src="https://findicons.com/files/icons/2799/flat_icons/256/checkmark.png" width="25PX"
                                     style='vertical-align:middle;'>
                                <img v-if="caution" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/alert-triangle-red-512.png" width="25" style='vertical-align:middle;'>
                                <span>{{sentSuccess}} </span>
                            </small>
                            <div class="mt-4" style="display: flex;    justify-content: flex-start;  width: 82%;
    margin: 0 auto;">
                                <button @click='sentMessege' id='sent' class='sent'>
                                    {{sentBtn}}
                                </button>
                                <div class="sending" v-if='sending' style="border-radius: 50%;"></div>
                            </div>
                        </v-card-text>

                    </v-card>
                </v-flex>
                <v-flex xs12 md6 class="bg-green" style="ooverflow: hidden;
    position: relative;">
                    <img src="../assets/groupPhoto.jpg" style="overflow: hidden;
    position: absolute;
    width: 100%;
    left: 0;">
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
import axios from 'axios'
import VueNavigationBar from 'vue-navigation-bar'
import 'vue-navigation-bar/dist/vue-navigation-bar.css'
import {vueWindowSizeMixin} from 'vue-window-size'

export default {
  mixins: [vueWindowSizeMixin],
  components: {
    'vue-navigation-bar': VueNavigationBar,
    'navBar': navBar,
    'siteFooter': siteFooter
  },
  // beforeCreate () {
  //  vnb__menu-options__option__link.style = '#333680'
  // },
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

      sentBtn: 'sent',
      sending: false,
      sentSuccess: false,
      caution: false,
      successImg: false,
      userName: '',
      userEmail: '',
      userMsg: '',
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImage: require('../assets/CLEARVIEWl.png'),
        brandImagePath: './',
        brandImageAltText: 'brand-image',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        collapseButtonImageOpen: require('../assets/newmenu.png'),
        collapseButtonImageClose: require('../assets/exit2.png'),
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
            path: './expertise',
            class: 'link-white'
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
            path: './bottom',
            class: 'button-hello'
          }
        ]
      }

    }
  },
  methods: {

    sentMessege () {
      console.log(this.userName, this.userEmail, this.userMsg)
      this.caution = false
      if (this.userName === '') {
        console.log('please put your name here')
        this.sentSuccess = true
        this.caution = true
        this.sentSuccess = 'please put your name here'
      } else if (this.userEmail === '') {
        this.sentSuccess = true
        this.caution = true
        this.sentSuccess = 'please put your Email here'
      } else if (this.userMsg === '') {
        this.sentSuccess = true
        this.caution = true
        this.sentSuccess = 'please put your message here'
      } else {
        this.caution = false
        this.successImg = true
        this.sentBtn = 'Sending....'
        this.sending = true
        setTimeout(() => {
          this.sending = false
          this.sentBtn = 'sent'
          this.sentSuccess = 'your message sent sucessfully!'
          this.userName = ''
          this.userEmail = ''
          this.userMsg = ''
          setTimeout(() => {
            this.sentSuccess = false
          }, 4000)
        }, 1000)
      }
    },
    callMenu () {
      let nav = document.getElementById('burgerNav')
      nav.classList.add('active')
    },
    closeMenu () {
      let nav = document.getElementById('burgerNav')
      nav.classList.remove('active')
    },
    vnbItemClicked (text) {
      if (text === "LET'S CHAT") {
        var scrollingElement = (document.scrollingElement || document.body)
        scrollingElement.scrollTop = scrollingElement.scrollHeight
      }
    },
    sendings () {
      console.log(this.email)
      console.log(this.subject)
      // let config = {
      //   headers: {
      //
      //     'Content-Type': 'multipart/form-data'
      //
      //   }
      // }
      // var config = {
      //   headers: {
      //     'Content-Type': 'text/plain'
      //   },
      //   responseType: 'text'
      // }
      const formData = new FormData()
      var blog = {
        email: this.email,
        subject: this.subject,
        text: this.text
      }
      var deep = this
      formData.append('email', this.email)
      formData.append('subject', this.subject)
      formData.append('text', this.text)
      axios.post('https://wveup.herokuapp.com/email', blog).then(res => {
        console.log('done')
        deep.email = ''
        deep.text = ''
        deep.subject = ''
      })
      //   $('form').on('submit', e => {
      //     e.preventDefault()
      //
      //     const email = $('#email')
      //       .val()
      //       .trim()
      //     const subject = $('#subject')
      //       .val()
      //       .trim()
      //     const text = $('#text')
      //       .val()
      //       .trim()
      //
      //     const data = {
      //       email,
      //       subject,
      //       text
      //     }
      //
      //     $.post('/email', data)
      //       .then(() => {
      //         window.location.href = '/email/sent'
      //       })
      //       .catch(() => {
      //         window.location.href = '/error'
      //       })
      //   })
      // }
    }
  },
  computed: {
    cardWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '440px'
        case 'sm':
          return '440px'
        case 'md':
          return '500px'
        case 'lg':
          return '620px'
        case 'xl':
          return '620px'
      }
    },
    secondsection () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '1300px'
        case 'sm':
          return '1300px'
        case 'md':
          return '740px'
        case 'lg':
          return '600px'
        case 'xl':
          return '600px'
      }
    },
    secondsection1 () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '300'
        case 'sm':
          return '400px'
        case 'md':
          return '400px'
        case 'lg':
          return '400px'
        case 'xl':
          return '400px'
      }
    },
    sectionfive () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '300px'
        case 'sm':
          return '400px'
        case 'md':
          return '400px'
        case 'lg':
          return '600px'
        case 'xl':
          return '600px'
      }
    },
    sectionfiveheight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '400px'
        case 'sm':
          return '400px'
        case 'md':
          return '400px'
        case 'lg':
          return '565px'
        case 'xl':
          return '565px'
      }
    },
    lineWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '220px'
        case 'sm':
          return '220px'
        case 'md':
          return '260px'
        case 'lg':
          return '305px'
        case 'xl':
          return '350px'
      }
    },
    SectionlineWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '220px'
        case 'sm':
          return '400px'
        case 'md':
          return '500px'
        case 'lg':
          return '650px'
        case 'xl':
          return '700px'
      }
    }
  },
  created () {
    let video = document.getElementById('video')
    video.play()
  },
  mounted () {
    if (window.location.toString().includes('Lets-chat')) {
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

    .theme--dark.v-label {
        color: #fff;
    }

    .banner{
        min-height: 100vh;  position: relative; width:100%;
    }
    .pop{
        color: white;
        line-height: 1.2!important;
        z-index: 1;
        font-size: 48px;
        font-weight: 800;
        margin-top: 75px;
        text-align: left;
        padding-left: 180px;
        font-family: Lato;
    }

    .inSlider{
        position: relative;
    }

    .para{
        color: white;
        text-align: left;
        padding-left: 180px;
        font-size: 28px;
        font-family: Lato-Black;
        font-weight: 800;
        margin-top: 25px;
        line-height: 1.2;
    }
    .hr-line{
        color: white;
        height: 2px;
        margin-left: 180px;
        margin-top: 28px;
        width: 460px;
    }
    .bg-green{
        background:#00308f;
    }
    @media(max-width:768px){
        .gridSection{
            flex-direction: column;
        }
        .banner{
            min-height:400px!important;
        }
        .hr-line{
            color: white; height: 2px; margin-left:5rem;  margin-top: 28px;
            width: 55%;
        }

        .para{
            margin-top: 50px;
            padding-left: 5rem;
            font-size: 22px;

            line-height: 1;
        }

        .pop{
            padding-top: 6rem!important;
            font-size: 1.2rem!important;
            line-height: 1.2!important;
            padding-left: 5rem!important;
            margin-top: 0!important;
        }
        .myVideo{
            height: auto!important;
            /*z-index: -1!important;*/
        }

    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: transparent;
        height: 100vh;
        margin: 0px;
    }

    h1 {
        text-transform: lowercase;
    }

    h1:first-letter {
        text-transform: uppercase;
    }

    .eee {
        width: 70% !important;
        margin-top: 40px !important;
    }

    .eee2 {
        width: 100% !important;
        margin-top: 10px !important;
        margin-bottom: 20px;
    }

    .hh {
        /* right: -150px; */
        margin-top: 100px !important;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .sect {
        font-size: 17px;
        text-align: left;
    }

    .sect5 {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }

    .sect7 {
        margin-left: 180px;
        margin-right: auto;
        top: 50px;
    }

    .sect8 {
        text-align: left;
        margin-left: 180px;
        font-size: 16px;
    }

    .sect6 {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: -80px;
    }

    .rec {
        text-align: left;
        margin-left: 15px;
    }

    .sect1 {
        text-align: left;
    }

    .leftleft {
        left: -450px;
        top: -50px;
        width: 170px;
    }

    .leftleft2 {
        left: -400px;
        top: -40px;
        width: 170px;
    }

    .leftleft3 {
        margin-left: -1000px;
        margin-top: 2%;
        margin-bottom: 10%;
        width: 170px;
    }

    .sect3 {
        font-size: 20px;
        text-align: left;
        margin-left: 180px;
    }

    .sect2 {
        font-size: 20px;
        text-align: left;
        margin-left: 180px;
    }

    .s {
        margin-left: 13px;
        margin-right: auto;
        margin-top: 160px
    }

    .pp {
        margin-top: auto;
        margin-bottom: auto;
    }

    .center-text-trick {
        margin-top: 50%;
        font-size: 24px;
        margin-bottom: 50%;
    }

    .ff {
        color: red;
    }

    .v-text-field {
        width: 380px;
        margin-left: auto;
        margin-right: auto;
    }

    .contactform {
        margin-left: auto;
        margin-right: auto;
    }

    .contactform1 {
        margin-top: 50%;
        margin-top: 50%;
    }

    html {
        font-size: 20px !important;
        /* color: lightgrey; */
        width: 100%;
    }

    btn {
        font-family: 'Lato';

    }

    v-btn {
        font-family: 'Lato';
    }

    .container {
        padding: 0 !important;
    }

    .nhs {
        margin-top: 50px;
    }

    p {
        font-family: 'Lato';
    }

    .ms {
        margin-top: 85px;
    }

    .youth {
        margin-top: 95px;
    }

    h1 {
        font-family: 'Lato';
        /* font-weight: 700; */
    }

    .uber {
        margin-top: 75px;
    }

    .v-text-field {
        font-family: 'Lato';
        font-weight: 600;
    }

    .unilad {
        margin-top: 75px;
    }

    .vnb__brand-image-wrapper__link__image {
        max-height: 62px;
    }

    /* .vnb__menu-options__option__link {
      color: white;
    } */

    .vnb__menu-options__option__link {
        color: white
    }

    .vnb .button-hello {
        font-size: 13.5px;
        font-weight: 600;
        border-width: 100px;
        border-color: white;
        border-radius: 20px;
        border: 2px solid white;
        background: transparent;
        color: white !important;
    }

    .vnb .button-hello:hover {
        font-size: 13.5px;
        font-weight: 600;
        border-width: 100px;
        border-color: white;
        border-radius: 20px;
        border: 2px solid white;
        background: white;
        color: black !important;
    }

    .vnb__popup {
        background: #1b1b1b !important;
        margin-right: 10px;
    }

    .vnb__popup__bottom {
        background: #1b1b1b;
    }

    .vnb__popup__bottom__menu-options__option__link {
        background: #1b1b1b !important;
        color: white !important;
        border-left: #1b1b1b !important;
        text-transform: lowercase;
        /* justify-content: flex-end !important; */
    }

    @font-face {
        font-family: 'Lato';
        src: url('~/assets/Fonts/Lato-Regular.tff') format('ttf');
        font-style: normal;
        font-weight: 100;
    }

    @font-face {
        font-family: 'Lato-Black';
        src: url('~/assets/Fonts/Lato-Black.tff') format('ttf');
        font-style: normal;
    }

    @font-face {
        font-family: 'Lato-Heavy';
        src: url('~/assets/Fonts/Lato-Heavy.tff') format('ttf');
        font-style: normal;
    }

    .vnb__popup__bottom__menu-options__option__link:hover {
        color: #34387F !important;
        background: #1b1b1b !important;
    }

    a {
        text-decoration: none;
        color: #8c0d37;
    }

    /* .vnb {
      color: white;
    } */

    /* .vnb__popup__top__close-button {
    }

    .vnb__popup__top__close-button__image {
      max-height: 35px !important;
      max-width: 35px !important;
    }

    .vnb__popup__bottom {
      background: white;
    }

    .vnb__popup__bottom__menu-options {
    }

    .vnb__popup__bottom__menu-options__option__link {
      border-left: white !important;
      color: white !important;
      flex-direction: row !important;
      justify-content: flex-end !important;
      font-weight: 700 !important;
      font-size: 44px !important;
      width: 100% !important;
    }

    .vnb__popup__bottom__menu-options__option__link:hover {
      color: white!important;
      background: white !important;
    } */

    .logo1 {
        margin-top: 40px;
        margin-left: 20px;
    }

    /*grid styles*/
    .gridSection {
        display: flex;
        flex-wrap: wrap;
        background: #000;
        max-width: 100%;
        margin: 0 auto;
    }

    .gridSection .item {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .gridSection .item img {
        width: 100%;
        height: auto;
    }

    .gridSection .item .article {
        padding: 5rem;
    }

    .gridSection .item .article p {
        color: yellow;
        text-transform: uppercase;
    }

    .gridSection .item .article span {
        color: grey !important;
        line-height: 1.4;
        font-size: 1rem;
    }

    .sent {
        position: relative;
        vertical-align: middle;
        background: transparent;
        padding: 2px 22px;
        border: 1px solid white;
        border-radius: 22px!important;
        outline: 0;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    .sent:hover{
        background:#fff;
        box-shadow: 0 3px 5px #00000057;
        color: #006053;
        transform: translateY(-3px);
    }

    .sending {
        height: 30px;
        width: 30px;
        position: relative;
        background: #025606;
        border: 1px solid #c3c3c3;
        border-radius: 50%;
        -webkit-animation: rotate 1s infinite;
        animation: rotate 1s infinite;
        display: inline-block;
        vertical-align: middle;
        left: 15px;
        top: 5px;
    }

    .sending:after {
        content: "";
        height: 7px;
        width: 7px;
        top: -4px;
        background: #fff;
        border-radius: 50%!important;
        position: absolute;
    }

    .customCommonBtn{
        padding: 2px 22px;
        border: 1px solid white;
        border-radius: 22px!important;
        transition: width 0.5s ease-in-out;
        width:150px;
    }
    .customCommonBtn:hover {
        background: #fff!important;
        width:250px;
    }

    .myVideo{
        height: 80vh;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        right: 0;
        z-index: 0;
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
    }

    .ourClients{
        border-top: 1px solid #f1f1f1;
    }
    .ourClients .logoTitle{
        text-align: left;
        margin-left: 1rem;
        font-size:18px;
        font-weight: 800;
        margin-bottom: 0;
        /*text-shadow: 1px -1px 0px #333333;*/
        color: #333333;
    }
    .ourClients .logoSection{
        display: flex;
        flex-wrap: wrap;
    }
    .ourClients .logoSection .brands{
        flex-basis: 20%;
        padding: 12px;
    }

    .img-responsive{
        width: 100%;
        height: auto;
    }

    @media(max-width:1024px){
        .gridSection .item .article {
            padding: 2rem;
        }
        .gridSection .item {
            align-items: center;
        }
    }

    @media(max-width: 768px){
        .gridSection .item .article {
            padding: 2rem;
        }
        .gridSection .item{
            align-items: center;
        }
        .ourClients .logoTitle{
            font-size: 1.8rem;
        }
        .ourClients .logoSection .brands{
            flex-basis: 33%;
        }

        .gridSection:nth-child(even){
            flex-direction: column-reverse;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }
    }

    @media(max-width:600px){
        .pop {
            padding-top: 6rem!important;

            padding-left:1rem !important;
            margin-top: 0!important;
        }

        .hr-line{
            color: white; height: 2px; margin-left:1rem;  margin-top: 28px;
            width: 55%;
        }

        .para{
            padding-left:1rem ;

        }

    }

    @media (max-width: 425px){
        .pop {
            padding-top: 2rem!important;
        }
        .para {
            margin-top: 17px;
        }
        .banner {
            min-height: 300px!important;
        }
        .ourClients .logoSection .brands{
            flex-basis:50%;
        }
    }
    @media (max-width: 375px){

        .banner {
            min-height: 255px!important;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    /*body{*/
    /*overflow-x:hidden;*/
    /*}*/
</style>
