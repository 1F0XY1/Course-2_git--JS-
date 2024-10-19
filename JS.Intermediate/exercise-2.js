function isValidEmail(email) {
    if (typeof email != "string") throw new Error("Input must be a string!");
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
}


try{
    console.log(isValidEmail("asdf@sdf.ro"));
} catch(error){
    console.log(error.message);
}


try{
    console.log(isValidEmail("asdf@sdf.ro"));
} catch(error){
    console.log(error.message);
}

try{
    console.log(isValidEmail("asdfsdf.ro"));
} catch(error){
    console.log(error.message);
}

try{
    console.log(isValidEmail("asdf@sdfro"));
} catch(error){
    console.log(error.message);
}
