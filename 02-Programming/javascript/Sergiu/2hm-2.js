//A function that returns always true:

function alwaysTrue () {
    return true ;
}

// 2) write a function that gets true or false, checks if really got true/false, then returns the opposite. else - return null

function trueOrFalse(value){
    return typeof value =='bulean'

    if (typeof value =='boolean') {
        return !value;
    
    return null;
}
}
//// 3) write a sum function: gets two numbers, check if two of them are really numbers, if so - return the sum of the numbers, else - return null
function sumNumbers(a, b){
    if (typeof a === 'number' && typeof b ==='number'){
        return a+b;}
        else{
            return null
        }
}

