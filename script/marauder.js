// 1. Hello World
function function101() {
    console.log("Hello World");
}

function function102() {
    alert("Rad1" + '\n' + "Rad2");
}

// 2. Medeltal av 4 tal
function function201() {
    var average = function(tal1, tal2, tal3, tal4) {
        return (tal1 + tal2 + tal3 + tal4) / 4;
    };
    console.log(average(2, 2, 3, 3));
}

function function202() {
    var printOut = function(argumentOne, argumentTwo) {
        console.log(argumentOne + ", " + argumentTwo);
    };
    printOut("Utan", "fantasi");
}

// 3. gissa talet slumpa 1-100, 5 gissningar 
function function301() {
    var random = Math.floor(Math.random() * 100) + 1;
    var turns = 0;

    while (turns < 5) {
        var guess = prompt("Gissa ett nummer. Jag tänker på ett nummer mellan 1 och 100.");
        if (!guess) break;
        guess = Number(guess);
        if (guess === random) {
            alert("Det rätta nummret var " + random + '\n' +
                "Grattis! Du hittade nummret efter " + turns + " försök");
            turns = 5;
            break;
        }
        else if (guess > random) {
            alert(guess + " är inte rätt nummer. Mitt nummer är lägre");
            turns = turns + 1;
        }
        else if (guess < random) {
            alert(guess + " är inte rätt nummer. Mitt nummer är högre");
            turns = turns + 1;
        }
        else {
            alert("Det var inget korrekt nummer. Försök igen.");
        }
    }
    alert("Det rätta nummret var " + random);
}

// 4. meny funktion 
function function401() {
    function convertToCelcius() {
        var f = prompt("1. Fahrenheit till celcius" + '\n' +
            "Skriv in värdet i Fahrenheit");
        f = Math.round((f - 32) * 5 / 9);
        alert("I celcius blir det: " +f);
    }

    function convertToFahrenheit() {
        var c = prompt("2. Celcius till fahrenheit" + '\n' +
            "Skriv in värdet i Celcius");
        c = Math.round(c * 9 / 5 + 32);
        alert("I fahrenheit blir det: " +c);
    }

    var bool = true;
    while (bool) {
        var menuoption = prompt("Välkommen, välj mellan valen eller tryck 0 för att avbryta" + '\n' +
            "0. Avbryt" + '\n' +
            "1. Fahrenheit till celcius" + '\n' +
            "2. Celcius till fahrenheit" + '\n' +
            "3. Gissa nummret");
        if (!menuoption) break;
        if (menuoption === "0") {
            bool = false;
        }
        else if (menuoption === "1") {
            convertToCelcius();
        }
        else if (menuoption === "2") {
            convertToFahrenheit();
        }
        else if (menuoption === "3") {
            function301();
        }
        else {
            alert("Det var inget korrekt nummer. Försök igen.");
        }
    }
}


// 5. String change case 
function function501() {

    function toOppositeCase(char) {
        return (/[a-ö]/).test(char) ? char.toUpperCase() : char.toLowerCase();
    }
    var string = "Jag tycker JAVASCRIPT är KUL",
        newString = "";
    for (var i = 0; i < string.length; i++) {
        newString += toOppositeCase(string[i]);
    }
    console.log(string);
    console.log(newString.replace(/a/gi, "#"));
}

// 6. Math hypotenusan
function function601() {
    var a = prompt("Ange längden på kateter a", a);
    var b = prompt("Ange längden på kateter b", b);
    var c = Math.sqrt(((a * a) + (b * b)));
    console.log("Givet längden a: " + a + " och b: " + b + ", är hypotenusan för längden c: " + c);
}

// 7. Array dela på längden av array, min och max
// resultat = 27, 89, 2 eller medel, max, min i ny array, heltasavrundas nedåt
function function701() {
    var testResult = [10,2,89,65,13,3];
    var testAverage = +(testResult)/(testResult.length);
    console.log(testResult.length);
    console.log(testAverage);

}

// 8. födelsedag
function function801() {

    var monthBirth = prompt("Vilken månad fyller du år (1-12) ?");
    var dayBirth = prompt("Vilken dag fyller du år (1-31) ?");
    alert("Du fyller år den: " + dayBirth + "/" + monthBirth);
}

function function802() {
    var monthBirth = prompt("Vilken månad fyller du år (1-12) ?");
    var dayBirth = prompt("Vilken dag fyller du år (1-31) ?");

    var todaysDate = new Date();
    var oneDay = 24 * 60 * 60 * 1000;
    var birthDate = new Date(todaysDate.getFullYear(), monthBirth - 1, dayBirth);
    if (todaysDate.getTime() > birthDate.getTime()) {
        birthDate.setFullYear(birthDate.getFullYear() + 1);
    }
    var diffDays = Math.round((birthDate.getTime() - todaysDate.getTime()) / (oneDay));

    alert("Dagar kvar till födelsedag: " + diffDays);
}

// 9. Tabellgenerering 

function function901() {

    var headArray = ["Förnamn", "Efternamn", "Telefon"];
    var array = [
        ["Haris", "Kljajic", "6770"],
        ["Mats", "Loock", "6325"],
        ["John", "Häggerud", "6321"]
    ];
    var body, tab, tbody, thead, th, tr, td, tn, row, col, oddRow;
    body = document.getElementById("tablediv");
    tab = document.createElement("table");
    tbody = document.createElement("tbody");
    thead = document.createElement("thead");

    tab.appendChild(thead);
    for (var i = 0; i < headArray.length; i++) {
        thead.appendChild(document.createElement("th")).appendChild(document.createTextNode(headArray[i]));
    }

    for (row = 0; row < array.length; row++) {
        tr = document.createElement("tr");
        for (col = 0; col < array[row].length; col++) {
            td = document.createElement("td");
            tn = document.createTextNode(array[row][col]);
            td.appendChild(tn);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tab.appendChild(tbody);
    body.appendChild(tab);

}
