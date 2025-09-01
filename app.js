alert("Hello World!");// Hello,Worldと表示する命令文

alert("Hello");alert("World");//1行でも書ける　1行で書く場合は；（セミコロン）←必須

alert("Hello");
alert("World");//改行でもok

alert("Hello")
alert("World")//；←なくても実行できるが一部のケースで省略するとバグになる

//セミコロンが入らないケース
alert(3+
    1
    +2); //→６を出力

//配列や括弧()[]の直前
alert("There will be an error")
[1,2].forEach(alert)//これだと1つの文だと解釈してエラーになる
//→alert("There will be an error")[1,2].forEach(alert)


//正しくは
alert("There will be an error");
[1,2].forEach(alert)