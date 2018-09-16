<template>
<div>
  <header class="res-clearfix">
    <div class="nav-ctl res-fl" @click="toggleNav">
      菜单
    </div>

    <div :style="backgroundLogo" class="logo-box res-fl">
      物联网管理平台
    </div>
    <ul class="user-nav res-fr res-clearfix">
      <li><router-link :to="{path:'/HelloWord'}">首页</router-link></li>
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
  </header>
  <nav class="animated" :class = "[ isMenuOpen ? 'open' : 'close' ]">
    <ul class="nav-list">
      <li v-for="(item, index) in menuList" :key="item.id" :class="{ active:isIndex==index }" @click.stop="toggleNavList(index)">
        <div class="accordion-item">
          <div class="accordion-bar">
            <span class="nav-icon">图标</span>
            <p class="lev1-name res-dib">{{item.name}}</p>
          </div>
          <div class="lev2-box res-clearfix">
            <dl v-if="item.children" v-for="lev2 in item.children" :key="lev2.id">
              <dt >{{lev2.name}}</dt>
              
              <dd v-for="lev3 in lev2.children" :key="lev3.id"><router-link :to="{path:lev3.url}">{{lev3.name}}</router-link></dd>
            </dl>
          </div>
        </div>
      </li>
    </ul>
  </nav>

  <!-- <section :style="{height: winHight}">
    <div class="content">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </div>
  </section> -->
  </div>
</template>

