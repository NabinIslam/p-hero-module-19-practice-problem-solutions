function make_avg(int1, int2, int3) {
  let sum = int1 + int2 + int3;
  let avarage = sum / 3;
  return avarage;
}

let integer_1 = 12;
let integer_2 = 10;
let integer_3 = 16;

let avarageOfValues = make_avg(integer_1, integer_2, integer_3);

console.log("the avarage of values is", avarageOfValues);
