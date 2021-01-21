import { constructSection } from "./constructSection.js";
import { constructHomepageTopBar, constructSidebar, constructTopBar } from "./component.js";
import * as utility from "./utilities.js";

const rootElement = document.getElementById("rootElement");
var loader = document.getElementById("loader");
var contentWrapper;

function constructBooksSlider(data,sectionName) {
    var sliderBooks = "";
    for (let i = 0; i < 9; i++) { // ye 9 bs sample ke liye liya hai maine, array length ayega yha
      let obj = {
        // name : data[i].name
      };
      sliderBooks += `
        <div class="homepageBook">
            <div class="coverImgHolder">
                <a href="book.html" aria-label="view Book"><img src="images/book1.jpeg" loading="lazy" alt="" /></a>
            </div>
            <p class="bookName">Rich Dad Poor Dad</p>
            <div class="ratingAndPrice">
                <h6 class="homepageBookPrice">Rs 399</h6>
                <h6 class="homepageBookRating">4.7&#9733;</h6>
            </div>
        </div>
      `;
    }
    return ( `
          <div class ="booksSection">
              <div class="headerRow">
                  <h4>${sectionName}</h4>
                  <a href="sections.html" aria-label="view ${sectionName} section">More</a>
              </div>
             <div class="booksHolder">${sliderBooks}</div>
          </div>
          `
    )    
}

function constructAuthorsSlider(data){
    var sliderAuthors = "";
    for (let i = 0; i < 9; i++) { // ye 9 bs sample ke liye liya hai maine, array length ayega yha
      let obj = {

      };
      sliderAuthors += `
      <div class="authorBox">
        <div class="authorImgHolder">
            <a href="author.html" aria-label="view Author"><img loading="lazy" src="images/author1.jpg" height="135" width="90" alt="" /></a>
        </div>
        <p class="homepageAuthorName">Paulo coelho</p>
        <a href="author.html" aria-label="view Author" class="viewAuthor">View</a>
    </div>
      `;
    }
    return (
        `
        <div class="" style="padding: 10px; padding-left: 5px;">
            <div class="headerRow">
                <h4>Top Authors</h4>
            </div>
            <div class="authorsHolder">
                <div class="authorsScroller">
                 ${sliderAuthors}
                </div>
            </div>
         </div>   
        `
    )
}

let NameOfUser = "Priyansh Singh"; // ye data kaise nikalna hai api se wo dekhlena
let userId = 1;


async function constructHomepage(urlOne,urlTwo,urlThree,urlFour,urlFive,isAuthenticated){
    utility.enableLoader(rootElement,loader)

    let bestSellersHtml = await constructSection(urlOne,constructBooksSlider,'Best Sellers');
    let recommendedHtml = await constructSection(urlTwo,constructBooksSlider,'Recommended For You');
    let newReleasesHtml = await constructSection(urlThree,constructBooksSlider,'New Releases');
    let popularHtml = await constructSection(urlFour,constructBooksSlider,'Popular');
    let topAuthorsHtml = await constructSection(urlFive,constructAuthorsSlider);
    let topBarHtml = constructHomepageTopBar();
    let mobilesidebarHtml = constructSidebar(isAuthenticated, userId, NameOfUser);

    contentWrapper = `<div class ="contentWrapper">
         ${topBarHtml}
         ${bestSellersHtml}
         ${recommendedHtml}
         ${topAuthorsHtml}
         ${newReleasesHtml}
         ${popularHtml}
        </div>
    `
    const searchResults = `
    <div id="searchResults">
    
    </div>
    `
    rootElement.innerHTML = searchResults + mobilesidebarHtml + contentWrapper;
    utility.disableLoader(rootElement,loader)
    utility.loadUtilityJs();
    utility.manageSearchResults();
}

constructHomepage("https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/1",true)
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));

