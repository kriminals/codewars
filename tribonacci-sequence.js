/*
 * Well met with Fibonacci bigger brother, AKA Tribonacci.
 * As the name may already reveal, it works basically like a Fibonacci, 
 * but summing the last 3 (instead of 2) numbers of the sequence to 
 * generate the next. 
 */
function tribonacci(signature,n){
	if (n === 0) return [];
	if (n<3) return signature.slice(0,n);
	for (let i = 3; i < n; i++) {
		signature.push(tribonacciElement(i));
	}
	return signature;

	function tribonacciElement(x) {
		return signature[x-1] + signature[x-2] + signature[x-3];
	}

}
tribonacci([1,1,1],10)