<script>
let menuListStr = [
  {
    fjd: "0",
    children: [
      {
        fjd: "wlllmanage",
        children: [
          {
            fjd: "lljkmanage",
            name: "网络故障诊断",
            id: "wlgzzd_node",
            url: "test"
          },
          {
            fjd: "lljkmanage",
            name: "网络实时监测",
            id: "wlssjc_node",
            url: "test2"
          },
          {
            fjd: "lljkmanage",
            name: "网络状态报告",
            id: "wlztbg_node",
            url: "xxx"
          },
          {
            fjd: "lljkmanage",
            name: "链路拓扑监控",
            id: "100001242064976641645",
            url: "../work/iot/linkManage/linkTopologyMonitor/linkMonitor.jsp"
          }
        ],
        name: "链路监控",
        id: "lljkmanage"
      },
      {
        fjd: "wlllmanage",
        children: [
          {
            fjd: "llglmanage",
            name: "网络设备管理",
            id: "wlsbgl_node",
            url: "xxx"
          }
        ],
        name: "链路管理",
        id: "llglmanage"
      }
    ],
    name: "网络链路管理",
    id: "wlllmanage"
  },
  {
    fjd: "0",
    children: [
      {
        fjd: "gzsbmanage",
        children: [
          {
            fjd: "ljglmanage",
            name: "设备接入展现",
            id: "sbjrzx_node",
            url: "../work/iot/deviceManagment/deviceAccessShow/deviceList.jsp"
          },
          {
            fjd: "ljglmanage",
            name: "设备模板展现",
            id: "sbmbzx_node",
            url:
              "../work/iot/deviceManagment/deviceAssetShow/deviceAssetList.jsp"
          }
        ],
        name: "连接管理",
        id: "ljglmanage"
      },
      {
        fjd: "gzsbmanage",
        children: [
          {
            fjd: "sbglmanage",
            name: "设备资产注册",
            id: "sbzczc_node",
            url: "../work/iot/linkManage/deviceRegister/deviceList.jsp"
          },
          {
            fjd: "sbglmanage",
            name: "设备资产管理",
            id: "sbzcgl_node",
            url:
              "../work/iot/deviceManagment/assetManagement/deviceAssetList.jsp"
          },
          {
            fjd: "sbglmanage",
            name: "设备群组管理",
            id: "sbqzgl_node",
            url: "../work/iot/deviceManagment/deviceGroup/deviceGroupList.jsp"
          },
          {
            fjd: "sbglmanage",
            name: "设备升级管理",
            id: "sbsjgl_node",
            url:
              "../work/iot/deviceManagment/upgradeManagement/deviceUpgradeList.jsp"
          },
          {
            fjd: "sbglmanage",
            name: "设备联动管理",
            id: "sbldgl_node",
            url:
              "../work/iot/deviceManagment/ruleActionManagement/ruleActionList.jsp"
          },
          {
            fjd: "sbglmanage",
            name: "设备告警管理",
            id: "sbgjgl_node",
            url: "../work/iot/deviceManagment/alarmManagement/alarmList.jsp"
          },
          {
            fjd: "sbglmanage",
            name: "任务事件管理",
            id: "rwsjgl_node",
            url: "../work/iot/deviceManagment/taskManagement/taskManagement.jsp"
          },
          {
            fjd: "sbglmanage",
            name: "任务信息展现",
            id: "rwxxzx_node",
            url: "../work/iot/deviceManagment/taskInfoShow/taskInfoList.jsp"
          }
        ],
        name: "设备管理",
        id: "sbglmanage"
      },
      {
        fjd: "gzsbmanage",
        children: [
          {
            fjd: "sbjkmanage",
            name: "设备资产监控",
            id: "sbzcjk_node",
            url:
              "../work/iot/deviceMonitor/deviceRealTimeMonitor/deviceList.jsp"
          },
          {
            fjd: "sbjkmanage",
            name: "设备故障诊断",
            id: "sbgzzd_node",
            url: "../work/iot/deviceMonitor/faultDiagnosis/faultDiagnosis.jsp"
          }
        ],
        name: "设备监控",
        id: "sbjkmanage"
      }
    ],
    name: "感知设备管理",
    id: "gzsbmanage"
  },
  {
    fjd: "0",
    children: [
      {
        fjd: "gzsjmanage",
        children: [
          {
            fjd: "sjmanage",
            name: "数据模型管理",
            id: "sjmxgl_node",
            url: "http://10.126.3.180:20010/ebook/opsMonitor/dataObjWLW.html"
          }
        ],
        name: "数据管理",
        id: "sjmanage"
      },
      {
        fjd: "gzsjmanage",
        children: [
          {
            fjd: "sjywmanage",
            name: "数据调度运维",
            id: "sjddyw_node",
            url:
              "http://10.126.3.180:20010/ebook/opsMonitor/dataProcessWLW.html"
          }
        ],
        name: "数据运维",
        id: "sjywmanage"
      }
    ],
    name: "感知数据管理",
    id: "gzsjmanage"
  },
  {
    fjd: "0",
    children: [
      {
        fjd: "yyzcmanage",
        children: [
          {
            fjd: "fwdymanage",
            name: "个人工作区",
            id: "grgzq_node",
            url:
              "http://10.7.24.179:8081/sg/pages/index11.jsp?url=/pages/platformMng/workspace/main.jsp&title=个人工作区?menuid=1528713116357&sgtoken=hjkdEPmlpT&sglogname=admin"
          },
          {
            fjd: "fwdymanage",
            name: "资源导入",
            id: "zydr_node",
            url:
              "http://10.7.24.179:8081/sg/pages/index11.jsp?url=/pages/resourceMng/resourceImport/main.jsp&title=资源导入?menuid=1528190140872&sgtoken=hjkdEPmlpT&sglogname=admin"
          },
          {
            fjd: "fwdymanage",
            name: "资源审核",
            id: "zysh_node",
            url:
              "http://10.7.24.179:8081/sg/pages/index11.jsp?url=/pages/resourceMng/resourceCheck/main.jsp&title=资源审核?menuid=1528713127558&sgtoken=hjkdEPmlpT&sglogname=admin"
          },
          {
            fjd: "fwdymanage",
            name: "资源导出",
            id: "zydc_node",
            url:
              "http://10.7.24.179:8081/sg/pages/index11.jsp?url=/pages/resourceMng/resourceExport/main.jsp&title=资源导出?menuid=1528713135320&sgtoken=hjkdEPmlpT&sglogname=admin"
          }
        ],
        name: "服务定义",
        id: "fwdymanage"
      },
      {
        fjd: "yyzcmanage",
        children: [
          {
            fjd: "fwglmanage",
            name: "服务应用管理",
            id: "fwyygl_node",
            url:
              "http://10.7.24.169:8081/cloudui/matrix/index11.jsp?url=/matrix/open/app-management.jsp&title=应用管理?menuid=1528711734893&sgtoken=hjkdEPmlpT&sglogname=admin"
          },
          {
            fjd: "fwglmanage",
            name: "服务目录管理",
            id: "fwmlgl_node",
            url:
              "http://10.7.24.169:8081/devportal/matrix/index11.jsp?url=./matrix/servicegroup/index.html&title=服务目录?menuid=servicegroup&sgtoken=hjkdEPmlpT&sglogname=admin"
          },
          {
            fjd: "fwglmanage",
            name: "服务申请审批",
            id: "fwsqsp_node",
            url:
              "http://10.7.24.169:8081/cloudui/matrix/index11.jsp?url=/matrix/open/apiaudithMng.jsp&title=服务申请审批?menuid=apiauditmng&sgtoken=hjkdEPmlpT&sglogname=admin"
          }
        ],
        name: "服务管理",
        id: "fwglmanage"
      }
    ],
    name: "应用支撑管理",
    id: "yyzcmanage"
  },
  {
    fjd: "0",
    children: [
      {
        fjd: "zhfwmanage",
        children: [
          {
            fjd: "fwzxmanage",
            name: "感知应用管理",
            id: "gzyygl_node",
            url:
              "http://10.7.24.169:5086/devportal/pages/userCenter/console.jsp"
          }
        ],
        name: "服务展现",
        id: "fwzxmanage"
      }
    ],
    name: "综合服务管理",
    id: "zhfwmanage"
  },
  {
    fjd: "0",
    children: [
      {
        fjd: "systemmanage",
        children: [
          {
            fjd: "yhmanage",
            name: "租户管理",
            id: "zhmanage_node",
            url: "../security/zh/index.jsp"
          },
          {
            fjd: "yhmanage",
            name: "用户管理",
            id: "yhmanage_node",
            url: "../security/userManage/index.jsp"
          },
          {
            fjd: "yhmanage",
            name: "机构管理",
            id: "jgmanage_node",
            url: "../security/jg/index.jsp"
          },
          {
            fjd: "yhmanage",
            name: "用户组管理",
            id: "yhzmanage_node",
            url: "../security/userGroup/index.jsp"
          }
        ],
        name: "用户管理",
        id: "yhmanage"
      },
      {
        fjd: "systemmanage",
        children: [
          {
            fjd: "qxmanage",
            name: "角色管理",
            id: "jsmanage_node",
            url: "../security/role/roleList.jsp"
          },
          {
            fjd: "qxmanage",
            name: "岗位管理",
            id: "gwmanage_node",
            url: "../security/position/positionList.jsp"
          }
        ],
        name: "权限管理",
        id: "qxmanage"
      },
      {
        fjd: "systemmanage",
        children: [
          {
            fjd: "cdmanage",
            name: "业务系统注册",
            id: "ywxtzcmanage_node",
            url: "../portal/system/index.jsp"
          },
          {
            fjd: "cdmanage",
            name: "菜单维护 ",
            id: "cdmanage_node",
            url: "../security/modeltree/index.jsp"
          }
        ],
        name: "菜单管理",
        id: "cdmanage"
      },
      {
        fjd: "systemmanage",
        children: [
          {
            fjd: "aqmanage",
            name: "账号安全管理",
            id: "zhaqmanage_node",
            url: "../security/securityManage/index.jsp"
          },
          {
            fjd: "aqmanage",
            name: "安全事件展现",
            id: "aqsjmanage_node",
            url: "../security/securityShow/securityShowList.jsp"
          }
        ],
        name: "安全管理",
        id: "aqmanage"
      },
      {
        fjd: "systemmanage",
        children: [
          {
            fjd: "rzmanage",
            name: "操作日志",
            id: "czlog_node",
            url: "../work/iot/logManagement/operateLog/operateLogList.jsp"
          },
          {
            fjd: "rzmanage",
            name: "设备日志",
            id: "sblog_node",
            url: "../work/iot/logManagement/deviceLog/deviceLogList.jsp"
          },
          {
            fjd: "rzmanage",
            name: "服务日志",
            id: "fwlog_node",
            url: "../work/iot/logManagement/serviceLog/serviceLogList.jsp"
          },
          {
            fjd: "rzmanage",
            name: "数据日志",
            id: "sjlog_node",
            url: "../work/iot/logManagement/dataLog/dataLogList.jsp"
          },
          { fjd: "rzmanage", name: "连接日志", id: "ljlog_node", url: "xxx" }
        ],
        name: "日志管理",
        id: "rzmanage"
      },
      {
        fjd: "systemmanage",
        children: [
          {
            fjd: "100000903890418960004",
            name: "新目录",
            id: "100000924153890929964"
          },
          {
            fjd: "100000903890418960004",
            name: "测试资源",
            id: "100000911017418123185",
            url: "testres.jsp"
          },
          {
            fjd: "100000903890418960004",
            name: "t888",
            id: "100001043339140213268",
            url: "t888.jsp"
          },
          {
            fjd: "100000903890418960004",
            name: "t88",
            id: "100001055981886338137",
            url: "t88"
          }
        ],
        name: "测试目录",
        id: "100000903890418960004"
      }
    ],
    name: "系统综合管理",
    id: "systemmanage"
  }
];
export default {
  name: "LayOut",
  components:{

  },
  data() {
    return {
      isMenuOpen: false,
      isIndex: -1,
      backgroundLogo: {
        backgroundImage: "url(" + require("../assets/images/logo1.png") + ")"
      },
      menuList: menuListStr,
       winHight: (window.innerHeight - 50) + 'px'
    };
  },
  methods: {
    toggleNav: function() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen==false) {
        this.isIndex= -1;
      }
    },
    toggleNavList: function(index,evnet){
      this.isIndex != index ? this.isIndex = index : this.isIndex=-1;
      // event.target.parent
    }

  },
  mounted() {
    // 注：window.onresize只能在项目内触发1次
    window.onresize = function () {
        // 通过捕获系统的onresize事件触发我们需要执行的事件
        this.winHight = (window.innerHeight - 50) + 'px';
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position:fixed;
  width: 100%;
  height: 50px;
  background: #42b983;
  color: #fff;
  z-index: 99;
}
.nav-ctl {
  height: 50px;
  width: 50px;
  line-height: 50px;
  background: #399e71;
  cursor: pointer;
  text-align: center;
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
.user-nav{height: 50px;padding: 0 20px;}
.user-nav>li{float: left;padding: 0 10px;line-height: 50px;position: relative;}
.user-nav>li a{color: #fff;}
.user-nav>li:hover{background: #399e71;transition: all .3s ease;}
.user-nav-lev2{position:absolute;right: 0;top: 50px; padding: 10px 0;background: rgba(32, 138, 90, .8);box-shadow: 0 3px 5px rgba(0,0,0,.6);transform: rotateX(90deg); opacity: 0; transition: all .6s ease;}
.user-nav>li:hover .user-nav-lev2{transform: rotateX(0deg);opacity: 1; transition: all .3s ease;}
.user-nav-lev2 li{line-height: 30px;padding: 0 10px; cursor: pointer;white-space: nowrap;}
.user-nav-lev2 li:hover{background: #42b983;transition: all .6s ease;}

nav{position: fixed;left: 0;top: 0;width: 50px;height: 100%;color: #fff; padding-top: 50px;z-index: 9; background: rgba(32, 138, 90, .8);/*transform: translate3d(-100%,0,0);*/transition: all .3s ease;}
nav .nav-list> li{position: relative;cursor:pointer;}
nav .nav-list> li:hover,nav .nav-list> li.active{background: rgba(32, 138, 90, .8);transition: all .3s ease;}
nav .nav-list> li::before{content: ""; position: absolute;z-index: 1; left: 0; top: 51%; bottom: 51%; background: #ea9108;width: 3px; -webkit-transition-property: top, bottom; transition-property: top, bottom; -webkit-transition-duration: 0.3s; transition-duration: 0.3s; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out;}
nav .nav-list> li:hover::before,nav .nav-list> li.active::before{ top: 0;bottom: 0;}
nav .accordion-item{width: 50px;/*background: rgba(32, 138, 90, .8);*/} 
nav .accordion-bar{white-space: nowrap;height: 40px;overflow: hidden;/* background: #399e71; */}
nav .nav-list> li:hover .accordion-bar{background: rgba(32, 138, 90, .8);transition: all .3s ease;}
nav .accordion-bar .nav-icon{position: absolute;z-index: 1; width: 50px;height: 40px; line-height: 40px;text-align: center;}
nav .lev1-name{width: 100%;line-height: 40px;font-size: 16px; color: #fff;padding-left: 70px;}
nav .lev2-box{position:absolute;z-index: 1; left: 50px;top: 40px;width: 0;height: 0; font-size: 14px; padding: 0px;background: rgba(32, 138, 90, .8);overflow-y: auto;}
nav .lev2-box dl{float: left;width: 140px;margin-bottom: 10px;}
nav .lev2-box dl dt{line-height: 14px;margin-bottom: 5px;}
nav .lev2-box dl dd{line-height: 24px;}

nav.close .nav-list .accordion-item:hover{width: 500px;background: rgba(32, 138, 90, .8); transition: all .3s;}
nav.close .nav-list .accordion-item:hover .lev2-box{width: 450px;height: 260px; padding: 15px;box-shadow: 3px 5px 10px rgba(0,0,0,.4); transition: height .6s ease;}


nav.open{width:220px; /*transform: translate3d(0,0,0)*/;transition: all .6s ease;}
nav.open .accordion-item{width: 100%}
nav.open li.active .accordion-bar{background: rgba(32, 138, 90, .8);}
nav.open .lev1-name{padding-left: 50px;}
nav.open li.active .lev2-box{position:static;width: 100%;height: 200px;padding: 15px;background: #42b983;transition: height .6s linear;}
nav.open .lev2-box dl{float: none;margin-left: 36px;}


section{position: fixed;top: 50px;left: 0;width: 100%;padding-left: 50px; background: #eee;}
.content{width: 100%;height: 100%;}
</style>
