
for( let i = 1; i <= 5; i++){
    let row ="";
    for(let k = 1; k <=5-i; k++)
        row += " ";

    for(let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
    

}