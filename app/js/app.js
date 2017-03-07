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
	map3d.setLeftClick (function(click){
		alert('MouseLeftClick');
	});

	var map2d = new Map2d('leafletContainer');

	//判断是否在二维地图上
	//
	//开始移动
	var is2dActive= true;
	map2d.setMouserEnter(function(e){
		is2dActive = true;
	})
	//结束移动
	map2d.setMouserOut(function(e){
		is2dActive = false;
	})

	// 中心点变动
	map2d.setMove(function(e){
		// 如果二维是激活状态，就同步三维的位置，否则直接返回
		if (!is2dActive) {
			return;
		}
		var center2d = map2d.getCenter();
		var level = map2d.getZoom();
		var height = map2d.getCurHeight();
		map3d.flyTo(center2d,height);
	})

	map3d.setMove(function(){
		if (is2dActive) {
			return;
		}
	})










})