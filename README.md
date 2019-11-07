# JS_Forms
Grunder i programmering: javascript formulärhantering

# Instruktioner

Javascript Övning 6 – Formulärhantering 

Gör en ny html-fil med namnet _js_ovn_6.html_. Starta varje uppgift med att kommentera t.ex. ````//Uppgift 1.```` i koden.

1. Ändra om följande uppgift (Övn 5 upg 1) till ett formulär där man matar in måltiden. Kolla också att fältet inte är tomt, ifall det är tomt kör en alert med texten ````”inget värde matat!”```` och bryt kodkörandet (_return false_). Skriv ut måltiden i ````<div>```` med id:n _meal_. Gör en funktion (t.ex. __showMeal()__)som skriver ut valda måltiden med _innerHTML_-objektet. Aktivera funktionen med en knapp. Gemför vilken måltid är i fråga: Gör en variabel __meal__,  jämför med en elseif-sats om måltiden är: _morgonmål, lunch, middag, kvällsmål eller något annat_.   


2. Gör en miniräknare (Övn 5 upg 2) där man matar in siffrorna. Kolla också att fälten inte är tomma och att siffervärden matas. Gör två variablar __a__ och __b__, och ge dem varsitt siffervärde. Gör en knapp för varje operator  _+,-, *,/_ och skriv ut resultatet för varje räknesätt i en ````<div id=”resultat”>````.  Gör en funktion t.ex. ```countResult(a,b,ope)``` som kör jämförelsen och räkningen. T.ex. ````resultat: 3*3=9````. Avrunda svaret till __två__ decimaler.


3. Följande kod räknar ut dagarna mellan två datum. Gör ett formulär där man matar in två datum och skriver ut skillnaden.
````javascript
var oneDay = 24*60*60*1000; // timmar*minuter*sekunder*millisekunder
var firstDate = new Date(2013,01,01);
var secondDate = new Date(2012,01,01);
var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
````

4. Gör ett formulär där man matar in ett datum, t.ex. sin födelsedag och räkna ut skillnaden mellan dagens datum och det matade datumet. 


5. Bekanta dig med javascript ````prompt```` (kolla exemplet).  Gör en prompt som frågar användarens ålder. Om åldern är under _18_ skriv ut _”Du är underårig”_, i annat fall _”du är myndig”_. Kolla att fältet __inte blir tomt__ och att inmatade värdet är en __siffra__.
