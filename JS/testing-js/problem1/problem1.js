function absolute(number) {
  if (number > 0) {
    return number;
  } else if (number < 0) {
    return -number;
  } else {
    return 0;
  }
}

module.exports = absolute; // Export, diletakkan di bagian paling bawah sebuah file
