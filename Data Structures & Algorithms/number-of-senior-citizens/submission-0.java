class Solution {
    public int countSeniors(String[] details) {
        int count = 0;
        for(int i=0; i<details.length; i++) {
            System.out.println(Integer.parseInt(details[i].substring(12, 14)));
            if(Integer.parseInt(details[i].substring(11, 13))>60) count++;
        }
        return count;
    }
}