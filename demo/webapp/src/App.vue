<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <!-- <lay-out></lay-out> -->
    <top-header>
      <p class="res-red">我来自父级页面</p>
      <p class="res-yellow" slot="slot1">我来自父级页面，并且我有名字,我叫slot1</p>
    </top-header>
    <left-nav></left-nav>
    <section :style="{height: winHight}">
      <div class="content">
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
      </div>
    </section>
  </div>
</template>

<script>
// import LayOut from './components/LayOut'
import TopHeader from "./components/TopHeader"
import LeftNav from "./components/LeftNav"

export default {
  name: "App",
  components: {
    // LayOut,
    TopHeader,
    LeftNav
  },
  data() {
    return {
      // isMenuOpen: false,
      // isIndex: -1,
      // backgroundLogo: {
      //   backgroundImage: "url(" + require("./assets/images/logo1.png") + ")"
      // },
      // menuList: menuListStr,
      winHight: window.innerHeight - 50 + "px"
    };
  },
  methods: {
  },
  mounted() {
    // 注：window.onresize只能在项目内触发1次
    window.onresize = function() {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      this.winHight = window.innerHeight - 50 + "px";
    };
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
section{position: fixed;top: 50px;left: 0;width: 100%;padding-left: 50px; background: #eee;}
.content{width: 100%;height: 100%;}
</style>
