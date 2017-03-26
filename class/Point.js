var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (point) {
        this.x += point.x;
        this.y += point.y;
    };
    Point.prototype.print = function () {
        return "x : " + this.x + ", y : " + this.y;
    };
    return Point;
}());
// Point3D
var Point3D = (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.move = function (point) {
        _super.prototype.move.call(this, point);
        this.z += point.z;
    };
    Point3D.prototype.print = function () {
        return "x : " + this.x + ", y : " + this.y + ", z : " + this.z;
    };
    return Point3D;
}(Point));
//# sourceMappingURL=Point.js.map