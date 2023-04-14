/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
	let answer = 0;
	const arr = Array.from(heights);

	heights = heights.sort((a,b)=>a-b);

	heights.forEach((height,idx)=>{
		if(height !== arr[idx]) answer++;
	})
	return answer;

};