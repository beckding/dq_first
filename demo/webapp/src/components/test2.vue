<template>
    <div class="content">
        test2
        <a href="" @click="test2">测试测试</a>
    </div>
</template>
<script>
export default {
  name: "Test2",
  data() {
    return {};
  },
  methods: {
      test2:function(){
          alert('测试测试');
      },
  }
};
</script>
<style scoped>
.content {
  height: 100%;
  width: 100%;
  background: #346a74;
}
</style>


