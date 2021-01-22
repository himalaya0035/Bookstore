import { constructSection } from "./constructSection.js";
import { constructSidebar, constructTopBar } from "./component.js";
import * as utility from "./utilities.js";

const rootElement = document.getElementById("rootElement");
var loader = document.getElementById("loader");
var contentWrapper;
var sectionBottom;
var authorName;
var authorImgUrl;


function constructAuthorDesc(data){
    // yha pe data nikalna 
    // NOTE : author ka name and author ki Img url line 9 and 10 pe jo global variable hai wha BHI store krna,
    // dusri jgeh bhi istemal krna hai unko
    // matlab yha teen variable nikalne, authorDesc, authorName, authorImgUrl
    authorName = 'Paulo Coelho'; // abhi ke liye toh aise kr dia
    return (
        `
            <div class="bookDesc" style="margin-bottom: 0px;">
                <div class="shapesHeading" style="transform: translateX(-15px); width: 50%; margin-bottom: 10px;">
                    <h5>About</h5>
                </div>
                <p id="about">Paulo Coelho de Souza is a Brazilian lyricist and novelist, best known for his novel The Alchemist. In 2014, he uploaded his personal papers online to create a virtual Paulo Coelho Foundation.
                    Paulo Coelho was born in Rio de Janeiro, Brazil, and attended a Jesuit school. At 17, Coelho's parents committed him to a mental institution from which he escaped three times before being released at the age of 20. Coelho was born into a Catholic family, and his parents were strict about the religion and faith
                </p>
            </div>
    
        `
    )
}

function constructAuthorBooksSection(data) {
    // Author books ki array ki length  nikalana yha
    var authorBooks = "";
    for (let i = 0; i < 5; i++) { // ye 5 bs sample ke liye liya hai maine, array length ayega yha
      let obj = {
        // pichle section ki treh yha bhi data break krna, data[i].jsonKey
        // uske baad niche html me ${obj.variableName} aise put krdena
        // imageUrl = data[i].authorImg      example
      };
      authorBooks += `
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
      `;
    }
    return ( `
          <div class ="booksSection authorBooks">
              <div class="headerRow">
                  <h4>Author's Books</h4>
              </div>
              <div class="booksHolder">${authorBooks}</div>
          `
    )    
}

let NameOfUser = "Priyansh Singh"; // ye data kaise nikalna hai api se wo dekhlena
let userId = 1;

async function constructAuthorPage(urlone, urlTwo,isAuthenticated){
    utility.enableLoader(rootElement,loader);
    let getAuthorDescHtml = await constructSection(urlone,constructAuthorDesc);
    let getAuthorBooksHtml = await constructSection(urlTwo,constructAuthorBooksSection);
    let mobilesidebarHtml = constructSidebar(isAuthenticated, userId, NameOfUser); // is function ko phle component.js me check krle, tab arguements jo diye wo smj jayega
    let topBarHtml = constructTopBar(authorName, "index.html",undefined); // jo bhi django ke according link ho wo daal diyo
    let authorInfoContainer = ` <div class="authorInfoContainer" style="background:url('../images/author6.jpg');background-repeat:no-repeat; background-position:center top;"></div>`
    sectionBottom = `
            <div class="sectionBottom rellax" data-rellax-speed="0">
                ${getAuthorDescHtml}
                ${getAuthorBooksHtml}
            </div>
    `
    contentWrapper = `<div class="contentWraper">
                            ${topBarHtml}
                            ${authorInfoContainer}
                            ${sectionBottom}
                     </div>`
    rootElement.innerHTML = mobilesidebarHtml + contentWrapper;
    utility.disableLoader(rootElement,loader);
    utility.manageBookNameLength()
    utility.manageAboutSection();
    utility.addScrollEffect();
    utility.loadUtilityJs();

}

constructAuthorPage("https://jsonplaceholder.typicode.com/todos/1","https://jsonplaceholder.typicode.com/todos/1",true)
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));
