<template>
  <div id="container" component-head>
    <div id="main-panel" component-head>
      <div id="logo-panel">
        <img src="../assets/cchhillyy.png" alt="CCHHILLYY">
      </div>

      <div id="title" component-head>
        <span>企业画像风险评估专业工具</span>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuex from "vuex";
import router from "@/router";

@Component({
  components: {}
})
export default class HeadArea extends Vue {}
</script>

<style>
#container[component-head] {
  width: 100%;
  height: 25%;
}

#main-panel[component-head] {
  height: 100%;
  text-align: center;
  overflow: hidden;
}

#logo-panel {
  position: absolute;
  right: 15px;
  top: 20px;
  color: white;
}

#logo-panel > img {
  width: 150px;
  height: auto;
}

#title[component-head] {
  color: white;
  line-height: 100px;
  font-size: 40px;
  margin-top: 80px;
  text-shadow: 0px 0 8px blue;
}
</style>