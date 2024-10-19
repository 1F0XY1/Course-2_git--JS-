function countVowels(str){
    if (typeof str != "string") throw new Error("Input string!");
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    var cnt = 0;
    for (var i = 0; i < str.length; i++) if (vowels.has(str[i])) cnt++;
    return cnt;
}

try{
    console.log(countVowels("abicmskec"));
} catch(error){
    console.error(error.message);
}

try{
    console.log(countVowels("bdklmn"));
} catch(error){
    console.error(error.message);
}

try{
    var a = 6;
    console.log(countVowels(a));
} catch(error){
    console.error(error.message);
}