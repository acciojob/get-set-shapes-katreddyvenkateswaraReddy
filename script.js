class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // In a square, width and height are the same
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.getWidth(); // Perimeter of a square is 4 times the side
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;