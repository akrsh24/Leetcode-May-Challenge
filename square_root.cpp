class Solution
{
public:
    bool isPerfectSquare(int num)
    {
        if (num == 0)
            return true;
        if (num < 0)
            return false;
        long start = 1;
        long end = (long)2147483647;

        while (start <= end)
        {
            long mid = (start + end) / 2;
            long numSquare = mid * mid;
            if (numSquare == num)
                return true;
            else if (numSquare > num)
                end = mid - 1;
            else
                start = mid + 1;
        }

        return false;
    }
};