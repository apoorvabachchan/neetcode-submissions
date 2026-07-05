class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for (let i = 0; i<nums.length; i++) {
            const desired = target - nums[i]
            if (map.has(desired)) {
                return [i, map.get(desired)]
            }else {
                map.set(nums[i], i)
            }
        }
    }
}
