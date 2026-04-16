class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean = ''.join(filter(str.isalnum, s)).lower()
        pal = clean[::-1]
        return clean == pal
        