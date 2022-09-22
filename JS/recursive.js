// Factorial Solution Using Recursive and Iterative
function recursiveSolution(n) {
  if (n == 1) {
    return n;
  } else {
    return n * recursiveSolution(n - 1);
  }
}

function recursive(n) {
  console.time("recursive");
  const result = recursiveSolution(n);
  console.timeEnd("recursive");
  return result;
}

function iterativeSolution(n) {
  console.time("iterative");
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  console.timeEnd("iterative");
  return result;
}

console.log(recursive(50));
console.log(iterativeSolution(50));
