type Constructor<T = {}> = new (...args: any[]) => T;
type ShapeConstructor = Constructor<{ a: number; b: number; c: number }>;

class SurfaceArea  {
  calculateArea() {
    console.log("method1");
  }
}

function SurfaceAreaMixin<T extends Constructor>(Base: T) {
  Object.getOwnPropertyNames(SurfaceArea.prototype).forEach((name) => {
    Object.defineProperty(
      Base.prototype,
      name,
      Object.getOwnPropertyDescriptor(SurfaceArea.prototype, name) ||
        Object.create(null)
    );
  });
  return Base;
}

function Volume<T extends ShapeConstructor>(Base: T) {
  return class Volume extends Base {
    calculateVolume() {
      console.log("method2", this.a, this.b, this.c);
    }
  };
}

class Shape {
  a: number = 10;
  b: number = 10;
  c: number = 10;
}

class Square extends SurfaceAreaMixin(Volume(Shape)) {}

const sq = new Square();
