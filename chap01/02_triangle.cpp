// 棒がn本
// 棒iの長さはai
// 3本選んでできるだけ周長の長い三角形を作る
// 作れた場合は周長を。作れない場合は0
// input: n, a[]
// n = 5, a = [2, 3, 4, 5, 10]

// 三角形である条件: a2 + b2 - c2 > 0

#include <algorithm>


int solve(int n, int a[]) {
  int ans = 0;

  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      for (int k = j + 1; k < n; k++) {
        int len = a[i] + a[j] + a[k];
        int ma = std::max(a[i], std::max(a[j], a[k]));
        int rest = len - ma;

        if (ma < rest) {
          ans = std::max(ans, len);
        }
      }
    }
  }

  return ans;
}

int main() {
  int n;

  scanf("%d", &n);

  int a[n];

  for (int i = 0; i < n; i++) {
    scanf("%d", &a[i]);
  }

  int ans = solve(n, a);
  printf("%d\n", ans);
}
