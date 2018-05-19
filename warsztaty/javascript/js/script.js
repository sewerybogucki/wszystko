'use strict';

//var elementFirst = document.getElementById("parFirst");
//
//console.log("parFirst");
//
//var elementsTable = document.getElementsByClassName("super link");
//
//console.log("super link");
//
//var allP = document.getElementsByTagName("a")
//
//var idParsecond = document.querySelectorAll("parSecond")
//
//var allLinksclass = document.querySelectorAll(".super link")
//
//var firstLink = document.querySelector(".super link")

//kolory paragrafów

//document.getElementById("przycisk").onclick = ustawTlo;
//
//function ustawTlo() {
//
//    var pElements = document.body.getElementsByTagName("p");
//
//    var myp1 = pElements[0];
//    myp1.style.background = "rgb(255,0,0)";
//
//    var myp2 = pElements[1];
//    myp2.style.background = "rgb(255,255,0)";
//}

//walidacja formularza

//document.getElementById("submitbutton").onclick = function (e) {
//
//    e.preventDefault();
//    var text = document.getElementById("textbox").value;
//    if (text.trim().length > 0) {
//
//    }
//}


//wyrzuc wyniki w logu - zadanie 2

//var submitButton = document.querySelector("input[type=submit]");
//
//submitButton.onclick = function (e) {
//    e.preventDefault();
//    var inputs = e.currentTarget.parentElement.getElementsByTagName("input");
//    console.log(inputs[0].value);
//    console.log(inputs[1].value);
//};


//walidacja formularza zadanie 3 

//for (var i = 0; inputs.length; i++) {
//
//    if (inputs[i].type == "submit") {
//        continue;
//    }
//    console.log(inputs[i].name + ": " + )


var submitButton = document.getElementById("wyslij");

submitButton.onclick = function (e) {
    e.preventDefault();

    validateFormFields();
}

function validateFormFields() {

    var nameTextBox = document.getElementById("name");
    var emailTextBox = document.getElementById("email");


    if nameTextBox.value.trim().length <= 0 {
        var errorMessageElement = document.createElement("p");
        errorMessageElement.style.color = "red";
        errorMessageElement.innerHTML = "Nie wpisano imienia!";
        insertAfter(errorMessageElement, inputElement);
    }
}

function insertAfter(newNode, ReferenceNode) {
    referenceNode.parentNode.insertBefore(newNode, ReferenceNode.nextSibling);
}
