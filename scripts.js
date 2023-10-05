// display content in webpage

document.getElementById('welcome').innerHTML="Welcome to JavaScript demo";

// display full name using objects 

const human = {
    firstName: "Sara",
    lastName: "Medhat",
    age: 35,
    languages: "arabic",
    fullName: function () {
        return this.firstName + " " + this.lastName + "-" + this.languages;
    }
};
document.getElementById("myName").innerHTML = human.fullName();

// display in console
let x = 3;

if (x == 3) {
    console.log("yes")
}

// display date when click on a button using functions

function dateAndTime() {
    document.getElementById("time").innerHTML = new Date();
}
