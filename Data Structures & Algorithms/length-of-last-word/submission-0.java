class Solution {
    public int lengthOfLastWord(String s) {
        String word = "";
        for(int i=0; i<s.length(); i++) {
            if(s.charAt(i) != ' ' && (i == 0 || s.charAt(i - 1) == ' ')) {
                word = "";
                word += s.charAt(i);
            } else if (s.charAt(i) != ' ') {
                word += s.charAt(i);
            }
        }
        return word.length();
    }
}