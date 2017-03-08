define(function() {
    function util() {}
    util.comparePoint3 = function(pt1, pt2) {
        return pt1.x == pt2.x &&
            pt1.y == pt2.y &&
            pt1.z == pt2.z;
    }
    return util;
});