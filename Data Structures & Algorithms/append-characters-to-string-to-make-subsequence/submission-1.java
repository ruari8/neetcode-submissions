class Solution {
    public int appendCharacters(String s, String t) {
        int tTotal = 0;

        for (int i = 0; i < s.length(); i++) {
            if (tTotal == t.length()) break;

            if (s.charAt(i) == t.charAt(tTotal)) {
                tTotal++;
            }
        }

        return t.length() - tTotal;
    }
}