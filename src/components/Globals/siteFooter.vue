<template>
    <div>
        <v-container fluid style="margin: 0px; padding: 0px; width: 100%; background:#fff;">
            <div>
                <v-layout class="hidden-sm-and-down" row justify-center align="center" style="height: 400px;">
                    <v-flex xs4 md3 style="margin-top: 70px; margin-left: -90px">
                        <a href="https://www.facebook.com/CVR.Insights/" style="text-decoration:none">
                            <v-icon large style="margin-bottom: 17px; margin-top: 8px;" color="#323E7C">fab fa-facebook
                            </v-icon>
                        </a><br>
                        <a href="https://twitter.com/CVR_Insights" style="text-decoration:none">
                            <v-icon large style="margin-bottom: 17px;" color="#323E7C">fab fa-twitter</v-icon>
                        </a><br>
                        <a href="https://www.instagram.com/cvr_insights/" style="text-decoration:none">
                            <v-icon large style="margin-bottom: 17px;" color="#323E7C">fab fa-instagram</v-icon>
                        </a><br>

                        <a href="https://www.linkedin.com/company/clearview-research-ltd" style="text-decoration:none">
                            <v-icon large style="margin-bottom: 17px;" color="#323E7C">fab fa-linkedin</v-icon>
                        </a>
                    </v-flex>
                    <v-flex xs8 md9 style="background:#fff; text-align: left; margin-top: 70px; margin-left: -40px">
                        <p style="color:323E7C; font-size: 38px"><strong>Get in touch</strong></p>
                        <v-img style="height: 2px; width: 220px; margin-top: -20px"
                               :src="require('../../assets/Line10.png')"></v-img>
                        <br>
                        <p style="color:323E7C; font-size: 32px"><strong>+44-203-474-0995</strong></p>
                        <p style="color:#323E7C; font-size: 13px"><strong>ClearView Research Ltd,<br>
                            86-90 Paul Street, London, EC2A 4NE</strong></p>
                        <p style="color:#323E7C; font-size: 13px"><strong>ClearView Research Ltd © 2021 All Rights
                            Reserved  |  <span style="color: #d05e32"><a style="color: inherit; "
                                                                         href="./../static/privacy.pdf" target="_blank"> Privacy Policy</a></span></strong>
                        </p>
                    </v-flex>
                </v-layout>
            </div>
        </v-container>
    </div>
</template>
