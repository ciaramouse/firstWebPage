
const triangle = (a, b, c) => {
  let s = a + b + c / 2
  let x = s * (s - a) * (s - b) * (s - c)
  return Math.sqrt(x)
}


//Write a JavaScript program to find the area of a triangle when you're given it's 3 sides
//x = s(s - a)(s - b)(s - c)
//Math.sqrt(x)= fórmula raiz cuadrada//