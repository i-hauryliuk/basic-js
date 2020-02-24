module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.length === 0) {
            return 1;
        } else {
            let maxDepth = 0;
            let branchDepth = 0;
            for (const innerArr of arr.filter(el => Array.isArray(el))) {
                branchDepth = this.calculateDepth(innerArr);
                if (maxDepth < branchDepth) {
                    maxDepth = branchDepth;
                }
            }
            return maxDepth + 1;
        }
    }
};
