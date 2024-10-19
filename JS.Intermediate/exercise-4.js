function countEachWord(str){
    if (typeof str != "string") throw new Error("Input must be a string!");

    let myMap = new Map();
    let s = "";
    for(var i = 0; i < str.length; i++){
        if (str[i] ==  ' ' || str[i] == '.' || str[i] == ',' || str[i] == '!' || str[i] == '?'){
            if (s.length > 0 && myMap.has(s)) myMap.set(s, myMap.get(s) + 1);
            else if (s.length > 0) myMap.set(s, 1);
            s = "";
            continue;
        } 
        s += str[i]
    }
    if (s.length > 0 && myMap.has(s)) myMap.set(s, myMap.get(s) + 1);
    else if (s.length > 0) myMap.set(s, 1);
    
    return myMap;
}

let str = "The cool breeze, the cool breeze?"

try{
    console.log(countEachWord(str));
} catch(error){
    console.error(error.message);
}

str = 2;
try{
    console.log(countEachWord(str));
} catch(error){
    console.error(error.message);
}