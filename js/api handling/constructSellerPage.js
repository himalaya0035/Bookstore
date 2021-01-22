import { constructSection } from "./constructSection.js";
import { constructSidebar, constructTopBar } from "./component.js";
import * as utility from "./utilities.js";

const rootElement = document.getElementById("rootElement");
var loader = document.getElementById("loader");
var contentWrapper;
var profileBannerImgUrl;

function constructProfileForm(data){
    // requires fields FirstName, lastname, address, contact and email
    // sb fields nikalke input tags ki value me daal diyo
    return (
        `
        <div class="sectionBottom rellax" data-rellax-speed="0">
        <div class="container-fluid" style="padding-top: 0px">
            <div class="row justify-content-center">
                <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                    <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <form id="msform"  action="" method="post">
                            <!-- progressbar -->

                            <!-- fieldsets -->
                            <fieldset>
                                <div class="form-card">
                                    <div class="row">
                                        <div class="col-12">
                                            <h4 class="fs-title">Be A Seller</h4>
                                            <p>Fill This Form to partner with us</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-12" style="margin-left: 18px">
                                                <h6 id="message" style="color: rgb(243, 51, 51)"></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12" style="margin-bottom: 12px;">
                                            <h6 id="message" style="color: rgb(243, 51, 51)"></h6>
                                        </div>
                                    </div>
                                    <label class="fieldlabels">Firm / Individual Name :</label>
                                    <input type="text" pattern=".{3,200}"   required title="3 characters minimum" name="firmName" placeholder="Firm Name / Individual Name" id="firmname"
                                        class=" sectionFirst" />
                                      
                                    <label class="fieldlabels">GSTIN No : </label>
                                    <input type="text" pattern=".{15,15}" required title="Should be 15 charcters long" style="text-transform:uppercase;" class="sectionFirst" name="gstin" id="gstino" placeholder="Gstin No" />
                                    <label class="fieldlabels">Professional Email : </label>
                                    <input type="email" required name="email" placeholder="Email Id" id="email"
                                        class="sectionFirst" />
                                    <label class="fieldlabels">PAN No :</label>
                                    <input type="text" pattern=".{10,10}" required title="Should be 10 charcters long" style="text-transform:uppercase;" name="pan" placeholder="Pan" id="pan"
                                        class="loginField sectionFirst" />
                                    <label class="fieldlabels">Bank Account No : </label>
                                    <input type="text" pattern=".{9,18}" required title="Should be 9-18 charcters long" style="text-transform:uppercase;" name="account" placeholder="Bank Account No"
                                        id="accountNo" class="loginField sectionFirst" />
                                        <label class="fieldlabels">IFSC Code : </label>
                                        <input type="text" pattern=".{11,11}" style="text-transform:uppercase;" required title="Should be 11 charcters long" name="ifsc" placeholder="IFSC Code "
                                        id="ifsc" class="loginField sectionFirst" />
                                        <div style="display:flex; justify-content:center; align-items:flex-start;"><input type="checkbox" required id="agree" style="dislay:block; margin-top:6px; width:10%;"><p style="width=90%;">I Agree and have read the <a href="#">Terms and conditions </a></p></div>
                                 
                                </div>
                                <a href="index.html">
                                <input type="submit" name="save" class="next action-button" id="submitBtn" value="Submit" />
                                </a>
                                </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    )

}

let NameOfUser = "Priyansh Singh"; // ye data kaise nikalna hai api se wo dekhlena
let userId = 1; 

async function constructSellerPage(urlone,isAuthenticated){
    utility.enableLoader(rootElement,loader);

    let profileFormHtml = await constructSection(urlone,constructProfileForm);
    let mobilesidebarHtml = constructSidebar(isAuthenticated, userId, NameOfUser); // is function ko phle component.js me check krle, tab arguements jo diye wo smj jayega
    let topBarHtml = constructTopBar('Partner With Us', "index.html",undefined); // jo bhi django ke according link ho wo daal diyo
    let authorInfoContainer = `<div class="authorInfoContainer profileCoverImg" style=""></div>`

    contentWrapper = `<div class="contentWrapper">
                    ${topBarHtml}
                    ${authorInfoContainer}
                    ${profileFormHtml}
    </div>`
    
    rootElement.innerHTML = mobilesidebarHtml + contentWrapper;
    utility.disableLoader(rootElement,loader);
    utility.loadUtilityJs();
    // sellerValidation();
    utility.addScrollEffect();

}

constructSellerPage('https://jsonplaceholder.typicode.com/todos/1',true)
 .then(() => console.log("prmoise resolved"))
 .catch((err) => console.log(err.message));