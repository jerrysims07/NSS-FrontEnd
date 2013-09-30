function square(x)
{
  return x*x;
}

function cube(x)
{
  return square(x)*x;
}

function areaRectangle(width, height)
{
  return width * height;
}

function areaSquare(side)
{
  return square(side);
}

function areaTriangle(width,height)
{
  return areaRectangle(width, height) / 2;
}

function area_circle(radius)
{
  return Math.PI * radius * radius;
}

function cubicFeetToGallons(cubicFeet)
{
  return (7.48052) * cubicFeet;
}

function volumeCylinder(radius, depth)
{
  return area_circle(radius)*depth;
}

var diameter=30;
var depth=9;

var gallons = cubicFeetToGallons(volumeCylinder(diameter/2,depth));
console.log("You have " + gallons + " gallons of water in your pool.");