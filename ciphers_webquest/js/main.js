function printSentence(id, sentence, speed) {
    var index = 0,
        timer = setInterval(function() {
            var char= sentence.charAt(index);
            if(char === '<') index= sentence.indexOf('>',index);
            document.getElementById(id).innerHTML= sentence.substr(0,index);
            if(++index === sentence.length){
                clearInterval(timer);
            }
        }, speed);
} //printSentence

$(function() {
    printSentence(
        'typed-1',
   `
  <p>Тебе предстоит разгадать секрет трёх посланий и узнать пароль.</p>

  <p>Были перехвачены три сообщения, зашифрованные тремя разными способами. В каждом из них содержится 
  часть пароля. Чтобы узнать его полностью - тебе нужно расшифровать их и собрать ответы воедино.</p>

  <p>Во вкладке "Шифры" содержатся справочные данные о некоторых видах шифрования.</p>

  <p>Вкладка "Инструменты" содержит полезные приспособления, которые могут помочь в расшифровке.</p>

  <p>И наконец, во вкладке "Ввести пароль" ты можешь попытать счастье и проверить свои догадки.</p>

  <h4>Первое послание:</h4>

  <p>- .... . --- .-- .-.. ...</p>

  <h4>Второе послание:</h4>

  <p>011000010111001001100101011011100110111101110100</p>

  <h4>Третье послание:</h4>
  
  <p>clexxliawiiq</p>

  <p>Кроме того, вместе с третьим посланием была перехвачена загадочная цифра 4.<br><span class="blinking-cursor">|</span></p>
  `,
        5
    );
});
