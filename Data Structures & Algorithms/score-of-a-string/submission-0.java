class Solution {
    public int scoreOfString(String s) {
        int total = 0;
        char prev = s.charAt(0);
        for(int i=1; i<s.length(); i++) {
            char c = s.charAt(i);
            int cValue = (int) c;
            int prevValue = (int) prev;
            total += Math.abs(cValue-prevValue);
            prev = c;
        }
        return total;
    }
}