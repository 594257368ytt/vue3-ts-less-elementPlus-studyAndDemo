<template>
  <div class="question6">
    <h1>画不同颜色的点</h1>
    <div id="map"></div>
    <div id="map2"></div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, toRef, ref, onMounted } from 'vue'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'Question6',
  props: {
    msg: String
  },
  setup() {
    const data = reactive({
      acceptArr: [
        {startLat: 51.505, startLng: -0.09},
        {startLat: 51.510, startLng: -0.09},
        {startLat: 51.511, startLng: -0.03}
      ],
      bevArr:[
        {startLat: 51.505, startLng: -0.09},
        {startLat: 51.506, startLng: -0.10},
        {startLat: 51.509, startLng: -0.08},
      ],
      mergeArr:[]
    })
    const methods = {
      drawPoint(map, color, startLat, startLng){
        let _bevMarker
        _bevMarker = L.circleMarker([startLat, startLng],{ 
          radius: 10,
          color,
        }).addTo(map);
      },
      // 两个分别用不同的_bevMarker绘制
      a(){
        var map = L.map('map').setView([51.505, -0.09], 13);
        // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     maxZoom: 19,
        //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        // }).addTo(map);
        data.acceptArr.forEach((item, index) => {
          methods.drawPoint(map, 'yellow', item.startLat, item.startLng)
        })
        data.bevArr.forEach((item, index) => {
          methods.drawPoint(map, 'green', item.startLat, item.startLng)
        })
      },
      // 两个数组合并并去重
      b(){
        var map2 = L.map('map2').setView([51.505, -0.09], 13);
        // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //     maxZoom: 19,
        //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        // }).addTo(map2);
        let findIt = false
        let findItem = {}
        data.bevArr.forEach((item, index) => {
          data.mergeArr.forEach((item2 ,index2)=>{
            if(item.startLat == item2.startLat && item.startLng == item2.startLng){
              findIt = true
            }
          })
          if(findIt == false){
            data.mergeArr.push({...item, color:'green'})
          }else{
            findIt = false
          }
        })
        findIt = false
        findItem = {}
        data.acceptArr.forEach((item, index) => {
          data.mergeArr.forEach((item2 ,index2)=>{
            if(item.startLat == item2.startLat && item.startLng == item2.startLng){
              findIt = true
            }
          })
          if(findIt == false){
            data.mergeArr.push({...item, color:'yellow'})
          }else{
            findIt = false
          }
        })
        data.mergeArr.forEach((item)=>{
          methods.drawPoint(map2, item.color, item.startLat, item.startLng)
        })
      }
    }
    onMounted(()=>{
      methods.a()
      methods.b()
    })
    return {
      ...toRefs(data),
      ...toRefs(methods),
    }
  }
}
</script>

<style scoped lang="less">
.question6{
  // min-width: 1500px;
}
#map, #map2{
  height: 300px;
  width: 700px;
}
#map2{
  margin-top: 10px;
}
</style>
