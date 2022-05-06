var values = [1,4,7,9,11];
var steps = 0;

//binary search

function search(value) {
    let start, end;
    let mid;
    start = 0;
    end = values.length - 1;
    while(start < end) {
        mid = parseInt((start + end)/2);
        // console.log(mid);
        steps++;
        if(value === values[mid]){
            return mid;
        }
        else {
            if(value > values[mid]){
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

//sequencial search

// function search(value) {
//     for(i=0; i < values.length; i++) {
//         steps++;
//         if(value === values[i]){
//             return i;
//         }
//     }
//     return -1;
// }

function findValue(value) {
    let answer = search(value);
    if(answer != -1) {
        console.log("The value was found on position " + answer + " - " + steps + " steps needed.");
        steps = 0;
    }
    else {
        console.log("The value wasn't found - " + steps + " steps needed.");
        steps = 0;
    }
}

//---------------SEARCH--------------//
findValue(1);
findValue(5);
findValue(7);