function jsonValueKey(str, key) {
    let obj = JSON.parse(str);
    return obj[key];
}