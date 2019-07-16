let count = 0;

const timerId = setInterval(() => {
    console.log('Hello World');

    if(count === 5){
        console.log('Done');
        clearInterval(timerId)
    }

    count += 1;
}, 500)