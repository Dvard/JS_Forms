# JS_Forms
Grunder i programmering: javascript formulärhantering

# Instruktioner

Javascript Övning 6 – Formulärhantering 

Gör en ny html-fil med namnet js_ovn_6.html. Starta varje uppgift med att kommentera t.ex. //Uppgift 1. i koden. 
 Ändra om följande uppgift (Övn 5 upg 1) till ett formulär där man matar in måltiden. Kolla också att fältet inte är tomt, ifall det är tomt kör en alert med texten ”inget värde matat!”och bryt kodkörandet (return false). Skriv ut måltiden i <div> med id:n meal. Gör en funktion ( t.ex. showMeal() )som skriver ut valda måltiden med innerHTML-objektet. Aktivera funktionen med en knapp. Gemför vilken måltid är i fråga: Gör en variabel meal,  jämför med en elseif-sats om måltiden är: morgonmål, lunch, middag, kvällsmål eller något annat.   


Gör en miniräknare (Övn 5 upg 2) där man matar in siffrorna. Kolla också att fälten inte är tomma och att siffervärden matas. Gör två variablar a och b, och ge dem varsitt siffervärde. Gör en knapp för varje operator  +,-, *,/ och skriv ut resultatet för varje räknesätt i en <div id=”resultat”>.  Gör en funktion t.ex. countResult(a,b,ope) som kör jämförelsen och räkningen. T.ex. resultat: 3*3=9. Avrunda svaret till två decimaler.


Följande kod räknar ut dagarna mellan två datum. Gör ett formulär där man matar in två datum och skriver ut skillnaden.var oneDay = 24*60*60*1000; // timmar*minuter*sekunder*millisekundervar firstDate = new Date(2013,01,01);var secondDate = new Date(2012,01,01);
var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));


Gör ett formulär där man matar in ett datum, t.ex. sin födelsedag och räkna ut skillnaden mellan dagens datum och det matade datumet. 


Bekanta dig med javascript prompt (kolla exemplet).  Gör en prompt som frågar användarens ålder. Om åldern är under 18 skriv ut ”Du är underårig”, i annat fall ”du är myndig”. Kolla att fältet inte blir tomt och att inmatade värdet är en siffra
