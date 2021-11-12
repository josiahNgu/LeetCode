/*
@problem: LC 459. Repeated Substring Pattern
@description: Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
*/
class RepeatedSubstringPattern {
    public static void main(String args[]) {
        String s = "ababab";
        System.out.print(repeatedSubstringPattern(s));

    }

    static boolean repeatedSubstringPattern(String s) {
        int len = s.length();
        for (int i = len / 2; i >= 1; i--) {
            if (len % i == 0) {
                String substring = s.substring(0, i);
                StringBuilder sb = new StringBuilder();
                int repeatTimes = len / i;
                for (int j = 0; j < repeatTimes; j++) {
                    sb.append(substring);
                }
                if (sb.toString().equals(s)) {
                    return true;
                }
            }
        }
        return false;
    }
}
