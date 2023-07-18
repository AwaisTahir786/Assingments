let personName: string = "hAdI Mughal";

// Upper Case
let upperCase = personName.toUpperCase();
console.log("UpperCase name:" +upperCase);

// LowerCase
let LowerCase = personName.toLowerCase();
console.log("LowerCase name:" +LowerCase);

// titleCase

function toTitleCase(name:string):string {
    return name.toLocaleLowerCase().replace(/(?:^|\s)\w/g,function(match){
       return match.toUpperCase();
    });
};

let titlecase= toTitleCase(personName);
console.log("TitleCase name:" + titlecase);