var values = [4,1,5,2,6,8,7];

function ordenate() {
    let start = 0;
    let end = values.length;
    let tmp;

    for(i = start; i < end; i++) {
        for(j = start; j < i; j++) {
            if(values[j] > values[j + 1]) {
                tmp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = tmp;
            }
        }
    }
}

//--------ORDENATION-----------//

ordenate();
console.log("Vetor ordenado...");
console.log(values);