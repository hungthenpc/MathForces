const PROBLEMS = [
  {
    id: "10hsgs26d2p1",
    title: "Bài 1 - Thi vào 10 chuyên KHTN 2026 (Vòng 2)",
    rating: 2200,
    subRatings: [
      { label: "a", value: 1900 },
      { label: "b", value: 2100 }
    ],
    tags: ["Số học", "equations", "systems"],
    contestId: "10hsgs26d2",
    createdAt: "2026-05-24T00:00:00Z",
    solutionSource: "Robloxkids",
    content: `1. Giải phương trình<br>
\\[1 + 5\\sqrt[3]{1 - 25x^2} + \\sqrt[3]{1 + 5x} + \\sqrt[3]{1 - 5x} = 4 \\left( \\sqrt[3]{(1 + 5x)^2} + \\sqrt[3]{(1 - 5x)^2} \\right).\\]
2. Giải hệ phương trình<br>
\\[\\begin{cases} x^3 + 8y^3 + 6xy + x = 3(x^2 + 4y^2) + 1, \\\\ x^3 + 2 = x^2 + 2y. \\end{cases}\\]`,
    solution: `1. Đặt $\\sqrt[3]{1+5x}=a$ và $\\sqrt[3]{1-5x}=b$ thì ta có $a^3+b^3=2$. Phương trình đã cho trở thành
\\[1 + 5ab + a + b = 4(a^2 + b^2).\\]
Đặt $S = a+b$ và $P = ab$ thì ta có
\\[\\begin{cases} S^3 - 3SP = 2, \\\\ 1 + 5P + S = 4(S^2 - 2P). \\end{cases}\\]
Từ phương trình hai, ta có $1 + 5P + S = 4S^2 - 8P$ nên $13P = 4S^2 - S - 1$. Nhân cả hai vế của phương trình một với 13, ta được
\\[13S^3 - 39SP = 26.\\]
Thay $13P = 4S^2 - S - 1$, ta được
\\[\\begin{align*} 13S^3 - 3S(4S^2 - S - 1) &= 26 \\\\ \\iff S^3 + 3S^2 + 3S - 26 &= 0 \\\\ \\iff (S+1)^3 &= 27 \\\\ \\iff S &= 2. \\end{align*}\\]
Khi có $S=2$, ta dễ dàng tìm ra $P=1$, dẫn đến $a=b=1$, tức là $x=0$. Thử lại, ta thấy thỏa mãn.<br>
Vậy phương trình đã cho có nghiệm duy nhất $x=0$.<br>
2. Từ phương trình (2) ta được $2y = x^3 - x^2 + 2$. Phương trình (1) tương đương
\\[(x+2y)(x^2 - 2xy + 4y^2) - 3(x^2 - 2xy + 4y^2) + (x-1) = 0\\]
\\[\\iff (x+2y-3)(x^2-2xy+4y^2) + (x-1) = 0\\]
\\[\\iff (x + x^3 - x^2 - 1)(x^2 - 2xy + 4y^2) + (x-1) = 0\\]
\\[\\iff (x-1)(x^2+1)(x^2-2xy+4y^2) + (x-1) = 0\\]
\\[\\iff (x-1)\\left[(x^2+1)(x^2-2xy+4y^2) + 1\\right] = 0.\\]
Xét hai trường hợp.<br>
Trường hợp 1: $x=1$. Khi đó thay vào phương trình (2) ta được $1^3+2=1^2+2y \\Rightarrow 3=1+2y \\Rightarrow y=1$.<br>
Trường hợp 2: $x \\neq 1$. Khi đó $(x^2+1)(x^2-2xy+4y^2) + 1 = 0$, điều này vô lý do $x^2+1 > 0$ và $x^2-2xy+4y^2 = (x-y)^2 + 3y^2 \\geq 0$, suy ra vế trái $\\geq 1$.<br>
Vậy hệ phương trình có nghiệm duy nhất $x = y = 1$.`
  },
  {
    id: "10hsgs26d2p2",
    title: "Bài 2 - Thi vào 10 chuyên KHTN 2026 (Vòng 2)",
    rating: 2100,
    tags: ["number theory", "diophantine", "exponential"],
    contestId: "10hsgs26d2",
    createdAt: "2026-05-24T00:00:00Z",
    solutionSource: "Robloxkids",
    content: `Xét phương trình $(x^3 + y)(y^3 + x) = 3z$, trong đó $x, y, z$ là các số nguyên dương.<br>
1. Chứng minh rằng khi $x = y$ thì không tồn tại $z$ thỏa mãn phương trình.<br>
2. Tìm tất cả các bộ $(x, y, z)$ thỏa mãn phương trình với $x > y$.`,
    solution: `1) Nếu $x=y$ thì $x^3+x$ là lũy thừa của 3, hay $x(x^2+1)$ là lũy thừa của 3. Tuy nhiên, điều này không thể xảy ra vì $x^2+1$ không bao giờ chia hết cho 3.<br>
2) Xét các số nguyên dương $x,y$ thỏa mãn yêu cầu. Không mất tính tổng quát, giả sử $x \\ge y$. Ta có $x>y$. Đặt $x^3+y = 3^a$ và $y^3+x = 3^b$, $a>b$. Ta có
\\[(x+y)(x^2-xy+y^2+1) = 3^b(3^{a-b}+1),\\]
\\[(x-y)(x^2+xy+y^2-1) = 3^b(3^{a-b}-1).\\]
Giả sử $y>1$. Ta thấy rằng $0 < x-y < x+y < y^3+x = 3^b$ nên $x-y$ và $x+y$ đều không chia hết cho $3^b$. Vì thế, cả hai số $x^2-xy+y^2+1$ và $x^2+xy+y^2-1$ đều chia hết cho 3. Điều này cho thấy $x^2+y^2$ và $xy-1$ đều chia hết cho 3. Tuy nhiên, dễ thấy điều này không thể xảy ra vì khi $x^2+y^2$ chia hết cho 3 thì $x$ và $y$ đều chia hết cho 3, nên $xy-1$ không thể chia hết cho 3 được nữa.<br>
Do đó, ta bắt buộc phải có $y=1$. Suy ra $3^a = x^3+1 = (x+1)(x^2-x+1)$. Suy ra $x+1$ và $x^2-x+1$ đều là lũy thừa của 3, nên một trong hai số chia hết cho số còn lại.<br>
Nếu $x+1$ chia hết cho $x^2-x+1$ thì $x+1 \\ge x^2-x+1$, nên $x \\le 2$. Mà $x > y = 1$ nên $x=2$. Thử lại, ta thấy thỏa mãn.<br>
Nếu $x^2-x+1$ chia hết cho $x+1$ thì ta dễ dàng có 3 chia hết cho $x+1$, và lại dẫn đến $x=2$. Thử lại, ta thấy thỏa mãn.<br>
Như vậy, có hai cặp số thỏa mãn yêu cầu là $(x,y) \\in \\{(1,2), (2,1)\\}$.`
  },
  {
    id: "10hsgs26d2p3",
    title: "Bài 3 - Thi vào 10 chuyên KHTN 2026 (Vòng 2)",
    rating: 2300,
    tags: ["inequality", "optimization", "calculus"],
    contestId: "10hsgs26d2",
    createdAt: "2026-05-24T00:00:00Z",
    solutionSource: "Robloxkids",
    content: `Với các số thực không âm $a, b, c, d$ thỏa mãn đẳng thức $a + b + c + d = 1$, hãy tìm giá trị lớn nhất của biểu thức
\\[S = (a^4 + b^4 + c^4 + d^4) - (a^5 + b^5 + c^5 + d^5).\\]`,
   solution: `Xét hàm số $f(x)=x^4-x^5$, ta có $S = f(a)+f(b)+f(c)+f(d)$.<br>
<strong>Bổ đề.</strong> Với $x, y \\ge 0$ thỏa mãn $x+y = S_{xy} \\le \\dfrac{4}{5}$, ta luôn có
\\[f(x)+f(y) \\le f(x+y) + f(0).\\]
<em>Chứng minh.</em> Khai triển hiệu $H = f(x+y) - f(x) - f(y)$, ta được
\\[H = xy\\left[ S_{xy}^2(4-5S_{xy}) - xy(2-5S_{xy}) \\right].\\]
Nếu $\\dfrac{2}{5} < S_{xy} \\le \\dfrac{4}{5}$ thì $4-5S_{xy} \\ge 0$ và $2-5S_{xy} < 0 \\Rightarrow H \\ge 0$.<br>
Nếu $S_{xy} \\le \\dfrac{2}{5}$, sử dụng bất đẳng thức AM-GM, ta có $xy \\le \\dfrac{S_{xy}^2}{4}$, nên
\\[H \\ge xy\\left[ S_{xy}^2(4-5S_{xy}) - \\frac{S_{xy}^2}{4}(2-5S_{xy}) \\right] = xy \\cdot \\frac{S_{xy}^2}{4}(14-15S_{xy}).\\]
Vì $15S_{xy} \\le 6$ nên $14-15S_{xy} > 0$, hay $H \\ge 0$. Bổ đề được chứng minh.<br>
Trở lại bài toán, giả sử $a \\ge b \\ge c \\ge d \\ge 0$ thì ta có $c+d \\le \\dfrac{1}{2} < \\dfrac{4}{5}$.<br>
Áp dụng Bổ đề cho cặp $(c,d)$, sau đó tiếp tục áp dụng cho 2 biến nhỏ nhất trong 3 biến $(a,b,c+d)$ (tổng của chúng luôn $\\le \\dfrac{2}{3} < \\dfrac{4}{5}$), ta dồn bài toán về dạng chỉ còn 2 biến.<br>
Gọi 2 biến đó là $X, Y \\ge 0$ với $X+Y=1$, ta có
\\[S \\le f(X)+f(Y) = X^4(1-X) + Y^4(1-Y) = X^4Y + XY^4 = XY(X^3+Y^3)\\]
\\[\\Rightarrow S \\le XY(1-3XY).\\]
Đặt $t = XY$. Do $X+Y=1$ nên $0 \\le t \\le \\dfrac{(X+Y)^2}{4} = \\dfrac{1}{4}$.<br>
Từ đó ta có
\\[S \\le t(1-3t) = \\frac{1}{12} - 3\\left(t - \\frac{1}{6}\\right)^2 \\le \\frac{1}{12}.\\]
Vậy giá trị lớn nhất của $S$ là $\\dfrac{1}{12}$.<br>
Dấu bằng xảy ra khi và chỉ khi $(a,b,c,d) = \\left(0,0,\\dfrac{3+\\sqrt{3}}{6},\\dfrac{3-\\sqrt{3}}{6}\\right)$ và các hoán vị.`
  },
  {
    id: "10hsgs26d2p4",
    title: "Bài 4 - Thi vào 10 chuyên KHTN 2026 (Vòng 2)",
    rating: 2500,
    tags: ["geometry", "circle", "perpendicular", "harmonic division"],
    contestId: "10hsgs26d2",
    createdAt: "2026-05-24T00:00:00Z",
    solutionSource: "Robloxkids",
    content: `Cho tứ giác $ABCD$ nội tiếp đường tròn $(O)$ với $\\widehat{ADC} = \\widehat{DCB} < 90^\\circ$, giả sử có điểm $P$ nằm trong tứ giác $ABCD$ sao cho $PA \\perp AD$ và $PB \\perp BC$. Dựng hình bình hành $PAQB$. Gọi $K$ là hình chiếu vuông góc của $Q$ lên $AB$.<br>
1. Chứng minh rằng $\\widehat{KQB} = \\widehat{BCD}$.<br>
2. Gọi $H$ là hình chiếu vuông góc của $P$ lên $CD$. Chứng minh rằng $\\dfrac{HD}{HC} = \\dfrac{KB}{KA}$.<br>
3. Lấy điểm $R$ sao cho $DR \\parallel AH$ và $CR \\parallel BH$. Gọi giao điểm của hai đường thẳng $RH$ và $AB$ là $L$. Chứng minh rằng các điểm $D, C, K, L$ cùng nằm trên một đường tròn.`,
    solution: `<img src="asset/imggeo/10hsgs26d2p4.png" alt="Hình vẽ bài 4" style="display:block; margin:20px auto; max-width:100%">
<br>
1) Ta có
\\[\\angle KQB = 90^\\circ - \\angle KBQ = 90^\\circ - \\angle PAB = 180^\\circ - \\angle PAD - \\angle PAB = \\angle BCD.\\]
2) Gọi $S$ là giao điểm của $AD$ và $BC$. Khi này, ta có $SA \\cdot SD = SB \\cdot SC$. Lấy điểm $H'$ trên tia $SP$ sao cho $SP \\cdot SH' = SA \\cdot SD = SB \\cdot SC$. Vậy nên, các tứ giác $APHD$ và $BPHC$ là các tứ giác nội tiếp, suy ra $\\angle PHD = \\angle PHC = 90^\\circ$, do $\\angle PAD = \\angle PBC = 90^\\circ$, suy ra $H'$ trùng với $H$. Lại có $\\angle SAP = \\angle SBP = 90^\\circ$ và $APBQ$ là hình bình hành nên $Q$ là trực tâm tam giác $SAB$, suy ra $S, Q, K$ thẳng hàng và đồng thời $K$ là chân đường cao từ $S$ lên $AB$. Xét hai tam giác $SAB$ và $SCD$ đồng dạng với $H$, $K$ là hai chân đường cao tương ứng của $S$ lên $AB$ và $CD$, suy ra $\\dfrac{HD}{HC} = \\dfrac{KB}{KA}$.<br>
3) Gọi $SS'$ là đường kính của $(SCD)$, $AB$ cắt $CD$ tại $T$, $TS'$ cắt $(SCD)$ tại $G$, $SG$ cắt $AB$ tại $L'$, ta được $TL' \\cdot TK = TG \\cdot TS' = TC \\cdot TD$ nên $C, D, K, L'$ cùng thuộc một đường tròn. Ta chứng minh $L'$ trùng $L$.<br>
$RD$, $RC$ cắt $AB$ tại $U$, $V$ ta được $LA = LH = LB$, $LU = LR = LV$ nên
\\[\\frac{LA}{LB} = \\frac{LU}{LV} = \\frac{LU - LA}{LV - LB} = \\frac{AU}{BV}.\\]
Ta có $\\dfrac{LA}{GD} = \\dfrac{SA}{SG}$, $\\dfrac{L'B}{GC} = \\dfrac{SB}{SG}$ nên $\\dfrac{L'A}{L'B} = \\dfrac{GD}{GC} \\cdot \\dfrac{SA}{SB}$.<br>
Ta chứng minh $\\dfrac{LA}{LB} = \\dfrac{L'A}{L'B}$ hay $\\dfrac{AU}{BV} = \\dfrac{GD}{GC} \\cdot \\dfrac{SA}{SB}$.<br>
Ta có $\\dfrac{GD}{GC} \\cdot \\dfrac{S'C}{S'D} = \\dfrac{TD}{TC}$ nên $\\dfrac{GD}{GC} = \\dfrac{TD}{TC} \\cdot \\dfrac{S'C}{S'D} = \\dfrac{TD}{TC} \\cdot \\dfrac{PA}{PB} = \\dfrac{TD}{TC} \\cdot \\dfrac{PA}{PS} \\cdot \\dfrac{PS}{PB} = \\dfrac{TD}{TC} \\cdot \\dfrac{DH}{DS} \\cdot \\dfrac{CS}{CH} = \\dfrac{TD}{TC} \\cdot \\dfrac{HD}{HC} \\cdot \\dfrac{SC}{SD}.$<br>
Ta cần chứng minh
\\[\\frac{AU}{BV} = \\left(\\frac{TD}{TC} \\cdot \\frac{HD}{HC} \\cdot \\frac{SC}{SD}\\right) \\cdot \\frac{SA}{SB} = \\frac{TD}{TC} \\cdot \\frac{HD}{HC} \\cdot \\frac{SA^2}{SB^2}.\\]
Theo Talet, ta có $\\dfrac{AU}{AT} = \\dfrac{HD}{HT}$, $\\dfrac{BV}{BT} = \\dfrac{HC}{HT}$ nên $\\dfrac{AU}{BV} = \\dfrac{TA}{TB} \\cdot \\dfrac{HD}{HC}$. Do đó điều cần chứng minh tương đương với
\\[\\frac{TA}{TB} = \\frac{TD}{TC} \\cdot \\frac{SA^2}{SB^2} \\iff \\frac{TA}{TD} \\cdot \\frac{TC}{TB} = \\frac{SA^2}{SB^2} \\iff \\frac{TC^2}{TB^2} = \\frac{SA^2}{SB^2} \\iff \\frac{TC}{TB} = \\frac{SA}{SB}.\\]
Lấy $A'$ thuộc $AB$ sao cho $SA = SA'$, ta được $\\triangle SA'B \\sim \\triangle TCB$ (g.g) nên $\\dfrac{TC}{TB} = \\dfrac{SA'}{SB} = \\dfrac{SA}{SB}$.<br>
Vậy ta có điều phải chứng minh.`
  },
  {
    id: "10hsgs26d2p5",
    title: "Bài 5 - Thi vào 10 chuyên KHTN 2026 (Vòng 2)",
    rating: 3000,
    tags: ["combinatorics", "optimization", "sequences"],
    contestId: "10hsgs26d2",
    createdAt: "2026-05-24T00:00:00Z",
    solutionSource: "Robloxkids",
    content: `Với mỗi dãy số $a_1, a_2, \\ldots, a_{600}$ gồm 600 số nguyên dương, ký hiệu $m$ là số bộ $(a_i, a_j, a_k)$ với $1 \\le i < j < k \\le 600$ thỏa mãn $a_j = a_i + 1$ và $a_k = a_j + 1$. Xét tất cả các dãy số như trên, hãy tìm giá trị lớn nhất có thể của $m$.`,
    solution: `Với mỗi số $i$ nguyên dương, ta đặt $b_i$ là số lần $i$ xuất hiện trong dãy số $a_1, a_2, \\ldots, a_{600}$, và giả sử $n$ là số lớn nhất có trong dãy 600 số nguyên dương này. Vậy nên, ta có $b_1 + b_2 + \\cdots + b_n = 600$. Khi này, mỗi dãy $(i, i+1, i+2)$ xuất hiện trong dãy này tối đa $b_i b_{i+1} b_{i+2}$ lần. Vậy nên, ta sẽ cần đi tìm giá trị lớn nhất của tổng
\\[S = b_1 b_2 b_3 + b_2 b_3 b_4 + \\cdots + b_{n-2} b_{n-1} b_n.\\]
Lúc này, đặt $A$ là tổng các số $b_i$ có chỉ số chia 3 dư 1, và không vượt quá $n$, tương tự với $B$ và $C$. Vì mỗi hạng tử trong tổng $S$ là tích của 3 số mà chỉ số của 3 số nhận 3 số dư khác nhau khi chia 3, nên khi phân tích $ABC$ ra ta chắc chắn sẽ tìm được hạng tử đó. Vậy nên $S \\le ABC$.<br>
Và
\\[ABC \\le \\frac{(A+B+C)^3}{27} = \\frac{600^3}{27} = 200^3.\\]
Vậy $m_{\\max} = 200^3$. Dấu bằng xảy ra chẳng hạn khi $a_1 = a_2 = \\cdots = a_{200} = 1$, $a_{201} = a_{202} = \\cdots = a_{400} = 2$, $a_{401} = a_{402} = \\cdots = a_{600} = 3$.`
  },
  {
  id: "10hsgs25d1p1",
  title: "Bài 1 - Thi vào 10 chuyên KHTN 2025 (Vòng 1)",
  rating: 2000,
  tags: ["algebra", "equations", "systems"],
  
  contestId: "10hsgs25d1",
  createdAt: "2025-06-01T00:00:00Z",
  solutionSource: "Cmath",
  content: `a) Giải phương trình
\\[x + 2\\sqrt{(x+1)(x+6)} + 2\\sqrt{x+1} = 2 + 2\\sqrt{x+6}.\\]
b) Giải hệ phương trình
\\[\\begin{cases} x^2 + 6y^2 + 7xy + x + 6y = 21, \\\\ 21(22 - 5y^2 - 5xy + x - 4y) = 27(x + 6y). \\end{cases}\\]`,
  solution: `a) Cách 1. Điều kiện: $x \\ge -1$. Đặt $a = \\sqrt{x+1}$ và $b = \\sqrt{x+6}$, khi đó phương trình có thể được viết lại thành
\\[a^2 - 1 + 2ab + 2a = 2 + 2b,\\]
hay
\\[2b(a-1) + a^2 + 2a - 3 = 0.\\]
Một cách tương đương, ta được
\\[(a-1)(2b + a + 3) = 0.\\]
Mà $2b + a + 3 > 0$ nên $a = 1$, hay $\\sqrt{x+1} = 1$. Từ đó, ta có $x = 0$ (thử lại thỏa mãn). Vậy, phương trình đã cho có nghiệm duy nhất $x = 0$.<br>
Cách 2. Điều kiện: $x \\ge -1$. Để thấy $x = 0$ là nghiệm của phương trình. Xét trường hợp $x \\ne 0$, khi đó phương trình có thể được viết lại thành
\\[x = 2\\left(1 - \\sqrt{x+1}\\right)\\left(\\sqrt{x+6} + 1\\right),\\]
hay
\\[x = -\\frac{2x}{1 + \\sqrt{x+1}} \\cdot \\left(\\sqrt{x+6} + 1\\right).\\]
Một cách tương đương, ta có
\\[1 = -\\frac{2}{1 + \\sqrt{x+1}} \\cdot \\left(\\sqrt{x+6} + 1\\right),\\]
mâu thuẫn vì vế phải có giá trị âm. Vậy, phương trình đã cho có nghiệm duy nhất $x = 0$.<br>
b) Phương trình thứ nhất của hệ có thể được viết lại thành $(x + 6y)(x + y + 1) = 21$. Thay vào phương trình thứ hai của hệ, ta được
\\[(x + 6y)(x + y + 1)\\left[(x + 6y)(x + y + 1) + 1 - 5y^2 - 5xy + x - 4y\\right] = 27(x + 6y),\\]
hay
\\[(x + 6y)(x + y + 1) \\cdot (x + y + 1)^2 = 27(x + 6y).\\]
Từ đây, với chú ý $x + 6y \\ne 0$ (suy ra từ phương trình thứ nhất), ta được $x + y = 2$. Kết hợp với $(x + 6y)(x + y + 1) = 21$, ta được $x + 6y = 7$. Từ đó $x = y = 1$. Thử lại thỏa mãn. Vậy, hệ phương trình đã cho có nghiệm duy nhất $(x, y) = (1, 1)$.`
},
{
  id: "10hsgs25d1p2",
  title: "Bài 2 - Thi vào 10 chuyên KHTN 2025 (Vòng 1)",
  rating: 2100,
  tags: ["number theory", "inequality"],
  contestId: "10hsgs25d1",
  createdAt: "2025-06-01T00:00:00Z",
  solutionSource: "Cmath",
  content: `a) Tìm tất cả các cặp số nguyên $x, y$ thoả mãn
\\[y + \\frac{1}{y} = \\frac{x^4 + 6x^2 + 1}{2x(x^2 + 1)}.\\]
b) Xét các số thực dương $a, b, c$ thỏa mãn $a + b + c = \\frac{3}{2}$, tìm giá trị nhỏ nhất của biểu thức
\\[M = \\frac{\\sqrt[3]{a}}{(2 - a)^2(a + 2b)} + \\frac{\\sqrt[3]{b}}{(2 - b)^2(b + 2c)} + \\frac{\\sqrt[3]{c}}{(2 - c)^2(c + 2a)}.\\]`,
  solution: `a) Điều kiện: $x, y \\ne 0$. Chú ý rằng nếu $(x, y)$ là nghiệm thì $(-x, -y)$ cũng là nghiệm và $x, y$ cùng dấu nên không mất tính tổng quát, ta có thể giả sử $x, y > 0$.<br>
Cách 1. Từ giả thiết, ta có $y + \\frac{1}{y} = \\frac{x^2 + 1}{2x} + \\frac{2x}{x^2 + 1}$. Chuyển về, phân tích nhân tử, ta được
\\[\\left( y - \\frac{x^2 + 1}{2x} \\right) \\left[ 1 - \\frac{2x}{y(x^2 + 1)} \\right] = 0.\\]
Từ đó, ta có hai trường hợp sau.<br>
- Trường hợp 1: $y = \\frac{x^2 + 1}{2x}$. Trong trường hợp này, với chú ý $y$ là số nguyên, ta suy ra $x^2 + 1$ chia hết cho $x$. Từ đó 1 chia hết cho $x$, kéo theo $x = 1$ (do $x > 0$). Suy ra $y = 1$. Thử lại thỏa mãn.<br>
- Trường hợp 2: $1 - \\frac{2x}{y(x^2 + 1)} = 0$. Trong trường hợp này, ta có $\\frac{2x}{x^2 + 1} = y$. Chú ý rằng $0 < \\frac{2x}{x^2 + 1} \\le 1$, ta có $0 < y \\le 1$, suy ra $y = 1$. Từ đó $\\frac{2x}{x^2 + 1} = 1$, hay $(x - 1)^2 = 0$. Suy ra $x = 1$. Thử lại thỏa mãn.<br>
Vậy, có tất cả hai cặp số $(x, y)$ thỏa mãn yêu cầu đề bài là $(1, 1)$ và $(-1, -1)$.<br>
Cách 2. Phương trình có thể được viết lại thành
\\[2x(x^2 + 1)(y^2 + 1) = y(x^4 + 6x^2 + 1).\\]
Từ đây, ta suy ra $y(x^4 + 6x^2 + 1)$ chia hết cho $x$. Mà $(x^4 + 6x^2 + 1, x) = 1$ nên $y$ chia hết cho $x$. Bây giờ, đặt $y = kx$ với $k$ nguyên dương. Phương trình có thể được viết lại thành
\\[2(x^2 + 1)(k^2x^2 + 1) = k(x^4 + 6x^2 + 1). \\tag{1}\\]
Với $x = 1$, thay vào phương trình trên, ta dễ dàng tìm được $k = 1$. Từ đó $y = 1$. Thử lại thỏa mãn. Với $k = 1$, thay vào phương trình trên, ta dễ dàng tìm được $x = 1$. Từ đó $x = 1$. Thử lại thỏa mãn. Xét trường hợp $x \\ge 2$ và $k \\ge 2$. Khi đó, phương trình (1) không thể thỏa mãn, vì
\\[2(x^2 + 1)(k^2x^2 + 1) > 2k^2x^2(x^2 + 1) \\ge 4kx^2(x^2 + 1) = k(4x^4 + 4x^2) > k(x^4 + 6x^2 + 1).\\]
Vậy, có tất cả hai cặp số $(x, y)$ thỏa mãn yêu cầu đề bài là $(1, 1)$ và $(-1, -1)$.<br>
b) Cách 1. Sử dụng bất đẳng thức Cauchy-Schwarz, ta có
\\[M = \\frac{\\left(\\frac{\\sqrt[3]{a}}{2-a}\\right)^2}{\\frac{a}{a+2b}} + \\frac{\\left(\\frac{\\sqrt[3]{b}}{2-b}\\right)^2}{\\frac{b}{b+2c}} + \\frac{\\left(\\frac{\\sqrt[3]{c}}{2-c}\\right)^2}{\\frac{c}{c+2a}} \\ge \\frac{\\left(\\frac{\\sqrt[3]{a}}{2-a} + \\frac{\\sqrt[3]{b}}{2-b} + \\frac{\\sqrt[3]{c}}{2-c}\\right)^2}{\\frac{a+b+c}{a+b+c}}.\\]
Mặt khác, theo bất đẳng thức AM-GM, với mọi $0 < x < \\frac{3}{2}$, thì
\\[\\frac{\\sqrt[3]{x^2}}{2-x} = \\frac{x}{\\sqrt[3]{x(2-x)}} = \\frac{1}{\\sqrt[3]{4}} \\cdot \\frac{x}{\\sqrt[3]{x \\cdot \\frac{1}{2} \\cdot \\frac{1}{2}(2-x)}} \\ge \\frac{1}{\\sqrt[3]{4}} \\cdot \\frac{3x}{(x+\\frac{1}{2}+\\frac{1}{2})(2-x)}\\]
\\[= \\frac{3}{\\sqrt[3]{4}} \\cdot \\frac{x}{(x+1)(2-x)} \\ge \\frac{3}{\\sqrt[3]{4}} \\cdot \\frac{x}{\\left(\\frac{x+1+2-x}{2}\\right)^2} = \\frac{3}{\\sqrt[3]{4}} \\cdot \\frac{4}{9} \\cdot x = \\frac{4}{3\\sqrt[3]{4}}x.\\]
Sử dụng đánh giá này, ta có
\\[\\frac{\\sqrt[3]{a}}{2-a} + \\frac{\\sqrt[3]{b}}{2-b} + \\frac{\\sqrt[3]{c}}{2-c} \\ge \\frac{4}{3\\sqrt[3]{4}}(a+b+c) = \\sqrt[3]{2}.\\]
Do đó
\\[M \\ge \\frac{4\\left(\\sqrt[3]{2}\\right)^2}{9} = \\frac{4\\sqrt[3]{4}}{9}.\\]
Mặt khác, với $a = b = c = \\frac{1}{2}$ thì $M = \\frac{4\\sqrt[3]{4}}{9}$. Vậy $\\min M = \\frac{4\\sqrt[3]{4}}{9}$.<br>
Cách 2. Sử dụng bất đẳng thức AM-GM, ta có
\\[\\frac{\\sqrt[3]{a}}{(2-a)^2(a+2b)} = \\frac{3a\\sqrt[3]{4}}{3\\sqrt[3]{2a \\cdot 2a \\cdot 1 \\cdot (2-a)^2} \\cdot (a+2b)} \\ge \\frac{3a\\sqrt[3]{4}}{(4a+1)(2-a)^2(a+2b)}.\\]
Tiếp tục sử dụng AM-GM, ta có
\\[\\frac{3a\\sqrt[3]{4}}{(4a+1)(2-a)^2(a+2b)} \\ge \\frac{27 \\cdot 3a\\sqrt[3]{4}}{(4a+1+4-2a+4-2a+a+2b)^3} = \\frac{4a\\sqrt[3]{4}}{9}.\\]
Chứng minh tương tự, ta cũng có
\\[\\frac{\\sqrt[3]{b}}{(2-b)^2(b+2c)} \\ge \\frac{4b\\sqrt[3]{4}}{9}, \\quad \\frac{\\sqrt[3]{c}}{(2-c)^2(c+2a)} \\ge \\frac{4c\\sqrt[3]{4}}{9}.\\]
Từ đó, theo bất đẳng thức Cauchy-Schwarz, ta có
\\[M \\ge \\frac{4\\sqrt[3]{4}}{9} \\left( \\frac{a}{a+2b} + \\frac{b}{b+2c} + \\frac{c}{c+2a} \\right) \\ge \\frac{4\\sqrt[3]{4}}{9} \\cdot \\frac{(a+b+c)^2}{a^2+b^2+c^2+2ab+2bc+2ca} = \\frac{4\\sqrt[3]{4}}{9}.\\]
Dấu đẳng thức xảy ra khi và chỉ khi $a = b = c = \\frac{1}{2}$. Vậy $\\min M = \\frac{4\\sqrt[3]{4}}{9}$.`
},
{
  id: "10hsgs25d1p3",
  title: "Bài 3 - Thi vào 10 chuyên KHTN 2025 (Vòng 1)",
  rating: 2500,
  tags: ["geometry", "circle", "perpendicular", "similar triangles"],
  contestId: "10hsgs25d1",
  createdAt: "2025-06-01T00:00:00Z",
  solutionSource: "Cmath",
  content: `Cho tam giác $ABC$ nhọn, không cân. Trên các cạnh $CA$ và $AB$, lần lượt lấy các điểm $E, F$ (không trùng các đỉnh của tam giác) sao cho $AE = AF$. Trên đường thẳng $EF$, lấy các điểm $M, N$ sao cho đường thẳng $CM$ vuông góc với đường thẳng $CA$ và đường thẳng $BN$ vuông góc với đường thẳng $BA$. Gọi $K$ là giao điểm của hai đường thẳng $BN$ và $CM$.

<br> a) Chứng minh rằng $KM = KN$.

<br> b) Dựng các hình bình hành $ANQF$ và $AMRE$. Chứng minh rằng $\\angle NQK = \\angle MRK$.

<br> c) Gọi $L, J$ lần lượt là hình chiếu vuông góc của các điểm $M, N$ trên đường thẳng $BC$; $S$ là giao điểm của hai đường thẳng $JF$ và $LE$; $T$ là điểm đối xứng với điểm $S$ qua đường thẳng $EF$. Chứng minh rằng ba điểm $A, T, K$ thẳng hàng.`,
  solution: `<img src="asset/imggeo/10hsgs25d1p3.png" alt="Hình vẽ bài 3" style="display:block; margin:20px auto; max-width:100%">
<br>
a) Do $AE = AF$ nên tam giác $AEF$ cân tại đỉnh $A$, suy ra $\\angle AEF = \\angle AFE$. Từ đó $\\angle BFN = \\angle CEM$. Bây giờ, xét hai tam giác $BFN$ và $CEM$, có $\\angle BFN = \\angle CEM$ và $\\angle FBN = \\angle ECM = 90^\\circ$ (do $BN \\perp BA$, $CM \\perp CA$) nên $\\triangle BFN \\sim \\triangle CEM$ (g-g). Từ đó $\\angle BNF = \\angle CME$, hay $\\angle KNM = \\angle KMN$. Suy ra tam giác $KMN$ cân tại đỉnh $K$, từ đây ta có $KM = KN$.<br>
b) Do tứ giác $ANQF$ là hình bình hành nên $NQ = AF$ và $NQ \\parallel AF$. Vì $NQ \\parallel AF$ và $BN \\perp BA$ nên $NQ \\perp NK$, từ đó $\\angle KNQ = 90^\\circ$. Chứng minh tương tự, ta cũng có $MR = AE$ và $\\angle KMR = 90^\\circ$. Từ đó $NQ = MR$ và $\\angle KNQ = \\angle KMR = 90^\\circ$. Kết hợp với $KN = KM$, ta suy ra hai tam giác $KNQ$ và $KMR$ bằng nhau (c-g-c), từ đó $\\angle NQK = \\angle MRK$.<br>

c) Qua điểm $K$, kẻ đường thẳng song song với đường thẳng $EF$, cắt các đường thẳng $AC$ và $AB$ theo thứ tự tại các điểm $X, Z$. Kẻ đường thẳng $KH$ vuông góc với đường thẳng $BC$ tại điểm $H$.<br>
Vì $KH \\parallel NJ$ và $KZ \\parallel FN$ nên $\\frac{BK}{BZ} = \\frac{BH}{BJ}$, suy ra $FJ \\parallel HZ$. Chứng minh tương tự, ta cũng có $HX \\parallel EL$.<br>
Do $XZ \\parallel EF$, $HZ \\parallel SF$ và $HX \\parallel ES$ nên hai tam giác $SEF$ và $HXZ$ đồng dạng (g-g). Từ đó $\\frac{SE}{HX} = \\frac{EF}{XZ} = \\frac{AE}{AX}$, suy ra hai tam giác $AES$ và $AXH$ đồng dạng (c-g-c). Do đó $\\angle SAE = \\angle HAX$. Từ đây, ta suy ra ba điểm $A, S, H$ thẳng hàng.<br>
Chú ý rằng tứ giác $ABKC$ nội tiếp đường tròn đường kính $AK$, do đó $\\angle KAB = \\angle KCH$. Mà $\\angle KBA = \\angle KHC = 90^\\circ$ nên $\\angle AKB = \\angle HKC$. Lại có $AE = AF$ và $EF \\parallel XZ$ nên $AX = AZ$, suy ra $\\angle AXZ = \\angle AZX$. Từ đó $\\angle BKZ = \\angle CKX$. Suy ra $\\angle AKZ = \\angle HKX$.<br>
Gọi $G$ là điểm đối xứng với điểm $H$ qua đường thẳng $XZ$. Ta có $\\angle XKG = \\angle XKH = \\angle AKZ$ nên ba điểm $A, K, G$ thẳng hàng. Đến đây, với chú ý $\\angle TEF = \\angle SEF = \\angle ZXH = \\angle ZXG$ và $\\angle AES = \\angle AXH$, ta có $\\angle AET = \\angle AXG$.<br>
Xét hai tam giác $AET$ và $AXG$, có $\\frac{AE}{AX} = \\frac{ES}{XH} = \\frac{ET}{XG}$ và $\\angle AET = \\angle AXG$ nên hai tam giác này đồng dạng (c-g-c). Suy ra $\\angle EAT = \\angle XAG$, do đó ba điểm $A, T, G$ thẳng hàng. Từ đây, ta suy ra ba điểm $A, T, K$ thẳng hàng.`
},
{
  id: "10hsgs25d1p4",
  title: "Bài 4 - Thi vào 10 chuyên KHTN 2025 (Vòng 1)",
  rating: 3000,
  tags: ["combinatorics", "geometry", "optimization"],
  contestId: "10hsgs25d1",
  createdAt: "2025-06-01T00:00:00Z",
  solutionSource: "Cmath",
  content: `Tìm số nguyên dương $k$ nhỏ nhất sao cho với mọi cách sắp xếp 99 điểm màu đỏ và 100 điểm màu xanh trên mặt phẳng (không có ba điểm nào thẳng hàng), ta luôn vẽ được $k$ đường thẳng, mỗi đường thẳng không đi qua điểm nào trong các điểm trên và các đường thẳng đó chia mặt phẳng thành các miền mà trong mỗi miền không có hai điểm khác màu.`,
  solution: `Xét cấu hình gồm 99 điểm màu đỏ và 99 điểm màu xanh xếp xen kẽ nhau trên đường tròn. Nếu kẻ được $k$ đường thẳng mà chia được mặt phẳng thành các miền mà không có hai điểm khác màu thì $k$ đường thẳng này chia đường tròn thành không quá $2k$ cung tròn rời nhau. Ta thấy mỗi cung tròn này chỉ chứa nhiều nhất một điểm xanh hoặc một điểm đỏ (thật vậy, nếu tồn tại cung chứa không ít hơn hai điểm thì hai điểm đó phải cùng màu và nếu hai điểm đó cùng màu thì sẽ có một điểm khác màu nằm giữa dẫn tới vô lý). Như vậy, $k$ đường thẳng này phải chia đường tròn thành không ít hơn $2 \\cdot 99$ cung tròn. Từ đây, ta có $2k \\ge 2 \\cdot 99$, hay $k \\ge 99$.<br>
Ta chứng minh rằng với $k = 99$ thì ta luôn có thể kẻ được 99 đường chia 99 điểm đỏ và 100 điểm xanh vào các miền mà mỗi miền không có điểm khác màu. Để ý rằng ban đầu, với hai điểm $A, B$ cùng màu thì ta có thể kẻ hai đường thẳng song song với cạnh $AB$ và gần $AB$ để tạo ra một miền mới mà miền này chỉ chứa đúng hai điểm $A$ và $B$ do không có điểm nào nằm trên đường thẳng $AB$. (1)<br>
Xét bao lồi của các điểm là $S$.<br>
- Nếu bao lồi có một điểm đỏ thì ta kẻ được một đường thẳng tách điểm đỏ này với các điểm xanh. Với 98 điểm đỏ còn lại, ta chia các điểm này thành 49 cặp rồi áp dụng nhận xét (1) liên tiếp 49 lần, tương ứng với mỗi cặp thì ta kẻ thêm 2 đường nữa. Như vậy, ta đã kẻ được tất cả 99 đường và sau khi kẻ thì mỗi điểm đỏ sẽ nằm trong miền chỉ chứa toàn điểm đỏ.<br>
- Nếu bao lồi gồm toàn điểm xanh thì kẻ một đường thẳng song song, đủ gần cạnh của bao lồi thì ta tách được hai điểm xanh ra một miền mới. Từ đó, còn 98 điểm xanh, ta chia các điểm này thành 49 cặp rồi áp dụng nhận xét (1) liên tiếp 49 lần, tương ứng với mỗi cặp thì ta kẻ thêm 2 đường nữa. Sau khi kẻ 99 đường này thì mỗi điểm xanh sẽ nằm trong miền chỉ chứa toàn điểm xanh.<br>
Vậy $k_{\\min} = 99$.`
},

{
  id: "10hsgs26d1p1",
  title: "Bài 1 - Thi vào 10 chuyên KHTN 2026 (Vòng 1)",
  rating: 2100,
  subRatings: [
    { label: "a", value: 1900 },
    { label: "b", value: 2100 }
  ],
  tags: ["Đại số", "Phương trình", "Hệ phương trình"],
  contestId: "10hsgs26d1",
  createdAt: "2026-05-23T00:00:00Z",
  solutionSource: "Cmath",
  content: `a) Giải phương trình<br>
\\[\\sqrt{x+1} + \\sqrt[4]{3x^2 - 2x + 1} = \\sqrt[4]{2x^2 - x + 1} + \\sqrt[4]{x^2 + 1}\\]<br>
b) Giải hệ phương trình<br>
\\[\\begin{cases} 2x + 3y + 6xy = 2, \\\\ 3(4x^2 + 9y^2) = 6xy(4x^2 + 9y^2) + 30xy + 12. \\end{cases}\\]`,
  solution: `a) Điều kiện xác định: $x \\ge -1$.<br>
Đặt $a = \\sqrt{x+1}$, $b = \\sqrt[4]{3x^2 - 2x + 1}$, $c = \\sqrt[4]{2x^2 - x + 1}$, $d = \\sqrt[4]{x^2 + 1}$ với $a \\ge 0$, $b, c, d > 0$.<br>
Khi đó ta có $a + b = c + d$ và $a^4 + b^4 = c^4 + d^4$.<br>
Ta có $(a + b)^4 = (c + d)^4$ hay<br>
\\[a^4 + b^4 + 4ab(a + b)^2 - 2a^2b^2 = c^4 + d^4 + 4cd(c + d)^2 - 2c^2d^2.\\]<br>
Rút gọn biểu thức ta được<br>
\\[2ab(a + b)^2 - a^2b^2 = 2cd(a + b)^2 - c^2d^2\\]<br>
hay<br>
\\[2(a + b)^2(ab - cd) = (ab + cd)(ab - cd).\\]<br>
Do đó $(ab - cd)(2a^2 + 3ab + 2b^2 - cd) = 0$.<br>
<strong>Trường hợp 1:</strong> $ab = cd$ và $a + b = c + d$. Khi đó<br>
\\[(a - c)(a - d) = a^2 + cd - a(c + d) = a^2 + ab - a(a + b) = 0\\]<br>
nên $a = c, b = d$ hoặc $a = d, b = c$.<br>
Giải các trường hợp ta đều được các nghiệm là $x = 0$, $x = 1$ (thử lại thỏa mãn).<br>
<strong>Trường hợp 2:</strong> $2a^2 + 3ab + 2b^2 - cd = 2(a + b)^2 - (ab + cd) = (a + b)^2 + (c + d)^2 - (ab + cd) \\ge 4(ab + cd) - (ab + cd) > 0$ với $a \\ge 0$, $b, c, d > 0$.<br>
Vậy phương trình đã cho có các nghiệm là $x = 0$ và $x = 1$.<br>
b) Đặt $S = 2x + 3y$ và $P = 6xy$, khi đó hệ phương trình có thể được viết lại thành<br>
\\[\\begin{cases} S + P = 2, \\\\ 3(S^2 - 2P) = P(S^2 - 2P) + 5P + 12. \\end{cases}\\]<br>
Thay $P = 2 - S$ từ phương trình thứ nhất vào phương trình thứ hai, ta được<br>
\\[3(S^2 + 2S - 4) = (2 - S)(S^2 + 2S - 4) + 5(2 - S) + 12,\\]<br>
hay<br>
\\[(S - 2)(S^2 + 5S + 13) = 0.\\]<br>
Từ đó $S = 2$ và $P = 0$. Giải ra, ta thấy hệ phương trình đã cho có tất cả hai nghiệm $(x, y)$ là $(1, 0)$ và $(0, \\frac{2}{3})$.`
},
{
  id: "10hsgs26d1p2",
  title: "Bài 2 - Thi vào 10 chuyên KHTN 2026 (Vòng 1)",
  rating: 2300,
  subRatings: [
    { label: "a", value: 2000 },
    { label: "b", value: 2300 }
  ],
  tags: ["Số học", "Phương trình nghiệm nguyên", "Bất đẳng thức"],
  contestId: "10hsgs26d1",
  createdAt: "2026-05-23T00:00:00Z",
  solutionSource: "Cmath",
  content: `a) Tìm tất cả các số nguyên $x, y$ thỏa mãn<br>
\\[8x^3 + 27y^3 = 18xy + 4x + 6y + 4.\\]<br>
b) Ký hiệu $\\sum_{i=1}^n a_i = a_1 + a_2 + \\cdots + a_n$. Với $y_1, y_2, \\ldots, y_6$ là các số thực bất kỳ, tìm giá trị lớn nhất của biểu thức<br>
\\[M = \\sum_{i=1}^6 \\left( \\frac{2y_i}{1 + y_i^2} \\right)^2 \\left( \\frac{2y_{i+1}}{1 + y_{i+1}^2} - \\frac{2y_{i-1}}{1 + y_{i-1}^2} \\right),\\]<br>
trong đó $y_0 = y_6$ và $y_7 = y_1$.`,
  solution: `a) Đặt $S = 2x + 3y$ và $P = 6xy$. Khi đó, phương trình có thể được viết lại thành $S^3 - 3SP = 3P + 2S + 4$, hay<br>
\\[3(S + 1)P = S^3 - 2S - 4.\\]<br>
Rõ ràng $S \\neq -1$. Từ phương trình trên, ta suy ra $S^3 - 2S - 4$ chia hết cho $S + 1$. Mà $S^3 - 2S - 4 = (S^3 + 1) - 2(S + 1) - 3$ nên 3 chia hết cho $S + 1$, suy ra $S + 1 \\in \\{-1, 1, -3, 3\\}$, tức $S \\in \\{-2, 0, -4, 2\\}$.<br>
Chú ý là từ phương trình, ta cũng có $S^3 - 2S - 4$ chia hết cho 18. Vì thế $S = 2$ và như thế $P = 0$. Giải ra, ta thấy có duy nhất một cặp số nguyên $(x, y)$ thỏa mãn yêu cầu là $(1, 0)$.<br>
b) Đặt $x_i = \\frac{2y_i}{y_i^2 + 1}$ với mọi $1 \\le i \\le 6$, khi đó ta có $-1 \\le x_i \\le 1$ với mọi $1 \\le i \\le 6$ và<br>
\\[M = x_1^2(x_2 - x_6) + x_2^2(x_3 - x_1) + x_3^2(x_4 - x_2) + x_4^2(x_5 - x_3) + x_5^2(x_6 - x_4) + x_6^2(x_1 - x_5)\\]<br>
\\[= x_1x_2(x_1 - x_2) + x_2x_3(x_2 - x_3) + x_3x_4(x_3 - x_4) + \\cdots + x_6x_1(x_6 - x_1)\\]<br>
\\[= -\\frac{1}{3}((x_1 - x_2)^3 + (x_2 - x_3)^3 + \\cdots + (x_6 - x_1)^3).\\]<br>
Đặt $z_i = x_i - x_{i+1}$ với mọi $1 \\le i \\le 6$, trong đó $x_7 = x_1$, thì $-2 \\le z_i \\le 2$ với mọi $1 \\le i \\le 6$ và $z_1 + z_2 + \\cdots + z_6 = 0$. Lúc này<br>
\\[M = -\\frac{1}{3}(z_1^3 + z_2^3 + \\cdots + z_6^3).\\]<br>
Ta có $(z_i - 1)^2(z_i + 2) \\ge 0$, vì thế $z_i^3 \\ge 3z_i - 2$ với mọi $1 \\le i \\le 6$. Từ đây, ta được<br>
\\[M \\le -\\frac{1}{3}(3(z_1 + z_2 + \\cdots + z_6) - 12) = 4.\\]<br>
Mặt khác, với $y_1 = -1, y_2 = 1, y_3 = 0, y_4 = -1, y_5 = 1, y_6 = 0$, thì $M = 4$. Vậy, giá trị lớn nhất của biểu thức $M$ là $4$.`
},
{
  id: "10hsgs26d1p3",
  title: "Bài 3 - Thi vào 10 chuyên KHTN 2026 (Vòng 1)",
  rating: 2600,
  subRatings: [
    { label: "a", value: 2200 },
    { label: "b", value: 2400 },
    { label: "c", value: 2600 }
  ],
  tags: ["Hình học", "Đường tròn", "Đồng dạng", "Trực tâm"],
  contestId: "10hsgs26d1",
  createdAt: "2026-05-23T00:00:00Z",
  solutionSource: "Cmath",
  content: `Cho hình thoi $ABCD$ với $\\angle BAD < 90^\\circ$. Trên cạnh $AD$, lấy điểm $M$ ($M$ khác $A$ và $D$). Các đường thẳng $CM$ và $AB$ cắt nhau tại điểm $Q$.<br>
a) Chứng minh rằng hai tam giác $BCQ$ và $DMC$ đồng dạng.<br>
b) Trên cạnh $AB$, lấy điểm $N$ ($N$ khác $A$ và $B$). Đường thẳng $CN$ cắt đường thẳng $AD$ tại điểm $R$. Chứng minh rằng $\\frac{BN}{BQ} = \\frac{DM}{DR}$.<br>
c) Gọi $(O)$ là đường tròn tiếp xúc với các đường thẳng $AB$ và $AD$ lần lượt tại các điểm $B$ và $D$. Giả sử tiếp tuyến qua điểm $R$ (khác $RD$) và tiếp tuyến qua điểm $Q$ (khác $QB$) của đường tròn $(O)$ cắt nhau tại điểm $P$. Gọi giao điểm của hai đường thẳng $AP$ và $QR$ là $S$. Chứng minh rằng đường thẳng $CS$ đi qua trung điểm của đoạn thẳng $MN$.`,
  solution: `<img src="asset/imggeo/10hsgs26d1p3.png" alt="Hình vẽ bài 3" style="display:block; margin:20px auto; max-width:100%">
<br>
a) Vì tam giác $ABC$ cân tại $A$ có $O$ là trung điểm $BC$ nên $AO$ là tia phân giác của $\\widehat{BAC}$ và $AO \\perp BC$ tại $O$, suy ra $FM$ và $EN$ song song với $AO$, kéo theo $\\widehat{BFM} = \\widehat{BAO}$ và $\\widehat{CEN} = \\widehat{CAO}$, dẫn đến $\\widehat{BFM} = \\widehat{CEN}$.<br>
- Xét tam giác $OFB$ có trực tâm $H$ nên $\\widehat{BOQ} = \\widehat{BFM}$, do hai góc này cùng phụ với $\\widehat{ABC}$.<br>
- Xét tam giác $OEC$ có trực tâm $K$ nên $\\widehat{COR} = \\widehat{CEN}$, do hai góc này cùng phụ với $\\widehat{ACB}$.<br>
Từ đó ta được $\\widehat{BOQ} = \\widehat{COR}$.<br>
Xét tam giác $OHM$ vuông tại $M$ và tam giác $OKN$ vuông tại $N$ có $\\widehat{BOQ} = \\widehat{COR}$ nên hai tam giác $OHM$, $OKN$ đồng dạng. Điều này dẫn đến $\\frac{OK}{OH} = \\frac{ON}{OM}$ (hai cạnh tương ứng).<br>
b) Chứng minh tương tự câu a), ta thấy hai tam giác $BNC$ và $DCR$ đồng dạng (g-g). Suy ra $\\frac{BN}{DC} = \\frac{BC}{DR}$, dẫn đến $BN \\cdot DR = BC^2$. (1)<br>
Từ câu a), ta có $\\frac{BC}{DM} = \\frac{BQ}{DC}$, dẫn đến $BQ \\cdot DM = BC^2$. (2)<br>
Từ (1) và (2), ta suy ra $BN \\cdot DR = BQ \\cdot DM$, hay $\\frac{BN}{BQ} = \\frac{DM}{DR}$.<br>
c) Trước hết, ta chứng minh bổ đề sau.<br>
<strong>Bổ đề.</strong> Cho tứ giác $XYQR$ thỏa mãn tồn tại đường tròn (O) tiếp xúc với các đoạn thẳng $QX$, $RY$ tương ứng tại các điểm $B$, $D$ và tiếp xúc với các tia đối của các tia $XR$, $YQ$ tương ứng tại $U$, $V$. Khi đó, các đường thẳng $XY$, $QR$, $BD$, $UV$ đồng quy tại điểm $Z$ thỏa mãn $\\frac{ZQ}{ZR} = \\frac{BQ}{DR}$.<br>
<em>Chứng minh bổ đề.</em> Gọi $Z$ là giao điểm của hai đường thẳng $QR$ và $BD$. Kẻ đường thẳng $RR'$ song song với đường thẳng $BQ$, cắt đường thẳng $BD$ tại điểm $R'$. Ta có $\\frac{AB}{RR'} = \\frac{AD}{RD}$ và $AB = AD$, nên suy ra được $RR' = RD$. Do đó $\\frac{ZQ}{ZR} = \\frac{BQ}{RR'} = \\frac{BQ}{DR}$.<br>
Bây giờ, gọi $Z'$ là giao điểm của hai đường thẳng $QR$ và $UV$. Chứng minh tương tự như trên, ta có $\\frac{Z'Q}{Z'R} = \\frac{VQ}{UR}$. Lại có $BQ = VQ$ và $DR = UR$, ta suy ra $\\frac{ZQ}{ZR} = \\frac{Z'Q}{Z'R}$. Do đó $Z'$ trùng $Z$. Vì thế, ba đường thẳng $QR$, $BD$, $UV$ đồng quy tại điểm $Z$. Lập luận tương tự, ta cũng chứng minh được ba đường thẳng $XY$, $BD$, $UV$ đồng quy. Bổ đề được chứng minh. ■<br>
Trở lại bài toán: Gọi $X$ là giao điểm của hai đường thẳng $PR$ và $AB$, $Y$ là giao điểm của hai đường thẳng $PQ$ và $AD$. Gọi $Z$ là giao điểm của hai đường thẳng $QR$ và $XY$, $T$ là giao điểm của hai đường thẳng $CS$ và $MN$. Xét tứ giác $XYQR$ có đường tròn $(O)$ tiếp xúc với $XQ$, $XR$, $YQ$, $YR$. Theo bổ đề trên, ta có $\\frac{ZQ}{ZR} = \\frac{BQ}{DR}$.<br>
Áp dụng định lý Menelaus cho tam giác $PQR$ với ba điểm $X$, $Y$, $Z$ thẳng hàng và áp dụng định lý Ceva cho tam giác $PQR$ với ba đường thẳng $PS$, $QX$, $RY$ đồng quy tại điểm $A$, ta có $\\frac{SQ}{SR} = \\frac{XP}{XR} \\cdot \\frac{YQ}{YP} = \\frac{ZQ}{ZR} = \\frac{BQ}{DR}$.<br>
Kẻ các đường thẳng $MM'$, $NN'$ song song với đường thẳng $QR$, trong đó $M'$ và $N'$ thuộc đường thẳng $CS$. Ta có $\\frac{TM}{TN} = \\frac{MM'}{NN'} = \\frac{MM'}{SQ} \\cdot \\frac{SR}{SN} = \\frac{CM}{CQ} \\cdot \\frac{SQ}{SR} \\cdot \\frac{CR}{CN} = \\frac{BA}{BQ} \\cdot \\frac{SQ}{SR} \\cdot \\frac{DR}{DA} = 1$.<br>
Vậy $T$ là trung điểm của đoạn thẳng $MN$. ■`
},
{
  id: "10hsgs26d1p4",
  title: "Bài 4 - Thi vào 10 chuyên KHTN 2026 (Vòng 1)",
  rating: 2800,
  tags: ["Tổ hợp", "Hình học", "Tam giác hóa", "Đa giác"],
  contestId: "10hsgs26d1",
  createdAt: "2026-05-23T00:00:00Z",
  solutionSource: "Cmath",
  content: `Có 100 điểm phân biệt trong một ngũ giác lồi, các điểm này cùng 5 đỉnh của ngũ giác tạo thành 105 điểm, trong đó không có ba điểm nào thẳng hàng. Biết rằng ngũ giác được chia hoàn toàn thành những tam giác được tạo bởi các đoạn thẳng nối giữa hai trong 105 điểm trên sao cho<br>
i) Không có hai đoạn thẳng nào có điểm chung (ngoại trừ các đầu mút của chúng);<br>
ii) Mỗi tam giác không chứa bất kỳ điểm nào ở bên trong nó.<br>
Tính số tam giác thỏa mãn những yêu cầu trên.`,
  solution: `Xét $A$ là tập các tam giác. Xét $B$ là tập các góc của các tam giác trong $A$. Xét $C$ là tổng số đo các góc trong $B$. Để thấy rằng với tổng các góc trong một tam giác là $180^\\circ$ thì ta có<br>
\\[C = 180^\\circ \\cdot |A|. \\tag{1}\\]<br>
Mặt khác, ta phân hoạch các góc trong $B$ thành các nhóm góc chung đỉnh. Xét một nhóm các góc chung đỉnh thì có hai trường hợp:<br>
- Trường hợp 1 là các góc này có chung đỉnh là một trong 100 đỉnh bên trong đa giác, tổng các góc trong nhóm này là $360^\\circ$.<br>
- Trường hợp 2 là các góc này có chung đỉnh là một trong 5 đỉnh của ngũ giác (gọi là đỉnh $O$), lúc này tổng các góc trong nhóm này chính là số đo góc tại đỉnh $O$ của ngũ giác. Tổng của 5 nhóm ứng với 5 đỉnh của ngũ giác chính là tổng số đo các góc trong ngũ giác và là $3 \\cdot 180^\\circ$.<br>
Từ đây, ta thu được<br>
\\[C = 100 \\cdot 360^\\circ + 3 \\cdot 180^\\circ = 36540^\\circ. \\tag{2}\\]<br>
Kết hợp (1) và (2), ta thu được $|A| = 203$. ■`
},
{
  id: "10hsgs25d2p1",
  title: "Bài 1 - Thi vào 10 chuyên KHTN 2025 (Vòng 2)",
  rating: 2100,
  subRatings: [
    { label: "a", value: 1900 },
    { label: "b", value: 2100 }
  ],
  tags: ["Đại số", "Phương trình vô tỉ", "Hệ phương trình"],
  contestId: "10hsgs25d2",
  createdAt: "2025-06-02T00:00:00Z",
  solutionSource: "Cmath",
  content: `a) Giải phương trình<br>
\\[\\sqrt{x+1} + \\sqrt[4]{3x^2 - 2x + 1} = \\sqrt[4]{2x^2 - x + 1} + \\sqrt[4]{x^2 + 1}\\]<br>
b) Giải hệ phương trình<br>
\\[\\begin{cases} x + y + xy = 3, \\\\ 1 + 12(x + y) = 7y^3 + 6xy(y + 3 - xy). \\end{cases}\\]`,
  solution: `a) Điều kiện xác định: $x \\ge -1$.<br>
Đặt $a = \\sqrt{x+1}$, $b = \\sqrt[4]{3x^2 - 2x + 1}$, $c = \\sqrt[4]{2x^2 - x + 1}$, $d = \\sqrt[4]{x^2 + 1}$ với $a \\ge 0$, $b, c, d > 0$.<br>
Khi đó ta có $a + b = c + d$ và $a^4 + b^4 = c^4 + d^4$.<br>
Ta có $(a + b)^4 = (c + d)^4$ hay<br>
\\[a^4 + b^4 + 4ab(a + b)^2 - 2a^2b^2 = c^4 + d^4 + 4cd(c + d)^2 - 2c^2d^2.\\]<br>
Rút gọn biểu thức ta được<br>
\\[2ab(a + b)^2 - a^2b^2 = 2cd(a + b)^2 - c^2d^2\\]<br>
hay<br>
\\[2(a + b)^2(ab - cd) = (ab + cd)(ab - cd).\\]<br>
Do đó $(ab - cd)(2a^2 + 3ab + 2b^2 - cd) = 0$.<br>
<strong>Trường hợp 1:</strong> $ab = cd$ và $a + b = c + d$. Khi đó<br>
\\[(a - c)(a - d) = a^2 + cd - a(c + d) = a^2 + ab - a(a + b) = 0\\]<br>
nên $a = c$, $b = d$ hoặc $a = d$, $b = c$.<br>
Giải các trường hợp ta đều được các nghiệm là $x = 0$, $x = 1$ (thử lại thỏa mãn).<br>
<strong>Trường hợp 2:</strong> $2a^2 + 3ab + 2b^2 - cd = 2(a + b)^2 - (ab + cd) = (a + b)^2 + (c + d)^2 - (ab + cd) \\ge 4(ab + cd) - (ab + cd) > 0$ với $a \\ge 0$, $b, c, d > 0$.<br>
Vậy phương trình đã cho có các nghiệm là $x = 0$ và $x = 1$.<br>
b) Từ phương trình thứ nhất ta có $(x + 1)(y + 1) = 4$ hay là<br>
\\[1 + 3(x + 1)(y + 1)(x + y) = 7y^3 + 6xy(x + 2y).\\]<br>
Ta viết lại thành<br>
\\[x^3 + y^3 + 1 + 3(x + 1)(y + 1)(x + 1) = 8y^3 + 12y^2x + 6yx^2 + x^3.\\]<br>
Như vậy $(x + y + 1)^3 = (2y + x)^3$ hay $x + y + 1 = 2y + x$. Ta được $y = 1$, thay vào phương trình đầu tiên ta được $x = 1$ (thử lại thỏa mãn).<br>
Vậy $(x; y) = (1; 1)$ là nghiệm duy nhất của hệ phương trình.`
},
{
  id: "10hsgs25d2p2",
  title: "Bài 2 - Thi vào 10 chuyên KHTN 2025 (Vòng 2)",
  rating: 2300,
  subRatings: [
    { label: "a", value: 2000 },
    { label: "b", value: 2300 }
  ],
  tags: ["Số học", "Phương trình nghiệm nguyên", "Bất đẳng thức"],
  contestId: "10hsgs25d2",
  createdAt: "2025-06-02T00:00:00Z",
  solutionSource: "Cmath",
  content: `a) Tìm tất cả các cặp số nguyên dương $x, y$ thỏa mãn<br>
\\[25^y + (4^x + 1)(4x^2 + 3x + 3) = (4^x + 4x^2 + 3x + 4)5^y.\\]<br>
b) Cho các số thực $1 < x, y, z < 2$. Chứng minh rằng<br>
\\[\\left( \\frac{x^3}{y^3} + \\frac{y^3}{z^3} + \\frac{z^3}{x^3} \\right) \\left( \\frac{x^3}{x^3 + 8z^3} + \\frac{y^3}{y^3 + 8x^3} + \\frac{z^3}{z^3 + 8y^3} \\right) \\geq \\frac{3xy}{z^2 + 8xy} + \\frac{3yz}{x^2 + 8yz} + \\frac{3zx}{y^2 + 8zx}.\\]`,
  solution: `a) Phương trình có thể được viết lại thành<br>
\\[(5^y - 4^x - 1)(5^y - 4x^2 - 3x - 3) = 0.\\]<br>
Từ đó $5^y = 4^x + 1$ hoặc $5^y = 4x^2 + 3x + 3$.<br>
<strong>Trường hợp 1:</strong> $5^y = 4^x + 1$. Nếu $x \\ge 2$, thì từ phương trình, ta suy ra $5^y \\equiv 1 \\pmod{8}$, do đó $y$ chẵn. Lúc này, ta có $5^y \\equiv 1 \\pmod{3}$ nên $4^x$ chia hết cho 3, mâu thuẫn. Do đó $x = 1$. Thay vào ta được $y = 1$. Thử lại thỏa mãn.<br>
<strong>Trường hợp 2:</strong> $5^y = 4x^2 + 3x + 3$. Chú ý rằng $5^y$ không chia hết cho 3 nên $4x^2$ không chia hết cho 3, tức $x$ không chia hết cho 3. Khi đó, ta có $5^y \\equiv 4x^2 \\equiv 1 \\pmod{3}$. Suy ra $y$ chẵn. Lúc này, từ phương trình, ta suy ra $4x^2 + 3x + 3$ là số chính phương. Mà $4x^2 + 3x + 3 > 4x^2 = (2x)^2$ và $4x^2 + 3x + 3 < 4x^2 + 8x + 4 = (2x + 2)^2$ nên $4x^2 + 3x + 3 = (2x + 1)^2$, tức $x = 2$. Thay trở lại phương trình, ta được $y = 2$. Thử lại thỏa mãn.<br>
Vậy, có tất cả hai cặp số nguyên dương $(x, y)$ thỏa mãn yêu cầu đề bài là $(1, 1)$ và $(2, 2)$.<br>
b) Sử dụng bất đẳng thức AM-GM, ta có<br>
\\[\\frac{x^3}{y^3} + \\frac{y^3}{z^3} + \\frac{z^3}{x^3} \\ge 3.\\]<br>
Bây giờ, sử dụng bất đẳng thức Cauchy-Schwarz, kết hợp với bất đẳng thức phụ quen thuộc $(u + v + w)^2 \\ge 3(uv + vw + wu)$, ta cũng có<br>
\\[\\frac{x^3}{x^3 + 8z^3} + \\frac{y^3}{y^3 + 8x^3} + \\frac{z^3}{z^3 + 8y^3} \\ge \\frac{x^6}{x^6 + 8z^3x^3} + \\frac{y^6}{y^6 + 8x^3y^3} + \\frac{z^6}{z^6 + 8y^3z^3}\\]<br>
\\[\\ge \\frac{(x^3 + y^3 + z^3)^2}{x^6 + y^6 + z^6 + 8(x^3y^3 + y^3z^3 + z^3x^3)} = \\frac{(x^3 + y^3 + z^3)^2}{(x^3 + y^3 + z^3)^2 + 6(x^3y^3 + y^3z^3 + z^3x^3)} \\ge \\frac{1}{3}.\\]<br>
Do đó<br>
\\[\\left( \\frac{x^3}{y^3} + \\frac{y^3}{z^3} + \\frac{z^3}{x^3} \\right) \\left( \\frac{x^3}{x^3 + 8z^3} + \\frac{y^3}{y^3 + 8x^3} + \\frac{z^3}{z^3 + 8y^3} \\right) \\ge 1. \\tag{1}\\]<br>
Gọi $Q$ là biểu thức vế phải của bất đẳng thức cần chứng minh. Sử dụng bất đẳng thức Cauchy-Schwarz, ta có<br>
\\[3 - \\frac{8}{3}Q = 1 - \\frac{8xy}{z^2 + 8xy} + 1 - \\frac{8yz}{x^2 + 8yz} + 1 - \\frac{8zx}{y^2 + 8zx}\\]<br>
\\[= \\frac{z^2}{z^2 + 8xy} + \\frac{x^2}{x^2 + 8yz} + \\frac{y^2}{y^2 + 8zx}\\]<br>
\\[\\ge \\frac{(x + y + z)^2}{x^2 + y^2 + z^2 + 8(xy + yz + zx)}\\]<br>
\\[= \\frac{(x + y + z)^2}{(x + y + z)^2 + 6(xy + yz + zx)} \\ge \\frac{(x + y + z)^2}{(x + y + z)^2 + 2(x + y + z)^2} = \\frac{1}{3}.\\]<br>
Do đó $Q \\le 1$. (2)<br>
Từ (1) và (2) ta có điều phải chứng minh. Dấu đẳng thức xảy ra khi $x = y = z$.`
},
{
  id: "10hsgs25d2p3",
  title: "Bài 3 - Thi vào 10 chuyên KHTN 2025 (Vòng 2)",
  rating: 2600,
  subRatings: [
    { label: "a", value: 2200 },
    { label: "b", value: 2400 }, 
    { label: "c", value: 2600 }
  ],
  tags: ["Hình học", "Đường tròn", "Đồng dạng", "Trực tâm", "Hình bình hành"],
  contestId: "10hsgs25d2",
  createdAt: "2025-06-02T00:00:00Z",
  solutionSource: "Cmath",
  content: `Cho tam giác $ABC$ cân tại $A$ có $O$ là trung điểm $BC$ và $\\widehat{BAC} < 90^\\circ$. Xét đường tròn $(O)$ tiếp xúc các cạnh $CA$, $AB$ theo thứ tự tại $R$, $Q$. Trên các cạnh $CA$, $AB$ lần lượt lấy $E$, $F$ (không trùng các đỉnh tam giác) sao cho $EF$ tiếp xúc $(O)$ tại $P$ và $EF$ không song song $BC$. Gọi $H$, $K$ lần lượt là trực tâm các tam giác $OFB$, $OEC$. Gọi giao điểm của $FH$, $EK$ với $BC$ lần lượt là $M$, $N$.<br>
a) Chứng minh rằng hai tam giác $OHM$, $OKN$ đồng dạng và $\\frac{OK}{OH} = \\frac{AE}{AF}$.<br>
b) Dựng điểm $G$ sao cho tứ giác $OHGK$ là hình bình hành. Chứng minh rằng $O$, $G$, $P$ thẳng hàng.<br>
c) Lấy $S$, $T$ lần lượt đối xứng với $Q$, $R$ qua $BC$. Giả sử $X$ là giao điểm của $SF$ và $TE$, $D$ là giao điểm của $BS$ và $CT$. Chứng minh rằng $AX$ song song với $PD$.`,
  solution: `<img src="asset/imggeo/10hsgs25d2p3-1.png" alt="Hình vẽ bài 3" style="display:block; margin:20px auto; max-width:100%">
<br>
a) Vì tam giác $ABC$ cân tại $A$ có $O$ là trung điểm $BC$ nên $AO$ là tia phân giác của $\\widehat{BAC}$ và $AO \\perp BC$ tại $O$, suy ra $FM$ và $EN$ song song với $AO$, kéo theo $\\widehat{BFM} = \\widehat{BAO}$ và $\\widehat{CEN} = \\widehat{CAO}$, dẫn đến $\\widehat{BFM} = \\widehat{CEN}$.<br>
- Xét tam giác $OFB$ có trực tâm $H$ nên $\\widehat{BOQ} = \\widehat{BFM}$, do hai góc này cùng phụ với $\\widehat{ABC}$.<br>
- Xét tam giác $OEC$ có trực tâm $K$ nên $\\widehat{COR} = \\widehat{CEN}$, do hai góc này cùng phụ với $\\widehat{ACB}$.<br>
Từ đó ta được $\\widehat{BOQ} = \\widehat{COR}$.<br>
Xét tam giác $OHM$ vuông tại $M$ và tam giác $OKN$ vuông tại $N$ có $\\widehat{BOQ} = \\widehat{COR}$ nên hai tam giác $OHM$, $OKN$ đồng dạng. Điều này dẫn đến $\\frac{OK}{OH} = \\frac{ON}{OM}$ (hai cạnh tương ứng).<br>
Xét tam giác $ABO$ có $FM$ song song $AO$ nên theo định lý Thales ta có<br>
\\[\\frac{AF}{OM} = \\frac{AB}{BO}.\\]<br>
Tương tự ta cũng được $\\frac{AE}{ON} = \\frac{AB}{BO}$, kết hợp $AB = AC$ và $OB = OC$, dẫn đến $\\frac{AF}{OM} = \\frac{AE}{ON}$ hay $\\frac{ON}{OM} = \\frac{AE}{AF}$.<br>
Mặt khác $\\frac{OK}{OH} = \\frac{ON}{OM}$, nên ta được $\\frac{OK}{OH} = \\frac{AE}{AF}$, điều phải chứng minh.<br>
b) Do tứ giác $OHGK$ là hình bình hành nên $HG \\parallel OK$ và $HG = OK$. Từ đó kết hợp với ý (a) thì<br>
\\[\\frac{HO}{HG} = \\frac{AF}{AE}\\]<br>
và<br>
\\[\\widehat{GHO} = 180^\\circ - \\widehat{HOK} = \\widehat{EAF}.\\]<br>
Suy ra hai tam giác $HOG$ và $AFE$ đồng dạng. Dẫn đến $\\widehat{HOG} = \\widehat{AFE} = \\widehat{PQO}$ suy ra ba điểm $O$, $G$, $P$ thẳng hàng. Ta được điều phải chứng minh.<br>
c)
<img src="asset/imggeo/10hsgs25d2p3-2.png" alt="Hình vẽ bài 3" style="display:block; margin:20px auto; max-width:100%">
Ta thấy đường tròn (O) tiếp xúc với các cạnh $AB$, $AC$, $DB$, $DC$ của hình thoi $ABCD$ theo thứ tự tại $Q$, $R$, $S$, $T$. Bằng biến đổi góc đơn giản, ta có $\\triangle BOF \\sim \\triangle CEO$ (g.g). Từ đó suy ra<br>
\\[BF \\cdot CE = OB \\cdot OC = OB^2 = BS \\cdot BD = BS \\cdot CD.\\]<br>
Suy ra $\\triangle CDE \\sim \\triangle BFS$ (c.g.c), dẫn đến $\\widehat{CDE} = \\widehat{BFS}$. Kết hợp với $CD \\parallel BF$, ta được $DE \\parallel SF$.<br>
Chứng minh tương tự ta có $DF \\parallel TE$.<br>
Gọi $DX$ cắt $EF$ tại $J$. Do tứ giác $XEDF$ là hình bình hành nên $J$ là trung điểm của $EF$.<br>
Gọi đường tròn $(I)$ nội tiếp tam giác $AEF$ tiếp xúc với $EF$ tại $U$.<br>
Vì $EU = FP = \\frac{AE + EF - AF}{2}$ nên ta có $J$ là trung điểm của $PU$. Từ đó, ta thấy tứ giác $XUDP$ là hình bình hành.<br>
Suy ra $XU \\parallel DP$. (1)<br>
Gọi $OJ$ cắt $AP$ tại $V$. Chú ý rằng $O$ là tâm đường tròn bàng tiếp góc $A$ của tam giác $AEF$, ta có tính chất quen thuộc $AU \\parallel OJ$. Lại có $J$ là trung điểm của $PU$, suy ra $V$ là trung điểm của $AP$.<br>
Kết hợp với $O$ là trung điểm của $AD$, ta có $OV \\parallel DP$. Từ đó, ta suy ra được $AU \\parallel DP$. (2)<br>
Từ (1) và (2) suy ra $A$, $X$, $U$ thẳng hàng nên $AX \\parallel DP$. Bài toán được chứng minh.`
},
{  
  id: "10hsgs25d2p4",
  title: "Bài 4 - Thi vào 10 chuyên KHTN 2025 (Vòng 2)",
  rating: 3000,
  tags: ["Tổ hợp", "Tập hợp", "Số học", "Vô tỉ"],
  contestId: "10hsgs25d2",
  createdAt: "2025-06-02T00:00:00Z",
  solutionSource: "Cmath",
  content: `Một tập hợp $M$ có các phần tử là số thực được gọi là tập đặc biệt nếu nó có những tính chất sau.<br>
- Với hai phần tử $x, y$ phân biệt của tập $M$ thì $xy(x + y) \\neq 0$ và có đúng một trong hai số $xy, x + y$ là số hữu tỉ;<br>
- Với mọi phần tử $x$ của tập $M$ thì $x^2$ là số vô tỉ.<br>
Hãy tìm số phần tử lớn nhất có thể của tập đặc biệt.`,
  solution: `Ta sẽ chứng minh một tập đặc biệt sẽ có không quá 4 phần tử. Thật vậy, giả sử tồn tại tập đặc biệt $M$ có không ít hơn năm phần tử. Gọi $a, b, c, d, e$ là năm phần tử phân biệt nào đó của tập $M$. Rõ ràng $a, b, c, d, e$ đều là số vô tỉ.<br>
Xét bốn số $ab, ac, ad, ae$. Giả sử trong bốn số này có ba số hữu tỉ. Không mất tính tổng quát, ta giả sử ba số đó là $ab, ac$ và $ad$. Nếu $bc$ là số hữu tỉ thì ta có $a^2 = \\frac{(ab)(ac)}{bc}$ là số hữu tỉ, mâu thuẫn. Do đó $bc$ là số vô tỉ. Từ đây, kết hợp với giả thiết, ta có $b + c$ là số hữu tỉ.<br>
Chứng minh tương tự, ta cũng có $c + d$ và $b + d$ hữu tỉ. Suy ra $b = \\frac{(b+c)+(b+d)-(c+d)}{2}$ là số hữu tỉ, mâu thuẫn.<br>
Giả sử trong bốn số đang xét có ba số vô tỉ. Không mất tính tổng quát, ta giả sử ba số đó là $ab, ac$ và $ad$. Khi đó, theo giả thiết, ta có $a + b, a + c$ và $a + d$ đều là số hữu tỉ. Nếu trong $b + c, b + d, c + d$ có một số hữu tỉ, giả sử là $b + c$, thì $a = \\frac{(a+b)+(a+c)-(b+c)}{2}$ là số hữu tỉ, mâu thuẫn. Do đó $b + c, b + d, c + d$ đều là số vô tỉ. Theo giả thiết, ta có $bc, bd, cd$ đều là số hữu tỉ. Suy ra $b^2 = \\frac{(bc)(bd)}{cd}$ là số hữu tỉ, mâu thuẫn. Như vậy, trong bốn số $ab, ac, ad, ae$ có đúng hai số hữu tỉ và đúng hai số vô tỉ.<br>
Không mất tính tổng quát, giả sử $ab$ và $ac$ là số hữu tỉ. Giả sử $b + c$ là số hữu tỉ, khi đó $ab + ac = a(b + c)$ là số hữu tỉ và $b + c \\neq 0$ nên $a$ là số hữu tỉ, mâu thuẫn. Do đó $b + c$ là số vô tỉ. Theo giả thiết, ta có $bc$ là số hữu tỉ. Suy ra $a^2 = \\frac{(ab)(ac)}{bc}$ là số hữu tỉ, mâu thuẫn.<br>
Từ mâu thuẫn nhận được, ta suy ra một tập đặc biệt sẽ có không quá 4 phần tử. Mặt khác, ta thấy tập hợp gồm bốn số $1 + \\sqrt{2}, -1 + \\sqrt{2}, 2 - \\sqrt{2}, -2 - \\sqrt{2}$ thỏa mãn yêu cầu đề bài. Vậy, một tập đặc biệt sẽ có nhiều nhất bốn phần tử.`
},
{
  id: "vmo26d1p1",
  title: "Bài 1 - VMO 2026 Ngày 1",
  rating: 3000,
  subRatings: [
    { label: "a", value: 2800 },
    { label: "b", value: 3000 }
  ],
  tags: ["Đại số", "Đa thức", "Dãy số", "Giới hạn"],
  contestId: "vmo26d1",
  createdAt: "2025-12-25T00:00:00Z",
  solutionSource: "Cmath",
  content: `Với mỗi số nguyên dương $n$, xét đa thức $P_n(x) = x^{3n} - 3 \\cdot 4^{n-1} \\cdot x^n - 2^{3n-3}$.<br>
a) Chứng minh rằng với mỗi $n$ nguyên dương, thì đa thức $P_n(x)$ có đúng một nghiệm thực dương, ký hiệu là $a_n$.<br>
b) Với mỗi $n$ nguyên dương, đặt $b_n = \\frac{2-a_n}{n}$ và $c_n = b_1 + b_2 + \\cdots + b_n$. Chứng minh dãy số $(c_n)_{n=1}^\\infty$ có giới hạn hữu hạn.`,
  solution: `a) Cố định $n$ nguyên dương. Xét đa thức<br>
\\[Q_n(x) = -x^{3n} P_n\\left(\\frac{1}{x}\\right) = 2^{3n-3} x^{3n} + 3 \\cdot 4^{n-1} \\cdot x^{2n} - 1.\\]<br>
Ta thấy $Q_n(x)$ là hàm liên tục và tăng ngặt trên miền $(0, +\\infty)$. Lại có $Q_n\\left(\\frac{1}{2}\\right) = -\\frac{1}{8} < 0$ và $Q_n(1) = 2^{3n-3} + 3 \\cdot 4^{n-1} - 1 > 0$ nên đa thức $Q_n(x)$ có nghiệm duy nhất $d_n \\in \\left(\\frac{1}{2}, 1\\right)$, từ đó suy ra đa thức $P_n(x)$ có nghiệm duy nhất $a_n = \\frac{1}{d_n} \\in (1, 2)$.<br>
b) Vì $a_n < 2$ nên $b_n > 0$ với mọi $n$ nguyên dương, từ đó dễ thấy dãy $(c_n)$ tăng ngặt. Xét $n > 1$, sử dụng bất đẳng thức AM-GM, ta có<br>
\\[2^{3n} = 4 \\cdot 2a_n^2 \\cdot \\left(\\sqrt{3} \\cdot 2^{n-1} - a_n^2\\right) \\cdot \\left(\\sqrt{3} \\cdot 2^{n-1} + a_n^2\\right) \\le \\left(\\sqrt{3} \\cdot 2^{n-1} + a_n^2\\right)^3,\\]<br>
suy ra $2^n \\le \\sqrt{3} \\cdot 2^{n-1} + a_n^2$, hay<br>
\\[a_n \\ge 2 \\sqrt[n]{t},\\]<br>
trong đó $t = \\frac{2-\\sqrt{3}}{2}$. Từ đó, sử dụng bất đẳng thức AM-GM, ta có<br>
\\[a_n \\ge \\frac{2t}{\\sqrt[n]{t^{n-1}}} > \\frac{2nt}{(n-1)t+1},\\]<br>
do đó<br>
\\[b_n = \\frac{2-a_n}{n} < \\frac{2-\\frac{2nt}{(n-1)t+1}}{n} = \\frac{2(1-t)}{n[(n-1)t+1]} < \\frac{2(1-t)}{n(n-1)t}, \\quad \\forall n > 1.\\]<br>
Sử dụng kết quả này, ta được<br>
\\[c_n < b_1 + \\frac{2(1-t)}{t} \\left[ \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\cdots + \\frac{1}{(n-1)n} \\right] < b_1 + \\frac{2(1-t)}{t}, \\quad \\forall n > 1.\\]<br>
Kết quả này chứng tỏ dãy $(c_n)$ bị chặn trên. Mà $(c_n)$ tăng ngặt nên nó có giới hạn hữu hạn. $\\square$<br>
<em>Bình luận.</em> Có thể giải trực tiếp phương trình để tìm công thức tổng quát của $a_n$, tuy nhiên đoạn sau vẫn cần ước lượng tương tự như trong lời giải trên.`
},
{
  id: "vmo26d1p2",
  title: "Bài 2 - VMO 2026 Ngày 1",
  rating: 2600,
  tags: ["Hình học giải tích", "Elip", "Cực trị", "Thực tế"],
  contestId: "vmo26d1",
  createdAt: "2025-12-25T00:00:00Z",
  solutionSource: "Cmath",
  content: `Để khám phá không gian, các nhà khoa học thường phải quan sát những vật thể xa xôi như sao chổi, tiểu hành tinh và các hiện tượng thiên văn khác. Nhằm mục đích đó, các nhà khoa học thiết kế và phóng các vệ tinh quan sát lên quỹ đạo quanh Trái Đất. Hầu hết các vệ tinh không chuyển động theo vòng tròn hoàn hảo mà có quỹ đạo là một đường elip, với Trái Đất nằm ở một trong hai tiêu điểm của elip. Khi một vệ tinh chuyển động trên quỹ đạo elip, khoảng cách giữa nó và vật thể cần quan sát liên tục thay đổi. Thông thường, nếu khoảng cách từ vệ tinh đến vật thể cần quan sát là ngắn nhất thì các thiết bị cảm biến trên vệ tinh sẽ nhận được tín hiệu tốt nhất.<br>
Cho một vệ tinh (được xem như là một chất điểm) chuyển động xung quanh Trái Đất theo quỹ đạo là một đường elip. Trong không gian với hệ trục tọa độ vuông góc $Oxyz$ (đơn vị trên mỗi trục $Ox$, $Oy$, $Oz$ đều bằng 6400 km), giả sử vệ tinh chuyển động trên mặt phẳng tọa độ $(Oxy)$ theo quỹ đạo có phương trình $x^2 + 3y^2 = 17$. Vệ tinh cần quan sát một vật thể (cũng được xem như là một chất điểm) chuyển động trong không gian. Theo các kết quả nghiên cứu, khi vật thể chuyển động đến vị trí $A\\left(2, \\frac{16}{\\sqrt{3}}, 8\\right)$ thì việc quan sát vật thể đó là tốt nhất. Hãy xác định tọa độ điểm $C$ (trên quỹ đạo elip của vệ tinh) trong không gian với hệ trục tọa độ $Oxyz$ nói trên sao cho khoảng cách từ vị trí $C$ đến vị trí $A$ là ngắn nhất.`,
  solution: `<strong>Lời giải toán học:</strong> Nếu chỉ tìm điểm trên quỹ đạo vệ tinh có khoảng cách ngắn nhất đến điểm $A$ thì ta có lời giải sau: Xét điểm $C(x, y, 0)$, trong đó $x^2 + 3y^2 = 17$, điểm $C$ thuộc quỹ đạo vệ tinh. Áp dụng bất đẳng thức AM-GM, ta có<br>
\\[CA^2 = (x - 2)^2 + \\left(y - \\frac{16}{\\sqrt{3}}\\right)^2 + (0 - 8)^2 = x^2 + y^2 - 4x - \\frac{32}{\\sqrt{3}}y + \\frac{460}{3}\\]<br>
\\[\\ge x^2 + y^2 - 2(x^2 + 1) - 4\\left(y^2 + \\frac{16}{3}\\right) + \\frac{460}{3} = 130 - (x^2 + 3y^2) = 113.\\]<br>
Vậy $CA \\ge \\sqrt{113}$, đẳng thức xảy ra khi và chỉ khi $x = 1$, $y = \\frac{4}{\\sqrt{3}}$. Tọa độ điểm $C$ là $\\left(1, \\frac{4}{\\sqrt{3}}, 0\\right)$.<br>
<strong>Bình luận thực tế:</strong> Về mặt thực tế, không thể có vệ tinh chuyển động với quỹ đạo như đề bài. Thật vậy, nếu ta chỉ làm việc trong mặt phẳng $(Oxy)$ thì từ đề bài ta có tâm Trái Đất phải là một trong hai tiêu điểm của elip $x^2 + 3y^2 = 17$, hai điểm đó là $\\left(\\sqrt{\\frac{34}{3}}, 0\\right)$ và $\\left(-\\sqrt{\\frac{34}{3}}, 0\\right)$. Không mất tính tổng quát giả sử tọa độ Trái Đất là $\\left(\\sqrt{\\frac{34}{3}}, 0\\right)$. Chú ý rằng đơn vị trên mỗi trục đều bằng 6400 km, khi vệ tinh ở vị trí $(\\sqrt{17}, 0)$ trên quỹ đạo elip thì khoảng cách từ vệ tinh đến tâm Trái Đất là $\\left(\\sqrt{17} - \\sqrt{\\frac{34}{3}}\\right) \\cdot 6400$. Ta có $\\sqrt{17} - \\sqrt{\\frac{34}{3}} \\approx 4.123 - 3.367 = 0.756$, nhân với 6400 được khoảng $4838$ km. Khoảng cách này nhỏ hơn bán kính Trái Đất (xấp xỉ 6378 km), hay nói cách khác vệ tinh đi xuyên qua Trái Đất (vô lý). Vậy vệ tinh không thể chuyển động với quỹ đạo như đề bài.`
},
{
  id: "vmo26d1p3",
  title: "Bài 3 - VMO 2026 Ngày 1",
  rating: 3100,
  tags: ["Số học", "Ước số", "Chia hết", "Đánh giá chặn"],
  contestId: "vmo26d1",
  createdAt: "2025-12-25T00:00:00Z",
  solutionSource: "Cmath",
  content: `Cho $n, a, b$ là các số nguyên dương thỏa mãn $1 < n^2 < a < b < n^2 + n + 3$. Tìm tất cả các ước nguyên dương thuộc khoảng $(n^2, n^2 + n + 3)$ của tích $ab$.`,
  solution: `Ta sẽ chứng minh chỉ tồn tại hai ước của $ab$ là $a, b$ nằm trong khoảng $(n^2, n^2 + n + 3)$. Thật vậy, giả sử tồn tại một ước $d$ của $ab$ thuộc khoảng $(n^2, n^2 + n + 3)$, mà $d \\neq a$ và $d \\neq b$. Đặt $a = n^2 + a_1$, $b = n^2 + b_1$ và $d = n^2 + d_1$, trong đó $1 \\le a_1, b_1, d_1 \\le n + 2$. Khi đó ta có $(n^2 + a_1)(n^2 + b_1)$ chia hết cho $n^2 + d_1$ nên $(a_1 - d_1)(b_1 - d_1)$ chia hết cho $n^2 + d_1$. Mặt khác, ta lại có $|a_1 - d_1| \\le n + 1$, $|b_1 - d_1| \\le n + 1$ nên<br>
\\[0 < |(a_1 - d_1)(b_1 - d_1)| \\le (n + 1)^2 < 2(n^2 + 1) \\le 2(n^2 + d_1).\\]<br>
Như vậy, ta phải có<br>
\\[|(a_1 - d_1)(b_1 - d_1)| = n^2 + d_1. \\tag{1}\\]<br>
Suy ra trong hai số $|a_1 - d_1|$, $|b_1 - d_1|$, có một số lớn hơn $n$, tức có số bằng $n + 1$.<br>
Nếu $|a_1 - d_1| = n + 1$ thì trong hai số $a_1, d_1$ phải có một số bằng $1$ và một số bằng $n + 2$.<br>
- Nếu $a_1 = 1$, $d_1 = n + 2$ thì từ (1), ta có $(n + 1)|b_1 - d_1| = n^2 + n + 2$, suy ra $n^2 + n + 2$ chia hết cho $n + 1$. Từ đó để thấy $2$ chia hết cho $n + 1$, mâu thuẫn.<br>
- Nếu $a_1 = n + 2$, $d_1 = 1$ thì từ (1), ta có $(n + 1)|b_1 - d_1| = n^2 + 1$, suy ra $n^2 + 1$ chia hết cho $n + 1$. Từ đó để thấy $2$ chia hết cho $n + 1$, mâu thuẫn.<br>
Nếu $|b_1 - d_1| = n + 1$, thì bằng cách xét tương tự như trên, ta cũng thu được điều mâu thuẫn.<br>
Vậy, chỉ có hai ước của $ab$ trong khoảng $(n^2, n^2 + n + 3)$ là $a$ và $b$. $\\square$`
},
{
  id: "vmo26d1p4",
  title: "Bài 4 - VMO 2026 Ngày 1",
  rating: 3200,
  subRatings: [
    { label: "a", value: 3000 },
    { label: "b", value: 3200 }
  ],
  tags: ["Tổ hợp", "Trò chơi", "Dãy số", "Biểu diễn"],
  contestId: "vmo26d1",
  createdAt: "2025-12-25T00:00:00Z",
  solutionSource: "Cmath",
  content: `Bạn An chơi trò chơi ghi lên bảng các bộ ba số theo thứ tự từ trái sang phải. Ban đầu trên bảng ghi sẵn bộ ba số $(1, 1, 1)$. Ở mỗi lượt chơi, An thực hiện một trong hai thao tác sau với bộ ba số $(x, y, z)$ hiện có:<br>
i) Xóa bộ ba số $(x, y, z)$ và viết lên bảng bộ ba số $(y, z, x + z)$.<br>
ii) Xóa bộ ba số $(x, y, z)$ và viết lên bảng bộ ba số $(x + z + 1, x + y + z + 1, x + y + 2z + 1)$.<br>
a) Chứng minh An cần đúng 4 lượt chơi để có thể viết lên bảng bộ ba số $(a, b, 6)$.<br>
b) Tìm số tự nhiên $k$ nhỏ nhất sao cho tồn tại một cách chơi để sau $k$ lượt, An có thể viết lên bảng bộ ba số $(c, d, 129)$.`,
  solution: `a) Để ý rằng, để thu được bộ ba số $(a, b, 6)$, thì ta chỉ có thể thực hiện bước i), và do đó thu được các bộ số:<br>
\\[(1, 1, 1) \\rightarrow (1, 1, 2) \\rightarrow (1, 2, 3) \\rightarrow (2, 3, 4) \\rightarrow (3, 4, 6).\\]<br>
b) Xét dãy $(u_n)$ với $u_1 = u_2 = u_3 = 1$, và $u_{n+3} = u_{n+2} + u_n$ với mọi $n \\ge 1$. Đặt<br>
\\[S = \\{ (u_{i_1}, u_{i_2}, \\ldots, u_{i_k}) \\mid i_1 < i_2 < \\cdots < i_k, i_{j+1} - i_j \\ge 3 \\}.\\]<br>
Xét ánh xạ<br>
\\[f : S \\rightarrow \\mathbb{N}^3\\]<br>
\\[f(u_{i_1}, u_{i_2}, \\ldots, u_{i_k}) = \\left( \\sum_{j=1}^{k} u_{i_j}, \\sum_{j=1}^{k} u_{i_j+1}, \\sum_{j=1}^{k} u_{i_j+2} \\right).\\]<br>
Dễ thấy rằng ban đầu ta có $f(u_1) = (u_1, u_2, u_3) = (1, 1, 1)$. Giả sử ta đang có $f(u_{i_1}, u_{i_2}, \\ldots, u_{i_k})$. Xét hai trường hợp.<br>
- Nếu thực hiện động tác i) thì ta thu được bộ<br>
\\[\\left( \\sum_{j=1}^{k} u_{i_j+1}, \\sum_{j=1}^{k} u_{i_j+2}, \\sum_{j=1}^{k} (u_{i_j} + u_{i_j+3}) \\right) = \\left( \\sum_{j=1}^{k} u_{i_j+1}, \\sum_{j=1}^{k} u_{i_j+2}, \\sum_{j=1}^{k} u_{i_j+3} \\right) = f(u_{i_1+1}, u_{i_2+1}, \\ldots, u_{i_k+1}).\\]<br>
- Nếu thực hiện động tác ii) thì ta thu được bộ<br>
\\[\\left( \\sum_{j=1}^{k} (u_{i_j} + u_{i_j+2}) + 1, \\sum_{j=1}^{k} (u_{i_j} + u_{i_j+1} + u_{i_j+2}) + 1, \\sum_{j=1}^{k} (u_{i_j} + u_{i_j+1} + 2u_{i_j+2}) + 1 \\right),\\]<br>
hay<br>
\\[\\left( u_1 + \\sum_{j=1}^{k} u_{i_j+3}, u_2 + \\sum_{j=1}^{k} u_{i_j+4}, u_3 + \\sum_{j=1}^{k} u_{i_j+5} \\right) = f(u_1, u_{i_1+3}, u_{i_2+3}, \\ldots, u_{i_k+3}).\\]<br>
Vậy để thu được số $129$ thì $129$ phải được viết bằng tổng của một số các số hạng trong dãy $(u_n)$, các chỉ số liên tiếp phải cách nhau ít nhất $3$ đơn vị.<br>
Lưu ý rằng $u_n \\ge u_{n-1} + u_{n-4} + \\cdots + u_r$, với $r \\equiv n-1 \\pmod{3}$ và $1 \\le r \\le 3$, nên ta có thể thấy rằng cách viết này là duy nhất.<br>
Mà $129 = u_{15}$ nên ta thấy rằng chỉ có thể sử dụng động tác i) (động tác ii) sẽ làm tăng số số hạng trong biểu diễn). Do đó, ta chỉ có duy nhất một cách thực hiện, và cách thực hiện đó là $12$ lần động tác i). Tóm lại, số tự nhiên $k$ nhỏ nhất, cũng là số duy nhất thỏa mãn yêu cầu đề bài, là $k = 12$. $\\square$`
},
{
  id: "vmo26d2p5",
  title: "Câu 5 - VMO 2026 Ngày 2",
  rating: 3200,
  subRatings: [
    { label: "a", value: 3000 },
    { label: "b", value: 3200 }
  ],
  tags: ["Hình học", "Đường tròn", "Đồng quy", "Điểm cố định"],
  contestId: "vmo26d2",
  createdAt: "2025-12-26T00:00:00Z",
  solutionSource: "Cmath",
  content: `Cho tam giác nhọn $ABC$ ($AB < AC$) nội tiếp đường tròn $(O)$. Gọi $E, F$ lần lượt là các điểm đối xứng của $A$ qua $B, C$. Gọi $M$ là trung điểm của đoạn thẳng $BC$. Trên đường thẳng $AM$ lần lượt lấy các điểm $I$ và $P$ sao cho tam giác $AIE$ cân tại $I$ và tam giác $APF$ cân tại $P$. Gọi $T$ là giao điểm của hai đường thẳng $IE$ và $PF$.<br>
a) Chứng minh $T$ thuộc đường tròn $(O)$.<br>
b) Gọi $D$ là giao điểm của hai đường thẳng $BI$ và $CP$. Gọi $J$ là giao điểm của hai đường thẳng $TD$ và $IP$. Gọi $X$ là giao điểm của hai đường thẳng $OT$ và $BC$. Các đường thẳng $AT, AX$ lần lượt cắt $EF$ tại các điểm $L, U$. Chứng minh bốn đường tròn ngoại tiếp của các tam giác $TAJ$, $TIP$, $TEF$ và $TLU$ cùng đi qua một điểm chung thứ hai khác $T$.`,
  solution: `<img src="asset/imggeo/vmo26d2p5-1.png" alt="Hình vẽ câu 5" style="display:block; margin:20px auto; max-width:100%">
<br>
a) Gọi $R$ là trung điểm $EF$. Có $ABRC$ là hình bình hành nên $M$ là trung điểm $AR$. Gọi $BI$ cắt $CP$ tại $D$, do $IB$, $PC$ là trung trực của $AE$, $AF$ nên $D$ là tâm $(AEF)$.<br>
Có: $\\angle DEI = \\angle DAI = \\angle DFP$ nên tứ giác $DTEF$ nội tiếp. Từ đó $\\angle DTF = \\angle DEF = \\angle DFR = \\angle DCR$, mà $\\angle APD = \\angle FPD$ nên $\\angle CPR = \\angle TPC$ suy ra $\\angle PCR = \\angle APTD$. Suy ra $\\angle PCT = \\angle PRD$. Tương tự $\\angle IBT = \\angle IRD$ nên $\\angle PCT = \\angle IBT$ hay tứ giác $TBCD$ nội tiếp. Từ đó $T$ thuộc $(O)$.<br>
<img src="asset/imggeo/vmo26d2p5-2.png" alt="Hình vẽ câu 5" style="display:block; margin:20px auto; max-width:100%">
b) Gọi $G$ là tâm $(DIP)$. Có $D$ là tâm bàng tiếp góc $T$ của tam giác $TIP$ nên $G$ chính giữa cung $IP$ của $(TIP)$. Gọi $GA$ cắt $(TIP)$ tại $S$ (khác $G$). Có $GS \\cdot GA = GI^2 = GP^2 = GI \\cdot GT$ nên tứ giác $ASJT$ nội tiếp hay $S$ thuộc $(AIT)$.<br>
Có $GD^2 = GP^2 = GI \\cdot GT$ nên $\\angle GDS = \\angle GAD$, mà $\\angle GTS = \\angle GAJ$ nên $\\angle GDS + \\angle GTS = \\angle PAD = \\angle PFD$. Từ đó $\\angle DST + \\angle DFT = 180^\\circ$. Suy ra tứ giác $DFTS$ nội tiếp hay $S$ thuộc $(TEF)$.<br>
Gọi $AJ$, $AT$ cắt $(D)$ tại $Q$, $R$. Gọi $QU$ cắt $(D)$ tại $N$. Ta có: $\\angle DTA = 90^\\circ$ nên $DT$ là trung trực của $AT$ nên $\\angle DTJ = \\angle DAJ = \\angle DQJ$ nên tứ giác $DJTQ$ nội tiếp. Mà $\\angle EAT = \\angle FAR$ nên $TQ // UR$. Từ đó tứ giác $DJTQ$ nội tiếp, suy ra $\\angle DJU = 90^\\circ$. Từ đó $DJ // AT$ nên $\\angle UJT = \\angle JTA = \\angle JAT = \\angle QNT$ nên tứ giác $UJNT$ nội tiếp.<br>
Suy ra $\\angle ANJ = \\angle ANQ = \\angle JNU = \\angle ATQ = \\angle JTU = \\angle JTA + \\angle DTQ = \\angle JAT + \\angle DJQ = \\angle DJQ = 90^\\circ$. Suy ra $\\angle ANJ = 90^\\circ$ nên tứ giác $ANTJ$ nội tiếp hay $ANTS$ nội tiếp. Có $LU // TQ$ nên tứ giác $ANLU$ nội tiếp.<br>
Do $ANTS$, $ETSF$, $ANEF$ nội tiếp nên $AN$, $TS$, $EF$ đồng quy tại $H$. Từ đó $HT \\cdot HS = HN \\cdot HA = HL \\cdot HU$ nên $TSUL$ nội tiếp hay $S$ thuộc $(TUL)$. Vậy $S$ là điểm chung thứ hai của bốn đường tròn $(TAJ)$, $(TIP)$, $(TEF)$ và $(TLU)$.`
},
{
  id: "vmo26d2p6",
  title: "Câu 6 - VMO 2026 Ngày 2",
  rating: 3100,
  subRatings: [
    { label: "a", value: 2800 },
    { label: "b", value: 3100 }
  ],
  tags: ["Đại số", "Đa thức", "Nghiệm", "Cực trị số học"],
  contestId: "vmo26d2",
  createdAt: "2025-12-26T00:00:00Z",
  solutionSource: "Cmath",
  content: `a) Tìm số nghiệm thực dương phân biệt của đa thức $Q(x) = x^3 - 5x^2 + 4x - 1$.<br>
b) Giả sử $a, b, c, d$ là các số nguyên sao cho đa thức $P(x) = ax^3 + bx^2 + cx + d$ có 3 nghiệm thực dương phân biệt và không có nghiệm hữu tỷ. Tìm giá trị nhỏ nhất của biểu thức $S = |a| + |b| + |c| + |d|$.`,
  solution: `a) Xét đa thức $P(x) = -x^3 Q(\\frac{1}{x}) = x^3 - 4x^2 + 5x - 1$. Ta có $P'(x) = 3x^2 - 8x + 5 = (x - 1)(3x - 5)$, $P'(x) = 0$ có hai nghiệm là $x = 1$ và $x = \\frac{5}{3}$. $P'(x) > 0$ với mọi $x < 1$ và $x > \\frac{5}{3}$, đồng thời $P'(x) < 0$ với mọi $1 < x < \\frac{5}{3}$, do đó $P(x)$ đồng biến trên các miền $(-\\infty, 1]$ và $[\\frac{5}{3}, +\\infty)$, nghịch biến trên miền $[1, \\frac{5}{3}]$. Ta lại có $P(0) = -1$, $P(1) = 1 > 0$, $P(\\frac{5}{3}) = \\frac{23}{27} > 0$ nên phương trình $P(x) = 0$ có nghiệm duy nhất thuộc khoảng $(0, 1)$. Từ đó suy ra đa thức $Q(x)$ có nghiệm duy nhất thuộc khoảng $(1, +\\infty)$.<br>
b) Rõ ràng $a, d \\neq 0$ và vì vai trò của $a, d$ tương tự nhau nên không mất tính tổng quát, ta có thể giả sử $a > 0$. Khi đó, sử dụng định lý Vieta, ta lần lượt chứng minh được $b < 0$, $c > 0$, $d < 0$. Lúc này, để cho tiện, ta thay $(a, b, c, d)$ thành $(a, -b, c, -d)$, nghĩa là ta sẽ xét đa thức $P(x) = ax^3 - bx^2 + cx - d$ với $a, b, c, d > 0$ và ta cần tìm giá trị nhỏ nhất của biểu thức $S = a + b + c + d$. Ta sẽ chứng minh $S \\ge 13$.<br>
Giả sử $S \\le 12$. Vì đa thức $P(x)$ có ba nghiệm thực phân biệt nên đa thức $P'(x) = 3ax^2 - 2bx + c$ có hai nghiệm thực phân biệt, tức ta phải có $b^2 > 3ac$. Chứng minh tương tự, đa thức $Q(x) = -x^3 P(\\frac{1}{x}) = dx^3 - cx^2 + bx - a$ có ba nghiệm thực phân biệt nên $c^2 > 3bd$. Nói riêng, dễ thấy $b^4 > 9a^2c^2 \\ge 9c^2 > 27bd \\ge 27b$, tức $b > 3$ và tương tự $c > 3$.<br>
Ta có $12 \\ge a + b + c + d \\ge 2 + b + c$ nên $b + c \\le 10$, mà $b \\ge 4$, $c \\ge 4$ nên $(b, c) \\in \\{(4, 4), (4, 5), (5, 4), (5, 5), (4, 6), (6, 4)\\}$, dẫn đến $a < \\frac{b^2}{3c} \\le \\frac{36}{12} = 3$, tức $a \\in \\{1, 2\\}$ và tương tự, ta cũng có $d \\in \\{1, 2\\}$.<br>
Nếu $a = d = 2$ thì ta có $b^2 \\ge 3ac + 1 = 6c + 1$ và $c^2 \\ge 3bd + 1 = 6b + 1$, suy ra<br>
\\[(b + c)^2 = b^2 + c^2 + 2bc \\ge 6(b + c) + 2 + 2bc > 6(b + c) + 2 + 2[2(b + c) - 4] = 10(b + c) - 6,\\]<br>
tức $b + c > 8$, dẫn đến $a + b + c + d \\ge 2 + 9 + 2 = 13 > 12$, mâu thuẫn. Do đó, trong hai số $a, d$ phải có một số là $1$, và vì vai trò của $a, d$ như nhau nên không mất tính tổng quát, ta có thể giả sử $a = 1$. Như vậy, ta chỉ cần xét các đa thức<br>
$P_1(x) = x^3 - 4x^2 + 4x - 1$, $P_2(x) = x^3 - 4x^2 + 4x - 2$, $P_3(x) = x^3 - 4x^2 + 5x - 1$, $P_4(x) = x^3 - 4x^2 + 5x - 2$, $P_5(x) = x^3 - 5x^2 + 4x - 1$, $P_6(x) = x^3 - 5x^2 + 4x - 2$, $P_7(x) = x^3 - 4x^2 + 6x - 1$, $P_8(x) = x^3 - 6x^2 + 4x - 1$, $P_9(x) = x^3 - 5x^2 + 5x - 1$.<br>
Tuy nhiên, kiểm tra trực tiếp thì không có đa thức nào có ba nghiệm dương phân biệt, mâu thuẫn. Vậy $S \\ge 13$. Mặt khác, ta thấy đa thức $P(x) = x^3 - 5x^2 + 6x - 1$ thỏa mãn yêu cầu. Vậy giá trị nhỏ nhất của $S$ là $13$.`
},
{
  id: "vmo26d2p7",
  title: "Bài 7 - VMO 2026 Ngày 2",
  rating: 3400,
  subRatings: [
    { label: "a", value: 3100 },
    { label: "b", value: 3400 }
  ],
  tags: ["Số học", "Tổ hợp", "Thuật toán tham lam", "Cực trị"],
  contestId: "vmo26d2",
  createdAt: "2025-12-26T00:00:00Z",
  solutionSource: "Lim Olympics",
  content: `Trong một trò chơi, nhân vật Mario cần di chuyển về phía trước bằng các lần nhảy xa với độ dài mỗi lần là $1$ mét hoặc $a$ mét hoặc $b$ mét, trong đó $a$ và $b$ là các số nguyên dương thỏa mãn $1 < a < b$. Cho trước một chặng đường cần di chuyển có độ dài là $m$ mét, với $m$ là một số nguyên dương, Mario luôn sử dụng chiến thuật nhảy về phía trước như sau: trước tiên Mario sẽ thực hiện các lần nhảy với độ dài mỗi lần $b$ mét (với số lần tối đa có thể sao cho chưa vượt quá đích); nếu vẫn chưa tới đích, Mario sẽ thực hiện tiếp các lần nhảy với độ dài mỗi lần $a$ mét (với số lần nhảy tối đa sao cho chưa vượt quá đích), rồi cuối cùng là chuyển sang các lần nhảy với mỗi bước nhảy là $1$ mét. Mario sẽ thắng nếu không tồn tại cách di chuyển nào đến đích có số lần nhảy ít hơn so với chiến thuật trên. Trong trường hợp ngược lại, Mario sẽ thua.<br>
a) Hãy chỉ ra rằng với $(a, b) = (6, 14)$, tồn tại một số $m$ để Mario thua trong trò chơi này.<br>
b) Tìm số lượng tất cả các cặp $(a, b)$, với $1 < a < b \\le 100$, để Mario luôn thắng theo chiến thuật trên với mọi số nguyên dương $m$.`,
  solution: `Gọi chiến thuật nhảy của Mario gọi là chiến thuật tham lam.<br>
a) Với $m = 18$, Mario nhảy tham lam sẽ mất $1$ bước $14$m, $0$ bước $6$m và $4$ bước $1$m, tổng là $5$ bước. Tuy nhiên Mario có thể nhảy $3$ bước $6$ mét (cách nhảy này không phải tham lam) và ít hơn cách nhảy tham lam. Vì vậy Mario thua trong trò chơi này khi $(a, b) = (6, 14)$.<br>
b) Viết $b = aq + r$ với $q \\in \\mathbb{N}$ và $0 \\le r < a$.<br>
- Với $r = 0$ thì rõ ràng Mario luôn thắng.<br>
- Xét $r > 0$. Ta sẽ chứng minh Mario thắng khi $a \\le q + r$ và Mario thua khi $a > q + r$.<br>
<strong>Trường hợp 1:</strong> $a > q + r$. Xét $m = (q + 1)a$. Khi đó Mario nhảy tham lam sẽ mất $1$ bước $b$ mét, $0$ bước $a$ mét và $a - r$ bước $1$ mét, tổng là $a - r + 1$ bước. Tuy nhiên Mario có thể nhảy $q + 1$ bước $a$ mét, và để ý $q + 1 < a - r + 1$ nên Mario thua.<br>
<strong>Trường hợp 2:</strong> $a \\le q + r$. Gọi $M(m)$ là cách chơi tối ưu, $G(m)$ là cách chơi tham lam. Ta cần chỉ ra $M(m) = G(m)$ với mọi $m \\in \\mathbb{N}^*$. Giả sử tồn tại $m$ sao cho $M(m) < G(m)$, gọi $x$ là số nhỏ nhất như vậy. Đầu tiên ta sẽ chứng minh $x \\in (b + 1, b + a)$. Để ý $M(m) = G(m)$ với mọi $m < b$. Cũng thấy được $M(b) = G(b) = 1$ và $M(b + 1) = G(b + 1) = 2$ nên $x > b + 2$. Giả sử $x \\ge b + a$, khi đó $M(m) = G(m)$ với mọi $m < x$. Để ý nếu với mọi $t \\ge a$ thì $M(t) \\le M(t - a) + 1$, dấu bằng khi và chỉ khi trong biểu diễn tối ưu của $t$, số bước nhảy với $a$ mét lớn hơn $0$. Tương tự với mọi $t \\ge b$ cũng có $M(t) \\le M(t - b) + 1$. Nếu trong biểu diễn tối ưu của $x$ có sử dụng bước nhảy $b$, ta có $G(x) = G(x - b) + 1 = M(x - b) + 1 = M(x)$. Ngược lại, trong biểu diễn tối ưu của $x$ không sử dụng bước nhảy $b$ thì phải sử dụng bước nhảy $a$, lúc này tương tự cũng có $M(x) = G(x)$. Vì vậy điều giả sử sai, tức $x < a + b$. Vậy ta có được $b + 1 < x < b + a$, do đó biểu diễn tham lam của $x$ có dạng $x = e \\cdot 1 + 0 \\cdot a + 1 \\cdot b$ với $1 < e < a$, để ý $x - 1 = (e - 1) \\cdot 1 + 0 \\cdot a + 1 \\cdot b$ nên $G(x - 1) + 1 = G(x)$. Nếu trong biểu diễn tối ưu của $x$ có sử dụng bước nhảy $1$ thì có điều vô lý là $M(x) = M(x - 1) + 1 = G(x - 1) + 1 = G(x)$. Nếu trong biểu diễn tối ưu của $x$ có sử dụng bước nhảy $b$ thì có điều vô lý là $M(x) = M(x - b) + 1 = G(x - b) + 1 = G(x)$. Các mâu thuẫn xảy ra cho ta thấy rằng biểu diễn tối ưu của $x$ có dạng $x = 0 \\cdot 1 + k \\cdot a + 0 \\cdot b$. Ta có $x = b + e = ka$ nên $b = ka - e = (k - 1)a + (a - e)$. Vì $1 < e < a$ nên $0 < a - e < a$, do đó vì $b = aq + r$ nên $q = k - 1$ và $r = a - e$. Ta có $M(x) < G(x)$ nên $k < 1 + e$ hay $k - 1 < e$ hay $q < a - r$ hay $r < a - q$. Từ đó $a \\le q + r < q + a - q = a$, vô lý. Vậy Mario thắng khi $a \\le q + r$ (với $r > 0$).<br>
Giờ ta cần đếm số cặp $(a, b)$ thỏa mãn $1 < a < b \\le 100$ sao cho một trong hai điều sau xảy ra:<br>
- $b$ chia hết cho $a$.<br>
- $b = aq + r$ với $0 < r < a$ thì $a \\le q + r$.<br>
Ta sẽ đếm phần bù, quy về đếm số bộ $(a, b)$ thỏa mãn $1 < a < b \\le 100$ sao cho $b = aq + r$ thì $0 < r < a - q$.<br>
Với $b = aq + r$: $q \\ge 1$ và $1 \\le r \\le a - q - 1$, tức $1 \\le q \\le a - 2$. Ngoài ra $b = aq + r \\le 100$ nên $r \\le 100 - aq$. Vì thế với mỗi $(a, q)$, số giá trị $r$ là $\\min(a - q - 1, 100 - aq)$. Từ đây số bộ $(a, b)$ thỏa mãn (phần bù) là:<br>
\\[\\sum_{a=2}^{99} \\sum_{q=1}^{a-2} \\max(0, \\min(a - q - 1, 100 - aq)) = 3765.\\]<br>
Vậy số bộ $(a, b)$ thỏa mãn yêu cầu đề bài là $\\binom{99}{2} - 3765 = 4851 - 3765 = 1086$.`
}
];