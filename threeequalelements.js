var minimumDistance = function(nums) {
    const map = new Map();

    // first: store indices
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);
    }

    let minDist = Infinity;

    // Seconf: check triples
    

    return minDist === Infinity ? -1 : minDist;
};
