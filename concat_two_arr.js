// buat function untuk "concat" dua buah array menjadi satu array


function arrConcat(arr1, arr2) {
    var hasil = arr1.concat(arr2);
    console.log(hasil)
}

// TIPS:
// keyword google "Javascript Concat"
// udah di kerjain
arrConcat([1, 3, 5], [2, 6, 8]) // [1, 3, 5, 2, 6, 8]
arrConcat([7, 8], [10, 9, 1, 1, 2]) // [7, 8, 10, 9, 1, 1, 2]
arrConcat([4, 5, 1], [3, 3, 3, 3, 3]) // [4, 5, 1, 3, 3, 3, 3, 3]