<template>
  <div id="container" component-details-item>
    <div class="details-item-table-panel details-item-panel">
      <div>
        <div class="details-item-table-title">{{item.name}}</div>
        <el-table class="details-item-table" :data="item.data" style="width: 100%">
          <el-table-column prop="name"></el-table-column>
          <el-table-column prop="value"></el-table-column>
        </el-table>
      </div>
    </div>

    <div class="details-item-chart-panel details-item-panel">
      <div class="details-item-chart" v-bind:id="chartAId"></div>
    </div>

    <div class="details-item-chart-panel details-item-panel">
      <div class="details-item-chart" v-bind:id="chartBId"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import echarts from "echarts";

@Component({
  components: {}
})
export default class DetailsItem extends Vue {
  @Prop(Object)
  public item: any;

  public chartAId = `chart-id-${new Date().getTime() % 100}-${Math.random()}`;
  public chartBId = `chart-id-${new Date().getTime() % 100}-${Math.random()}`;

  mounted() {
    this.drawChartA();
    this.drawChartB();
  }

  drawChartA() {
    const chart = document.getElementById(this.chartAId) as any;
    const myChart = echarts.init(chart);
    myChart.setOption({
      title: {},
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["系列1", "系列2", "系列3", "系列4", "系列5"],
        textStyle: {
          color: "#fff"
        },
      },
      textStyle: {
        color: "#fff"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["类别1", "类别2", "类别3", "类别4", "类别5"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "系列1",
          type: "line",
          data: [120, 132, 101, 134, 90]
        },
        {
          name: "系列2",
          type: "line",
          data: [220, 182, 191, 234, 90]
        },
        {
          name: "系列3",
          type: "line",
          data: [2, 232, 201, 154, 190]
        },
        {
          name: "系列4",
          type: "line",
          data: [320, 332, 301, 334, 390]
        },
        {
          name: "系列5",
          type: "line",
          data: [100, 150, 200, 250, 300]
        }
      ]
    } as any);
  }

  drawChartB() {
    const chart = document.getElementById(this.chartBId) as any;
    const myChart = echarts.init(chart);
    myChart.setOption({
      title: {},
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["系列1", "系列2", "系列3", "系列4", "系列5"],
        textStyle: {
          color: "#fff"
        },
      },
      textStyle: {
        color: "#fff"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["类别1", "类别2", "类别3", "类别4", "类别5"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "系列1",
          type: "line",
          data: [120, 132, 101, 134, 90]
        },
        {
          name: "系列2",
          type: "line",
          data: [220, 182, 191, 234, 90]
        },
        {
          name: "系列3",
          type: "line",
          data: [2, 232, 201, 154, 190]
        },
        {
          name: "系列4",
          type: "line",
          data: [320, 332, 301, 334, 390]
        },
        {
          name: "系列5",
          type: "line",
          data: [100, 150, 200, 250, 300]
        }
      ]
    } as any);
  }
}
</script>

<style>
#container[component-details-item] {
  width: 100%;
  display: flex;
  margin-bottom: 110px;
}

#container[component-details-item]:last-child {
  margin-bottom: unset;
}

.details-item-panel {
  flex-grow: 1;
  width: 0;
  padding-left: 55px;
  padding-right: 55px;
}

.details-item-chart {
  width: 100%;
  height: 320px;
}

.details-item-table-panel > div > .el-table > .el-table__header-wrapper {
  display: none;
}

.details-item-table-panel > div {
  position: relative;
  top: 50%;
  margin-top: -80px;
}

.details-item-table-title {
  font-size: 17px;
  background-color: rgba(22, 63, 127, 1);
  color: white;
  line-height: 35px;
  padding-left: 10px;
}
</style>