<template>
  <header class="res-clearfix">
    <div :style="backgroundLogo" class="logo-box res-fl">
      物联网管理平台
    </div>
    <div class="res-fl res-ml20" style="line-height:20px;">
      <!-- 插槽 -->
      <slot></slot>
      <!-- 具名插槽 -->
      <slot name="slot1"></slot>
    </div>
    <ul class="user-nav res-fr res-clearfix">
      <li><router-link :to="{path:'/HelloWorld'}">首页</router-link></li>
      <li><a>消息</a></li>
      <li>
        <a>用户</a>
        <ul class="user-nav-lev2">
          <li>个人中心</li>
          <li>修改密码</li>
          <li>退出登录</li>
        </ul>
      </li>
    </ul>
    <!-- <left-nav></left-nav> -->
  </header>
</template>
<script>
import LeftNav from "./LeftNav"
export default {
  name: "TopHeader",
  components:{
    LeftNav
  },
  data() {
    return {
      isMenuOpen: false,
      isIndex: -1,
      backgroundLogo: {
        backgroundImage: "url(" + require("../assets/images/logo1.png") + ")"
      }
    };
  },
  methods: {
  }
};
</script>
<style>
header {
  position: fixed;
  width: 100%;
  height: 50px;
  background: #42b983;
  color: #fff;
  z-index: 99;
  padding-left: 50px;
}

.logo-box {
  height: 50px;
  background-size: 33px;
  line-height: 50px;
  font-size: 28px;
  font-family: \9ed1\4f53;
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 50px;
  margin-left: 30px;
}
.user-nav {
  height: 50px;
  padding: 0 20px;
}
.user-nav > li {
  float: left;
  padding: 0 10px;
  line-height: 50px;
  position: relative;
}
.user-nav > li a {
  color: #fff;
}
.user-nav > li:hover {
  background: #399e71;
  transition: all 0.3s ease;
}
.user-nav-lev2 {
  position: absolute;
  right: 0;
  top: 50px;
  padding: 10px 0;
  background: rgba(32, 138, 90, 0.8);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
  transform: rotateX(90deg);
  opacity: 0;
  transition: all 0.6s ease;
}
.user-nav > li:hover .user-nav-lev2 {
  transform: rotateX(0deg);
  opacity: 1;
  transition: all 0.3s ease;
}
.user-nav-lev2 li {
  line-height: 30px;
  padding: 0 10px;
  cursor: pointer;
  white-space: nowrap;
}
.user-nav-lev2 li:hover {
  background: #42b983;
  transition: all 0.6s ease;
}
</style>


