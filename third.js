var personName = "hAdI Mughal";
// Upper Case
var upperCase = personName.toUpperCase();
console.log("UpperCase name:" + upperCase);
// LowerCase
var LowerCase = personName.toLowerCase();
console.log("LowerCase name:" + LowerCase);
// titleCase
function toTitleCase(name) {
    return name.toLocaleLowerCase().replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
;
var titlecase = toTitleCase(personName);
console.log("TitleCase name:" + titlecase);
