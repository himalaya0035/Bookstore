var sidebarToggler = document.getElementsByClassName("sidebarToggler")[0];
var sidebar = document.getElementsByClassName("mobileSidebar")[0];
var cross = document.getElementsByClassName("cross")[0];
// var i = sidebarToggler.getElementsByTagName('i')[0];
sidebarToggler.addEventListener('click', function () {
    sidebar.classList.toggle('sidebarActive');
})
cross.addEventListener('click', function () {
    sidebar.classList.toggle('sidebarActive');
})

var bookNames = document.getElementsByClassName("bookName");

for (i = 0; i < bookNames.length; i++) {
    if (bookNames[i].innerText.length > 23 ) {
        bookNames[i].innerText = bookNames[i].innerText.substring(0, 25) + ' ...';
    }
}


