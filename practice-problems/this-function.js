// Using `this` inside an object
// The object has functions created three different ways 
// What will be the result of the three log statements?

const circle = {
  radius: 10,
  circumference: function () {
      return (2 * Math.PI * this.radius);
  },
  diameter() {
      return (this.radius * 2);
  },
  area: () => {
      return (Math.PI * Math.PI * this.radius);
  }
}
// console.log(circle.area()); // NaN b/c it is out of scope
// console.log(circle.diameter()); // 20
// console.log(circle.circumference()); // 62.83185

// a way we can check is to console.log(this) to see what it is