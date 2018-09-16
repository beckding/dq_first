<template>
    <div class="content">
        test1
        <router-link :to="{path:'/HelloWorld'}">to hello world</router-link>
    </div>
</template>
<script>
export default {
     name: "Test",
  data() {
    return {
      
    };
  },
  methods: {
  }
}
</script>
<style scoped>
    .content{height: 100%;width: 100%; background: #8f1606;}
</style>


