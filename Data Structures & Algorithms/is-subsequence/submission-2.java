class Solution {
    public boolean isSubsequence(String s, String t) {
        int count = 0;
        boolean found = false;
        if(s.length() == 0) return true;
        for(int i=0; i<t.length(); i++) {
            System.out.println(count);
            if(t.charAt(i) == s.charAt(count)) {
                count++;
                if(count == s.length()) {
                    found = true;
                    break;
                }
            }
        }
        return found;
    }
}