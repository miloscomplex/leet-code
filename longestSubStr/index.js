/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Initialise an array to store running characters and longest string length
    let currentString = [];
    let longestStringLength = 0;

    for (let i=0; i < s.length; i++) {
        const currentCharacterPosition = currentString.indexOf(s[i]);
        console.log(currentCharacterPosition)
        // check if the current character exists in the current string
        // -1 is returned by indexOf if not found
        if (currentCharacterPosition !== -1) {

            // Chop the array off after the occurance of the character
            currentString.splice(0, currentCharacterPosition + 1)
        }

        // add the current character to the array
        currentString.push(s[i]);

        // Store the current string length if bigger than the exisiting record
        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        )
    }

    return longestStringLength;

};
