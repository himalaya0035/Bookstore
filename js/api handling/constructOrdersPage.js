import { constructSection } from "./constructSection.js";
import { constructSidebar, constructTopBar } from "./component.js";
import * as utility from "./utilities.js";

const rootElement = document.getElementById("rootElement");
var loader = document.getElementById("loader");
var contentWrapper;
let dataForModal;

function constructOrdersItem(data){
    dataForModal = data; // store data here from api
    let orderItem = '';
    for (let i=0;i<3;i++){
    orderItem +=  `<div class="bookItem" style="align-items: flex-start;">
                    <div class="orderImgHolder" style="margin-right:10px; ">
                        <img src="images/book${i+20}.jpg" alt="" style="width:60px;height:60px; object-fit: cover; object-position: top; border-radius:10px;">
                    </div>
                    <div class="orderName cartBookInfo" style="padding:0px; margin-top: 5px;">
                        <p class="cartBookName">The subtle art of not giving a Fuck</p>
                        <p class="authorName">Ordered : 24-Nov-2020 ( <a href="#" class="myBtn" id="${i}" style="text-decoration: none; color: rgb(96, 96, 243);">View Details</a> )</p>
                    </div>
                </div>
                `
    }
    return (
        `
        <div class="bookList">
            ${orderItem}
        </div>
        `
    )
}

function constructOrderDetailModel(){
    return (
        `
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header" >

                <h5 style="letter-spacing:1px;">Order Details</h5>
                <span class="close">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="orderDetail">
                        <p>From</p>
                        <p>Cloudtail India Pvt Ltd.</p>
                    </div>
                    <div class="orderDetail">
                        <p>Quanity</p>
                        <p>x4</p>
                    </div>
                    <div class="orderDetail">
                        <p>Price</p>
                        <p>Rs 280</p>
                    </div>
                    <div class="orderDetail">
                        <p>Total Amount</p>
                        <p>Rs 1120</p>
                    </div>
                    <div class="orderDetail">
                        <p>Status</p>
                        <p>Delivered</p>
                    </div>
                  
                </div>                
            </div>
        </div>
        `
    )

}

let NameOfUser = "Priyansh Singh"; // ye data kaise nikalna hai api se wo dekhlena
let userId = 1;

async function constructOrdersPage(urlone,isAuthenticated){
    utility.enableLoader(rootElement,loader);
    let ordersItem = await constructSection(urlone,constructOrdersItem);
    let topBarHtml = constructTopBar('Your Orders','index.html');
    let sidebarHtml = constructSidebar(isAuthenticated,userId,NameOfUser);
    let orderDetailsModal = constructOrderDetailModel();
    contentWrapper = `
        <div class="contentWrapper">
            ${topBarHtml}
            ${ordersItem}
        </div>
    `
    rootElement.innerHTML = sidebarHtml + contentWrapper + orderDetailsModal;
    utility.disableLoader(rootElement,loader);
    utility.loadUtilityJs();
    utility.loadAccountModalJs();
}

constructOrdersPage("https://jsonplaceholder.typicode.com/todos/1",true)
  .then(() => console.log("prmoise resolved"))
  .catch((err) => console.log(err.message));
