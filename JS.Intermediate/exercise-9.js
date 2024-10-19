function isSubstring(str1, str2){
    if (typeof str1 != "string" || typeof str2 != "string") throw new Error("Inputs should 'String' data types!");

    let str, subStr;
    if (str1.length < str2.length){
        str = str2;
        subStr = str1;
    } else {
        str = str1;
        subStr= str2;
    }

    for (var i = 0; i < str.length; i++){
        if (str.length - i < subStr.length) return false;
        if (str[i] == subStr[0]){
            let poss = true;
            for (var j = 0; j < subStr.length; j++){
                if(subStr[j] != str[i + j]){
                    poss = false;
                    break;
                }
            }
            if (poss) return true;
        }
    }

    return false;
}

let s1 = "abcdefg", s2 = "efg";
try{
    if (isSubstring(s1, s2)) console.log("There exists substring!");
    else console.log("There is no substring!");
} catch(error){
    console.error(error.message);
}

s2 = "k";
try{
    if (isSubstring(s1, s2)) console.log("There exists substring!");
    else console.log("There is no substring!");
} catch(error){
    console.error(error.message);
}

s1 = "1582932656";
s2 = '3'
try{
    if (isSubstring(s1, s2)) console.log("There exists substring!");
    else console.log("There is no substring!");
} catch(error){
    console.error(error.message);
}

s2 = 3;
try{
    if (isSubstring(s1, s2)) console.log("There exists substring!");
    else console.log("There is no substring!");
} catch(error){
    console.error(error.message);
}