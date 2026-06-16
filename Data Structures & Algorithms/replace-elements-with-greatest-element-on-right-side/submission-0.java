class Solution {
    public int[] replaceElements(int[] arr) {
        for(int i=0; i<arr.length-1; i++) {
            List<Integer> track = new ArrayList<>();
            for(int j=i+1; j<arr.length; j++) {
                track.add(arr[j]);
            }
            int max = Integer.MIN_VALUE;
            for(int num : track) {
                max = Math.max(num, max);
            }
            arr[i] = max;
        }
        arr[arr.length-1] = -1;
        return arr;
    }
}