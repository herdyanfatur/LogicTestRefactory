
// soal 1
for (var i = 1; i <= 7; i++) {
    var a = '';
    for (var u = 6; u >= i; u--) {
        a += '0';
    }
    a += '\n';
    console.log(i + a);
}



//soal no 2

const arr = [1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];

let sisaBagi = arr.length % 3;

let kelompok1 = arr.slice(Math.floor(arr.length / 3) * -1);
let kelompok2 = arr.slice(Math.floor(arr.length / 3) * -2, Math.floor(arr.length / 3) * -1);
let kelompok3 = arr.slice(0, Math.floor(arr.length / 3) + sisaBagi);

console.log(kelompok1.sort((a, b) => b - a))
console.log(kelompok2.sort((a, b) => b - a))
console.log(kelompok3.sort((a, b) => b - a))

let total1 = kelompok1.reduce((data, tot) => {
    return tot + data;
})
let total2 = kelompok2.reduce((data, tot) => {
    return tot + data;
})
let total3 = kelompok3.reduce((data, tot) => {
    return tot + data;
})

console.log(total1, total2, total3)

console.log(total1 / kelompok1.length, total2 / kelompok2.length, total3 / kelompok3.length)

console.log(Math.min.apply(Math, kelompok1))
console.log(Math.max.apply(Math, kelompok1))

console.log(Math.min.apply(Math, kelompok2))
console.log(Math.max.apply(Math, kelompok2))

console.log(Math.min.apply(Math, kelompok3))
console.log(Math.max.apply(Math, kelompok3))



//soal no 3

const alfabet = 'abcdefghijklmnopqrstuvwxyz';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.';

function cekJumlahAlfabetLog(kamus, text) {
    for (let i = 0; i < kamus.length; i++) {
      let jumlahPerAlfabet = 0;
      for (let j = 0; j < text.length; j++) {
        if (text[j].toLowerCase() === kamus[i]) {
          jumlahPerAlfabet++;
        }
      }
      console.log(`# karakter ${kamus[i].toUpperCase()} sebanyak ${jumlahPerAlfabet}`)
    }
  }
  
  cekJumlahAlfabetLog(alfabet, text);


  const alfabet1 = 'abcdefghiklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

  function ubahKalimat5Karakter(kamus, text) {
    let hasil = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' || text[i] !== ',' || text[i] !== '.') {
        let limaHuruf = Number(kamus.indexOf(text[i].toLowerCase()));
        if (limaHuruf !== -1) {
          hasil += kamus[limaHuruf + 5];
        } else {
          hasil += text[i]
        }
      }
    }
    console.log(text);
    console.log(hasil);
  }
  
  ubahKalimat5Karakter(alfabet1, text)





//soal no 4

const randomNumber = Math.floor(Math.random() * 100);
console.log(`angka acak : ${randomNumber}`);
function findNumber(randomNumber) {
    let numbers = [];
    //membuat data array 1-100
    for(let i = 0; i <= 100; i++){
        numbers.push(i);
    }
    //mencari angka random
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] === randomNumber) {
           console.log(`butuh pengulangan sebangayak ${numbers[i]} untuk menemukan angka acak: ${numbers[i]}`);
        }
    }
}
findNumber(randomNumber);