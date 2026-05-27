const PROBLEMS = [
  {
    id: "10hsgs26d2p1",
    title: "Bài 1 - Thi vào 10 chuyên KHTN 2026 (Vòng 2)",
    rating: 2200,
    tags: ["algebra", "equations", "systems"],
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
\\textbf{Bổ đề.} Với $x, y \\ge 0$ thỏa mãn $x+y = S_{xy} \\le \\dfrac{4}{5}$, ta luôn có
\\[f(x)+f(y) \\le f(x+y) + f(0).\\]
\\textit{Chứng minh.} Khai triển hiệu $H = f(x+y) - f(x) - f(y)$, ta được
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
}
];