function reverse(str){
    if (typeof str != "string") throw new Error("Input \"String\" data type!");
    let res = "";
    for (var i = str.length - 1; i >= 0; i--) res += str[i];
    return res;
}

try{
    console.log(reverse("abc"));
} catch (error){
    console.error(error.message);
}

try{
    console.log(reverse(46));
} catch (error){
    console.error(error.message);
}
