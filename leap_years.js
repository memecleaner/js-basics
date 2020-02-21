// Buat function untuk me-return tahun kabisat dari range tahun yang diberikan
// misalanya 2015-2020 ada 2 tahun kabisat yaitu 2016 dan 2019

function leapyear(year) {  
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2015));
console.log(leapyear(2016));
console.log(leapyear(2017));
console.log(leapyear(2018));
console.log(leapyear(2019));
console.log(leapyear(2020));
  // kalian bisa lihat defenisi tahun kabisat di wikipedia.
  // serta algoritma untuk menentukan tahun kabisatya.



