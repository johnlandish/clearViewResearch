<template>
   <div>
       <div class="humbergerMenu" @click="callMenu" >
           <span class="material-icons" id="humbergerMenu">menu</span>
       </div>
       <div class="aside-nav" id="burgerNav">
           <ul id="main-menu" class="navigation-menu nav">
               <li>
                   <router-link to="/expertise">Expertise</router-link>
               </li>
               <li>
                   <router-link to="/casestudies">Our Work</router-link>
               </li>
               <li>
                    <!--<a href="#letsChat" @click="letsChat()">Let’s Chat</a>-->
                    <a href="#letsChat" @click="letsChat()">Let’s Chat</a>
               </li>
               <li>
                   <router-link to="/blog/">Hot off the press</router-link>
               </li>
           </ul>
           <span @click="closeMenu" class="material-icons closeMenu">clear</span>
       </div>
   </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },
  methods: {

    callMenu () {
      let nav = document.getElementById('burgerNav')
      nav.classList.add('active')
    },
    closeMenu () {
      let nav = document.getElementById('burgerNav')
      nav.classList.remove('active')
    },
    letsChat () {
      let p = document.getElementById('burgerNav')
      p.classList.remove('active')
      let element = document.getElementById('letsChat')
      element.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})
    }

  }

}
</script>
<style>
    /*css*/
    .humbergerMenu{
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        position: fixed;
        right: 7rem;
        top: 3rem;
        cursor: pointer;
        z-index: 10;
    }
    .humbergerMenu span{
        font-size: 4em;
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
        height: 100%;
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
    @media(max-width:768px){
        .humbergerMenu{
            right: 4rem;
            top: 5.1rem;
        }
    }
    @media(max-width:425px){
        .humbergerMenu {
            right: 0rem;
            top: 1.1rem;
        }
    }

    .vnb__menu-options--right,.vnb__collapse-button{
        display: none;
    }
</style>
