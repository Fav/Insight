require.config({
    baseUrl: "/app",
    paths: {
        jquery: "lib/jquery/dist/jquery.min",
        leaflet: "lib/leaflet/leaflet",
        cesium: "lib/Cesium/Cesium",
        map2d: "js/map/map2d",
        map3d: "js/map/map3d",
        config: 'js/config',
        util: "js/util",
        ribbon: "lib/dhtmlxRibbon/codebase/dhtmlxribbon"
    },
    shim: {
        ribbon: {　 exports: 'ribbon' }
    }
})

require([
    'jquery', 'map2d', 'map3d', 'config', 'util', 'ribbon'
], function($, Map2d, Map3d, config, util, ribbon) {
    $(function() {
        var myRibbon = new dhtmlXRibbon(config.menu);
    });

    var map3d = new Map3d('cesiumContainer');
    map3d.init(config.homeposition);

    var map2d = new Map2d('leafletContainer', config.homeposition);

    //判断是否在二维地图上
    //
    //开始移动
    var is2dActive = true;
    map2d.setMouserEnter(function(e) {
            is2dActive = true;
        })
        //结束移动
    map2d.setMouserOut(function(e) {
        is2dActive = false;
    })

    // 中心点变动
    map2d.setMove(function(e) {
        var center2d = map2d.getCenter();
        //显示经纬度
        $('#info2d').text("精度:" + center2d.lat.toFixed(6) + " , 纬度:" + center2d.lng.toFixed(6));

        // 如果二维是激活状态，就同步三维的位置，否则直接返回
        if (!is2dActive) {
            return;
        }

        var level = map2d.getZoom();
        var height = map2d.getCurHeight();
        map3d.flyTo(center2d, height);
    })

    map3d.setMove(function() {
        if (is2dActive) {
            return;
        }

        var center3d = map3d.getCenter();
        map2d.panTo(center3d);

        /* 用三维球的显示范围，同步二维的显示范围，计算不准确，暂时不用
        var rect3d = map3d.getCurExtent();

        //显示经纬度
        // $('#info3d').text("精度:" + center3d.x.toFixed(6) + " , 纬度:" + center3d.y.toFixed(6));
        //如果范围左上角右下角同时为0,就将二维定位到最高等级
        var zero = { x: 0, y: 0, z: 0 };
        if (util.comparePoint3(rect3d.northeast, zero) && util.comparePoint3(rect3d.southwest, zero)) {
            var center3d = map3d.getCenter();
            map2d.panToMax(center3d);
        } else {
            map2d.flyToRect(rect3d);
        }
        */
    })










})