<template>
  <div id="container" view-index>
    <HeadArea />
    <div id="main-panel" view-index>
      <div id="input-panel">
        <input type="text" v-model="searchKey" placeholder="请输入企业名称、注册编号等" />
        <div id="generate-btn" @click="onClick">生成</div>
      </div>

      <div id="hot-key-panel">
        <div id="hot-key-title">热门搜索</div>
        <div id="hot-key-list">
          <span class="hot-key" v-for="key in hotKeyList" :key="key" @click="onClickHotKey">{{key}}</span>
        </div>
      </div>
    </div>

    <div id="no-use-panel">
      <div id="blow-cow-pussy-panel">
        <div class="blow-cow-pussy">
          <div class="blow-cow-pussy-img"><i class="fa fa-building"></i></div>
          <div class="blow-cow-pussy-content">
            <div class="blow-cow-pussy-title">1亿+ 社会实体</div>
            <div class="blow-cow-pussy-text">支持多种查询</div>
          </div>
        </div>
        <div class="blow-cow-pussy">
          <div class="blow-cow-pussy-img"><i class="fa fa-line-chart"></i></div>
          <div class="blow-cow-pussy-content">
            <div class="blow-cow-pussy-title">全量数据与分析</div>
            <div class="blow-cow-pussy-text">企业年报、法律诉讼，供应链动态，整体风险评估等全量信息库</div>
          </div>
        </div>
        <div class="blow-cow-pussy">
          <div class="blow-cow-pussy-img"><i class="fa fa-search-plus"></i></div>
          <div class="blow-cow-pussy-content">
            <div class="blow-cow-pussy-title">权威来源</div>
            <div class="blow-cow-pussy-text">数据与权威网站同步，实时更新</div>
          </div>
        </div>
      </div>
    </div>

    <Foot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Foot from "@/components/Foot.vue"; // @ is an alias to /src
import HeadArea from "@/components/Head.vue"; // @ is an alias to /src
import Vuex from "vuex";
import router from "@/router";
import store from "../store/index";
import axios from "axios";

interface EventTarget {
  innerText: string;
}

interface Event {
  target: EventTarget;
}

@Component({
  components: {
    Foot,
    HeadArea
  }
})
export default class Index extends Vue {
  public hotKeyList = new Array<any>();

  public searchKey = "";

  public created() {
    this.getHotKeys();
  }

  private async getHotKeys() {
    this.hotKeyList.push("京东");
    this.hotKeyList.push("江铃");
    this.hotKeyList.push("亚马逊");
  }

  public onClickHotKey(event: Event) {
    this.searchKey = event.target.innerText;
  }

  public async onClick() {
    if (!this.searchKey) {
      return this.$message("请输入企业名称、注册编号等");
    }

    /**get data from server
     
      try {
          const data = await axios.get('');
      } catch (error) {
        console.error(error);
          return this.$message("服务端异常");
      }
    */

    store.commit("portraits/setData" /*data*/, {
      name: this.searchKey,
      industry: ((name)=>{
        if(name == '京东' || name == '亚马逊')
          return '电商'
        if(name == '铃木')
          return '汽车'
      })(this.searchKey),
      //企业画像
      portraits: [
        {
          name: "综合",
          score: 22, //智能评分
          avg: 20 //行业平均
        },
        {
          name: "经营风险",
          score: 23, //智能评分
          avg: 18 //行业平均
        },
        {
          name: "财务风险",
          score: 14, //智能评分
          avg: 20 //行业平均
        },
        {
          name: "诉讼风险",
          score: 25, //智能评分
          avg: 22 //行业平均
        },
        {
          name: "舆情风险",
          score: 18, //智能评分
          avg: 26 //行业平均
        },
        {
          name: "行政风险",
          score: 17, //智能评分
          avg: 14 //行业平均
        },
        {
          name: "关联风险",
          score: 25, //智能评分
          avg: 22 //行业平均
        },
      ],
      details: {
        roe: {
          name: "盈利能力",
          data: [
            {
              name: "净资产收益率(%)",
              value: 10
            },
            {
              name: "资产报酬率(%)",
              value: 25
            },
            {
              name: "销售毛利率(%)",
              value: 30
            },
            {
              name: "成本费用利润率(%)",
              value: 40
            }
          ]
        },
        kpi:{
          name: "财务指标",
          data: [
            {
              name: "利息支付倍数(%)",
              value: 20
            },
            {
              name: "【营运资金/总负债】",
              value: 30
            },
            {
              name: "经营现金净流量对负债比率(%)",
              value: 40
            }
          ]
        }
      }
    });
    router.push("business-portraits");
  }
}
</script>

<style>
#container[view-index] {
  width: 100%;
  height: 100%;
  background-image: url("../assets/bg1.png");
  background-size: cover;
}

#main-panel[view-index] {
  height: 20%;
  text-align: center;
  overflow: hidden;
}

#input-panel > input {
  width: 60%;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  box-sizing: border-box;
  border-radius: 9px;
  border: none;
  box-shadow: 0 0 5px aqua;
}

#generate-btn {
  display: inline-block;
  line-height: 50px;
  font-size: 18px;
  height: 50px;
  width: 100px;

  color: #6d6d6d;
  border-left: 1px solid #c1c1c1;
  position: relative;
  left: -100px;
  top: 3px;

  cursor: pointer;
}

#hot-key-panel {
  width: 55%;
  display: flex;
  color: white;
  margin: 20px auto 0 auto;
  align-items: center;
}

#hot-key-title {
  padding: 8px 10px;
  font-size: 22px;
  font-weight: bold;
  color: lightgray;
  text-shadow: 0 0 3px darkred;
}

.hot-key {
  margin-left: 30px;
  cursor: pointer;
  color: lightgray;
  text-shadow: 0 0 1px blue;
  font-size: 18px;
}

.hot-key:hover {
  text-shadow: 0 0 1px red;
}

#no-use-panel {
  height: 40%;
  overflow: hidden;
}

#blow-cow-pussy-panel {
  display: flex;
  justify-content: center;
  height: 100%;
}

.blow-cow-pussy {
  width: 33%;
  display: flex;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
}

.blow-cow-pussy-img {
  font-size: 60px;
  text-shadow: 0 0 2px aqua;
}

.blow-cow-pussy-content {
  margin-left: 20px;
  display: flex;
  flex-flow: column;
  height: 70px;
}
.blow-cow-pussy-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
}
.blow-cow-pussy-text {
  font-size: 14px;
  max-width: 310px;
}
</style>