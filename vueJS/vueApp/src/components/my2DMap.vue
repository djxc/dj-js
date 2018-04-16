/* eslint-disable */
<template>
  <div>
    <button  v-on:click="addlayer()">添加图层</button>
    <ul>
      <li><a @click="$router.push(links[1].route)">{{links[1].text}}</a></li>
    </ul>
    <div id="viewDiv" class="balt-theme"></div>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader';
var housingLyr;
var map;

export default {
  data() {
    return {
      mapTitle: 'dj',
      links: [
          {
            text: '胡萝卜',
            route: '/home'
          },
          {
            text: '返回',
            route: '/'
          },
          {
            text: '水蜜桃',
            route: '/page02'
          }
        ]
      }
  },
  watch: {
    '$route' (){
    }
  },
  computed: {
    createMap() {
      esriLoader.dojoRequire(["esri/views/MapView",
      "esri/WebMap","esri/Map",
      "esri/layers/StreamLayer",
      "esri/layers/TileLayer",
      "esri/layers/GraphicsLayer",
      "esri/geometry/Polygon",
      "esri/Graphic",
      "esri/widgets/Expand",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "esri/widgets/Search"
      ], (MapView, WebMap, Map, StreamLayer, TileLayer, GraphicsLayer, Polygon, Graphic, Expand, Legend, LayerList, Search) => {
        const webmap = new WebMap({
          portalItem: {
            id: "366874355d1d45219997159d13228826"//this.$route.params.mapID  //获取url中的参数
          }
        });
        housingLyr = new TileLayer({
            url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer",
            id: "ny-housing"
        });
        map = new Map({
            basemap: "streets"
        });
        const view = new MapView({
          map: map, //webmap,
          container: "viewDiv",
          zoom: 4,  // Sets zoom level based on level of detail (LOD)
          center: [15, 65]  // Sets center point of view using longitude,latitude
        });

        view.then (() => {
          this.mapTitle = webmap.portalItem.title;
            const legend = new Legend({
              view: view,
              container: document.createElement("div")
            });
            const layerList = new LayerList({
              view: view,
              container: document.createElement("div")
            });
            const legendExpand = new Expand({
              view: view,
              content: legend.domNode,
              expandIconClass: "esri-icon-collection",
              expandTooltip: "Legend"
            });
            const layersExpand = new Expand({
              view: view,
              content: layerList.domNode,
              expandIconClass: "esri-icon-layer-list",
              expandTooltip: "Layers"
            });
            view.ui.add(layersExpand,"top-right");
            view.ui.add(legendExpand, "top-right");
        });
        const searchWidget = new Search({
          view: view
        });

        view.ui.add(searchWidget, {
          position: "top-left",
          index: 0
        });
      });
    }
  },
  methods:{
      addlayer: function() {
          map.layers.add(housingLyr);
      },
      createMap1:function(){
        esriLoader.dojoRequire(["esri/Map","esri/views/MapView"],(Map,MapView)=>{
          map = new Map({
              basemap: "streets"
          });
          const view = new MapView({
            map: map, //webmap,
            container: "viewDiv",
            zoom: 4,  // Sets zoom level based on level of detail (LOD)
            center: [117, 35]  // Sets center point of view using longitude,latitude
          });
        });
      },

      createMap2:function(){
        esriLoader.dojoRequire(["esri/map"],(Map)=>{
          let map = new Map('viewDiv', {
            center: [-118, 34.5],
            zoom: 8,
            basemap: 'dark-gray'
          });
        });
      }
  },
  mounted() {
    if (!esriLoader.isLoaded()) {
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err);
        }
        this.createMap2();
      },
      {
        url: 'http://localhost:8080/arcgis_js_api3.21/library/3.21/3.21/init.js'//'http://localhost:8080/arcgis_js_api/library/4.3/4.3/init.js'
      });
    } else {
      // this.createMap();
    }
  }
}
</script>
<style>
@import url('http://localhost:8080/arcgis_js_api3.21/library/3.21/3.21/esri/css/esri.css');
/* http://localhost:8080/arcgis_js_api/library/4.3/4.3/esri/themes/dark/main.css');*/
.mapTitle:hover,
.mapTitle.focus {
  color: #9f9f9f;
}

#viewDiv {
  height: calc(100vh - 6.5rem);
  width: 100%;
}

table th {
  color: #fff;
}

.esri-expand__container .esri-widget-button {
  width: 42px;
  height: 42px;
}

form input[type="text"]::-webkit-input-placeholder {
  color: #fff !important;
}

.balt-theme .esri-widget,
.balt-theme .esri-widget-button,
.balt-theme .esri-menu,
.balt-theme .esri-popup__main-container,
.balt-theme .esri-popup .esri-pointer-direction,
.balt-theme .esri-button {
  background-color: #42484f;
  color: #fff;
}

.balt-theme .esri-widget-button:focus,
.balt-theme .esri-widget-button:hover,
.balt-theme .esri-menu li:focus,
.balt-theme .esri-menu li:hover {
  background-color: #000;
  color: #fff;
}

.balt-theme .esri-button:focus,
.balt-theme .esri-button:hover {
  color: #fff;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
ul li:hover {-webkit-transform: scale(1.1); /*1.1放大值*/
              -moz-transform: scale(1.1);
              -o-transform: scale(1.1);
              -ms-transform: scale(1.1);
                /*  本hover用的是：transform属性；scale是属性下放大；*/
             }
a:hover{
  cursor:pointer;
}

</style>
