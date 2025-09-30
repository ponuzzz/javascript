


for (let i = 0; i < 5; i++) {
    let row = '';

    // Add spaces
    for (let s = 0; s < 5 - i - 1; s++) {
        row += ' ';
    }

    
    for (let j = 0; j < 2 * i + 1; j++) {
        row += '*';
    }

    console.log(row);
}
