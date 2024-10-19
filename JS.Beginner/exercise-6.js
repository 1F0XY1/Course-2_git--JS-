function isPalindrome(str){
    if (typeof str != "string") throw new Error("Input string!");
    var l = 0, r = str.length - 1;
    while (l < r) {
        if (str[l] != str[r]) return false;
        l++;
        r--;
    }
    return true;
}


try{
    console.log(isPalindrome("abs"));
} catch(error){
    console.error(error.message);
}

try{
    console.log(isPalindrome("abdba"));
} catch(error){
    console.error(error.message);
}

try{
    console.log(isPalindrome(45));
} catch(error){
    console.error(error.message);
}