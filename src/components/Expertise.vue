<template>
    <div id="app">
        <!-- NEW SECTION 1 -->
        <navBar></navBar>

        <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
            <v-layout row wrap>
                <v-flex xs12 md12>
                    <v-card flat grid-list-md text-xs-center>
                        <v-card-media
                                :src="require('../assets/circle3.png')"
                                class="hidden-sm-and-down"
                        >

                            <v-layout row wrap>
                                <v-container class="eee">
                                    <router-link to="/"><img src="../assets/CLEARVIEWl.png"
                                                             style="float: left;    width: 190px;    margin-left: 83px;    margin-top: 18px;">
                                    </router-link>
                                    <!--<vue-navigation-bar style="background-color: transparent;" @vnb-item-clicked="vnbItemClicked" :options='navbarOptions' />-->
                                </v-container>
                                <v-flex xs12 md7>

                                    <p class="hidden-sm-and-down"
                                       style="color: white; font-size: 26px; text-align: left; padding-top: 150px; padding-left: 200px; margin-right: 120px;">
                                        <strong>Our truly diverse (and experienced) team allows us to connect with
                                            people from diverse communities. We provide a platform through research and
                                            engagement
                                            for the voices and experiences of everyday people, who often go unheard, to
                                            be heard, respected and recognised.</strong></p><br/>
                                    <v-img class="hidden-sm-and-down"
                                           style="color: white; height: 2px; margin-left: 200px;  margin-top: -18px"
                                           width="400px" :src="require('../assets/Line4.png')"></v-img>

                                </v-flex>
                                <v-flex class="hidden-sm-and-down" xs12 md5>

                                    <ul class="listItems">
                                        <p style="    margin-top: 150px;    text-align: left;    color: #fff;">
                                            <strong>We know a lot about:</strong>
                                        </p>
                                        <li> Public health & community engagement</li>
                                        <li> Peer & community research</li>
                                        <li> Children and young people</li>
                                        <li> students</li>
                                        <li> People facing hardships and disadvantage</li>
                                        <li> Diverse consumers (and their habits)</li>
                                        <li> People with protected characteristics</li>
                                        <li> Black, Asian and minority groups</li>
                                        <li> Monitoring & evaluation</li>
                                        <li> Campaigns</li>
                                    </ul>
                                    <!--<p class="hidden-sm-and-down"-->
                                    <!--style="color: white; font-size: 20px; text-align: left; padding-left: 95px; margin-right: 50px; margin-top: -20px">-->
                                    <!--Public health & community engagement-->
                                    <!--<br>-->
                                    <!--Peer & community research <br>-->
                                    <!--Children and young people</p>-->
                                    <!--<p class="hidden-sm-and-down"-->
                                    <!--style="color: white; text-align: left; padding-left: 95px; margin-right: 50px;">-->
                                    <!--Students </p>-->

                                    <!--<p class="hidden-sm-and-down"-->
                                    <!--style="color: white; font-size: 20px; text-align: left; padding-left: 95px; margin-right: 50px; margin-top: -20px">-->
                                    <!--People facing hardships and disadvantage-->
                                    <!--Diverse consumers (and their habits)<br>-->
                                    <!--People with protected characteristics<br>-->
                                    <!--Black, Asian and minority groups<br>-->
                                    <!--Monitoring & evaluation<br>-->
                                    <!--Campaigns</p>-->
                                </v-flex>
                            </v-layout>
                        </v-card-media>

                        <v-card-media
                                :src="require('../assets/circle3.png')"
                                class="hidden-md-and-up"
                                height="350px"
                        >
                            <v-container class="eee2">
                                <v-layout wrap>
                                    <v-flex>
                                        <!--<vue-navigation-bar style="background-color: transparent;" @vnb-item-clicked="vnbItemClicked" :options='navbarOptions' />-->
                                    </v-flex>
                                </v-layout>
                            </v-container>

                            <v-layout row wrap>
                                <v-flex xs12 md6>
                                    <p class="hidden-md-and-up"
                                       style="margin-top: 40px; color: white; font-size: 22px;"><strong>We provide our
                                        clients <br/> with a clearer view</strong></p>
                                    <p class="hidden-sm-and-down"
                                       style="color: white; font-size: 26px; text-align: left; padding-top: 150px; padding-left: 200px; margin-right: 120px;">
                                        <strong>We specialise in robust, culturally-informed insight
                                            on diverse audiences, to inform business and marketing strategies, and to
                                            support social impact evaluation</strong></p><br/>
                                    <v-img class="hidden-sm-and-down"
                                           style="color: white; height: 2px; margin-left: 200px;  margin-top: -18px"
                                           width="400px" :src="require('../assets/Line4.png')"></v-img>

                                </v-flex>
                                <v-flex class="hidden-sm-and-down" xs12 md6>
                                    <p class="hidden-sm-and-down"
                                       style="color: white; font-size: 16px; text-align: left; padding-top: 150px; padding-left: 200px; margin-right: 50px;">
                                        We provide our clients with a clearer view on</p>
                                    <p class="hidden-sm-and-down"
                                       style="color: white; text-align: left; padding-left: 200px; margin-right: 50px;">
                                        <strong>Audiences</strong></p>
                                    <p class="hidden-sm-and-down"
                                       style="color: white; font-size: 16px; text-align: left; padding-left: 200px; margin-right: 50px;">
                                        By gaining an in-depth understanding of attitudes, behaviours, perceptions and
                                        social practices, especially those that are less than easy to reach.</p>

                                    <p class="hidden-sm-and-down"
                                       style="color: white; text-align: left; padding-left: 200px; margin-right: 50px;">
                                        <strong>Challenges</strong></p>
                                    <p class="hidden-sm-and-down"
                                       style="color: white; font-size: 16px; text-align: left; padding-left: 200px; margin-right: 50px;">
                                        By working closely to find innovative (which are sometimes the most simple)
                                        solutions to complex challenges and goals</p>

                                    <p class="hidden-sm-and-down"
                                       style="color: white; text-align: left; padding-left: 200px; margin-right: 50px;">
                                        <strong>Impact</strong></p>
                                    <p class="hidden-sm-and-down"
                                       style="color: white; font-size: 16px; text-align: left; padding-left: 200px; margin-right: 50px;">
                                        By providing strategic advice on how to maximise social impact and make a real
                                        difference to the lives of the people</p>
                                </v-flex>
                            </v-layout>
                        </v-card-media>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <!-- SECTION 3 -->
        <v-container class="hidden-sm-and-down" fluid style="margin: 0px; padding: 0px; width: 100%">
            <v-layout row wrap justify-center align="center" style="height: 100px; background:#1b1b1b; padding: 30px; ">
            </v-layout>
        </v-container>

        <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
            <!-- FIRST!! -->
            <v-layout class="hidden-sm-and-down" row wrap justify-center align="center"
                      style="height: 2200px; background:#1b1b1b; padding: 30px; ">
                <!-- <v-flex
                justify-space-between xs12 md12 style="background:#1b1b1b;" class="justify-center"> -->
                <br>
                <v-flex xs12 md4>
                    <p :class="{'ma-0 pa-0': $vuetify.breakpoint.xs}"
                       style="font-size:44px; color: white;  margin-left: 110px; margin-top: 0px"><strong>Our
                        Team</strong></p>
                    <br>
                </v-flex>
                <v-flex class="hidden-md-and-down" xs12 md8>
                    <v-img max-width="782px" style="color: white; height: 2px; margin-left: -40px;  margin-top: 46px; "
                           :src="require('../assets/Line4.png')"></v-img>
                    <br>
                </v-flex>
                <!-- <v-hover> -->
                <v-flex :class="{'ml-0 mr-0': $vuetify.breakpoint.xs, 'ml-n1 mr-n1': $vuetify.breakpoint.lgAndDown}"
                        xs12 md3 lg4 xl4 style="margin-left: -33px; margin-right: -60px; margin-bottom: 10px; "
                        justify-center v-for="(item, i) in items"
                        :key="i" @click.stop="hello(item.a)">
                    <!-- <v-hover > -->
                    <v-card max-width="318" height="368"
                            class="mx-auto" color="#dddad5">
                        <!-- <v-expand-transition :class="{hidden: !hover}">
                                            <div class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text " style="height: 100%;"></div>
                                        </v-expand-transition> -->
                        <br>
                        <v-img :src="require('../assets/Line7.png')" width="40"
                               style="padding-top: -30px; margin-left: 20px; height: 2px;"></v-img>
                        <p style="text-align: left; font-size: 20px !important; color:#34387F; font-weight: bold;"
                           v-text="item.name" class="headline"></p>
                        <p style="text-align: left; font-size: 16px; color:#34387F; margin-top: -20px" v-text="item.job"
                           class="headline2"></p>
                        <v-avatar size="200" center class="pp">
                            <v-img :src="require(`../assets/${item.src}.jpg`)"
                            ></v-img>
                        </v-avatar>
                    </v-card>
                    <!-- </v-hover> -->
                </v-flex>
                <!-- </v-hover> -->
                <!-- </v-flex> -->
            </v-layout>
            <!-- SECOND!!! -->
            <v-layout class="hidden-md-and-up" row wrap justify-center align="center"
                      style=" background:#1b1b1b; padding: 30px; ">

                <!-- <v-flex
                justify-space-between xs12 md12 style="background:#1b1b1b;" class="justify-center"> -->
                <br>
                <v-flex xs12 md4>
                    <p :class="{'ma-0 pa-0': $vuetify.breakpoint.xs}"
                       style="font-size:44px; color: white;  margin-left: 150px; margin-top: 0px"><strong>Our
                        Team</strong></p>
                    <br>
                </v-flex>
                <v-flex class="hidden-sm-and-down" xs12 md8>
                    <v-img max-width="782px" style="color: white; height: 2px; margin-left: -20px;  margin-top: 46px; "
                           :src="require('../assets/Line4.png')"></v-img>
                    <br>
                </v-flex>

                <v-dialog persistent :class="{'ma-0': $vuetify.breakpoint.xs}" v-model="dialog" max-width="800">
                    <v-img :src="require('../assets/team01.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-btn @click="dialog = false">Exit</v-btn> -->

                                <!-- <v-icon color="white">fab fa-facebook></v-icon><br>
                                <a href="https://twitter.com/KennyImafidon" style="text-decoration:none"><v-icon color="white">fab fa-twitter</v-icon></a><br>
                                <a href="https://www.instagram.com/kenny.imafidon" style="text-decoration:none"><v-icon color="white">fab fa-instagram</v-icon></a><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog1" max-width="800">
                    <v-img :src="require('../assets/team2.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog1 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog2" max-width="800">
                    <v-img :src="require('../assets/team3.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog2 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog3" max-width="800">
                    <v-img :src="require('../assets/team4.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog3 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog4" max-width="800">
                    <v-img :src="require('../assets/team5.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog4 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog5" max-width="800">
                    <v-img :src="require('../assets/team13.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog5 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog6" max-width="800">
                    <v-img :src="require('../assets/team7.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog6 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog7" max-width="800">
                    <v-img :src="require('../assets/team8.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog7 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon>  -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog8" max-width="800">
                    <v-img :src="require('../assets/team9.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog8 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog9" max-width="800">
                    <v-img :src="require('../assets/team10.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog9 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog10" max-width="800">
                    <v-img :src="require('../assets/team11.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog10 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog11" max-width="800">
                    <v-img :src="require('../assets/team12.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog11 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>
                <v-dialog persistent v-model="dialog12" max-width="800">
                    <v-img :src="require('../assets/team14.png')">
                        <v-layout row wrap>
                            <v-flex xs12 md10></v-flex>
                            <v-flex xs12 md2 style="margin-top: 0px;">
                                <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog12 = false">
                                    <v-avatar
                                            size="45"
                                    >
                                        <v-img :src="require('../assets/exitBtn.png')"></v-img>
                                    </v-avatar>
                                </v-btn>
                                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                                <v-icon color="white">fab fa-twitter</v-icon><br>
                                <v-icon color="white">fab fa-instagram</v-icon><br>
                                <v-icon color="white">fab fa-linkedin</v-icon> -->
                            </v-flex>
                        </v-layout>
                    </v-img>
                </v-dialog>

                <!-- <v-dialog persistent v-model="dialog10" max-width="800"><v-img :src="require('../assets/team8.png')"><v-layout row wrap><v-flex xs12 md10></v-flex>
                  <v-flex xs12 md2 style="margin-top: 0px;">
                    <v-btn fab icon style="margin-top: 40px; margin-left: -10px" @click="dialog10 = false">
              <v-avatar
                  size="45"
               >
                   <v-img :src="require('../assets/exitBtn.png')" ></v-img>
               </v-avatar>
          </v-btn> -->
                <!-- <v-icon color="white" >fab fa-facebook</v-icon><br>
                <v-icon color="white">fab fa-twitter</v-icon><br>
                <v-icon color="white">fab fa-instagram</v-icon><br>
                <v-icon color="white">fab fa-linkedin</v-icon> -->
                <!-- </v-flex></v-layout></v-img></v-dialog> -->

                <v-flex :class="{'ml-0 mr-0': $vuetify.breakpoint.xs}" xs12 md4
                        style="margin-left: -30px; margin-right: -80px; margin-bottom: 10px; " justify-center
                        v-for="(item, i) in items"
                        :key="i" @click.stop="hello(item.a)">
                    <v-card max-width="254" height="294"
                            class="mx-auto" color="#dddad5">
                        <br>
                        <v-img :src="require('../assets/Line7.png')" width="32"
                               style="padding-top: -30px; margin-left: 20px; height: 2px;"></v-img>
                        <p style="text-align: left; font-size: 14px; color:#34387F;" v-text="item.name"
                           class="headline"><strong></strong></p>
                        <p style="text-align: left; font-size: 13px; color:#34387F" v-text="item.job"
                           class="headline2"></p>
                        <v-avatar size="140" center class="pp">
                            <v-img :src="require(`../assets/${item.src}.jpg`)"
                            ></v-img>
                        </v-avatar>
                    </v-card>
                </v-flex>
                <!-- </v-flex> -->
            </v-layout>
        </v-container>

        <!-- SECTION 4 -->

        <v-container class="" fluid>
            <v-layout row wrap justify-space-between>
                <v-flex justify-center xs12 md12 style="background:#34387F;" class="justify-center">
                    <v-carousel>
                        <v-carousel-item class="testimonial" v-for="(item,i) in testimonial" :key="i"
                                         reverse-transition="fade" transition="fade">
                            <!--<img :src="item.logo" width="50px">-->
                            <p>{{item.desc}}</p>
                            <p>{{item.author}}</p>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>

            </v-layout>
        </v-container>

        <!--&lt;!&ndash; mobile start &ndash;&gt;-->
        <!--<v-container class="hidden-md-and-up" fluid style="margin: 0px; padding: 0px; width: 100%">-->
        <!--<v-layout row wrap justify-space-between style="height: 425px;" >-->
        <!--<v-flex-->
        <!--justify-center xs12 md7 style="background:#34387F;" class="justify-center">-->
        <!--<br>-->
        <!--<v-img  max-width="380px" style="margin-left: 10%; margin-right: 10%" height="1px" :src="require('../assets/Line.png')"></v-img>-->
        <!--<p style="color:white; margin-top:20px; font-size: 16px; text-align: left; margin-left: 10%; margin-right: 10%" ><strong>“We needed fresh informed and committed connections to bring our work to life and ClearView Research gave us exactly what we needed and more – insightful younger minds and passionate socially engaged leaders who added deep gravitas to our work and to our public events.”</strong></p><br />-->
        <!--<p  style="color:white; text-align: left; font-size: 18px; margin-left: 10%; margin-right: 10%"><strong>Lord Dr Hastings of Scarisbrick CBE</strong> <br />Head of Global Citizenship, KPMG</p>-->
        <!--</v-flex>-->
        <!--<v-flex  xs12 md5 style="background:#34387F">-->
        <!--</v-flex>-->
        <!--</v-layout>-->
        <!--</v-container>-->
        <!--&lt;!&ndash; mobile end &ndash;&gt;-->

        <v-container fluid style="margin: 0px; padding: 0px; width: 100%;">
            <v-layout class="hidden-sm-and-down" row justify-center align="center"
                      style="height: 380px; background:#1c1c1c;">
                <v-flex xs12 md3 style="margin-top: 70px; margin-left: -90px">
                    <a href="https://www.facebook.com/CVR.Insights/" style="text-decoration:none">
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
                    <p style="color:lightgrey; font-size: 38px"><strong>Get in touch</strong></p>
                    <v-img style="height: 2px; width: 220px; margin-top: -20px"
                           :src="require('../assets/Line10.png')"></v-img>
                    <br>
                    <p style="color:lightgrey; font-size: 32px"><strong>+44-203-474-0995</strong></p>
                    <p style="color:white; font-size: 16px"><strong>ClearView Research Ltd,<br>
                        86-90 Paul Street, London, EC2A 4NE</strong></p>
                    <p style="color:white; font-size: 16px"><strong>ClearView Research Ltd © 2021 All Rights Reserved |
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
// import VueNavigationBar from 'vue-navigation-bar'
// import 'vue-navigation-bar/dist/vue-navigation-bar.css'
import navBar from '../components/Globals/navBar.vue'

