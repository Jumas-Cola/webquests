function text2morse() {
    var message = $('textarea[name="morse-source"]').val().toLowerCase();
    var alphabet = {  
        "0" : "-----",
        "1" : ".----",
        "2" : "..---",
        "3" : "...--",
        "4" : "....-",
        "5" : ".....",
        "6" : "-....",
        "7" : "--...",
        "8" : "---..",
        "9" : "----.",
        "a" : ".-"   ,
        "b" : "-..." ,
        "c" : "-.-." ,
        "d" : "-.."  ,
        "e" : "."    ,
        "f" : "..-." ,
        "g" : "--."  ,
        "h" : "...." ,
        "i" : ".."   ,
        "j" : ".---" ,
        "k" : "-.-"  ,
        "l" : ".-.." ,
        "m" : "--"   ,
        "n" : "-."   ,
        "o" : "---"  ,
        "p" : ".--." ,
        "q" : "--.-" ,
        "r" : ".-."  ,
        "s" : "..."  ,
        "t" : "-"    ,
        "u" : "..-"  ,
        "v" : "...-" ,
        "w" : ".--"  ,
        "x" : "-..-" ,
        "y" : "-.--" ,
        "z" : "--.." ,
        "!" : "-·-·--",
        "." : "·-·-·-",
        "," : "--··--"

    };
    var messageConverted = [];


    message.split(" ").map(function (word) {
        word.split("").map(function (letter) {
            messageConverted.push(alphabet[letter]);
        });
        messageConverted.push(" ");
    });

    $('textarea[name="morse-result"]').val(messageConverted.join(" "));

}

function morse2text() {
    var message = $('textarea[name="morse-result"]').val();
    var alphabet = {  
        "-----" : "0",
        ".----" : "1",
        "..---" : "2",
        "...--" : "3",
        "....-" : "4",
        "....." : "5",
        "-...." : "6",
        "--..." : "7",
        "---.." : "8",
        "----." : "9",
        ".-"    : "a",
        "-..."  : "b",
        "-.-."  : "c",
        "-.."   : "d",
        "."     : "e",
        "..-."  : "f",
        "--."   : "g",
        "...."  : "h",
        ".."    : "i",
        ".---"  : "j",
        "-.-"   : "k",
        ".-.."  : "l",
        "--"    : "m",
        "-."    : "n",
        "---"   : "o",
        ".--."  : "p",
        "--.-"  : "q",
        ".-."   : "r",
        "..."   : "s",
        "-"     : "t",
        "..-"   : "u",
        "...-"  : "v",
        ".--"   : "w",
        "-..-"  : "x",
        "-.--"  : "y",
        "--.."  : "z",
        "/"     : " ",
        "-·-·--": "!",
        "·-·-·-": ".",
        "--··--": ","
    };
    var messageConverted = [];


    message.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(alphabet[letter]);
        });
        messageConverted.push(" ");
    });

    $('textarea[name="morse-source"]').val(messageConverted.join(""));
}

$('button[name="morse2text"]').click(morse2text);
$('button[name="text2morse"]').click(text2morse);
