let setValue;
let setClickBtn = [];
let setResult = 0;

//クリックされたらディスプレイに表示と計算式に使う値と演算子を保持
function clickBtnAction(){
  setValue = document.getElementsByClassName("button");

  /*for (let i = 0; i < setValue.length; i++) {
   setClickBtn.push(setValue[i].value);
  }*/

  //setClickBtn.push(setValue);
  console.log(setValue); //デバック用
};

//ディスプレイの中身を取得
document.getElementById('display');

/*ディスプレイの中身を取得
setValue = document.getElementById('display');
console.log(setValue);*/


//IF ACが押されたらディスプレイの値を消す
$('#allclear').on('click',function(){
$('#display').text("ACを押下");//デバック用
});

//IF =ボタンが押されたらディスプレイの値を計算
$('#equal').on('click',function(){
$('#display').text("＝を押下");//デバック用
});
