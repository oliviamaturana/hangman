

var easyPeasy = ["blobfish","tarantula","goat","seal","elephant","dinosaur","hyena","lion"];
var kindaTricky = ["reminisce", "capitalism","enchilada", "baguette", "raindrop", "magnify", "internet", ""]
var superTrippy = ["expunged", "cognizant", "serendipitous", "humorous", "catastrophic", "camaraderie", "repugnant", "sabotage"]

var word = "";

var guesses = 8;

var guessedLetters = [];

var guessedWord = "";


function startGame(){
    word = "";
    guessedLetters = [];
    guesses = 8;
    document.getElementById("guessedLetters").innerHTML = "";
    document.getElementById("guesses").innerHTML = "";
    document.getElementById("hangFrame").innerHTML = "";


    var level = document.getElementById("level").value;
    if(level == 1){
        word = easyPeasy[Math.floor(Math.random() * easyPeasy.length)];
    }
    if(level == 2){
        word = kindaTricky[Math.floor(Math.random() * kindaTricky.length)];
    }
    if(level == 3){
        word = superTrippy[Math.floor(Math.random() * superTrippy.length)];
    }
    console.log(word);

    document.getElementById("hangFrame").innerHTML = "<img src=img/8.png>";
    printWord();



}

function printWord(){
    console.log(word);
    console.log(guessedLetters);
    var result = "";


    for (var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            result += word[i];
        }else{
            result += "_ ";
        }
    }
    console.log(result);

    if(result.indexOf("_ ") == -1){
        result = "Congrats! U R The Champion.";
    }

    if(guessedWord == word){
        result = "Congrats! U R The Champion.";
    }

    console.log(result);
    if(guesses == 0){
        result = "U LoSE AnD kIlLeD tHE GuY";
    }


    document.getElementById("wordSpaces").innerHTML = result;
    guessedWord = "";


}

function handleGuess(){
    var letter = document.getElementById("guessedLetter").value;
    guessedWord = document.getElementById("guessedWord").value;


    if(letter != "" && letter.length == 1 && guesses > 0 && guessedLetters.indexOf(letter) == -1 && isNaN(parseInt(letter))){
        guessedLetters.push(letter);
        if(word.indexOf(letter) == -1){
            guesses --;
            console.log(guesses);
        }
    }

    if(guessedWord.length> 0 && guesses > 0 && guessedLetters.indexOf(guessedWord) == -1 && isNaN(parseInt(guessedWord))){
        guessedLetters.push(guessedWord);
        if(guessedWord != word){
            guesses --;
            console.log(guesses);
        }
    }


    document.getElementById("guessedLetters").innerHTML = guessedLetters.toString();
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("guessedLetter").value = "";
    document.getElementById("guessedWord").value = "";
    console.log(guesses);
    var newImage = "<img src='img/" + guesses + ".png'>";
    document.getElementById("hangFrame").innerHTML = newImage;
    printWord();

}

