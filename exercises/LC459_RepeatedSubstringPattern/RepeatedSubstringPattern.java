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
