 'use strict';

 class Ogloszenie {


     constructor(tytul, opis, kategoria, autor, cena) {

         this.tytul = tytul;
         this.opis = opis;
         this.kategoria = kategoria;
         this.autor = autor;
         this.cena = cena;

     }

     pobierzOgloszenie() {

         var ogl = "<h1>" + this.tytul + "<br><small>" + this.autor + "</small></h1>";
         ogl += "<h6>Cena: " + this.cena + "</h6>";

         ogl += "<p>" + this.opis + "</p>";
         ogl += "<p><em>Kategoria: " + this.kategoria + "</em></p>";
         ogl += "<hr>";

         document.body.insertAdjacentHTML("afterbegin", ogl);
     }
 }

 var ogloszenie = new Ogloszenie("Sprzedam Opla", "Niemiec płakał jak sprzedawał. Jeździł tylko w niedziele do Lidla", "Motoryzacja", "Helmut", 3000);


 ogloszenie.pobierzOgloszenie();



 ogloszenie = new Ogloszenie("Sprzedam pralke", "Programowalna Frania na zimną wode z maglem", "AGD", "Halina", 420);

 ogloszenie.pobierzOgloszenie();
