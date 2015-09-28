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

// 7. Array 

// 8. födelsedag https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
function function801() {

    var monthBirth = prompt("Vilken månad fyller du år (1-12) ?");
    var dayBirth = prompt("Vilken dag fyller du år (1-31) ?");
    console.log(dayBirth + "/" + monthBirth);
}





// 9. Tabellgenerering