var twoSum = function(nums, target) {
    let maps = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (maps[complement] !== undefined) {
            return [maps[complement], i];
        }

        maps[nums[i]] = i;
    }
};
