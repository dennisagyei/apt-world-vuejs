<template>
    <span>
        <HomeNavBar />
        <HomeMainSection />
        <HomeServiceSection />
        <HomeContactSection />
        <HomeFooter />
    </span>
</template>

<script>


import HomeNavBar from '@/components/HomePage/HomeNavBar.vue'
import HomeMainSection from '@/components/HomePage/HomeMainSection.vue'
import HomeServiceSection from '@/components/HomePage/HomeServiceSection.vue'
import HomeContactSection from '@/components/HomePage/HomeContactSection.vue'
import HomeFooter from '@/components/HomePage/HomeFooter.vue'

  export default {
   
    data () {
      return {

      }
    },

    components:{
      HomeNavBar,
      HomeMainSection,
      HomeServiceSection,
      HomeContactSection,
      HomeFooter
    }
  }
</script>