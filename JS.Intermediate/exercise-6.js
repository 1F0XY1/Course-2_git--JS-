function isAnagram(str1, str2){
    if (typeof str1 != "string" && typeof str2 != "string") throw new Error("Both inputs should be a string");

    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    if (str1 == str2) return true;
    return false;
}

let s1 = "abc", s2 = "acb";
try{
    if (isAnagram(s1, s2)) console.log("They are anagrams!");
    else console.log("They are not anagrams!");
} catch(error){
    console.error(error.message);
}

s1 = "abc", s2 = "acc";
try{
    if (isAnagram(s1, s2)) console.log("They are anagrams!");
    else console.log("They are not anagrams!");
} catch(error){
    console.error(error.message);
}

s2 = 34;
try{
    if (isAnagram(s1, s2)) console.log("They are anagrams!");
    else console.log("They are not anagrams!");
} catch(error){
    console.error(error.message);
}