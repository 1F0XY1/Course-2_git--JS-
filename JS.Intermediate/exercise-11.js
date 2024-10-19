function capitalizeEachWord(str){
    if (typeof str != "string") throw new Error ("Input must be 'string' data type!");
    let res = "", cnt = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] == ' ') cnt = 0;
        console.log(cnt);
        if (cnt == 0 && str[i] != ' ') {
            res += str[i].toUpperCase();
            cnt++;
            continue;
        } 
        res += str[i];
    }

    return res;
}

let s = "hey, how are you doing?"
try{
    console.log(capitalizeEachWord(s));
} catch(error){
    console.error(error.message);
}

try{
    console.log(capitalizeEachWord(3245));
} catch(error){
    console.error(error.message);
}