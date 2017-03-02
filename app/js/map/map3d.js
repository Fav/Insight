require.config({
	paths:{
		cesium:"../../lib/Cesium/Cesium",
		jquery:"../../lib/jquery/dist/jquery.min"
	}
});

require(['jquery','cesium'],function($,csum){
	var viewer = new Cesium.Viewer('cesiumContainer',{
		animation:false,
		baseLayerPicker:false,
		cerditContainer:false,
		geocoder:false,
		homeButton:false,
		timeline:false,
		fullscreeButton:false,
		vrButton:false,
		sceneModePicker:false,
		navigationHelpButton:false,
	    imageryProvider : Cesium.createOpenStreetMapImageryProvider({
	        url : 'https://a.tile.openstreetmap.org/'
	    })
	});
	viewer._cesiumWidget._creditContainer.style.display = "none";
	var camera = viewer.scene.camera;
	var initPt = Cesium.Cartesian3.fromDegrees(114.305230,30.592747,10000);
	camera.setView({
		position:initPt
	});
	camera.flyTo({
		destination:initPt,
		duration:0
	});

})
