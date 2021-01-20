import { constructSection } from "./constructSection.js";
import { constructSidebar, constructTopBar } from "./component.js";
import * as utility from "./utilities.js";

const rootElement = document.getElementById("rootElement");
var loader = document.getElementById("loader");
var contentWrapper;

function constructBookmarkedList(data){
    var bookmarkedBooks = '';
    for (let i=0;i<2;i++){
        let obj = {
            // sb deta yha nikallene, uske baad obj.variableName Niche Html me kr dena
        }
        bookmarkedBooks += 
        `
            <div class="bookItem">
                <div class="coverImgHolder">
                    <a href="book.html"><img loading="lazy" src="images/book2.jpg" alt=""></a>
                </div>
                <div class="cartBookInfo">
                    <p class="cartBookName">The Subtle art of not giving a fuck</p>
                    <p class="authorName">Mark Manson</p>
                    <div class="priceRating">
                        <p class="cartBookPrice">Rs 394</p>
                        <p class="cartBookRating"><i class="fa fa-star"></i> 4.5</p>
                    </div>
                    <div class="options bookOptions">
                        <div class="qty addToCart">
                            <button class="addToCartBtn"><i class="fa fa-cart-plus"
                                    style="color: white; font-size: 1.1em;"></i>&nbsp;&nbsp;Add to cart</button>
                        </div>
                        <button class="deleteBookmark" style="background-color: #673AB7; color: white; padding: 8px;"><i
                        class="fa fa-trash" style="color: white;"></i>&nbsp;&nbsp;Remove</button>
                    </div>
                </div>
            </div>
        `
    }
    return (
     `
        <div class="bookList">
            ${bookmarkedBooks}
        </div>
    `
    )
}


let NameOfUser = "Priyansh Singh"; // ye data kaise nikalna hai api se wo dekhlena
let userId = 1;

async function constructBookmarkPage(urlOne,isAuthenticated){
    utility.enableLoader(rootElement,loader);

    let bookmarkedListHtml = await constructSection(urlOne,constructBookmarkedList);
    let topBarHtml = constructTopBar('Bookmarked','index.html','cart.html');
    let sidebarHtml = constructSidebar(isAuthenticated,userId,NameOfUser);

    contentWrapper = `
            <div class ="contentWrapper">
                    ${topBarHtml}
                    ${bookmarkedListHtml}
                    <h4 id="NoBookmarkedMsg">No Bookmarked Book</h4>
            </div>
    `
    rootElement.innerHTML = sidebarHtml + contentWrapper;
    utility.disableLoader(rootElement,loader);
    utility.loadUtilityJs();
    utility.toggleButton("deleteBookmark","fa-bookmark","fa-bookmark-o", "Bookmarked","Bookmark");
    utility.toggleButton("addToCartBtn","fa-check","fa-cart-plus","Added","Add to Cart");
}

constructBookmarkPage("https://jsonplaceholder.typicode.com/todos/1",true)
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));
