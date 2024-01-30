// 选中排序按钮
let openList = document.querySelector(".btn-sortBy");
let dropdownMenu = document.querySelector(".dropdownMenu");
// 添加监听事件,当点击排序按钮时更换按钮样式样式,并控制下拉列表的显示
openList.addEventListener("click", function (event) {
    openList.classList.toggle("open");
    let isDropdownMenuHidden =
        dropdownMenu.style.display === "none" ||
        dropdownMenu.style.display === "";
    dropdownMenu.style.display = isDropdownMenuHidden ? "block" : "none";
    event.stopPropagation();
});
// 监听整个文档
document.addEventListener("click", function (event) {
    // 当点击页面其他地方时改变排序按钮样式,并隐藏下拉列表的显示
    openList.classList.remove("open");
    dropdownMenu.style.display = "none";
});
