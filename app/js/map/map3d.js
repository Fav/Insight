define(['cesium'],function(cesium){
	var viewer = null;
	var canvas = null;
	var handler= null;
	function Map3d(ele){
		viewer = new Cesium.Viewer(ele,{
			animation:false,
			vrButton:false,
			baseLayerPicker:false,
			cerditContainer:false,
			geocoder:false,
			homeButton:false,
			timeline:false,
			fullscreenButton:false,
			sceneModePicker:false,
			navigationHelpButton:false,
		    imageryProvider : Cesium.createOpenStreetMapImageryProvider({
		        url : 'https://a.tile.openstreetmap.org/'
		    })
		});

	};

	Map3d.prototype.init=function(){
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

		canvas = viewer.canvas;
		handler = new Cesium.ScreenSpaceEventHandler(canvas);
		// viewer.screenSpaceEventHandler.setInputAction(MouseLeftClick,Cesium.ScreenSpaceEventType.LEFT_CLICK );
	}
	// var MouseLeftClick = function(){alert(1)}

	Map3d.prototype.setMLC=function(fn){
		handler.setInputAction(fn,Cesium.ScreenSpaceEventType.LEFT_CLICK);
	}




	return Map3d;
})