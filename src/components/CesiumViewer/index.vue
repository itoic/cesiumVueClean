<!--
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lqc
 * @Date: 2020-05-28 15:36:25
 * @LastEditors: lqc
 * @LastEditTime: 2020-06-01 13:58:50
 * @FilePath: \cesiumVueClean\src\components\CesiumViewer\index.vue
-->
<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
import { Viewer, UrlTemplateImageryProvider } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

export default {
  mounted() {
    this.initViewer()
  },
  methods: {
    initViewer() {
      const viewer = new Viewer('cesiumContainer', {
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        timeline: false,
        animation: false,
        imageryProvider: googleMapProvider
      })
      viewer._cesiumWidget._creditContainer.style.display = 'none'
      viewer.scene.globe.showGroundAtmosphere = false

      let googleMapProvider = new UrlTemplateImageryProvider({
        url: 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali'
      })
    }
  }
}
</script>

<style scoped>
#cesiumContainer {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
