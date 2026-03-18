
function timesTwo(a) {
  return a * 2;
}
module.exports = timesTwo;

function timesTwo(n) {
 
  if (typeof n !== "number" || Number.isNaN(n)) {
    throw new Error("Input must be a number");
  }

  return n * 2;
}

module.exports = timesTwo;