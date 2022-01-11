for (let i = 0; i <= 100; i++) {
    if(i % 3 === 0) {
        console.log("Tic");
    } else if(i % 5 === 0) {
        console.log("Tac");
    } else if(i % 15 === 0) {
        console.log("TicTac");
    } else {
        console.log(i);
    }
}

