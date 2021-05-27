<template>
    <div id="app">
        <!-- NEW SECTION 1 -->
        <v-container fluid flat style="margin: 0px; padding: 0px; width: 100%">
            <v-layout row wrap>
                <!--new menu start-->
                <navBar></navBar>
                <!--new menu end-->
                <v-flex xs12 md12>
                    <div flat grid-list-md text-xs-center>
                        <div class="banner">
                            <video class="myVideo" autoplay playsinline loop muted id="video">
                                <source :src="require('../assets/video/main-video.mp4')" type="video/mp4">
                            </video>
                            <div class="inSlider">
                                <h1 class="pop" >
                                    A CLEAR VIEW ON COMPLEX, <br/> NEW AND <span style=" ">"SO CALLED"</span> HARD  <br/>TO REACH AUDIENCES</h1>
                                <v-spacer></v-spacer>
                                <p class="para">
                                    <strong>for organisations that want to<br> make an impact - and give a damn.</strong>
                                </p>
                                <v-img style="max-width: 320px" class="hr-line" :src="require('../assets/Line4.png')"></v-img>
                            </div>
                        </div>
                    </div>
                    <!-- </v-card> -->
                </v-flex>
            </v-layout>
        </v-container>

        <!-- NEW SECTION 2 -->

        <v-container fluid style="margin: 0px; padding: 0px; width: 100%; background:#E8E8E8;">
            <v-layout row wrap justify-center align="center" style="height: 50px; background:#E8E8E8;">
                <v-flex class="hidden-sm-and-down" xs12 md5 max-height="50px">
                    <p :class="{'ma-3': $vuetify.breakpoint.xs}"
                       style="font-size:20px; color: #333680;  margin-left: 120px; margin-top: 50px"><strong>We empower
                        organisations to</strong></p>
                </v-flex>
                <v-flex class="hidden-md-and-up" xs12 md4 max-height="400px">
                    <p :class="{'ma-3': $vuetify.breakpoint.xs}"
                       style="font-size:20px; color: #333680;  margin-left: 200px; margin-top: 115px"><strong><u>We
                        empower organisations to</u></strong></p>
                </v-flex>
                <v-flex xs12 md7>
                    <!-- <v-img class="hidden-lg-and-up hidden-sm-and-down" :max-width="SectionlineWidth" style="color: #333680; height: 1px; margin-left: 0px;  margin-top: 69px" :src="require('../assets/Line7.png')"></v-img> -->
                    <v-img v-show="$vuetify.breakpoint.md" max-width="500px"
                           style="color: #333680; height: 2px; margin-left: -6px;  margin-top: 69px"
                           :src="require('../assets/Line7.png')"></v-img>
                    <v-img v-show="$vuetify.breakpoint.lg" max-width="650px"
                           style="color: #333680; height: 2px; margin-left: -45px;  margin-top: 69px"
                           :src="require('../assets/Line7.png')"></v-img>
                    <v-img v-show="$vuetify.breakpoint.xl" max-width="840px"
                           style="color: #333680; height: 2px; margin-left: -125px;  margin-top: 69px"
                           :src="require('../assets/Line7.png')"></v-img>
                </v-flex>
            </v-layout>
            <v-layout row wrap justify-center align="center" :height="secondsection" style="background:#E8E8E8;">
                <v-flex
                        xs12 md3 :class="{'mt-9 mb-5': $vuetify.breakpoint.xs}" style="">

                    <v-img class="hh" height="200" width="200"
                           :src="require('../assets/04.png')">
                    </v-img>
                    <br>
                    <p style="color:#34387F; font-size: 26px; font-family: Lato"><strong>Create Clear <br/>Communication</strong>
                    </p>
                    <p style="color:black; font-family: Lato">To engage diverse communities <br>and make authentic connections</p>
                    <!-- </v-card> -->
                </v-flex>
                <v-flex xs12 md3 :class="{'ma-0 mb-5': $vuetify.breakpoint.xs}" style="">
                    <!-- <v-card flat height="300" color="#002b81"> -->
                    <v-img class="hh" height="200" width="200"
                           :src="require('../assets/06.png')">
                    </v-img>
                    <br>
                    <p style="color:#34387F; font-weight: Heavy; font-size: 26px; font-family: Lato"><strong>Develop Greater<br/>Understanding</strong></p>
                    <p style="color:black; font-family: Lato">using innovative research approaches<br/> we help you to uncover real insight
                        <br> from those who often go unheared</p>

                </v-flex>
                <v-flex :class="{'mt-0': $vuetify.breakpoint.xs}" xs12 md3 style="">

                    <v-img class="hh" height="200" width="200"
                           :src="require('../assets/08.png')">
                    </v-img>
                    <br>
                    <p style="color:#34387F; font-size: 26px; font-family: Lato"><strong>Ensure a Lasting
                        <br/>Impact</strong></p>
                    <p style="color:black; font-family: Lato">We provide critical insights<br/> and strategic support to enable you
                        <br> to make a meaningful difference</p>

                </v-flex>
            </v-layout>
        </v-container>
        <v-container class="hidden-sm-and-down" fluid
                     style="margin: 0px; padding: 0px; width: 100%; height: 150px; background-color:#E8E8E8;">
            <v-layout row wrap justify-space-around align="center"
                      style="height: 100px; margin-left: auto; margin-right: 55px; padding-top: 100px; margin-bottom: 100px; width: 100%; color: #E8E8E8"></v-layout>
        </v-container>
        <v-container fluid class="hidden-sm-and-down"
                     style="margin: 0px; padding: 0px; width: 100%;height: 900px; background-color:#E8E8E8">
            <v-layout row wrap justify-center align="center"
                      style="height: 750px; margin-left: 12%; margin-right: 12%; padding-top: 100px; width: 1200px; color: #E8E8E8">
                <v-flex xs12 md2>
                    <p style="font-size:20px; color: black; margin-top: -40px" class="hidden-sm-and-down">
                        <strong>Some of our projects</strong>
                    </p>
                </v-flex>
                <v-flex xs12 md10>
                    <v-img style="color: black; margin-left: 10px;  margin-top: -21px" width="834px" height="2px"
                           :src="require('../assets/Line2.png')"></v-img>
                </v-flex>
                <v-flex xs12 md6>
                    <v-img :height="sectionfiveheight" :width="sectionfive"
                           :src="require('../assets/Copy of 1M6A5411.jpg')"></v-img>
                    <!-- <v-btn round outline large max-width="200px" class="leftleft3"><strong>CASE STUDIES</strong></v-btn> -->
                </v-flex>
                <v-flex xs12 md6>
                    <v-img height="277.5" width="430" style="margin-bottom: 10px; margin-left: 15px;"
                           :src="require('../assets/ken.jpg')"></v-img>
                    <v-img height="277.5" width="430" style="margin-left: 15px;"
                           :src="require('../assets/CVR_Report Mock_4.png')"></v-img>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 md4>
                    <v-btn  class="customCommonBtn"  :to="{  name: 'casestudies'}">
                        <strong>CASE STUDIES </strong>
                    </v-btn>
                </v-flex>
                <v-flex xs12 md4>
                </v-flex>

                <v-flex xs12 md>
                </v-flex>

            </v-layout>
        </v-container>
        <!-- NEW SECTION 3 -->
        <v-container fluid style="margin: 0px; padding: 0px; width: 100%">
            <v-layout>
                <v-flex xs12 md3>
                    <p :class="{'ma-0': $vuetify.breakpoint.xs}"
                       style="font-family: Lato; font-size:18px; color: #8c0d37;  margin-left: 200px; margin-top: 90px">
                        <strong>What we do</strong></p>
                </v-flex>
                <v-flex class="hidden-sm-and-down" xs12 md9>
                    <v-img max-width="780px" style="color: #8c0d37 height: 1px; margin-left: 0px;  margin-top: 105px"
                           width="1000px" max-height="2px" :src="require('../assets/Line3.png')"></v-img>
                </v-flex>
            </v-layout>
            <br>
            <br>
            <v-layout row wrap justify-center align="center">
                <div class="gridSection">
                    <div class="item">
                        <img src="../assets/grid/1.jpg">
                    </div>
                    <div class="item">
                        <div class='article'>
                            <p>Audience insight</p>
                            <span>Where our clients wish to learn more about their audiences, we engage and gather trusted and culturally-informed insight from the people they seek to understand. We gather this insight through engaging with our existing panels, databases, trusted sources and networks, as well as, through our strategic community partners, who we have built trusted and equitable relationships with over the years.</span>
                        </div>
                    </div>
                </div>
                <div class="gridSection">
                    <div class="item">
                        <div class='article'>
                            <p>Advisory (aka be your critical friend)</p>
                            <span>Using our in-house expertise (as well as the brilliant individuals in our network) we work closely with our clients who are seeking a critical friend to support them in developing their current/future strategies. This can be anything from sharing best practice on how to engage with particular communities that we have expertise in engaging and working with. To sharing our know-how and learning with funders and influential organisations about how they can best use their existing resources to make a bigger social impact or address societal issues they have a vested interest in.</span>

                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/grid/2.jpg" alt="">
                    </div>

                </div>
                <div class="gridSection">
                    <div class="item">
                        <img src="../assets/grid/3.jpg" alt="">
                    </div>
                    <div class="item">
                        <div class='article'>
                            <p>Comms & Marketing</p>
                            <span> We provide trusted and culturally-sensitive insight to communications and/or marketing teams who want to execute bold campaigns that cut through and land well with people from the communities we specialise in. We have all seen how costly it can be for brands who get communication or campaigns wrong, so we understand the importance of communicating effectively with audiences.</span>
                        </div>
                    </div>
                </div>
                <div class="gridSection">
                    <div class="item">
                        <div class='article'>
                            <p>Learning Partner</p>
                            <span>Collaboration is a key part of our organisation’s success and we are committed to working in partnership with funders and influential organisations to solve pressing issues in our society.</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/grid/4.jpg">
                    </div>

                </div>
                <div class="gridSection">
                    <div class="item">
                        <img src="../assets/grid/2.jpg" alt="">
                    </div>
                    <div class="item">
                        <div class='article'>
                            <p>Monitoring & Evaluation</p>
                            <span>We have extensive experience delivering community-based monitoring and evaluation, and evaluating initiatives targeting vulnerable, excluded, and marginalised groups. Let us support you to develop or update your organisation’s theory of change, create a framework and process to explore outcomes and impact, and gather insights and findings to share with stakeholders</span>
                        </div>
                    </div>
                </div>
                <div class="gridSection">
                    <div class="item">
                        <div class='article'>
                            <p> Strategic Planning</p>
                            <span>We support socially-driven businesses to develop clear and actionable strategies to achieve their business goals based on evidence-based insights and best practice.</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/grid/5.jpg">
                    </div>
                </div>
            </v-layout>

            <!--&lt;!&ndash; mobile start &ndash;&gt;-->
            <!--<v-layout class="hidden-md-and-up" row wrap justify-center align="center"-->
            <!--style="height: 1700px; padding: 20px;">-->

            <!--<v-flex xs12 md3 :class="{'mb-5': $vuetify.breakpoint.xs, 'ma-3': $vuetify.breakpoint.lgAndDown}">-->
            <!--<v-card center elevation="10"-->
            <!--max-width="344" height="490" style="margin-left: 5px; margin-right: 5px;">-->
            <!--<v-img style="color: #8c0d37; margin-top: 0px;" height="3px" width="320"-->
            <!--:src="require('../assets/Line3.png')"></v-img>-->

            <!--<v-card-text class="rec">-->
            <!--<div style="color: #8c0d37;"><strong>Audience <br/>Insight</strong></div>-->
            <!--<br>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--We use tried and tested engagement techniques to:-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">• access and engage bespoke audiences</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--• co-create projects, particularly with children and young people, Millennials, people-->
            <!--from Black, Asian and Minority Ethnic communities, underrepresented groups and-->
            <!--vulnerable communities-->
            <!--</p>-->
            <!--</v-card-text>-->
            <!--</v-card>-->
            <!--</v-flex>-->
            <!--<v-flex xs12 md3 :class="{'mb-5': $vuetify.breakpoint.xs, 'ma-3': $vuetify.breakpoint.lgAndDown}">-->
            <!--<v-card center elevation="10"-->
            <!--max-width="344"-->
            <!--height="510"-->
            <!--style="margin-left: 5px; margin-right: 5px;"-->
            <!--&gt;-->
            <!--<v-img style="color: #8c0d37; margin-top: 0px;" height="3px" width="320"-->
            <!--:src="require('../assets/Line3.png')"></v-img>-->
            <!--<v-card-text class="rec">-->
            <!--<div style="color: #8c0d37;"><strong>Advisory &<br/>Campaign Support</strong></div>-->
            <!--<br>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--We advise and support on a range of issues including how to:-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">• develop your theory of change</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--• refine your social impact framework model-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--• develop and execute strategies that help to increase brand awareness, customer-->
            <!--engagement or sales revenue from diverse audiences-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--We provide specialist campaign advice and support for:-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--• creative, innovative, practical and cost-effective campaign strategies-->
            <!--</p>-->
            <!--</v-card-text>-->
            <!--</v-card>-->
            <!--</v-flex>-->
            <!--<v-flex xs12 md3 :class="{'ma-3': $vuetify.breakpoint.lgAndDown}">-->
            <!--<v-card center elevation="10"-->
            <!--max-width="344"-->
            <!--height="520"-->
            <!--style="margin-left: 5px; "-->
            <!--&gt;-->
            <!--<v-img style="color: #8c0d37; margin-top: 0px;" height="3px" width="320"-->
            <!--:src="require('../assets/Line3.png')"></v-img>-->
            <!--<v-card-text class="rec">-->
            <!--<div style="color: #8c0d37;"><strong>Exploration and <br/>Solution Labs</strong></div>-->
            <!--<br>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--We have an innovative approach to managing focus groups:</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">• organic and trusted network of partners-->
            <!--across various communities, built through our networks, direct outreach and-->
            <!--collaboration</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--• diverse and comprehensive database of potential participants and partners</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">• unique insight gathering methodology –-->
            <!--Exploration and Solution Labs – to gather in-depth insight to understand a topic more-->
            <!--deeply and from the hearts of their target audiences</p>-->
            <!--</v-card-text>-->
            <!--</v-card>-->
            <!--</v-flex>-->

            <!--</v-layout>-->

            <!--<v-layout class="hidden-md-and-up" row wrap justify-center align="center"-->
            <!--style="height: 1700px; padding: 20px;">-->
            <!--<v-flex :class="{'mb-5': $vuetify.breakpoint.xs, 'ma-3': $vuetify.breakpoint.lgAndDown}" xs12 md3>-->
            <!--<v-card center elevation="10"-->
            <!--max-width="344"-->
            <!--height="500"-->
            <!--style="margin-left: 5px; margin-right: 5px;"-->
            <!--&gt;-->
            <!--<v-img style="color: #8c0d37; margin-top: -0px;" height="3px" width="320"-->
            <!--:src="require('../assets/Line3.png')"></v-img>-->
            <!--<v-card-text class="rec">-->
            <!--<div style="color: #8c0d37;"><strong>Impact Evaluation <br/>& ROI</strong></div>-->
            <!--<br>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--We produce impactful evaluation reports that demonstrate:-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">• effectiveness of a client's work-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--• efficiency and impact of a client’s programme in addressing the aims and goals it sets-->
            <!--out in the programme’s Theory of Change-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">• room for improvements and lessons-->
            <!--learned</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">• social value of a client’s programme</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">• how to create, shape and develop effective-->
            <!--CSR programmes</p>-->
            <!--</v-card-text>-->
            <!--</v-card>-->
            <!--</v-flex>-->
            <!--<v-flex :class="{'mb-5': $vuetify.breakpoint.xs, 'ma-3': $vuetify.breakpoint.lgAndDown}" xs12 md3>-->
            <!--<v-card center elevation="10"-->
            <!--max-width="344"-->
            <!--height="500"-->
            <!--style="margin-left: 5px; margin-right: 5px;"-->
            <!--&gt;-->
            <!--<v-img style="color: #8c0d37; margin-top: -0px;" height="3px" width="320"-->
            <!--:src="require('../assets/Line3.png')"></v-img>-->
            <!--<v-card-text class="rec">-->
            <!--<div style="color: #8c0d37;"><strong>Marketing<br/>& PR</strong></div>-->
            <!--<br>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--We deliver bespoke marketing and PR campaigns for diverse audiences:-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right:20px">• utilising market knowledge and audience-->
            <!--insight</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--• leveraging networks in culturally relevant media platforms-->
            <!--</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--• working in collaboration with leading social cause and diversity consultancy Naked-->
            <!--Truth PR</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--• providing value that benefits client’s ‘bottom-line’ but focuses on the ‘the bigger-->
            <!--picture’-->
            <!--</p>-->
            <!--</v-card-text>-->
            <!--</v-card>-->
            <!--</v-flex>-->
            <!--<v-flex :class="{'mb-5': $vuetify.breakpoint.xs, 'ma-3': $vuetify.breakpoint.lgAndDown}" xs12 md3>-->
            <!--<v-card center elevation="10"-->
            <!--max-width="344"-->
            <!--height="500"-->
            <!--style="margin-left: 5px; margin-right: 5px;"-->
            <!--&gt;-->
            <!--<v-img style="color: #8c0d37; margin-top: -0px;" height="3px" width="320"-->
            <!--:src="require('../assets/Line3.png')"></v-img>-->
            <!--<v-card-text class="rec">-->
            <!--<div style="color: #8c0d37;"><strong>Solution-focused <br/>Reports</strong></div>-->
            <!--<br>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">-->
            <!--Regardless of the issue or topic our reports are:</p>-->
            <!--<p :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px;">• clear and readable for a wide audience,-->
            <!--without jargon or ‘smarty pants’ language</p>-->
            <!--<div :class="{'body-1': $vuetify.breakpoint.xs, 'body-1': $vuetify.breakpoint.md}"-->
            <!--style="font-size: 16px; margin-right: 20px; font-family: Lato">-->
            <!--• visually appealing and engaging-->
            <!--</div>-->
            <!--</v-card-text>-->
            <!--</v-card>-->
            <!--</v-flex>-->
            <!--</v-layout>-->

            <v-btn round outline large max-width="180px" color="#8c0d37" class="leftleft2 mt-5"><strong>
                <router-link to="/Expertise#anchor1">LEARN MORE</router-link>
            </strong></v-btn>
        </v-container>

        <!-- mobile start  -->

        <v-container class="hidden-md-and-up" fluid style="background-color:#E8E8E8; width: 100%">
            <v-layout row wrap justify-center>
                <p class="font-family: Lato" style="font-size:20px; color: black; margin-top: 20px"><strong><u>Some of
                    our projects</u></strong></p>
                <v-flex xs12 md7>
                    <v-img :src="require('../assets/Copy of 1M6A5411.jpg')"></v-img>
                </v-flex>
                <v-flex xs12 md5>
                    <v-img :src="require('../assets/ken.jpg')"></v-img>
                    <v-img :src="require('../assets/CVR_Report Mock_4.png')"></v-img>
                </v-flex>
                <!-- <v-btn round outline large max-width="200px" class="leftleft"><strong>CASE STUDIES</strong></v-btn> -->
            </v-layout>
            <v-btn round outline style="margin-top: 20px; border-width: 1px; font-size: 12px; margin-bottom: 20px; font-family: Lato;"
                   max-width="100px" :to="{name: 'casestudies'}">CASE STUDIES
            </v-btn>
        </v-container>

        <v-container fluid class="ourClients">
            <v-container >
                <v-layout row wrap>
                    <v-flex md12  style="padding-top: 50px;">
                        <p class="logoTitle">Some of our clients and friends </p>
                        <carousel :perPageCustom="[[768, 3], [1024, 5]]">
                        <slide>
                            <img src="../assets/partners/6.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/7.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/8.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/9.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/10.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/1.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/2.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/3.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/4.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/5.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/11.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/12.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/13.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/14.png" class="img-responsive" alt="our partners">
                        </slide>
                        <slide>
                            <img src="../assets/partners/15.png" class="img-responsive" alt="our partners">
                        </slide>
                    </carousel>
                        <!--<div class="logoSection">-->
                            <!--<div class="brands"><img src="../assets/partners/6.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/7.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/8.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/9.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/10.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/1.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/2.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/3.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/4.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/5.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/11.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/12.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/13.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/14.png" class="img-responsive" alt="our partners"></div>-->
                            <!--<div class="brands"><img src="../assets/partners/15.png" class="img-responsive" alt="our partners"></div>-->
                        <!--</div>-->

                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>

        <v-container fluid class="ourClients mt-5">
            <v-container >
                <v-layout row wrap>
                    <v-flex md12  style="padding-top: 50px;">
                        <p class="logoTitle">Referenced in</p>
                        <carousel :perPageCustom="[[768, 3], [1024, 5]]">
                            <slide>
                                <img src="../assets/clients/bbc.png" class="img-responsive" alt="our partners">
                            </slide>
                            <slide>
                                <img src="../assets/clients/glamour.png" class="img-responsive" alt="our partners">
                            </slide>
                            <slide>
                                <img src="../assets/clients/guardian.png" class="img-responsive" alt="our partners">
                            </slide>
                            <slide>
                                <img src="../assets/clients/indep.png" class="img-responsive" alt="our partners">
                            </slide>
                            <slide>
                                <img src="../assets/clients/metro.png" class="img-responsive" alt="our partners">
                            </slide>
                            <slide>
                                <img src="../assets/clients/sky.png" class="img-responsive" alt="our partners">
                            </slide>
                            <slide>
                                <img src="../assets/clients/tele.png" class="img-responsive" alt="our partners">
                            </slide>
                            <slide>
                                <img src="../assets/clients/voice.png" class="img-responsive" alt="our partners">
                            </slide>
                            <slide>
                                <img src="../assets/clients/wsj.png" class="img-responsive" alt="our partners">
                            </slide>
                            <slide>
                                <img src="../assets/clients/sun.png" class="img-responsive" alt="our partners">
                            </slide>
                        </carousel>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>

        <!-- NEW SECTION 7 -->

        <v-container fluid style="margin: 0px; margin-top: 10px; padding: 0px; width: 100%">
            <v-layout row wrap justify-space-around class="justify-center">
                <v-flex xs12 class="">
                    <div style="padding:85px 0; background:#323E7C ;">
                        <v-img max-width="1330px" height="2px" class="sect5"
                               :src="require('../assets/Line.png')"></v-img>
                        <div class="d-inline-flex font-family: Lato;"
                             style="text-align: left; color:white; font-size: 32px; justify-content: center; margin-left: 10%; margin-right: 10%;">
                            <strong>You can’t make a great <br/> decision without, <br/> a clear view. </strong>
                        </div>
                        <div class="d-inline-flex lifeStyle"><strong>We help businesses, lifestyle brands, charities and
                            governments to access unique and trustworthy audience insights, and make great decisions
                            that solve complex business problems, and benefit society at large.<br/><br>
                            We engage and gather consumer insight
                            from various audiences such as: children, Generation Z, millennials, under-represented
                            groups (e.g. people from Black, Asian or other ethnic minority groups) and vulnerable
                            groups.<br/><br>
                            We have worked on projects across 4 continents and in countries such as Australia,
                            Brazil and Spain. We have worked on project briefs for the likes of Starbucks UK, NHS
                            England, the Vodafone Foundation, Unicef UK, and Tinder.</strong></div>
                    </div>
                    <!--<v-img height="900px" :src="require('../assets/lord33.png')">-->
                      <!---->
                    <!--</v-img>-->
                </v-flex>
                <!--<v-flex class="hidden-md-and-up" xs12>-->
                    <!--<v-img height="800px" :src="require('../assets/cs11.png')" justify-center>-->
                        <!--<p class="font-family: Lato"-->
                           <!--style=" text-align: left; color:white; font-size: 24px; justify-content: center; margin-left: 10%; margin-right: 10%; ">-->
                            <!--<strong>You can’t make a great decision without a clear view. </strong></p>-->
                        <!--<p class="font-family: Lato"-->
                           <!--style=" color:white; text-align: left; font-size: 18px; margin-left: 10%; margin-right: 10%;">-->
                            <!--<strong>-->
                                <!--Our mission at ClearView is to support leaders to make equitable, conscious and culturally sensitive decisions.-->
                                <!--<br>-->
                                <!--We regularly engage and gather insights from various audiences nationally and internationally, particularly: young people, ethnic minority groups, culturally-diverse communities, people with protected characteristics and those who often go unheard.<br/>-->
                                <!--<br> We have worked on projects across 4 continents and in countries such as Australia, Brazil and Spain. We have worked on project briefs for the likes of Starbucks UK, NHS England, the Vodafone Foundation, Unicef UK, and Tinder.-->
                            <!--</strong>-->
                        <!--</p>-->
                    <!--</v-img>-->
                <!--</v-flex>-->
            </v-layout>
        </v-container>

        <!-- NEW SECTION 8 -->
        <v-container fluid style="margin: 0px; padding: 0px; width: 100%" id="letsChat">
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <v-card color="#095F52" dark tile flat style="height:810px; font-size: 22px; position: relative">
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
                <v-flex xs12 md6 class="bg-green">

                </v-flex>
            </v-layout>
        </v-container>

        <!-- NEW SECTION 9 -->

        <siteFooter></siteFooter>

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
  }
}
</script>

<style>

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
        background: #006053;
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
