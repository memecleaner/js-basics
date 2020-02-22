// buat function yang mereturn string yang tidak memiliki huruf vowel (a, i, u, e, o);

function removeVowels(str) {
	// expecto patronum!
	
	let strTemp = '';
	str.toLowerCase()
	for (let i=0; i<str.toLowerCase().length ; i++){
		// console.log(str.toLowerCase());
	  if(str[i] === 'a' || str [i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o'){
	   	strTemp += ''
	  }else 
		 strTemp += str[i]
	}
	  return strTemp
}
 // udah di kerjain

console.log(removeVowels("I have never seen a thin person drinking Diet Coke.")) // " hv nvr sn  thn prsn drnkng Dt Ck."
console.log(removeVowels("We're gonna build a wall!")) // "W'r gnn bld  wll!"
console.log(removeVowels("Happy weekend guys!")) // "Hppy wknd gys!"





// var vowels = ['a', 'i', 'u', 'e', 'o']; // create vowels variable 
    // return str.split('').filter(function (el) {
	// 	return vowels.indexOf(el.toLowerCase()) == -1;
	// }).join('');
		
	  // return variable for non vowels when indexOf returns -1

	  //to lower case huruf besar-kecil