import {constructSection} from "./constructSection.js";
import {constructSidebar, constructTopBar} from "./component.js";
import * as utility from "./utilities.js";

const rootElement = document.getElementById("rootElement");
var loader = document.getElementById("loader");
var contentWrapper;
let dataForModal;

let modalContent = '';

let orderDetailsModal = `<div id="myModal" class="modal">
<!-- Modal content -->
<div class="modal-content">
    <div class="modal-header" >
    <h5 style="letter-spacing:1px;">Order Details</h5>
    <span class="close">&times;</span>
    </div>
          ${modalContent}        
</div>
</div>`;

function get_formatted_date(ordered_on) {
    const dateTime = new Date(ordered_on)
    return dateTime.toLocaleDateString()

}



function constructOrdersItem(data) {
    console.log(data)
    dataForModal = data; // store data here from api
    let orderItem = '';
    for (let i = 0; i < data.length; i++) {
        orderItem += `<div class="bookItem" style="align-items: flex-start;">
                    <div class="orderImgHolder" style="margin-right:10px; ">
                        <img src="${data[i].book_details.cover_image}" alt="" style="width:60px;height:60px; object-fit: cover; object-position: top; border-radius:10px;">
                    </div>
                    <div class="orderName cartBookInfo" style="padding:0px; margin-top: 5px;">
                        <p class="cartBookName">${data[i].book_details.name}</p>
                        <p class="authorName">Ordered : ${get_formatted_date(data[i].order_details.ordered_on)} ( <a href="#" class="myBtn" id="${i}" style="text-decoration: none; color: rgb(96, 96, 243);">View Details</a> )</p>
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

function constructOrderDetailModel(id) {

    console.log(id)
    return (
        `
        <div class="modal-body">
                    <div class="orderDetail">
                        <p>From</p>
                        <p>Cloudtail India Pvk
                        t Ltd.</p>
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
        
        `
    )

}

let NameOfUser;
let isAuthenticated = false;

function TestFunction() {

    let modal = document.getElementsByClassName("modal");

    let btn = document.getElementsByClassName("myBtn");

    let span = document.getElementsByClassName("close");

    for (let i = 0; i < btn.length; i++) {
        btn[i].onclick = function (e) {
            modal[0].style.display = "block";

            const id = e.target.id;
            modalContent = constructOrderDetailModel(id);
            orderDetailsModal = `<div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header" >
                <h5 style="letter-spacing:1px;">Order Details</h5>
                <span class="close">&times;</span>
                </div>
                      ${modalContent}        
            </div>
        </div>`
        }
    }

    for (let i = 0; i < span.length; i++) {
        span[i].onclick = function () {
            modal[i].style.display = "none";
        }
    }

}

async function constructOrdersPage(urlone) {
    utility.enableLoader(rootElement, loader);

    try {
        NameOfUser = await constructSection('/api/accounts/profile', utility.getUser);
        isAuthenticated = true;
    } catch (e) {
        NameOfUser = 'Guest';
    }

    let ordersItem = await constructSection(urlone, constructOrdersItem);
    let topBarHtml = constructTopBar('Your Orders', 'index.html');
    let sidebarHtml = constructSidebar(isAuthenticated, NameOfUser);


    contentWrapper = `
        <div class="contentWrapper">
            ${topBarHtml}
            ${ordersItem}
        </div>
    `

    TestFunction();
    rootElement.innerHTML = sidebarHtml + contentWrapper + orderDetailsModal;
    utility.disableLoader(rootElement, loader);
   
    utility.loadUtilityJs();
}

constructOrdersPage("/api/cart/your-orders", true)
    .then(() => console.log("promise resolved"))
    .catch((err) => console.log(err.message));