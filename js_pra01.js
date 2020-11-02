// 課題１
var answer = prompt('正の数と負の数を判定します');
  if (answer > 0){
    alert('正の数です');
  } else if (answer < 0){
    alert('負の数です');
  } else if (answer == 0){
    alert('正の数でも負の数でもないです');
  } else {
    alert('数値を入力してください'); //課題２
  }

//課題３
var animals = ['パンダ','ライオン','キリン'];
var i = 0;
while(true) {
  if(i >= animals.length){
    break;
  }
  alert(animals[i]);
  i++;
}

//課題４
var answer = prompt('パンダ・ライオン・キリンのいずれかを入力してください');
var animals = ['パンダ','ライオン','キリン'];
var i = 0;
while(true) {
   if (i >= animals.length){
  break;
}　else if (answer == animals[i]) {
 alert(i);
 break;
} alert(animals[i]);
  i++;
}



//課題６
var animals = [
  {'name':'パンダ','weight':'80'},
  {'name':'ライオン','weight':'200'},
  {'name':'キリン','weight':'300'}
];
var animal = prompt('パンダ・ライオン・キリンのいずれかを入力してください');
for (var i =0; i < animals.length; i++){
  if ( animal == animals[i].name ) {
     alert(animals[i].weight); //課題７
  }
}

//課題８
var answer = prompt('円の半径を入力すると、面積を表示します。');
function calc(x){
  return x * x* 3.14;
}
alert(calc(answer));
