export function constructSidebar(isAuthenticated,userId,NameOfUser){
    if (isAuthenticated){
        return (
            `
            <div class="mobileSidebar">
            <div class="top_section_sidebar">
                <div class="userInfo">
                    <div class="imgbox4">
                        <a href="#"><img src="images/open-book.svg" alt="" /></a>
                    </div>
                    <a href="profile.html" style="text-decoration: none;" id="${userId}"><h3>${NameOfUser}</h3></a>
                </div>
                <div class="cross">
                    <i class="fa fa-close"></i>
                </div>
            </div>
            <hr />
            <ul class="sidebarList">
                <li>
                    <a href="index.html"><i class="fa fa-home" ></i> Home</a>
                </li>
                <li>
                    <a href="" id="${userId}"><i class="fa fa-file"></i> Your Orders</a>
                </li>
                <li>
                    <a href="cart.html"><i class="fa fa-shopping-cart" ></i> View Cart</a>
                </li>
                <li>
                    <a href="bookmarked.html"><i class="fa fa-bookmark"></i> Bookmarked</a>
                </li>
            </ul>
            <hr />
            <ul class="sidebarList">
                <li>
                    <a href="accounts.html"><i class="fa fa-user"></i> Accounts</a>
                </li>
                <li>
                    <a href=""><i class="fa fa-sign-out"></i> Logout</a>
                </li>
            </ul>
            <hr />
            <ul class="sidebarList">
                <li>
                    <a href=""><i class="fa fa-lightbulb-o"></i> Change mode</a>
                </li>
            </ul>
        </div>
            `
        )
    }
    else {
        return (
            `
            <div class="mobileSidebar">
            <div class="top_section_sidebar">
                <div class="userInfo">
                    <div class="imgbox4">
                        <a href="#"><img src="images/open-book.svg" alt="" /></a>
                    </div>
                    <a href="login.html" style="text-decoration: none;"><h3>Guest User</h3></a>
                </div>
                <div class="cross">
                    <i class="fa fa-close"></i>
                </div>
            </div>
            <hr />
            <ul class="sidebarList">
                <li>
                    <a href="index.html"><i class="fa fa-home" ></i> Home</a>
                </li>
                <li>
                    <a href="login.html"><i class="fa fa-file"></i> Your Orders</a>
                </li>
                <li>
                    <a href="login.html"><i class="fa fa-shopping-cart" ></i> View Cart</a>
                </li>
                <li>
                    <a href="login.html"><i class="fa fa-bookmark"></i> Bookmarked</a>
                </li>
             
             
            </ul>
            <hr />
            <ul class="sidebarList">
                <li>
                    <a href="login.html"><i class="fa fa-sign-in"></i> Login</a>
                </li>
                <li>
                    <a href="signup.html"><i class="fa fa-user"></i> Signup</a>
                </li>
            </ul>
            <hr />
            <ul class="sidebarList">
                <li>
                    <a href=""><i class="fa fa-lightbulb-o"></i> Change mode</a>
                </li>
            </ul>
        </div>
            `
        )
    }
}

export function constructTopBar(pageName,previousLink,NextLink) {
   if(NextLink){
    return (
        ` <div class="fixedPosition">
        <div class="topBar">
            <a href="#" class="sidebarToggler"><i class="fa fa-bars"
                    style="font-size: 20px; font-weight: 100;"></i></a>
            <div class="searchBar">
                <h3>${pageName}</h3>
            </div>
            <a href="${previousLink}" class="backBtn"><i class="fa fa-angle-left"
                    style="font-size: 20px; font-weight: 100;"></i></a>
            <a href="${NextLink}" class="backBtn"><i class="fa fa-angle-right"
                    style="font-size: 20px; font-weight: 100;"></i></a>
        </div>
    </div>`
    )
   }
   else {
       return (
            ` <div class="fixedPosition">
            <div class="topBar">
                <a href="#" class="sidebarToggler"><i class="fa fa-bars"
                        style="font-size: 20px; font-weight: 100;"></i></a>
                <div class="searchBar">
                    <h3>${pageName}</h3>
                </div>
                <a href="${previousLink}" class="backBtn"><i class="fa fa-angle-left"
                        style="font-size: 20px; font-weight: 100;"></i></a>
            </div>
        </div>`
        
       )
   }
}

export function constructHomepageTopBar(){
    return (
        `
        <div class="fixedPosition">
        <div class="topBar">
            <a href="#" class="sidebarToggler"><i class="fa fa-bars"
                    style="font-size: 25px; font-weight: 100"></i></a>
            <div class="searchBar">
                <input type="text" spellcheck="false" name="" id="searchBox"
                    placeholder="Search Books, Authors..." />
                <a href="" class="searchBtn"><i class="fa fa-search" style="font-size: 15px"></i></a>
            </div>
            <a href="cart.html" class="cartToggler"><i class="fa fa-shopping-cart"
                    style="font-size: 25px; font-weight: 100"></i></a>
        </div>
        <div class="categoriesPills">
            <div class="pillsScroller">
                <a href="genre.html" class="pill">Action</a>
                <a href="genre.html" class="pill">Horror</a>
                <a href="genre.html" class="pill">Fantasy</a>
                <a href="genre.html" class="pill">Self help</a>
                <a href="genre.html" class="pill">Science Fiction</a>
                <a href="genre.html" class="pill">Young Adult</a>
                <a href="genresList.html" class="more">More..</a>
            </div>
        </div>
    </div>
        `
    )
}