const fibonacci = function (times) {
  if (parseInt(times) == 0) {
    return 0;
  } else if (parseInt(times) == 1 || parseInt(times) == 2) {
    return 1;
  } else if (parseInt(times) < 0) {
    return "OOPS";
  }
  let prev = 1;
  let current = 1;
  for (let i = 0; i < parseInt(times) - 2; i++) {
    let mediator = current;
    current += prev;
    prev = mediator;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
