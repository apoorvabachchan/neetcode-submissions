class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (const str of strs) {
            result+= `${str.length}!${str}`
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0
        // 5!hello5!world
        while(i < str.length) {
            const pos = str.indexOf("!", i)
            const len = parseInt(str.slice(i, pos))
            i = pos + 1
            const s = str.slice(i, i+len)
            result.push(s)
            i += len
        }
        return result
    }
}
