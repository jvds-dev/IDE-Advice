nums = [3, 7, 0, 10, 5, 8]

def search(n):
    for i in nums:
        while i < len(nums):
            if nums[i] == n:
                return True
    return False

