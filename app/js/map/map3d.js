define(['cesium'],function(cesium){
	var viewer = null;
	var canvas = null;
	var handler= null;
	var camera =null;
	var scene = null;

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
		viewer._cesiumWidget._creditContainer.style.display = "none";
		scene =viewer.scene;
		camera = scene.camera;
	};

	Map3d.prototype.init=function(){
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
	}

	Map3d.prototype.setLeftClick=function(fn){
		handler.setInputAction(fn,Cesium.ScreenSpaceEventType.LEFT_CLICK);
	}

	Map3d.prototype.flyTo=function(point,height){
		camera.flyTo({
			destination:Cesium.Cartesian3.fromDegrees(point.lng,point.lat,height),
			duration:0
		});	
	}

	Map3d.prototype.setMove = function(){

	}
	
	Map3d.prototype.getCurHeight = function(){
		return viewer.camera.positionCartographic.height;
	}

	return Map3d;
})