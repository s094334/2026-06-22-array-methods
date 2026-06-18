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
        reportedDate: '2026-06-01',
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
        reportedDate: '2026-06-02',
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
        reportedDate: '2026-06-02',
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
        closedDate: '2026-06-07',
        tags: ['公式錯誤', 'IF巢狀', '計算邏輯']
    },
    {
        bugId: 'BUG108',
        title: '篩選器套用後欄位顏色消失',
        priority: 'Medium',
        severity: 'Minor',
        reporter: 'Janet',
        fixed: true,
        reportedDate: '2026-06-07',
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
        reportedDate: '2026-06-07',
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
        reportedDate: '2026-06-08',
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

console.log(`===1. Array.prototype.shift()===`)
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

console.log(`===2. Array.prototype.unshift()===`)
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

console.log(`===3. Array.prototype.pop()===`)
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

console.log(`===4. Array.prototype.push()===`)
console.log(fourthBugTags); // ['公式錯誤', 'SUMIF', '計算邏輯', '背景底色']
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
console.log(`===5. Array.prototype.splice()===`)
console.table(fifthBugTags); // ['Render顯示', '日期格式']
console.log(spliceTag); // ['資料驗證']

const spliceAddTag = fifthBugTags.splice(0, 1, 'Render', '資料驗證');
console.table(fifthBugTags); // ['Render', '資料驗證', '日期格式']
console.log(spliceAddTag); // ['Render顯示']

// ==========================================
// 編號：06
// 方法名稱：Array.prototype.join()
// ==========================================
// 關鍵字（一句話說明）：將陣列中所有的元素連結成一個字串
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：.join([separator])
// 1. separator 用來隔開陣列中每個元素的字串
// 回傳值：string（回傳字串）
// ==========================================

const sixthBugTags = bugReports[5].tags;
const joinTag = sixthBugTags.join('、');

console.log(`===6. Array.prototype.join()===`)
console.log(sixthBugTags); // ['Render顯示', '合併單元格', '列印']
console.log(`標籤包含：${joinTag}`); // 標籤包含：Render顯示、合併單元格、列印

// ==========================================
// 編號：07
// 方法名稱：Array.prototype.reduce()
// ==========================================
// 關鍵字（一句話說明）：將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
// 1. callback 處理陣列中每個元素的函式，可傳入四個參數：
// - accumulator 前一個參數，如果是第一個陣列的話，值是以另外傳入或初始化的值
// - currentValue 當前變數
// - currentIndex 當前索引
// - array 全部陣列（較少用）
// 2. initialValue 初始值
// 回傳值：結果值
// ==========================================

const unfixedCount = bugReports.reduce((acc, object) => {
    return object.fixed === false ? acc + 1 : acc;
}, 0);

console.log(`===7. Array.prototype.reduce()===`)
console.log(unfixedCount);

// ==========================================
// 編號：08
// 方法名稱：Array.prototype.reduceRight()
// ==========================================
// 關鍵字（一句話說明）：將一個累加器及陣列中每項元素（由右至左）傳入回呼函式，將陣列化為單一值
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：除了右至左外，其他與 reduce() 相同
// 回傳值：結果值
// ==========================================

const latestFirstSummary = bugReports.reduceRight((acc, object) => {
    return acc + object.bugId + ' ';
}, '');

console.log(`===8. Array.prototype.reduceRight()===`)
console.log(latestFirstSummary); // BUG110 BUG109 BUG108 BUG107 BUG106 BUG105 BUG104 BUG103 BUG102 BUG101 


// ==========================================
// 編號：09
// 方法名稱：Array.prototype.sort()
// ==========================================
// 關鍵字（一句話說明）：對一個陣列的所有元素進行排序
// 是否改變原陣列（mutate）：會
// 參數說明（傳入的數量或用途）：.sort([compareFunction])
// 1. compareFunction 指定一個函式來排序（如果沒有，則根據各個元素轉為字串後的每一個字元之 Unicode 編碼位置值進行排序）
// 回傳值：array（排序後的陣列）
// ==========================================

const priorityOrder = { High: 1, Medium: 2, Low: 3 };

const sortedByPriority = bugReports.sort((a, b) => {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
});

console.log(`===9. Array.prototype.sort()===`)
console.table(sortedByPriority); // 按照 priority 高到低排序

// ==========================================
// 編號：10
// 方法名稱：Array.prototype.reverse()
// ==========================================
// 關鍵字（一句話說明）：把陣列反轉過來
// 是否改變原陣列（mutate）：會
// 參數說明（傳入的數量或用途）：無
// 回傳值：array（反轉後的陣列）
// ==========================================

const reversePriority = [...sortedByPriority].reverse();

console.log(`===10. Array.prototype.reverse()===`)
console.table(reversePriority); // 按照 priority 低到高排序

// ==========================================
// 編號：11
// 方法名稱：Array.prototype.indexOf()
// ==========================================
// 關鍵字（一句話說明）：給定元素在陣列中可以找到的第一個索引，如果不存在則傳回 -1
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：indexOf(searchElement, fromIndex)
// 1. searchElement 要尋找的數組元素
// 2. fromIndex（Optional）從陣列的第幾個位置開始搜尋，用於陣列有重複元素或想找某區間
// 回傳值：找到的第一個索引值，如果不存在則傳回 -1
// ==========================================

const reporters = ['Janet', 'Hew', 'Chelsea', 'Chelsea', 'Chelsea', 'Janet', 'Janet', 'Hew', 'Chelsea', 'Hew']
const findIndexof = reporters.indexOf('Chelsea');

console.log(`===11. Array.prototype.indexOf()===`)
console.log(findIndexof); // 2

// ==========================================
// 編號：12
// 方法名稱：Array.prototype.lastIndexOf()
// ==========================================
// 關鍵字（一句話說明）：給定元素在陣列中可以找到的最後一個索引，如果不存在則傳回 -1
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：lastIndexOf(searchElement, fromIndex)
// 1. searchElement 要尋找的數組元素
// 2. fromIndex（Optional）從陣列的第幾個位置開始搜尋，用於陣列有重複元素或想找某區間
// 回傳值：由後往前找到的第一個（即最後一個）索引值，如果不存在則傳回 -1
// ==========================================

const findLastIndexof = reporters.lastIndexOf('Chelsea', 5);

console.log(`===12. Array.prototype.lastIndexOf()===`)
console.log(findLastIndexof); // 4

// ==========================================
// 編號：13
// 方法名稱：length
// ==========================================
// 關鍵字（一句話說明）：設置或回傳該陣列中的元素數
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：無
// 回傳值：number（回傳陣列的長度）
// ==========================================

const lengthBugReports = bugReports.length;

console.log(`===13. length===`)
console.log(lengthBugReports); // 10

// ==========================================
// 編號：14
// 方法名稱：Array.prototype.some()
// ==========================================
// 關鍵字（一句話說明）：陣列中至少有一個元素符合條件,就回傳 true
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：some(callbackFn, thisArg)
// 1. callbackFn 用於對數組中的每個元素執行的函數
// - element 正在被 some 方法測試的陣列中的元素
// - index 這個元素在陣列中的索引
// - array 進行 some 方法操作的那個陣列
// 2. thisArg（Optional）this 執行時要使用的值
// 回傳值：true / false
// ==========================================

const seriousBug = bugReports.some(bug => {
    return bug.severity === 'Critical' && bug.fixed === false;
});

console.log(`===14. Array.prototype.some()===`)
console.log(seriousBug); // true

// ==========================================
// 編號：15
// 方法名稱：Array.prototype.every()
// ==========================================
// 關鍵字（一句話說明）：陣列中全部元素都要符合條件,才回傳 true
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：every(callbackFn, thisArg)
// 1. callbackFn 用於對數組中的每個元素執行的函數
// - element 正在被測試的陣列中的元素
// - index 這個元素在陣列中的索引
// - array 進行操作的那個陣列
// 2. thisArg（Optional）this 執行時要使用的值
// 回傳值：true / false
// ==========================================

const allFixed = bugReports.every(bug => {
    return bug.fixed === true;
});

console.log(`===15. Array.prototype.every()===`)
console.log(allFixed); // false

// ==========================================
// 編號：16
// 方法名稱：Array.prototype.forEach()
// ==========================================
// 關鍵字（一句話說明）：在提供的函數裡，每個元素都執行一次
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：forEach(callbackFn, thisArg)
// 1. callbackFn 用於對數組中的每個元素執行的函數
// - element 正在被測試的陣列中的元素
// - index 這個元素在陣列中的索引
// - array 進行操作的那個陣列
// 2. thisArg（Optional）this 執行時要使用的值
// 回傳值：無
// ==========================================

const allBugId = [];
bugReports.forEach(item => allBugId.push(item.bugId));

console.log(`===16. Array.prototype.forEach()===`)
console.log(allBugId); //  ['BUG102', 'BUG103', 'BUG107', 'BUG110', 'BUG101', 'BUG105', 'BUG108', 'BUG109', 'BUG104', 'BUG106']

// ==========================================
// 編號：17
// 方法名稱：Array.prototype.map()
// ==========================================
// 關鍵字（一句話說明）：會透過函式內所回傳的值組合成一個新的陣列
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：map(callbackFn, thisArg)
// 1. callbackFn 用於對數組中的每個元素執行的函數
// - element 正在被測試的陣列中的元素
// - index 這個元素在陣列中的索引
// - array 進行操作的那個陣列
// 2. thisArg（Optional）this 執行時要使用的值
// 回傳值：array (回傳值組成的陣列)
// ==========================================

const idAndHighPriority = bugReports
    .filter(item => item.priority === 'High')
    .map(item => item.bugId + ':' + item.priority);

console.log(`===17. Array.prototype.map()===`)
console.table(idAndHighPriority); // ['BUG102:High', 'BUG103:High', 'BUG107:High', 'BUG110:High']

// ==========================================
// 編號：18
// 方法名稱：Array.prototype.filter()
// ==========================================
// 關鍵字（一句話說明）：建立一個全新的陣列（淺拷貝），把符合條件的元素放進去
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：filter(callbackFn, thisArg)
// 1. callbackFn 用於對數組中的每個元素執行的函數
// - element 正在被測試的陣列中的元素
// - index 這個元素在陣列中的索引
// - array 進行操作的那個陣列
// 2. thisArg（Optional）this 執行時要使用的值
// 回傳值：array (回傳值組成的陣列)
// ==========================================

const completedBug = bugReports
    .filter(item => item.closedDate !== null)
    .map(item => item.bugId + '(' + item.priority + ')');

console.log(`===18. Array.prototype.filter()===`)
console.table(completedBug); // ['BUG102(High)', 'BUG107(High)', 'BUG108(Medium)', 'BUG104(Low)']

// ==========================================
// 編號：19
// 方法名稱：Array.prototype.slice()
// ==========================================
// 關鍵字（一句話說明）：回傳一個新陣列物件，為原陣列選擇的 start 至 end（不含 end）部分的淺拷貝
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：slice(start, end)
// 1. start 從哪個索引值開始切
// 2. end 在哪一個索引值結束（不包含這個數值）
// 回傳值：array (回傳值組成的陣列)
// ==========================================

const sliceCompletedBug = bugReports
    .filter(item => item.closedDate !== null)
    .map(item => item.bugId + '(' + item.priority + ')')
    .slice(0, 2);

console.log(`===19. Array.prototype.slice()===`)
console.table(sliceCompletedBug); // ['BUG102(High)', 'BUG107(High)']

// ==========================================
// 編號：20
// 方法名稱：Array.prototype.concat()
// ==========================================
// 關鍵字（一句話說明）：合併兩個或多個陣列
// 是否改變原陣列（mutate）：不會
// 參數說明（傳入的數量或用途）：concat(value1, value2, /* …, */ valueN)
// value1， …，valueN 將陣列或值合併成新陣列
// 回傳值：array (合併的陣列)
// ==========================================

const allTags = bugReports
    .reduce((acc, item) => {
        return acc.concat(item.tags)
    }, []);

console.log(`===20. Array.prototype.concat()===`)
console.table(allTags) // 全部的 tags