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
    for (let indices of map.values()) {
        if (indices.length >= 3) {
            for (let i = 0; i <= indices.length - 3; i++) {
                let dist = 2 * (indices[i + 2] - indices[i]);
                minDist = Math.min(minDist, dist);
            }
        }
    }

    return minDist === Infinity ? -1 : minDist;
};
