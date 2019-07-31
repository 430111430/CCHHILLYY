<template>
  <div id="container" view-portraits>
    <HeadArea />

    <div id="main-panel" view-portraits>
      <div id="desrcibe">
        <div id="describe-title" class="sub-title">评级概述</div>
        <div id="describe-content">
          <p>
            <span class="keyword">{{data.name}}</span>
            <span>在</span>
            <span class="keyword">{{data.industry}}</span>
            <span>行业</span>
            <span class="keyword">出类拔萃</span>
          </p>
          <p>
            <span>属于</span>
            <span class="keyword">优秀低风险</span>
            <span>企业</span>
          </p>
          <p>
            <span>CCHHILLYY综合评级</span>
            <span class="keyword">AA</span>
          </p>
        </div>
      </div>

      <div id="radar-chart-panel">
        <div id="radar-chart-title">企业画像</div>
        <div id="radar-chart"></div>
      </div>

      <div id="portrait-table-panel">
        <div id="portrait-table-title">CCHHILLYY 企业画像</div>
        <div id="portrait-table">
          <div class="portrait-table-row">
            <div class="portrait-table-cel"></div>
            <div class="portrait-table-cel">智能评分</div>
            <div class="portrait-table-cel">行业平均</div>
          </div>

          <div class="portrait-table-row" v-for="d in data.portraits" :key="d.name">
            <div class="portrait-table-cel">{{d.name}}</div>
            <div class="portrait-table-cel">{{d.score}}</div>
            <div class="portrait-table-cel">{{d.avg}}</div>
          </div>
        </div>
        
        <div id="show-details" v-if="!isShowDetails" @click="showDetails">查看详情</div>
      </div>
    </div>

    <transition name="fade">
      <Details v-if="isShowDetails" v-bind:data="data.details" />
    </transition>

    <Foot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Foot from "@/components/Foot.vue"; // @ is an alias to /src
import HeadArea from "@/components/Head.vue"; // @ is an alias to /src
import Details from "@/components/BusinessPortraitsDetails/Details.vue"; // @ is an alias to /src
import Vuex from "vuex";
import router from "@/router";
import store from "../../store/index";
import echarts from "echarts";

@Component({
  components: {
    Foot,
    HeadArea,
    Details
  }
})
export default class BusinessPortraits extends Vue {
  public data: any = null;

  public isShowDetails = false;

  public created() {
    this.data = (store.state as any).portraits.data;
    if (!this.data.name) {
      router.push("/");
    }
  }

  public mounted() {
    this.drawRadar();
  }

  public drawRadar() {
    if (!this.data.name) return;
    const radar = document.getElementById("radar-chart") as any;
    const myChart = echarts.init(radar);

    myChart.setOption({
      title: {
        text: ""
      },
      tooltip: {},
      legend: {},
      radar: {
        name: {
          textStyle: {
            color: "#999",
            // backgroundColor: "#999",
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: "综合", max: 30 },
          { name: "经营风险", max: 30 },
          { name: "财务风险", max: 30 },
          { name: "诉讼风险", max: 30 },
          { name: "舆情风险", max: 30 },
          { name: "行政风险", max: 30 },
          { name: "关联风险", max: 30 }
        ]
      },
      series: [
        {
          name: "",
          type: "radar",
          data: [
            {
              value: [
                this.data.portraits[0].score,
                this.data.portraits[1].score,
                this.data.portraits[2].score,
                this.data.portraits[3].score,
                this.data.portraits[4].score,
                this.data.portraits[5].score,
                this.data.portraits[6].score
              ],
              areaStyle: {
                normal: {
                  color: "rgba(92, 148, 236, 0.8)"
                }
              }
            }
          ]
        }
      ]
    } as any);
  }

  public showDetails() {
    this.isShowDetails = true;
    setTimeout(() => {
      const top = window.innerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }, 200);
  }
}
</script>

<style>
#container[view-portraits] {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/bg2.jpg");
  background-size: cover;
  background-position-y: -370px;
}

#main-panel[view-portraits] {
  height: 65%;
  padding: 0 50px;
  text-align: center;
  overflow: hidden;
  display: flex;
}

.keyword {
  color: #4194cc;
  margin: 0 4px;
}

.sub-title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  text-shadow: 0 0 5px blue;
}

#desrcibe {
  flex-grow: 3;
  width: 0;
  text-align: left;
  font-size: 35px;
}

#describe-content {
  font-size: 22px;
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#portrait {
  flex-grow: 7;
  width: 0;
}

#radar-chart-title {
  font-size: 25px;
}

#portrait-content {
  display: flex;
}

#radar-chart-panel {
  flex-grow: 4;
  width: 0;
}

#portrait-table-panel {
  flex-grow: 3;
  width: 0;
}

#portrait-table-title {
  font-size: 30px;
  color: white;
  line-height: 35px;
  padding: 5px 6px 6px 6px;
}

#portrait-table {
  display: flex;
  flex-flow: column;
}
.portrait-table-row {
  display: flex;
  flex-flow: row;
  line-height: 45px;
  font-size: 22px;
}

.portrait-table-cel {
  width: 0;
  flex-grow: 1;
}

.el-table th,
.el-table tr {
  background: oldlace;
}

#radar-chart {
  width: 100%;
  height: 90%;
}

#show-details {
  text-align: right;
  padding-right: 20px;
  font-size: 20px;
  text-decoration: underline;
  margin-top: 30px;
  color: #ff5555;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>