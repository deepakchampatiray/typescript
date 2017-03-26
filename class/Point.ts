class Point {
  x : number;
  y : number;

  constructor(x: number, y:number) {
    this.x = x;
    this.y = y;
  }
  move(point: Point) {
    this.x += point.x;
    this.y += point.y;
  }
  print() {
    return "x : " + this.x + ", y : " + this.y;
  }
}

class Point3D extends Point{
  z: number;

  constructor(x: number, y:number, z:number) {
    super(x, y);
    this.z = z;
  }
  move(point: Point3D) {
    super.move(point);
    this.z += point.z;
  }
  print() {
    return "x : " + this.x + ", y : " + this.y + ", z : " + this.z;
  }
}
