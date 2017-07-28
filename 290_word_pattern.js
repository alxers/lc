var wordPattern = function(pattern, str) {    
    let pat = pattern.split('');
    let s = str.split(' ');
    if (pat.length !== s.length) {
        return false;
    }
    let obj = {};
    // Make a dictionary {a: dog, b: cat}
    
    for (let index = 0; index < pat.length ;index++) {
        let el = pat[index];
        if (!obj[el]) {
            obj[el] = s[index];
        } else if (obj[el] !== s[index]) {
            return false;
        }
    }
    
    // If there are keys with the same values ( {a: cat, b:cat}) then it doesn't match pattern
    return !Object.values(obj).filter((val, index, arr)=> arr.indexOf(val) !== index)[0];
};
