<template>
    <div class="content" :class="{ active:isactive }">
        <span class="test" @click="test2">{{onoff}}</span>
    </div>
</template>
<script>
export default {
  name: "Test2",
  data() {
    return {
      isactive: false,
      onoff: "开灯"
    };
  },
  methods: {
    test2: function() {
      this.isactive = !this.isactive;
      if (this.isactive) {
        this.onoff = "关灯";
      }else{
          this.onoff = "开灯";
      }
    }
  }
};
</script>
<style scoped>
.content {
  height: 100%;
  width: 100%;
  background: #000;
}
.content.active {
  background: rgb(104, 170, 110);
}
.test {
  display: inline-block;
  font-size: 20px;
  color: #fff;
  padding: 4px 10px;
  background: #f60;
  border-radius: 3px;
  margin: 30px;
  cursor: pointer;
}
</style>


