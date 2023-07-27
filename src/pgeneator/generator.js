import library from "./wordsLibrary.json";
/*
 *	The Generator function
 *	If there's no parameter, the function would
 *	generate a random words.
 */

export function generate(first, last) {
  let username = [first, last];
  let result;

  if (first && last) {
    result = [
      ...pickRandomChars(username, username.length),
      ...pickRandomChars(library[3].chars, 2),
    ];
    result = pickRandomChars(result, result.length).join("").trim();
    return result;
  } else {
    result = [
      ...pickRandomChars(library[0].chars, library[0].charsLength),
      ...pickRandomChars(library[1].chars, library[1].charsLength),
      ...pickRandomChars(library[2].chars, library[2].charsLength),
      ...pickRandomChars(library[3].chars, library[3].charsLength),
    ];
    result = pickRandomChars(result, result.length).join("").trim();
    return result;
  }
}

function pickRandomChars(chars, charLength) {
  let output = [];
  for (let i = 0; ; i++) {
    let random = Math.floor(Math.random() * chars.length);
    if (output.length == charLength) {
      break;
    }
    if (!output.includes(chars[random])) {
      output.push(chars[random]);
    }
  }
  return output;
}

// DOMS
/* const h1 = document.getElementsByTagName('h1')[0];
const btn = document.getElementsByTagName('button')[0];

btn.onclick = function(ev){
	let password = generate();
	h1.innerHTML = password
} */
