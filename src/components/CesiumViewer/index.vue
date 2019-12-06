<template>
  <div class="hello">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script> 
export default {
  name: "CesiumViewer", 
  mounted() {
    // var viewer = new Cesium.CesiumWidget('cesiumContainer')
    var viewer = new Cesium.Viewer("cesiumContainer");
  }
};
</script> 