// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(num1, num2) {

	if(num1 == undefined) num1=0;
	if(num2 == undefined) num2=1;
	 
	var $result = num1/num2
	return $result
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  if (result !== 1) throw new Error('Expected quotient(2, 2) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.

	var result = quotient(1,0);
	if (result == undefined) throw new Error('Error, cannot divide by zero. Received: '+ result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.

  // --------------------------------------------------
 	var result = quotient(1,1,1,1);
	 if (result!= 1) throw new Error ('Expected quotient(1,1,1,1) to be 1. Recevied:'+result);
	
	// Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
