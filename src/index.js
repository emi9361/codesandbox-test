// /*
// const, letの変数制限 */
// var val1 = "var変数";
// console.log(val1);
// // var変数は上書き可能

// val1 = "var変数は上書き可能";
// console.log(val1);

// // var変数は際宣言が可能

// var val1 = "var変数は際宣言が可能";
// console.log(val1);

// let val2 = "let変数";
// console.log (val2);

// // letは上書き可能
// val2 = "let変数は上書き可能"
// console.log (val2);

// //letは再宣言不可能
// let val2 = "letは再宣言不可能"
// console.log (val2);

// const val3 = "const変数"
// console.log (val3);

// //constは上書き不可能
// val3 = "constは上書き不可能"
// console.log (val3);

// const val4 = {
//   name: "スイカ",
//   address: "Chiba"
// };

// console.log(val4);

// const val5 = {
//   name:"もち",
//   taste: "甘い"
// };
// console.log(val4,val5)

// val4.name = "ピーチ";
// val4.tel = "222-222";
// console.log(val4);

//↑constで定義したオブジェクトはプロパティの変更が可能

// const val6 = ['dog','cat']
// console.log (val6);
// val6[0] = "bird"
// console.log (val6);
// val6.push ("monkey");
// console.log (val6);

//↑constで定義した配列はプロパティの変更が可能

// 1/8(金)

//テンプレート文字列
// const name = "Suika";
// const age = "27";
// const drink = "coffee";

// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// const message2 = `好きな飲み物は${drink}です`;
// console.log(message2);

//アロー関数 returnを省略できる
// function funk1(str:引数){
//   return str : 返り値
// };
//関数を変数に入れて使うことも可能！

// const funk1 = function (str) {
//   return str;
// };
// console.log(funk1("アップル"));

// //アロー関数　=>
// const funk2 = (str) => {
//   return str;
// };
// console.log(funk2("BANANA"));

// const funk3 = (str) => str;
// console.log(funk3("Summer"));

// //引数を演算する方法
// const funk4 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(funk4(1, 2));

//✨分割代入
// const myProfile = {
//   name: "ぼのぼの",
//   age: 28
// };

// const message3 = `名前は${myProfile.name}です`;
// console.log(message3);

// //オブジェクトから指定のプロパティ抜き出す
// const { name, age } = myProfile;
// const message４ = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

//配列で取り出す
// const myProfile = [`Suika`, 30];
// const message5 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message5);

// //配列で抽出[]を使用順番が大事
// const [name, age] = myProfile;
// const message6 = `名前は${name}です、年齢は${age}です。`;
// console.log(message6);

//デフォルト値、引数
//関数名sayHelloに引数(name)が代入される。そしてconsole.logに表示される
// const sayHello = (name) => console.log(`こんにちは${name}さん！`);
// sayHello(`ドラゴンフルーツ`)

//引数nameに初期値の設定も可能　↓"ゲスト"
// const sayHello = (name = "Guest") => console.log(`こんにちは${name}さん！`);
// sayHello();

//スプレット構文　...(ドット３つ)
//配列の展開
// const arr1 = [1, 30];
// // console.log(arr1);
// // // ...つけると配列の中身を取り出してくれる！
// // console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// //順番処理してくれる
// sumFunc(...arr1);

// //1つにまとめる
// const arr2 = [1 ,2 ,3 ,4 ,5 ];
// //配列の分割代入が使われるケースが多い
// const [num1, num2, ...arr3] = arr2;
// //残りの配列がいくつあろうがまとめて入ってくる
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 15];

// const arr6 = [...arr4];
// arr6[0] = 155
// console.log(arr6);

// // //配列同士の結合
// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// // //オプション この方式だと元データも変わってしまうため❎
// // const arr8 = arr4
// // console.log(arr8);
// // arr8[0] = 100;
// // console.log(arr4);

//mapやfilterを使用した配列処理
//おさらいfor文
// for (let 初期値; 回数; 頻度){
// 処理方法
// }
// for (let i = 0 ; i <= 10; i++ ){
// console.log("現在の回数は" + (i+1) + "です。");
// // }
// const nameArr = ["あい","あかね","そら"]
// for (let index = 0; index < nameArr.length; index++) {
//   console.log (`${index+1}番目はnameArrです。`)
// }

//filter return return式に条件文書いてそれを取り出せるメソッド
// const numArr = [1 ,2 ,3 ,4 ,5];
// const numNewArr = numArr.filter((num) => {
//   return num % 2 === 1
// });
// console.log (numNewArr);

//mapから配列番号を表示させる時
const foodArr = ["りんご", "パイン", "もも", "スイカ"];
foodArr.map((string, index) => console.log(`${index}番目は${string}です`));
