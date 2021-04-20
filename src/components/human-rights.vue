<template lang="html">
    <div id="app">

        <v-container class="eee d-flex">
            <router-link to="/"
                         style="float: left;    display: inline-flex;    margin-top: 36px;    margin-left: 22px;">
                <img src="../assets/plogo.png" width="190px">
            </router-link>
            <navBar></navBar>
        </v-container>
        <section class="mt-4 cover">
            <img src="../assets/case-studies/grid/4.jpg" style="width:100%; height:auto;">
        </section>
        <v-container style="margin-top:50px;" class="animate">
            <v-layout row wrap>
                <v-flex md12 sm12 class="px-4" style="text-align: left;">
                    <p style="font-size: 1.4rem; font-weight: bold;">Parliamentary Joint Committee on Human Rights
                    </p>

                </v-flex>
                <v-flex md12 sm12 class="px-4">
                    <p style="color: black; text-align: left; font-size: 28px;">
                        We were commissioned by the Parliamentary Joint Committee on Human Rights to support
                        the Committee with its aim to better understand the views, attitudes and perceptions of
                        people from black community in the UK, in relation to their human rights. Given that there is
                        no real evidence base to answer the questions that the Committee were interested to ask,
                        this research was the first of its kind in the UK.
                    </p>

                    <p class="mt-5" style="text-align: left; margin-right: 50px; font-size: 28px;">As part of our
                        research we did some polling with a representative sample size of 515 black
                        adults 16+ from across the UK. In addition to this, we also provided people in the black
                        community with the opportunity to donate the amount they would have earned for taking part
                        in our research to The Stephen Lawrence Day Foundation. This is the first time that polling
                        has ever been used to support a charitable cause. Over 65% of participants donated and we
                        were able to raise £1585 for The Stephen Lawrence Day Foundation. We 100%
                        match-funded this donation and then made a donation of £3170 to the charity.</p>
                    <p class="mt-5" style="text-align: left; margin-right: 50px; font-size: 28px;">Our research also
                        involved a number of interviews and exploration labs with people from the
                        black community. Some of our key findings were that:</p>
                    <ul style="text-align: left;list-style: none">
                        <li>➢ The majority (over 75%) of black people in the UK do not believe their human rights
                            are equally protected compared to white people;
                        </li>
                        <li> ➢ The vast majority (85%) of black people in the UK are not confident that they would
                            be treated the same as a white person by the police; and
                        </li>
                        <li>
                            ➢ The majority of black people (over 60%) in the UK do not believe their health is as
                            equally protected by the NHS compared to white people.
                        </li>
                    </ul>
                    <p style="text-align: left;margin-top: 25px; ">Our team presented our findings to the Committee members in September 2020. When our
                        report launched it was referenced in over 6 national papers and across various TV and radio
                        stations.
                        <br> Please find a downloadable copy of our report here: Black Community & Human Rights</p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container fluid style="margin: 0px; padding: 0px; width: 100%; background:#1c1c1c;">
            <v-layout class="hidden-sm-and-down" row justify-center align="center" style="height: 400px;">
                <v-flex xs4 md3 style="margin-top: 70px; margin-left: -90px">
                    <a href="https://www.facebook.com/clearviewstats/" style="text-decoration:none">
                        <v-icon large style="margin-bottom: 17px; margin-top: 8px;" color="white">fab fa-facebook
                        </v-icon>
                    </a><br>
                    <a href="https://twitter.com/CVR_Insights" style="text-decoration:none">
                        <v-icon large style="margin-bottom: 17px;" color="white">fab fa-twitter</v-icon>
                    </a><br>
                    <a href="https://www.instagram.com/clearviewstats/" style="text-decoration:none">
                        <v-icon large style="margin-bottom: 17px;" color="white">fab fa-instagram</v-icon>
                    </a><br>

                    <a href="https://www.linkedin.com/company/clearview-research-ltd" style="text-decoration:none">
                        <v-icon large style="margin-bottom: 17px;" color="white">fab fa-linkedin</v-icon>
                    </a>
                </v-flex>
                <v-flex xs8 md9 style="background:#1c1c1c; text-align: left; margin-top: 70px; margin-left: -40px">
                    <p style="color:lightgrey; font-size: 38px"><strong>Get in touch</strong></p>
                    <v-img style="height: 2px; width: 220px; margin-top: -20px"
                           :src="require('../assets/Line10.png')"></v-img>
                    <br>
                    <p style="color:lightgrey; font-size: 32px"><strong>+44-203-474-0995</strong></p>
                    <p style="color:white; font-size: 13px"><strong>ClearView Research Ltd,<br>
                        86-90 Paul Street, London, EC2A 4NE</strong></p>
                    <p style="color:white; font-size: 13px"><strong>ClearView Research Ltd © 2021 All Rights Reserved |
                        <span style="color: #d05e32"><a style="color: inherit; " href="./../static/privacy.pdf"
                                                        target="_blank"> Privacy Policy</a></span></strong></p>

                </v-flex>
            </v-layout>
            <v-layout class="hidden-md-and-up" row justify-center align="center"
                      style="height: 430px; background:#1c1c1c;">
                <v-flex xs12 md3 style="margin-top: 70px; margin-left: -90px">
                    <a href="https://www.facebook.com/CVR.Insights" style="text-decoration:none">
                        <v-icon large style="margin-bottom: 17px; margin-top: 8px;" color="white">fab fa-facebook
                        </v-icon>
                    </a><br>
                    <a href="https://twitter.com/CVR_Insights" style="text-decoration:none">
                        <v-icon large style="margin-bottom: 17px;" color="white">fab fa-twitter</v-icon>
                    </a><br>
                    <a href="https://www.instagram.com/cvr_insights/" style="text-decoration:none">
                        <v-icon large style="margin-bottom: 17px;" color="white">fab fa-instagram</v-icon>
                    </a><br>

                    <a href="https://www.linkedin.com/company/clearview-research-ltd" style="text-decoration:none">
                        <v-icon large style="margin-bottom: 17px;" color="white">fab fa-linkedin</v-icon>
                    </a>
                </v-flex>
                <v-flex xs12 md9 style="background:#1c1c1c; text-align: left; margin-top: 70px; margin-left: -40px">
                    <p style="color:lightgrey; font-size: 34px"><strong>Get in touch</strong></p>
                    <v-img style="height: 2px; width: 200px; margin-top: -20px"
                           :src="require('../assets/Line10.png')"></v-img>
                    <br>
                    <p style="color:lightgrey; font-size: 26px"><strong>+44-203-474-0995</strong></p>
                    <p style="color:white; font-size: 14px"><strong>ClearView Research Ltd,<br>
                        86-90 Paul Street, London, EC2A 4NE</strong></p>
                    <p style="color:white; font-size: 14px"><strong>ClearView Research Ltd © 2021 All Rights Reserved |
                        <span style="color: #d05e32"><a style="color: inherit; " href="./../static/privacy.pdf"
                                                        target="_blank"> Privacy Policy</a></span></strong></p>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import navBar from '../components/Globals/navBar.vue'

export default {
  components: {
    'navBar': navBar
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
    if (window.location.toString().includes('human-rights')) {
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
