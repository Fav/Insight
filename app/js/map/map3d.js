define(['cesium'],function(cesium){
	var viewer = null;
	function Map3d(ele){
		viewer = new Cesium.Viewer(ele,{
			animation:false,
			vrButton:false,
			baseLayerPicker:false,
			cerditContainer:false,
			geocoder:false,
			homeButton:false,
			timeline:false,
			fullscreeButton:false,
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
	}
	

	return Map3d;
})