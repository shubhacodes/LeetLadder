--- 
title: "POTD - 12 April 2024"
subtitle: "Solve a new LeetCode problem every day."
date: "2024-04-13"
month: "January"
topic: "Binary Search"
---

## Today's Problem: Trapping Rain Water (Two Pointer)

### Problem Statement

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

**Example:**
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

**Explanation:** 
Here's an explanation of the logic of the code solution:

1. **Two-Pointer Approach**: The code utilizes a two-pointer approach to traverse the input vector `height`.
2. **Initialization**: Initialize two pointers `i` and `j` at the beginning and end of the vector respectively.
3. **Tracking Maximum Heights**: Maintain variables `maxLeft` and `maxRight` to track the maximum height encountered from the left and right sides respectively.
4. **Main Loop**: Iterate through the vector while `i` is less than `j`, which ensures that both pointers converge towards the middle of the vector.
5. **Comparing Maximum Heights**: Compare `maxLeft` and `maxRight`. If `maxLeft` is less than or equal to `maxRight`, move the left pointer (`i`) one step to the right and update `maxLeft` with the maximum of its current value and the height at the new position. Otherwise, move the right pointer (`j`) one step to the left and update `maxRight` with the maximum of its current value and the height at the new position.
6. **Calculating Trapped Water**: At each step, calculate the amount of trapped water between the current position of the pointers using the formula `result += maxLeft - height[i]` or `result += maxRight - height[j]`, depending on which side is smaller.
7. **Returning Result**: After the loop completes, return the total amount of trapped water calculated in `result`.

```cpp
class Solution {
public:
    int trap(vector<int>& height) {
        ios_base::sync_with_stdio(false);
        int i = 0, j = height.size() - 1, result = 0;
        int maxLeft = height[i], maxRight = height[j];
        while (i < j) {
            if (maxLeft <= maxRight) {
                i++;
                maxLeft = max(maxLeft, height[i]);
                result += maxLeft - height[i];
            } else {
                j--;
                maxRight = max(maxRight, height[j]);
                result += maxRight - height[j];
            }
        }
        return result;
    }
};
```