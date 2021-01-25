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
            <p class="cartBookName">The subtle art of not giving a fuck, rich dad poor dad, what rich teache their kid and poor does not</p>
            <p class="authorName">Mark Manson</p>
            <div class="priceRating">
                <p class="cartBookPrice">Rs 394 ( <a href="#" class="myBtn" style="text-decoration:none; color:#673AB7;">See All Offers</a> )</p>
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
        <p id="about">In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how
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

function constructAllOffers(data){
    var sectionBooks = '';
    for (let i=0;i<5;i++){
        sectionBooks += 
        `
        <div class="offer" style="margin-bottom:12px; border-bottom:1px dashed #808080; padding-bottom:5px;">
            <p style="font-size:14px; color:#808080;">Offer From : </p>
           
                <p style="font-family:'Poppins'; line-height:15px; margin-top:5px;">Cloudatail India Pvt Ltd.</p>
                <p style="font-family:'Poppins'; margin-bottom:8px;">Seller Rating : <i class="fa fa-star" style="color:#673AB7;"></i> 4.1 </p>
           
            <div style="display:flex;justify-content:space-between;align-items:flex-end; margin-top:0px; margin-bottom:5px;">
                <p><span style="font-family:'Poppins'"> Rs 394 </span></p>
                <button class="addToCartBtn2" id="${i}" style="background:#673AB7; border:none; color:white; padding:4px;"><i class="fa fa-cart-plus" style="color: white; font-size: 1.1em;"></i>&nbsp;&nbsp;Add to cart</button>
            </div>
        </div>
        `
    }
    return (
     `
        <div class="bookList">
           
            </div>
            ${sectionBooks}
        </div>
    `
    )
}   



let NameOfUser = "Priyansh Singh"; // ye data kaise nikalna hai api se wo dekhlena
let userId = 1;

async function contsructBookPage(bookDataUrl, similarBooksUrl,allOffersUrl, isAuthenticated) {
  utility.enableLoader(rootElement,loader);

  let booksInfoAndDescHtml = await constructSection( bookDataUrl,constructItemAndDescSection);
  let similarBooksSectionHtml = await constructSection(similarBooksUrl,constructSimilarBooksSection);
  let allOffersHtml = await constructSection(allOffersUrl,constructAllOffers)
  let mobilesidebarHtml = constructSidebar(isAuthenticated, userId, NameOfUser); // is function ko phle component.js me check krle, tab arguements jo diye wo smj jayega
  let topBarHtml = constructTopBar("Book", "index.html", "cart.html"); // jo bhi django ke according link ho wo daal diyo
  
  let offersModal = `
                <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <div class="modal-header" >

                    <h5 style="letter-spacing:1px;">All offers</h5>
                    <span class="close">&times;</span>
                    </div>
                    <div class="modal-body">
                     ${allOffersHtml}
                    </div>
                    
                </div>

                </div>
               `
  contentWrapper = `<div class="contentWrapper"> ${topBarHtml} ${booksInfoAndDescHtml} ${similarBooksSectionHtml}</div>`;
  rootElement.innerHTML = mobilesidebarHtml + contentWrapper + offersModal;

  utility.disableLoader(rootElement,loader);
  
  utility.loadUtilityJs();
  utility.manageBookNameLength()
  utility.manageAboutSection();
  utility.addDealToCart();
  utility.toggleButton("bookmark","fa-bookmark","fa-bookmark-o", "Bookmarked","Bookmark");
  utility.toggleButton("addToCartBtn","fa-check","fa-cart-plus","Added","Add to Cart");
  utility.loadAccountModalJs();
}

contsructBookPage("https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/1",true)
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));
