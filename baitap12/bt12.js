// bai 1

// delay function

function delay(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
};

// fetchData function

function fetchData(value){
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(value * 2);
        }, 1000)
    })

}

// performTask function 

async function performTask(){
    try {
        const task1 = fetchData(10);
        const task2 = fetchData(20);

        const result1 = await task1;
        console.log(result1);

        await delay(2000)

        const result2 = await task2;
        console.log(result2)

        console.log("All tasks competed")
    } catch(error){
        console.log(error)
    }
}

performTask();