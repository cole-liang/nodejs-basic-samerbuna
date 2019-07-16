function func(sec){
    console.log(`Hello after ${sec} seconds`);
}

setTimeout(func, 4 * 1000, 4);
setTimeout(func, 8 * 1000, 8);

