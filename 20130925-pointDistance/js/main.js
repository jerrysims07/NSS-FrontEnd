var points = [];
var x;
var y;


// initiate a loop that will perform twice
for(var i=0;i < 2; i++)
{
  // create a new point object
  var point = {};
  // get x-value for point
  x=parseInt(prompt('Enter x value for point #'+ parseInt(i+1) + ":"));
  // get y-value for point
  y=parseInt(prompt('Enter y value for point #'+ parseInt(i+1) + ":"));

  // assign x-and-y-values to the object in the proper array position
  point.x=x;
  point.y=y;

  points.push(point);
}

// calculate the distance between those points
// get difference of x's
var a = (points[0].x - points[1].x);

// get difference of y's
var b = (points[0].y - points[1].y);

// a^2 = difference of x's squared
// b^2 = difference of y's squared
// get c^2 = a^2 + b^2
var cSquared = Math.pow(a,2)+Math.pow(b,2);

// get squareroot of c^2. This is your distance.
distance = Math.sqrt(cSquared);

console.log('The distance between these points is ' +distance.toFixed(2) +'.');