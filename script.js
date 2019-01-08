var word = "";

var words = ["blobfish","tarantula","goat","seal","elephant","dinosaur","hyena","lion"]

var guesses = 8;

var guessedLetters = [];

var guessedWord = "";


function startGame(){
    word = "";
    guessedLetters = [];
    guesses = 8;
    var rand = words[Math.floor(Math.random() * words.length)];
    console.log(rand);
    document.getElementById("guessedLetter").innerHTML = "";
    document.getElementById("guesses").innerHTML = "";
    document.getElementById("hangFrame").innerHTML = "<img src=img/8.png>";




}

function printWord(){
    console.log(word);
    console.log(guessedLetters);
    var result = "";

    if(word == guessedWord){
        result = "Congrats! U R The Champion.";
    }else{
        for (var i = 0; i < word.length; i++){
            if(guessedLetters.indexOf(word[i]) > -1){
                result += word[i];
            }else{
                result += "_ ";
            }
        }
        console.log(result);
        if(guesses == 0){
            result = "U LoSE AnD kIlLeD tHE GuY";
        }
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

    if(guessedWord.length> 0 && numGuesses > 0 && guessedLetters.indexOf(guessedWord) == -1 && isNaN(parseInt(guessedWord))){
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

