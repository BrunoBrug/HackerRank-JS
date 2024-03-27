function camelcase(s) {
    if(s.length >= 1 && s.length <= 1000000){
        return s.split(/(?=[A-Z])/).length;
    }
}

console.log(camelcase("saveChangesInTheEditor"))