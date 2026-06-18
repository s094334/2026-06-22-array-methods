let bugReports = [
    {
        bugId: 'BUG101',
        title: 'VLOOKUP 公式回傳#N/A錯誤',
        priority: 'Medium',
        severity: 'Critical',
        reporter: 'Chelsea',
        fixed: false,
        reportedDate: '2026-06-01',
        closedDate: null,
        tags: ['公式錯誤', 'VLOOKUP', '資料驗證']
    },
    {
        bugId: 'BUG102',
        title: '凍結窗格捲動時跑版',
        priority: 'High',
        severity: 'Major',
        reporter: 'Janet',
        fixed: true,
        reportedDate: '2026-06-02',
        closedDate: '2026-06-05',
        tags: ['Render', 'UI']
    },
    {
        bugId: 'BUG103',
        title: 'SUMIF加總結果與預期不符',
        priority: 'High',
        severity: 'Critical',
        reporter: 'Hew',
        fixed: false,
        reportedDate: '2026-06-03',
        closedDate: null,
        tags: ['公式錯誤', 'SUMIF', '計算邏輯']
    },
    {
        bugId: 'BUG104',
        title: '條件式格式化顏色未套用',
        priority: 'Low',
        severity: 'Minor',
        reporter: 'Chelsea',
        fixed: true,
        reportedDate: '2026-06-04',
        closedDate: '2026-06-09',
        tags: ['欄位顏色', '條件式格式化', 'UI']
    },
    {
        bugId: 'BUG105',
        title: '日期欄位顯示為亂碼數字',
        priority: 'Medium',
        severity: 'Major',
        reporter: 'Janet',
        fixed: false,
        reportedDate: '2026-06-05',
        closedDate: null,
        tags: ['Render顯示', '日期格式', '資料驗證']
    },
    {
        bugId: 'BUG106',
        title: '合併單元格列印時跑位',
        priority: 'Low',
        severity: 'Minor',
        reporter: 'Hew',
        fixed: false,
        reportedDate: '2026-06-06',
        closedDate: null,
        tags: ['Render顯示', '合併單元格', '列印']
    },
    {
        bugId: 'BUG107',
        title: 'IF巢狀公式邏輯判斷錯誤',
        priority: 'High',
        severity: 'Critical',
        reporter: 'Chelsea',
        fixed: false,
        reportedDate: '2026-06-07',
        closedDate: null,
        tags: ['公式錯誤', 'IF巢狀', '計算邏輯']
    },
    {
        bugId: 'BUG108',
        title: '篩選器套用後欄位顏色消失',
        priority: 'Medium',
        severity: 'Minor',
        reporter: 'Janet',
        fixed: true,
        reportedDate: '2026-06-08',
        closedDate: '2026-06-10',
        tags: ['欄位顏色', '篩選器', 'UI']
    },
    {
        bugId: 'BUG109',
        title: '樞紐分析表更新後Render延遲',
        priority: 'Medium',
        severity: 'Major',
        reporter: 'Hew',
        fixed: false,
        reportedDate: '2026-06-09',
        closedDate: null,
        tags: ['Render顯示', '樞紐分析表', '效能']
    },
    {
        bugId: 'BUG110',
        title: 'SUM公式因隱藏字元無法計算',
        priority: 'High',
        severity: 'Major',
        reporter: 'Chelsea',
        fixed: false,
        reportedDate: '2026-06-10',
        closedDate: null,
        tags: ['公式錯誤', 'SUM', '資料清理']
    }
];

// ==========================================
// 編號：01
// 方法名稱：Array.prototype.shift()
// ==========================================
// 關鍵字（一句話說明）：移除並回傳陣列的第一個元素
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：無
// 回傳值：element（回傳陣列的第一個元素）
// ==========================================

const firstBugTags = ['公式錯誤', 'VLOOKUP', '資料驗證'];
const shiftTag = firstBugTags.shift();

console.log(firstBugTags); // ['VLOOKUP', '資料驗證']
console.log(shiftTag); // 公式錯誤

// ==========================================
// 編號：02
// 方法名稱：Array.prototype.unshift()
// ==========================================
// 關鍵字（一句話說明）：新增一個或多個元素至陣列的開頭
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：elementN 新增至陣列開頭的元素
// 回傳值：number（回傳陣列的新長度）
// ==========================================

const secondBugTags = ['Render', 'UI'];
const unshiftTag = secondBugTags.unshift('Safari', 'mobile');

console.log(secondBugTags); // ['Safari', 'mobile', 'Render', 'UI']
console.log(unshiftTag); // 4

// ==========================================
// 編號：03
// 方法名稱：Array.prototype.pop()
// ==========================================
// 關鍵字（一句話說明）：移除最後一個元素
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：無
// 回傳值：element（回傳陣列的最後一個元素）
// ==========================================

const thirdBugTags = ['公式錯誤', 'SUMIF', '計算邏輯'];
const popTag = thirdBugTags.pop();

console.log(thirdBugTags); // ['公式錯誤', 'SUMIF']
console.log(popTag); // 計算邏輯

// ==========================================
// 編號：04
// 方法名稱：Array.prototype.push()
// ==========================================
// 關鍵字（一句話說明）：新增一個或多個元素至陣列的最後面
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：elementN 要新增至陣列最後面的元素
// 回傳值：number（回傳陣列的新長度）
// ==========================================

const fourthBugTags = ['公式錯誤', 'SUMIF', '計算邏輯'];
const pushTag = fourthBugTags.push('背景底色');

console.log(fourthBugTags); // ['公式錯誤', 'SUMIF', '計算邏輯', 背景底色']
console.log(pushTag); // 4

// ==========================================
// 編號：05
// 方法名稱：Array.prototype.splice()
// ==========================================
// 關鍵字（一句話說明）：刪除既有元素或加入新元素來改變一個陣列的內容
// 是否改變原陣列（mutate）：是
// 參數說明（傳入的數量或用途）：.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 1. start 要開始改動的元素索引
// 2. deleteCount 想要刪除的原陣列元素數量（0 或負數則不會有元素被刪除）
// 3. item1, item2, ... 選擇性，從 start 開始，要加入到陣列的元素
// 回傳值：array（回傳包含被刪除的元素陣列）
// ==========================================

const fifthBugTags = ['Render顯示', '日期格式', '資料驗證'];
const spliceTag = fifthBugTags.splice(2, 1);
console.log(fifthBugTags); // ['Render顯示', '日期格式']
console.log(spliceTag); // ['資料驗證']

const spliceAddTag = fifthBugTags.splice(0, 1, 'Render', '資料驗證');
console.log(fifthBugTags); // ['Render', '資料驗證', '日期格式']
console.log(spliceAddTag); // ['Render 顯示']