export default {
  components: {
    'navBar': navBar
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
      testimonial: [
        {
          author: 'Kate Goodman - Senior Campaigns Manager, Bite Back 2030',
          logo: 'https://img.icons8.com/plasticine/2x/sugar-cube.png',
          desc: 'CVR were great to work with, bringing unique and valuable insight to the team - which really helped steer our strategic direction on how to engage teenagers with the tricky topic of childhood obesity.'
        },
        {
          author: 'Jess Bool - Youth Strategy Lead, Unicef UK',
          logo: 'https://img.icons8.com/plasticine/2x/sugar-cube.png',
          desc: 'We worked with ClearView in Spring 2018 as part of our work to develop Unicef UK’s framework for youth engagement. Through a series of Solutions Labs and a bespoke digital tool that reached young people all over the UK, they prepared recommendations that have informed our work since.'
        },
        {
          author: 'Anna Whitton- CEO, WDP',
          logo: 'https://img.icons8.com/plasticine/2x/sugar-cube.png',
          desc: 'The Clearview team were great to work with. They were energising, practical and provided really good quality feedback with clear, tangible recommendations. They built good rapport really quickly with our teams and delivered what we needed at pace.'
        }
      ],
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
      dialog8: false,
      dialog9: false,
      dialog10: false,
      dialog11: false,
      dialog12: false,
      testtest: false,
      prof: 'team1',
      items: [
        {
          name: 'Kenny Imafidon',
          src: 'CopyKenny-m',
          job: 'Co-Founder & Managing Director',
          profile: 'team01',
          a: '1'
        },
        {
          name: 'Leonie Bellio',
          src: 'Leonie1',
          job: 'Co-Founder & Director',
          profile: 'team2',
          a: '2'
        },
        {
          name: 'Annette Dale-Perera',
          src: 'Annette1',
          job: 'Senior Associate',
          profile: 'team3',
          a: '3'
        },
        {
          name: 'Burphy Zumu',
          src: 'Burphyc',
          job: 'Director & Senior Research Executive',
          profile: 'team4',
          a: '4'
        },
        {
          name: 'Dr. Bianca B. Wilson',
          src: 'bianca1',
          job: 'Senior Research & Project Consultant',
          profile: 'team5',
          a: '5'
        },
        {
          name: 'Sandra Hicks',
          src: 'hicks',
          job: 'Senior Researcher',
          profile: 'team13',
          a: '6'
        },
        {
          name: 'Catherine Sweetman',
          src: 'KATE1',
          job: 'Associate',
          profile: 'team7',
          a: '7'
        },
        {
          name: 'Dr. Niamh McGarry',
          src: 'Paul3',
          job: 'Research Director',
          profile: 'team8',
          a: '8'
        },
        {
          name: 'Dr. Ana Isabel Pontes',
          src: 'Ana',
          job: 'Associate',
          profile: 'team9',
          a: '9'
        },
        {
          name: 'Peace Benson',
          src: 'Peace1',
          job: 'Research Executive',
          profile: 'team10',
          a: '10'
        },
        {
          name: 'Dimitris Raidos',
          src: 'Dimitris',
          job: 'Research Executive',
          profile: 'team111',
          a: '11'
        },
        {
          name: 'Bheki Moyo',
          src: 'bhe',
          job: 'Senior Associate',
          profile: 'team12',
          a: '12'
        },
        {
          name: 'Bim Ojewale',
          src: 'Bims',
          job: 'Finance lead',
          profile: 'team14',
          a: '13'
        }
      ],
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
            class: 'button-ex'
          }
        ]
      }

    }
  },
  methods: {
    hello (money) {
      // this.prof = this.items.profile
      // var jj = this
      console.log('hello')
      console.log(money)
      if (money === '1') {
        this.dialog = true
      } else if (money === '2') {
        this.dialog1 = true
      } else if (money === '3') {
        this.dialog2 = true
      } else if (money === '4') {
        this.dialog3 = true
      } else if (money === '5') {
        this.dialog4 = true
      } else if (money === '6') {
        this.dialog5 = true
      } else if (money === '7') {
        this.dialog6 = true
      } else if (money === '8') {
        this.dialog7 = true
      } else if (money === '9') {
        this.dialog8 = true
      } else if (money === '10') {
        this.dialog9 = true
      } else if (money === '11') {
        this.dialog10 = true
      } else if (money === '12') {
        this.dialog11 = true
      } else if (money === '13') {
        this.dialog12 = true
      }
    },
    vnbItemClicked (text) {
      if (text === "LET'S CHAT") {
        var scrollingElement = (document.scrollingElement || document.body)
        scrollingElement.scrollTop = scrollingElement.scrollHeight
      }
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
        width: 100%;
    }

    @font-face {
        font-family: 'Lato';
        src: url("~/Fonts/Lato-Regular.tff") format('ttf');
        font-style: normal;
        font-weight: 100;
    }

    @font-face {
        font-family: 'Lato-Black';
        src: url("~/Fonts/Lato-Black.tff") format('ttf');
        font-style: normal;
    }

    p {
        font-family: 'Lato';
    }

    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }

    .eee {
        width: 70% !important;
        margin-top: 40px !important;
    }

    html {
        font-size: 20px !important;
        /* color: lightgrey; */
        width: 100%;

    }

    .sect7 {
        margin-left: 250px;
        margin-right: auto;
        top: 50px;
    }

    .center-text-trick {
        margin-top: 50%;
        font-size: 24px;
        margin-bottom: 50%;
    }

    .hidden {
        visibility: hidden;
    }

    .s {
        margin-left: 13px;
        margin-right: auto;
        margin-top: 160px
    }

    .sect2 {
        font-size: 24px;
        text-align: left;
        margin-left: 250px;
    }

    .sect1 {
        text-align: left;
    }

    .sect6 {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: -80px;
    }

    .sect8 {
        text-align: left;
        margin-left: 250px;
    }

    .pp {
        margin-top: 20px;
        margin-left: -60px;
    }

    .headline {
        padding-top: 5px;
        padding-left: 20px;
    }

    .headline2 {
        padding-left: 20px;
        margin-top: -10px;
    }

    .vnb__menu-options__option__link {
        color: white;
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

    .vnb__popup__bottom__menu-options__option__link:hover {
        color: #34387F !important;
        background: #1b1b1b !important;
    }

    /* .vnb__brand-image-wrapper__link__image {
      max-height: 70px;
    }

    .vnb__popup__top__close-button {
    }

    .vnb__popup__top__close-button__image {
      max-height: 35px !important;
      max-width: 35px !important;
    }

    .vnb__popup {
      background: #1b1b1b !important;
      margin-right: 0px !important;
      height: auto;
    }

    .vnb__popup__bottom {
      background: #1b1b1b ;
    }

    .vnb__popup__bottom__menu-options {
    }

    .vnb__popup__bottom__menu-options__option__link {
      border-left: #1b1b1b !important;
      color: white !important;
      justify-content: flex-end !important;
      font-weight: 800 !important;
      font-size: 24px !important;

    }

    .vnb__popup__bottom__menu-options__option__link:hover {
      color:#34387F !important;
      background: #1b1b1b !important;
    } */

    .container {
        padding: 0 !important;
    }

    .vnb__brand-image-wrapper__link__image {
        max-height: 62px;
    }

    .vnb .button-ex {
        font-size: 13.5px;
        font-weight: 600;
        border-width: 100px;
        border-color: white;
        border-radius: 20px;
        border: 2px solid white;
        background: transparent;
    }

    .vnb .button-ex:hover {
        font-size: 13.5px;
        font-weight: 600;
        border-width: 100px;
        border-color: white;
        border-radius: 20px;
        border: 2px solid white;
        background: white;
        color: black !important;
    }

    .eee2 {
        width: 95% !important;
        margin-top: 10px !important;
        margin-bottom: 20px;
    }

    .testimonial .v-responsive {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .testimonial .v-responsive__content p {
        font-size: 1.1rem;
        color: #fff;
        margin: 0;
        padding: 0 3.5rem;
        line-height: 1.4;
    }

    .testimonial .v-responsive__content p:nth-child(2) {
        font-size: 16px !important;
        display: inline;
        padding: 4px 7px;
        margin-top: 29px;
        position: relative;
        top: 14px;
    }

    .testimonial .v-responsive__content img {
        position: relative;
        text-align: -webkit-left;
        left: -24%;
        width: 105px;
    }

    .v-carousel__controls {
        bottom: 7% !important;
        background: transparent !important;
        /*width: 36%!important;*/
    }

    .v-carousel {
        box-shadow: none !important;
        width: 70%;
        margin: 0 auto;
    }

    @media (max-width: 600px) {
        .v-carousel {
            width: 100%;
        }

        .v-carousel__controls {
            bottom: 2% !important;
        }
    }

    .listItems {
    }

    .listItems li {
        text-align: left;
        color: #cecece;
    }

    /* .vnb__brand-image-wrapper__link__image {
      max-height: 70px;
    }

    .vnb__popup__top__close-button {
    }

    .vnb__popup__top__close-button__image {
      max-height: 35px !important;
      max-width: 35px !important;
    }

    .vnb__popup {
      background: #1b1b1b !important;
      margin-right: 0px !important;
      height: auto;
    }

    .vnb__popup__bottom {
      background: #1b1b1b ;
    }

    .vnb__popup__bottom__menu-options {
    }

    .vnb__popup__bottom__menu-options__option__link {
      border-left: #1b1b1b !important;
      color: white !important;
      justify-content: flex-end !important;
      font-weight: 800 !important;
      font-size: 24px !important;

    }

    .vnb__popup__bottom__menu-options__option__link:hover {
      color:#34387F !important;
      background: #1b1b1b !important;
    }

    .container {
       padding: 0 !important;
    } */
</style>
