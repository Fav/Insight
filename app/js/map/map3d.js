define(['cesium'], function(cesium) {
    var viewer = null;
    var canvas = null;
    var handler = null;
    var camera = null;
    var scene = null;

    function Map3d(ele) {
        viewer = new Cesium.Viewer(ele, {
            animation: false,
            vrButton: false,
            baseLayerPicker: false,
            cerditContainer: false,
            geocoder: false,
            homeButton: false,
            timeline: false,
            fullscreenButton: false,
            sceneModePicker: false,
            navigationHelpButton: false,
            imageryProvider: Cesium.createOpenStreetMapImageryProvider({
                url: 'https://a.tile.openstreetmap.org/'
            })
        });
        viewer._cesiumWidget._creditContainer.style.display = "none";
        scene = viewer.scene;
        camera = scene.camera;
    };

    Map3d.prototype.init = function() {
        var initPt = Cesium.Cartesian3.fromDegrees(114.305230, 30.592747, 10000);
        camera.setView({
            position: initPt
        });
        camera.flyTo({
            destination: initPt,
            duration: 0
        });

        canvas = viewer.canvas;
        handler = new Cesium.ScreenSpaceEventHandler(canvas);
    }

    //鼠标事件
    Map3d.prototype.setLeftClick = function(fn) {
        handler.setInputAction(fn, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
    Map3d.prototype.setLeftDrag = function(fn) {
        handler.setInputAction(fn, Cesium.CameraEventType.LEFT_DRAG);
    }

    //公共函数
    Map3d.prototype.flyTo = function(point, height) {
        camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(point.lng, point.lat, height),
            duration: 0
        });
    }

    Map3d.prototype.setMove = function(fn) {
        camera.moving.addEventListener(fn);
    }

    Map3d.prototype.getCenter = function() {
        return getLonLatFromWindow({
            x: scene.drawingBufferWidth / 2,
            y: scene.drawingBufferHeight / 2
        });
    }

    Map3d.prototype.getCurExtent = function() {
        return {
            northeast: getLonLatFromWindow({
                x: 0,
                y: 0
            }),
            southwest: getLonLatFromWindow({
                x: scene.drawingBufferWidth,
                y: scene.drawingBufferHeight
            })
        }
    }

    Map3d.prototype.getCurHeight = function() {
        return getCurHeight();
    }

    function getCurHeight() {
        return viewer.camera.positionCartographic.height;
    }

    function getLonLatFromWindow(winpt) {
        var pt = new Cesium.Cartesian2(winpt.x, winpt.y);
        var pick = viewer.scene.globe.pick(viewer.camera.getPickRay(pt), viewer.scene);
        if (!pick) {
            return { x: 0, y: 0, z: 0 };
        }
        //将三维坐标转成地理坐标
        var geoPt = viewer.scene.globe.ellipsoid.cartesianToCartographic(pick);
        //地理坐标转换为经纬度坐标
        return { x: geoPt.longitude / Math.PI * 180, y: geoPt.latitude / Math.PI * 180, z: getCurHeight() };
    }

    return Map3d;
})