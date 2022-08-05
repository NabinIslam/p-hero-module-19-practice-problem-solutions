function make_avg(arr, len) {
  var sum = 0;
  for (var i = 0; i < len; i++) {
    sum += arr[i];
  }
  return sum / len;
}

var array = [12, 10, 9];
var size = array.length;

console.log(make_avg(array, size));
