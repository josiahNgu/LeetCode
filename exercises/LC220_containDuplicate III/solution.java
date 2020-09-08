
// Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.
import java.util.*;

class Solution {
    public static void main(String args[]) {
        int[] input = { 1, 2, 3, 1 };
        containsNearbyAlmostDuplicate(input, 3, 0);
    }

    static boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        int rightPointer = 0;
        int[] sortedArray = quickSort(nums, 0, nums.length - 1);

        return false;
    }

    static int[] quickSort(int arr[], int begin, int end) {
        if (begin < end) {
            int partitionIndex = partition(arr, begin, end);

            quickSort(arr, begin, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, end);
        }
        return arr;
    }

    static int partition(int arr[], int begin, int end) {
        int pivot = arr[end];
        int i = (begin - 1);

        for (int j = begin; j < end; j++) {
            if (arr[j] <= pivot) {
                i++;

                int swapTemp = arr[i];
                arr[i] = arr[j];
                arr[j] = swapTemp;
            }
        }

        int swapTemp = arr[i + 1];
        arr[i + 1] = arr[end];
        arr[end] = swapTemp;

        return i + 1;
    }
}