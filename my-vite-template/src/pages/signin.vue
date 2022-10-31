<route lang="yaml">
meta:
  layout: public
</route>

<template>
  <div>
    login 

    <div>
       username : 
       <input type="text">
    </div>
    <div>
       password : 
       <input type="text">
    </div>
    <button @click="onSignin"> Login </button>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useAppStore } from '../store/app-store'

export default {
  computed: {
    ...mapState(useAppStore, ['lang']),
  },
  mounted(){ 
    this.$axios({
    method: 'get',
    url: 'api',
  })
  },
  methods:{
    onSignin() { 
      this.$axios({
    method: 'post',
    url: 'api/auth/signin',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
    }
  }
}
</script>
