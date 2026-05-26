const PROBLEMS = [
  {
    id: "A1",
    title: "Sum of Arithmetic Progression",
    rating: 900,
    tags: ["algebra", "sequences"],
    contestId: "div2-round-1",
    createdAt: "2026-01-15T10:30:00Z",
    content: `Given a sequence of integers forming an arithmetic progression with first term $a$ and common difference $d$, find the sum of its first $n$ terms.

$$S_n = \\frac{n}{2} \\left(2a + (n-1)d\\right)$$

You are given $T$ test cases. For each test case, output the sum modulo $10^9+7$.

**Constraints:**
- $1 \\le T \\le 10^5$
- $|a|, |d| \\le 10^9$
- $1 \\le n \\le 10^{18}$`,
    solution: `The sum of an arithmetic progression can be computed directly using the formula:

$$S_n = \\frac{n}{2} \\left(2a + (n-1)d\\right)$$

Since we need the result modulo $10^9+7$, we must be careful with division by 2. Instead of dividing, we multiply by the modular inverse of 2 modulo $10^9+7$.

**Steps:**
1. Compute $2a + (n-1)d$ modulo $M = 10^9+7$
2. Multiply by $n$ modulo $M$
3. Multiply by the modular inverse of $2$ (which is $(M+1)/2 = 500000004$)

$$\\text{ans} = \\left[ n \\cdot (2a + (n-1)d) \\cdot 500000004 \\right] \\bmod M$$

**Time Complexity:** $O(T)$`
  },
  {
    id: "A2",
    title: "GCD and LCM Relations",
    rating: 1200,
    tags: ["number theory", "algebra"],
    contestId: "div2-round-1",
    createdAt: "2026-01-20T14:00:00Z",
    content: `For two positive integers $a$ and $b$, prove and use the identity:

$$\\gcd(a, b) \\times \\operatorname{lcm}(a, b) = a \\times b$$

Given $n$ pairs of integers, determine how many satisfy $\\gcd(a,b) = \\operatorname{lcm}(a,b) / k$ for a given integer $k$.

**Constraints:**
- $1 \\le n \\le 2 \\times 10^5$
- $1 \\le a, b \\le 10^{12}$
- $1 \\le k \\le 10^6$`,
    solution: `From the identity $\\gcd(a,b) \\times \\operatorname{lcm}(a,b) = ab$ and the condition $\\gcd(a,b) = \\operatorname{lcm}(a,b) / k$:

Substituting: $\\gcd(a,b) \\cdot k = \\operatorname{lcm}(a,b)$

Then: $\\gcd(a,b) \\cdot \\gcd(a,b) \\cdot k = ab$

So: $\\gcd(a,b)^2 \\cdot k = ab$

This means $\\gcd(a,b)$ must be a divisor of both $a$ and $b$, and the condition essentially checks whether $ab = k \\cdot \\gcd(a,b)^2$.

**Count solution:** For each pair $(a,b)$, compute $g = \\gcd(a,b)$, then check if $a \\times b = k \\times g \\times g$.

**Time Complexity:** $O(n \\log(\\max(a,b)))$`
  },
  {
    id: "B1",
    title: "Counting Paths in a Grid",
    rating: 1500,
    tags: ["combinatorics", "probability"],
    contestId: "div2-round-1",
    createdAt: "2026-02-05T09:00:00Z",
    content: `A robot starts at the top-left cell of an $n \\times m$ grid and must reach the bottom-right cell. It can only move right or down at each step. Some cells are blocked.

Count the number of distinct paths from $(1,1)$ to $(n,m)$ that avoid all blocked cells.

$$dp[i][j] = dp[i-1][j] + dp[i][j-1]$$

Output the count modulo $10^9+7$.

**Constraints:**
- $1 \\le n, m \\le 1000$
- blocked cells $\\le n \\times m / 4$`,
    solution: `This is a classic dynamic programming problem on a grid.

**DP Approach:**
- Let $dp[i][j]$ = number of ways to reach cell $(i,j)$ from $(1,1)$
- Base case: $dp[1][1] = 1$ (if not blocked)
- Transition: $dp[i][j] = dp[i-1][j] + dp[i][j-1]$ (mod $10^9+7$) if cell $(i,j)$ is not blocked
- Blocked cells have $dp[i][j] = 0$

**Alternative combinatorial approach (without blocked cells):**
$$\\text{paths} = \\binom{n+m-2}{n-1}$$

With blocked cells, DP is the standard approach.

**Time Complexity:** $O(n \\cdot m)$`
  },
  {
    id: "B2",
    title: "Convex Hull Area",
    rating: 1800,
    tags: ["geometry"],
    contestId: "div2-round-1",
    createdAt: "2026-02-18T16:45:00Z",
    content: `Given $n$ points in the 2D plane with integer coordinates, compute the area of their convex hull using the Shoelace formula:

$$\\text{Area} = \\frac{1}{2} \\left| \\sum_{i=1}^{n} (x_i y_{i+1} - x_{i+1} y_i) \\right|$$

Points are given in arbitrary order. Output the area multiplied by $2$ (always an integer) to avoid floating point errors.

**Constraints:**
- $3 \\le n \\le 10^5$
- $|x|, |y| \\le 10^9$`,
    solution: `**Step 1: Build the convex hull**
Use Graham Scan or Monotone Chain algorithm to find all points on the convex hull in counter-clockwise order.

**Monotone Chain Algorithm:**
1. Sort points by $x$, then by $y$
2. Build lower hull: iterate left to right, maintain counter-clockwise turns
3. Build upper hull: iterate right to left, maintain counter-clockwise turns
4. Combine (remove duplicate endpoints)

**Step 2: Shoelace formula**
For hull vertices $(x_1,y_1), (x_2,y_2), \\dots, (x_k,y_k)$ in order:

$$2 \\times \\text{Area} = \\left| \\sum_{i=1}^{k} (x_i y_{i+1} - x_{i+1} y_i) \\right|$$

where $(x_{k+1}, y_{k+1}) = (x_1, y_1)$.

**Time Complexity:** $O(n \\log n)$ for sorting`
  },
  {
    id: "C1",
    title: "Prime Factorization Tree",
    rating: 2000,
    tags: ["number theory", "graph theory"],
    contestId: "div1-round-1",
    createdAt: "2026-03-01T11:20:00Z",
    content: `Build a tree where each non-prime node is connected to its two factors (not necessarily prime). A node $v$ is connected to factors $a$ and $b$ where $a \\times b = v$ and $1 < a \\le b < v$.

Find the deepest node reachable from integer $N$ in this factorization tree, and report the depth.

$$\\text{depth}(N) = 1 + \\max(\\text{depth}(a), \\text{depth}(b))$$

**Constraints:**
- $2 \\le N \\le 10^{18}$
- $T \\le 10^4$`,
    solution: `This is a recursive problem that explores all factorizations.

**Key insight:** The depth is maximized when we factor into the smallest possible factors repeatedly (i.e., using the smallest divisor each time).

**Recursive approach with memoization:**
$$\\text{depth}(n) = 1 + \\max_{d|n, 1 < d \\le \\sqrt{n}} \\max(\\text{depth}(d), \\text{depth}(n/d))$$

**Optimization:**
- If $n$ is prime: $\\text{depth}(n) = 0$ (leaf node)
- The deepest path comes from repeatedly factoring using the smallest prime factor
- Using Pollard-Rho for factorization of large $N$

**Time Complexity:** $O(T \\cdot N^{1/4})$ with Pollard-Rho`
  },
  {
    id: "C2",
    title: "Cauchy-Schwarz Extremes",
    rating: 2200,
    tags: ["inequalities", "algebra", "calculus"],
    contestId: "div1-round-1",
    createdAt: "2026-03-10T08:00:00Z",
    content: `By the Cauchy-Schwarz inequality:

$$\\left(\\sum_{i=1}^{n} a_i b_i\\right)^2 \\le \\left(\\sum_{i=1}^{n} a_i^2\\right) \\left(\\sum_{i=1}^{n} b_i^2\\right)$$

Given vectors $\\mathbf{a}$ and $\\mathbf{b}$ of length $n$ with real entries, find a permutation of $\\mathbf{b}$ that maximizes the left-hand side, and another that achieves equality (or prove none exists).

Output: the maximum possible value and the permutation index array.

**Constraints:**
- $1 \\le n \\le 5 \\times 10^5$
- $|a_i|, |b_i| \\le 10^6$`,
    solution: `**Maximizing the dot product:**
By the Rearrangement Inequality, the dot product $\\sum a_i b_i$ is maximized when both vectors are sorted in the same order (both ascending or both descending).

$$\\max \\sum a_i b_{\\sigma(i)} = \\sum a_{(i)} b_{(i)}$$

where $a_{(i)}$ and $b_{(i)}$ are sorted in the same order.

**Equality condition for Cauchy-Schwarz:**
Equality holds if and only if $\\mathbf{a}$ and $\\mathbf{b}$ are linearly dependent: there exists $\\lambda$ such that $a_i = \\lambda b_i$ for all $i$.

Check if $\\frac{a_i}{b_i}$ is constant for all $i$ (handle zeros carefully).

**Algorithm:**
1. Sort both arrays ascending
2. Compute max dot product
3. Check equality condition by testing ratios

**Time Complexity:** $O(n \\log n)$`
  },
  {
    id: "D1",
    title: "Matrix Exponentiation & Fibonacci",
    rating: 2500,
    tags: ["matrices", "algebra", "sequences"],
    contestId: "div1-round-1",
    createdAt: "2026-03-22T15:30:00Z",
    content: `Compute the $n$-th term of a linear recurrence of order $k$:

$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \\dots + c_k a_{n-k}$$

Use matrix exponentiation to achieve $O(k^3 \\log n)$ time. Initial values $a_1 \\dots a_k$ and coefficients $c_1 \\dots c_k$ are given.

Output $a_n \\bmod (10^9+7)$.

**Constraints:**
- $1 \\le k \\le 20$
- $1 \\le n \\le 10^{18}$
- $|c_i| \\le 10^6$`,
    solution: `The recurrence can be written as a matrix equation:

$$\\begin{bmatrix} a_n \\\\ a_{n-1} \\\\ \\vdots \\\\ a_{n-k+1} \\end{bmatrix} = 
\\begin{bmatrix} 
c_1 & c_2 & \\cdots & c_{k-1} & c_k \\\\
1   & 0   & \\cdots & 0       & 0   \\\\
0   & 1   & \\cdots & 0       & 0   \\\\
\\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\
0   & 0   & \\cdots & 1       & 0
\\end{bmatrix}
\\begin{bmatrix} a_{n-1} \\\\ a_{n-2} \\\\ \\vdots \\\\ a_{n-k} \\end{bmatrix}$$

Let this matrix be $M$. Then:

$$\\begin{bmatrix} a_n \\\\ a_{n-1} \\\\ \\vdots \\\\ a_{n-k+1} \\end{bmatrix} = M^{n-k} \\begin{bmatrix} a_k \\\\ a_{k-1} \\\\ \\vdots \\\\ a_1 \\end{bmatrix}$$

Compute $M^{n-k}$ using binary exponentiation in $O(k^3 \\log n)$.

**Time Complexity:** $O(k^3 \\log n)$`
  },
  {
    id: "D2",
    title: "Inclusion-Exclusion on Sets",
    rating: 2700,
    tags: ["combinatorics", "set theory", "logic"],
    contestId: "div1-advanced-2",
    createdAt: "2026-04-05T19:00:00Z",
    content: `Given $n$ finite sets $S_1, \\dots, S_n$ each defined by a bitmask predicate on integers in $[1, M]$, count the integers that belong to at least one set, exactly two sets, or none of the sets.

Apply the Inclusion-Exclusion Principle:

$$|S_1 \\cup S_2 \\cup \\dots \\cup S_n| = \\sum |S_i| - \\sum |S_i \\cap S_j| + \\dots \\pm |S_1 \\cap \\dots \\cap S_n|$$

**Constraints:**
- $1 \\le n \\le 20$
- $1 \\le M \\le 10^6$`,
    solution: `Since $n \\le 20$, we can iterate over all $2^n$ subsets of sets.

**Union count (at least one set):**
For each non-empty subset, compute the intersection of all sets in that subset using bitwise AND on their masks. If the intersection has $c$ elements, add $(-1)^{|\\text{subset}|+1} \\cdot c$ to the total.

**Exactly two sets:**
For each integer $x \\in [1, M]$, count how many sets contain $x$. If the count is exactly 2, increment the answer.

More efficiently: for each pair of sets $(S_i, S_j)$, count elements in $S_i \\cap S_j$ that are NOT in any other set.

**None of the sets:**
$M - |\\text{union of all sets}|$

**Time Complexity:** $O(2^n \\cdot n)$ for union, $O(n^2 \\cdot M)$ for exact-two (can optimize with SOS DP)`
  },
  {
    id: "E1",
    title: "Riemann Zeta Approximation",
    rating: 3100,
    tags: ["calculus", "number theory", "sequences"],
    contestId: "div1-advanced-2",
    createdAt: "2026-04-18T22:10:00Z",
    content: `Approximate the Riemann zeta function for a given real $s > 1$:

$$\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s}$$

Use the Euler-Maclaurin summation formula to compute $\\zeta(s)$ to within absolute error $\\varepsilon$. Your output must satisfy $|\\text{output} - \\zeta(s)| < \\varepsilon$.

Also output the smallest $N$ such that the partial sum $\\sum_{n=1}^{N} \\frac{1}{n^s}$ satisfies the same bound.

**Constraints:**
- $1.01 \\le s \\le 100$
- $10^{-12} \\le \\varepsilon \\le 10^{-3}$`,
    solution: `**Euler-Maclaurin Summation Formula:**

$$\\sum_{n=a}^{b} f(n) = \\int_a^b f(x)\\,dx + \\frac{f(a)+f(b)}{2} + \\sum_{k=1}^{m} \\frac{B_{2k}}{(2k)!} \\left( f^{(2k-1)}(b) - f^{(2k-1)}(a) \\right) + R_m$$

For $\\zeta(s)$, we split the sum:

$$\\zeta(s) = \\sum_{n=1}^{N-1} \\frac{1}{n^s} + \\int_N^{\\infty} \\frac{dx}{x^s} + \\frac{1}{2N^s} + \\sum_{k=1}^{m} \\frac{B_{2k}}{(2k)!} \\cdot \\frac{s(s+1)\\cdots(s+2k-2)}{N^{s+2k-1}} + R_m$$

**Key steps:**
1. Choose $N$ based on desired accuracy (roughly $N \\approx \\varepsilon^{-1/(s-1)}$)
2. Compute partial sum directly for $n < N$
3. Add integral: $\\int_N^{\\infty} x^{-s} dx = \\frac{N^{1-s}}{s-1}$
4. Add Bernoulli correction terms (2-4 terms usually sufficient)
5. Binary search to find minimal $N$ satisfying error bound

**Time Complexity:** $O(N)$ where $N \\approx \\varepsilon^{-1/(s-1)}$`
  }
];