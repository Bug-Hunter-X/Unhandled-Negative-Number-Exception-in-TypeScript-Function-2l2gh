function printNumber(num: number): void {
  if (num < 0) {
    throw new Error('Number must be non-negative');
  }
  console.log(num);
}

printNumber(-5); // Throws an error
printNumber(5); // Prints 5