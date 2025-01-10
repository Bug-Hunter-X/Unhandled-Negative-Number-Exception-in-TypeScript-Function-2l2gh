function printNumber(num: number): void {
  if (num < 0) {
    throw new RangeError('Number must be non-negative');
  }
  console.log(num);
}

try {
  printNumber(-5); // Throws a RangeError
} catch (error) {
  if (error instanceof RangeError) {
    console.error('RangeError caught:', error.message);
  } else {
    console.error('An unexpected error occurred:', error);
  }
}

printNumber(5); // Prints 5