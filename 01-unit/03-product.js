// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function product(num1, num2) {
	if(num1== undefined) num1=0;
	if (num2== undefined) num2=0;

	var $result=num1*num2
	return $result

}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the product of two numbers.
  var result = product(2, 2);
  if (result !== 4) throw new Error('Expected product(2, 2) to be 4. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.
 var result = product(1,0);
	if(result !=0) throw new Error ('Expected product(0,0)to be 0. Received: '+result);


  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.

  // --------------------------------------------------
 var result = product(1,1,1,1);
	if(result !=1) throw new Error ('Expected prod(1,1,1,1) to be 1. Received:' +result);
	// Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.

  // --------------------------------------------------
 var result = product(0);
	if(result !=0) throw new Error ('Expected product(0) to be 0. Received: '+ result)

	// Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
 var result = product();
	if (result!=0) throw new Error('Expected product() to be zero. Received: ' +result);

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
