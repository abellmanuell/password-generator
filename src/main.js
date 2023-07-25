const upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 'w', "x", "y", "z"];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = ['~', '`', "@", "$", "%", "^", "&", "*", "(", ")", "\"", "!"];

function randomChar(characters, action){
	let output = [];
	for(let i = 0;; i++){
		let char = characters[action(characters)]
		if(output.length == 3){
			break;
		}else if(!output.includes(char)){
			output.push(char)
		}
	}
	return output;
}

function random(array){
	let random = Math.floor(Math.random() * array.length);
	return random;
}

function charsLibrary(upperChars, lowerChars, numChars, specialChars ){
	return [...randomChar(upperChars, random), ...randomChar(lowerChars, random), ...randomChar(numChars, random), ...randomChar(specialChars, random)]
}

function passwordGenerator(combineChars){
	let output = "";
	for(let i = 0; i < combineChars.length; i++){
		output += combineChars[random(combineChars)];
	}
	return output;
}

const h1 = document.getElementsByTagName('h1')[0];
const btn = document.getElementsByTagName('button')[0];

btn.onclick = function(ev){
	let password = passwordGenerator(charsLibrary(upperChars, lowerChars, numbers, symbols))
	h1.innerHTML = password
}