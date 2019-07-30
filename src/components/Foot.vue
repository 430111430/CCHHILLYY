<template>
  <div id="container" component-foot>
    <div id="contact-us" class="footer-item">
      <div class="footer-title">联系我们</div>
      <div class="footer-content">
        <div>客服：xxx-xxxx xxxx</div>
        <div>工作时间：周一至周五 9:00-18:00</div>
        <div>商务合作：xx@gmail.com</div>
      </div>
    </div>
    <div id="about" class="footer-item">
      <div class="footer-title">关于CCHHILLY</div>
      <div class="footer-content">
        <div>关于我们 用户协议<br/>版权政策 负责声明<br/>权利通知</div>
      </div>
    </div>
    <div id="data-source" class="footer-item">
      <div class="footer-title">数据来源</div>
      <div class="footer-content">
        <div>全国企业信用信息公示网 北大法律信息网 中国裁判文书网 国家知识产权局 商标局 版权局</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuex from "vuex";
import router from "@/router";
import store from "../store/index";

@Component({
  components: {}
})
export default class Foot extends Vue {}
</script>

<style>
#container[component-foot]{
    height: 15%;
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: rgba(13, 23, 23, 1);
    color: rgba(135,140,144,1);
    
    display: flex;
    justify-content: space-evenly;
    align-items: top;
    padding: 20px 0;
    box-sizing: border-box;
}

.footer-item {
  width: 20%;
}

.footer-title {
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
}

.footer-title::before {
  content: "";
  width: 5px;
  height: 14px;
  margin-right: 6px;
  background-color: white;
  display: inline-block;
  vertical-align: sub;
}

.footer-content {
  font-size: 14px;
}
</style>