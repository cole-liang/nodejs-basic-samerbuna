let count = 0;

const greeting = delay => {
  const intervalId = setInterval(() => {
    console.log("Hello World. " + delay);
    count += 1;
    if (count === 5) {
      clearInterval(intervalId);
      count = 0;
      greeting(delay + 100);
    }
  }, delay);
};

greeting(100);
