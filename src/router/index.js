import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Chat from '@/components/LetsChat'
import casestudies from '@/components/CaseStudies'
import expertise from '@/components/Expertise'
import blogHome from '@/components/blogHome'
// import blog from '@/components/Blog'
import wdp from '../components/wdp.vue'
import youthEmployment from '../components/youth-employment.vue'
import ygam from '../components/ygam.vue'
import humanRights from '../components/human-rights.vue'
import biteBlack from '../components/bite-black.vue'
import gambleAware from '../components/gambleAware.vue'
import unicefUk from '../components/unicef-uk.vue'
import nhsEngland from '../components/nhs-england.vue'
import kingsCollege from '../components/kings-college.vue'
import earlyYearsFoundation from '../components/early-years-foundation.vue'
import starbucksUk from '../components/starbucks-uk.vue'
import ukYouth from '../components/uk-youth.vue'
import youthCymru from '../components/youth-cymru.vue'
import BlogPost from '@/components/BlogPost'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/About',
      name: 'about',
      component: About
    },

    {
      path: '/Lets-chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/CaseStudies',
      name: 'casestudies',
      component: casestudies
    },
    {
      path: '/Expertise',
      name: 'expertise',
      component: expertise
    },
    {
      path: '/wdp',
      name: 'wdp',
      component: wdp
    },
    {
      path: '/youth-employment',
      name: 'youth-employment',
      component: youthEmployment
    },
    {
      path: '/ygam',
      name: 'ygam',
      component: ygam
    },
    {
      path: '/human-rights',
      name: 'human-rights',
      component: humanRights
    },
    {
      path: '/bite-black',
      name: 'bite-black',
      component: biteBlack
    },
    {
      path: '/gambleAware',
      name: 'gambleAware',
      component: gambleAware
    },
    {
      path: '/unicef-Uk',
      name: 'unicefUk',
      component: unicefUk
    },
    {
      path: '/nhs-england',
      name: 'nhs-england',
      component: nhsEngland
    },
    {
      path: '/kings-college',
      name: 'kingsCollege',
      component: kingsCollege
    },
    {
      path: '/early-years-foundation',
      name: 'early-years-foundation',
      component: earlyYearsFoundation
    },
    {
      path: '/starbucks-uk',
      name: 'starbucks-uk',
      component: starbucksUk
    },
    {
      path: '/uk-youth',
      name: 'uk-youth',
      component: ukYouth
    },
    {
      path: '/youth-cymru',
      name: 'youth-cymru',
      component: youthCymru
    },
    {
      path: '/blog/',
      name: 'blog-home',
      component: blogHome
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    },
    {
      path: '/blog-home',
      name: 'blogHome',
      component: blogHome
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    // return desired positio
    const position = {}
    if (to.hash === '#anchor2') {
      position.selector = to.hash
      position.offset = { y: 100 }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
