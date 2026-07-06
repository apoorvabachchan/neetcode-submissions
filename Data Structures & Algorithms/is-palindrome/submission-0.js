class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[^a-zA-Z0-9]/g
        const cleanString = s.replace(regex,'').toLowerCase()
        let left = 0
        let right = cleanString.length -1
        while(left <= right){
            if(cleanString[left] === cleanString[right]){
                left = left + 1
                right = right - 1
            }
            else {
                return false
            }
        }
        return true
    }
}
