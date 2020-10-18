<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item>首页</el-menu-item>
        <el-menu-item index="3" class="fr" disabled>消息中心</el-menu-item>
        <el-submenu index="2" class="fr">
          <template slot="title">我的</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <!-- <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu> -->
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside style="width: 200px">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>课程</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="1-1">
                  <i class="el-icon-document"></i>实训课</el-menu-item>
                <el-menu-item index="1-2"><i class="el-icon-document"></i>创新创业课</el-menu-item>
              </el-menu-item-group>
              <!-- <el-menu-item-group title="分组2">
                <el-menu-item index="1-3"><i class="el-icon-document"></i>选项3</el-menu-item> 
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">
                  <i class="el-icon-document"></i>选项4</template>
                <el-menu-item index="1-4-1">
                  <i class="el-icon-document"></i>选项1</el-menu-item>
              </el-submenu>-->
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">资源</span>

            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">作业</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span slot="title">统计</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">测试</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>
.el-container {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0;
}
.el-header {
  padding: 0;
  z-index: 1000;
}
.el-header .fr {
  float: right;
}
.el-header .el-menu {
  border-bottom: none;
}
.el-aside,
.el-main {
  padding-top: 60px;
}
.el-aside {
  background: #545c64;
}
.el-aside .el-menu {
  border-right: none;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>