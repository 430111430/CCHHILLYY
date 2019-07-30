<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  body{
    margin: 0;
    color: white;
    background: #222;
    font-family: 'Segoe UI', 'Helvetica', Tahoma, Geneva, Verdana, 'Microsoft Yahei', PingFangSC-Regular, 'Source Han Sans SC', sans-serif;
  }

  #app{
    position: absolute;
    height: 100%;
    width: 100%;
    min-height: 920px;
  }

  div{
    cursor: default;
  }
</style>
