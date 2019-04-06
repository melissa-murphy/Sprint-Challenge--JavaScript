// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(cubeAttr) {
        this.length = cubeAttr.length;
        this.width = cubeAttr.width;
        this.height = cubeAttr.height;
        // console.log(this) // for testing
    }// Methods
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}// CuboidMaker


const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
})// CuboidMaker Template

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(cubeJr) {
        super(cubeJr);
    } // Methods
    volume() {
        return Math.pow(this.length, 3);
    }
    surfaceArea() {
        return 6 * (Math.pow(this.length, 2));
    }
} // Cubemaker

const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
})// CubeMaker Template

console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96