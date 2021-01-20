import { constructSection } from "./constructSection.js";
import { constructSidebar, constructTopBar } from "./component.js";
import * as utility from "./utilities.js";

const rootElement = document.getElementById("rootElement");
var loader = document.getElementById("loader");
var contentWrapper;

function constructItemAndDescSection(data) {
  // yha pe data ko jaise bhi break krna ho section me wo krna like
  // let bookDesc = data[0].bookDesc; example
  // uske baad aise ${} usko render kr dena
  return `
        <div class="bookItem">
        <div class="coverImgHolder">
            <img src="images/book2.jpg" alt="">
        </div>
        <div class="cartBookInfo">
            <p class="cartBookName">The subtle art of not giving a fuck</p>
            <p class="authorName">Mark Manson</p>
            <div class="priceRating">
                <p class="cartBookPrice">Rs 394</p>
                <p class="cartBookRating"><i class="fa fa-star"></i>4.5</p>
            </div>
            <div class="options bookOptions">
                <div class="qty addToCart">
                    <button class="addToCartBtn"><i class="fa fa-cart-plus"
                            style="color: white; font-size: 1.1em;"></i>&nbsp;&nbsp;Add to cart</button>
                </div>
                <button class="bookmark" style="background-color: #673AB7; color: white; padding: 8px;"><i
                        class="fa fa-bookmark-o" style="color: white;"></i>&nbsp;&nbsp;Bookmark</button>
            </div>
        </div>
    </div>
    <div class="pillsScroller bookGenres" style="padding-left:10px ;">
        <a href="genre.html" class="pill">Self Help</a>
        <a href="genre.html" class="pill">Pyschology</a> <!-- Sirf do Genre hi dikhayenge book ke, chahe kitne bhi kyu na ho -->
    </div>
    <div class="bookDesc">
        <div class="shapesHeading" style="transform: translateX(-15px); width: 50%; margin-bottom: 10px;">
            <h5>About</h5>
        </div>
        <p>In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how
        to stop trying to be “positive” all the time so that we can truly become better, happier people
        For decades, we’ve been told that positive thinking is the key to a happy, rich life. “Fuck
        positivity,” Mark Manson says. “Let’s be honest, shit is fucked and we have to live with it.”</p>
    </div>
        `;
}

function constructSimilarBooksSection(data) {
  // similar books ki array ki length bhi nikalana yha
  var similarBooks = "";
  for (let i = 0; i < 5; i++) {
    // ye 5 bs sample ke liye liya hai maine, array length ayega yha
    let obj = {
      // pichle section ki treh yha bhi data break krna, data[i].jsonKey
      // uske baad niche html me ${obj.variableName} aise put krdena
      // imageUrl = data[i].bookImg example
    };
    similarBooks += 
       `
        <div class="homepageBook">
            <div class="coverImgHolder">
                <a href="book.html"><img src="images/book1.jpeg" alt="" /></a>
            </div>
            <p class="bookName">Rich Dad Poor Dad</p>
            <div class="ratingAndPrice">
                <h6 class="homepageBookPrice">Rs 399</h6>
                <h6 class="homepageBookRating">4.7&#9733;</h6>
            </div>
        </div>
        `
    
  }
  return (`
        <div class ="booksSection" >
            <div class="headerRow">
                <h4>Similar Books</h4>
            </div>
            <div class="booksHolder">${similarBooks}</div>
        `
     )
}

let NameOfUser = "Priyansh Singh"; // ye data kaise nikalna hai api se wo dekhlena
let userId = 1;

async function contsructBookPage(bookDataUrl, similarBooksUrl, isAuthenticated) {
  utility.enableLoader(rootElement,loader);

  let booksInfoAndDescHtml = await constructSection( bookDataUrl,constructItemAndDescSection);
  let similarBooksSectionHtml = await constructSection(similarBooksUrl,constructSimilarBooksSection);
  let mobilesidebarHtml = constructSidebar(isAuthenticated, userId, NameOfUser); // is function ko phle component.js me check krle, tab arguements jo diye wo smj jayega
  let topBarHtml = constructTopBar("Book", "index.html", "cart.html"); // jo bhi django ke according link ho wo daal diyo
  
  contentWrapper = `<div class="contentWrapper"> ${topBarHtml} ${booksInfoAndDescHtml} ${similarBooksSectionHtml}</div>`;
  rootElement.innerHTML = mobilesidebarHtml + contentWrapper;

  utility.disableLoader(rootElement,loader);
  
  utility.loadUtilityJs();
  utility.toggleButton("bookmark","fa-bookmark","fa-bookmark-o", "Bookmarked","Bookmark");
  utility.toggleButton("addToCartBtn","fa-check","fa-cart-plus","Added","Add to Cart");
}

contsructBookPage("https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/1",true)
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));
