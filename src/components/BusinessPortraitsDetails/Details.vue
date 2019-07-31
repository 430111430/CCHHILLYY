<template>
  <div id="container" component-details>
    <div id="details-select" v-show="showingTag==''">
      <img id="details-select-bg" src="../../assets/details-select.jpg" alt />
      <div id="associate-hot-area" tag="associate" @click="onTagSelected"></div>
      <div id="financial-hot-area" tag="financial" @click="onTagSelected"></div>
      <div id="manage-hot-area" tag="manage" @click="onTagSelected"></div>
      <div id="administration-hot-area" tag="administration" @click="onTagSelected"></div>
      <div id="lawsuit-hot-area" tag="lawsuit" @click="onTagSelected"></div>
    </div>

    <div id="details"  v-show="showingTag!=''">
      <div id="details-tag-panel">
        <div class="details-tag" tag="associate" @click="onTagSelected" v-bind:class="{ active: showingTag=='associate' }">关联风险</div>
        <div class="details-tag" tag="financial" @click="onTagSelected" v-bind:class="{ active: showingTag=='financial' }">财务风险</div>
        <div class="details-tag" tag="manage" @click="onTagSelected" v-bind:class="{ active: showingTag=='manage' }">经营风险</div>
        <div class="details-tag" tag="administration" @click="onTagSelected" v-bind:class="{ active: showingTag=='administration' }">行政风险</div>
        <div class="details-tag" tag="lawsuit" @click="onTagSelected" v-bind:class="{ active: showingTag=='lawsuit' }">诉讼&舆情风险</div>
      </div>
      <img v-show="showingTag=='associate'" class="fake-details" src="../../assets/associate.jpg" alt />
      <img v-show="showingTag=='financial'" class="fake-details" src="../../assets/financial.jpg" alt />
      <img v-show="showingTag=='manage'" class="fake-details" src="../../assets/manage.jpg" alt />
      <img v-show="showingTag=='administration'" class="fake-details" src="../../assets/administration.jpg" alt />
      <img v-show="showingTag=='lawsuit'" class="fake-details" src="../../assets/lawsuit.jpg" alt />
    </div>

    <!-- <div class="details-item">
        <DetailsItem  v-bind:item="data.roe" />
        <DetailsItem  v-bind:item="data.kpi" />
        <DetailsItem  v-bind:item="data.roe" />
        <DetailsItem  v-bind:item="data.kpi" />
    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import DetailsItem from "./DetailsItem.vue"; // @ is an alias to /src

@Component({
  components: {
    DetailsItem
  }
})
export default class Details extends Vue {
  @Prop(Object)
  public data: any;
  public showingTag = "";

  onTagSelected(event: any) {
    this.showingTag = event.target.getAttribute("tag");
  }
}
</script>

<style>
#container[component-details] {
  position: relative;
  width: 100%;
  background: black;
  color: white;
}

#details-select-bg {
  width: 100%;
}

#associate-hot-area {
  width: 16%;
  height: 18%;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 23%;
  left: 11%;
  cursor: pointer;
}

#financial-hot-area {
  width: 16%;
  height: 18%;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 45%;
  left: 11%;
  cursor: pointer;
}

#manage-hot-area {
  width: 16%;
  height: 14%;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 68%;
  left: 11%;
  cursor: pointer;
}

#administration-hot-area {
  width: 16%;
  height: 18%;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 29%;
  left: 75%;
  cursor: pointer;
}

#lawsuit-hot-area {
  width: 19%;
  height: 18%;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 60%;
  left: 73%;
  cursor: pointer;
}

.fake-details {
  width: 100%;
}

#details-tag-panel {
  display: flex;
  margin-top: -5%;
  background-color: rgba(13, 23, 23, 1);
}

.details-tag {
  text-align: center;
  width: 0;
  flex-grow: 1;
  line-height: 60px;
  font-size: 30px;
  cursor: pointer;
  color: #5ebdef;
}
.details-tag.active{
  color: #ffff99;
}
</style>