// sidebar

const sidebarAuthenticated = ` <div class="mobileSidebar">
<div class="top_section_sidebar">
    <div class="userInfo">
        <div class="imgbox4">
            <a href="#"><img src="{userProfile}" alt=""></a>
        </div>
        <h3>{User Name}</h3>

    </div>
    <div class="cross">
        <i class="fa fa-close " style="color: #CECFCD;"></i>
    </div>
</div>
<hr>
<ul class="sidebarList">
    <li><a href=""><i class="fa fa-bar-chart"></i> Stats</a></li>
    <li><a href=""><i class="fa fa-bookmark"></i> Bookmarked</a></li>
    <li><a href=""><i class="fa fa-file"></i> Drafts</a></li>
    <li><a href=""><i class="fa fa-plus"></i> Add Topics</a></li>
</ul>
<hr>
<ul class="sidebarList">
    <li><a href=""><i class="fa fa-user"></i> Accounts</a></li>
    <li><a href=""><i class="fa fa-lock"></i> Privacy</a></li>
</ul>
<hr>
<ul class="sidebarList">
    <li><a href=""><i class="fa fa-lightbulb-o"></i> Change mode</a></li>
    <li><a href=""><i class="fa fa-sign-out"></i> Logout</a></li>
</ul>
</div>`

const sidebarUnauthenticated = ` <div class="mobileSidebar">
<div class="top_section_sidebar">
    <div class="userInfo">
        <div class="imgbox4">
            <a href="#"><img src="images/professor.jpg" alt=""></a>
        </div>
        <h3>Sergio Marquina</h3>

    </div>
    <div class="cross">
        <i class="fa fa-close " style="color: #CECFCD;"></i>
    </div>
</div>
<hr>
<ul class="sidebarList">
    <li><a href=""><i class="fa fa-bar-chart"></i> Stats</a></li>
    <li><a href=""><i class="fa fa-bookmark"></i> Bookmarked</a></li>
    <li><a href=""><i class="fa fa-file"></i> Drafts</a></li>
    <li><a href=""><i class="fa fa-plus"></i> Add Topics</a></li>
</ul>
<hr>
<ul class="sidebarList">
    <li><a href=""><i class="fa fa-user"></i> Accounts</a></li>
    <li><a href=""><i class="fa fa-lock"></i> Privacy</a></li>
</ul>
<hr>
<ul class="sidebarList">
    <li><a href=""><i class="fa fa-lightbulb-o"></i> Change mode</a></li>
    <li><a href=""><i class="fa fa-sign-out"></i> Logout</a></li>
</ul>
</div>`

//bookDisplay

const page = sidebarAuthenticated;
console.log(page);
