require.config({
	baseUrl:"/app",
	paths:{
		jquery:"lib/jquery/dist/jquery.min",
		leaflet:"lib/leaflet/leaflet",
		cesium:"lib/Cesium/Cesium",
		map2d:"js/map/map2d",
		map3d:"js/map/map3d"
	}
})

require(['jquery','map2d','map3d'],function($,Map2d,Map3d){
	var map3d = new Map3d('cesiumContainer');
	map3d.init();

	var map2d = new Map2d('leafletContainer');
})