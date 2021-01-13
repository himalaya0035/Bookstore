export function loadUtilityJs() {
    var sidebarToggler = document.getElementsByClassName("sidebarToggler")[0];
    var sidebar = document.getElementsByClassName("mobileSidebar")[0];
    var cross = document.getElementsByClassName("cross")[0];

    sidebarToggler.addEventListener('click', function () {
        sidebar.classList.toggle('sidebarActive');
    })
    cross.addEventListener('click', function () {
        sidebar.classList.toggle('sidebarActive');
    })

    var bookNames = document.getElementsByClassName("bookName");
    for (let i = 0; i < bookNames.length; i++) {
        if (bookNames[i].innerText.length > 23) {
            bookNames[i].innerText = bookNames[i].innerText.substring(0, 25) + ' ...';
        }
    }
}

export function toggleButton(mainElementClass, toBeReplacedClass, checkClass, buttonInitialText, buttonFinalText) {
    var commonElement = document.getElementsByClassName(mainElementClass);
    for (let i = 0; i < commonElement.length; i++) {
        commonElement[i].addEventListener('click', (e) => {
            var ele = e.target;
            var child = ele.getElementsByTagName('i')[0];
            if (child.classList.contains(checkClass)) {
                ele.innerHTML = `<i class ="fa ${toBeReplacedClass}" style="color:white;"></i>` + ` ${buttonInitialText}`;
            } else {
                ele.innerHTML = `<i class ="fa ${checkClass}" style="color:white;"></i>` + ` ${buttonFinalText}`;
            }
            // api call here
            if (window.location.href.indexOf('bookmarked') > -1 && mainElementClass == 'bookmark') {
                let bookItem = ele.closest('.bookItem');
                bookItem.remove();
                //api call here
                if (document.getElementsByClassName('bookList')[0].innerText.length == 0) {
                    document.getElementById('NoBookmarkedMsg').style.display = 'block';
                }
            }

        })
    }
}

export function addScrollEffect() {
    var rellax = new Rellax('.rellax');
    var authorInfoContainer = document.getElementsByClassName('authorInfoContainer')[0];
    window.onscroll = () => {
        if (window.scrollY > 0 && window.scrollY < 20) {
            authorInfoContainer.style.opacity = 0.9;
        } else if (window.scrollY >= 20 && window.scrollY < 40) {
            authorInfoContainer.style.opacity = 0.8;
        } else if (window.scrollY >= 40 && window.scrollY < 60) {
            authorInfoContainer.style.opacity = 0.7;
        } else if (window.scrollY >= 60 && window.scrollY < 80) {
            authorInfoContainer.style.opacity = 0.6;
        } else if (window.scrollY >= 80 && window.scrollY < 100) {
            authorInfoContainer.style.opacity = 0.5;
        } else if (window.scrollY >= 100 && window.scrollY < 120) {
            authorInfoContainer.style.opacity = 0.4;
        } else if (window.scrollY >= 120 && window.scrollY < 140) {
            authorInfoContainer.style.opacity = 0.3;
        } else if (window.scrollY >= 140 && window.scrollY < 160) {
            authorInfoContainer.style.opacity = 0.2;
        } else if (window.scrollY >= 160 && window.scrollY < 170) {
            authorInfoContainer.style.opacity = 0.1;
        } else if (window.scrollY >= 170) {
            authorInfoContainer.style.opacity = 0;
        } else {
            authorInfoContainer.style.opacity = 1;
        }
    }
}

export function enableLoader(containerElement) {
    containerElement.style.visibility = 0;
    containerElement.style.opacity = 0;
    loader.style.display = 'block';
    loader.style.visibility = 1;
    loader.style.opacity = 1;
}

export function disableLoader(containerElement) {
    containerElement.style.visibility = 1;
    containerElement.style.opacity = 1;
    loader.style.display = 'none';
    loader.style.visibility = 0;
    loader.style.opacity = 0;
}

