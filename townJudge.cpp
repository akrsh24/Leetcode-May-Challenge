#include <bits/stdc++.h>
using namespace std;

int findJudge(int N, vector<vector<int>> &trust)
{
    vector<int> stateArray(N, 0);
    vector<int> countArray(N, 0);
    for (int i = 0; i < trust.size(); i++)
    {
        stateArray[trust[i][0] - 1]++;
        countArray[trust[i][1] - 1]++;
    }
    for (int i = 0; i < N; i++)
    {
        if (stateArray[i] == 0 && countArray[i] == N - 1)
            return i + 1;
    }
    return -1;
}

int main()
{
    int N,T;
    cin>>T;
    vector<vector<int>> vect;
    vector<int> vect1;
    cin >> N;
    for (int i = 0; i < N; i++)
    {
        int x, y;
        cin >> x >> y;
        vect1.push_back(x);
        vect1.push_back(y);
        vect.push_back(vect1);
    }
    int label = findJudge(N, vect);
    cout << "label->" << label;
}
