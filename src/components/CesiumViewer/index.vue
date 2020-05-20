<!--
 * @Author: your name
 * @Date: 2019-12-06 10:13:54
 * @LastEditTime: 2020-05-20 09:45:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cesiumVueClean\src\components\CesiumViewer\index.vue
--> 
<template>
  <div class="hello">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
export default {
  name: "CesiumViewer",
  data(){
    return{
      viewer:null
    }
  },
  mounted() {
     this.viewer = new this.Cesium.Viewer("cesiumContainer");  
  }
};
</script> 