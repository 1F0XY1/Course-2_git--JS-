function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    let clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

let student = {
    name: "Alice",
    details: { age: 25, hobbies: ["reading", "cycling"] }
};

try {
    let copy = deepClone(student);
    copy.details.age = 30;

    console.log(student.details.age);
    console.log(copy.details.age);
} catch (error) {
    console.error(error.message);
}
