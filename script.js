const extendHex = (shortHex) => {
  // write your code here
	let arr = shortHex.split("");

	arr[1] = arr[1]+arr[1];
	arr[2] = arr[2]+arr[2];
	arr[3] = arr[3]+arr[3];

	return arr.join("");
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
