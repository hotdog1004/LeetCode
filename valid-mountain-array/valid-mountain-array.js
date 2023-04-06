/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) return false;

	let increase = false;
	let decrease = false;

	for(let i = 1; i < arr.length; i++){
		if(arr[i] === arr[i-1]) return false;

		if(arr[i] > arr[i-1]){
			if(decrease) return false;

			increase = true;
		}
		if(arr[i] < arr[i-1]) decrease = true;
	}
	return increase && decrease;
};