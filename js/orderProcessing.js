var increase = document.getElementsByClassName('increaseQuantity');
var decrease = document.getElementsByClassName('decreaseQuantity');
var inputElements = document.getElementsByClassName('itemQuantity');
var prices = document.getElementsByClassName('cartBookPrice');
var deleteBtns = document.getElementsByClassName('deleteCartItem');

for (i=0;i<increase.length;i++){
    increase[i].addEventListener('click',manageQuantity);
    decrease[i].addEventListener('click',manageQuantity);
    inputElements[i].addEventListener('input', function(e){
        if (e.target.value < 1){
            e.target.value = 1;
        }
        else if (e.target.value > 10){
            e.target.value = 10;
        }
    })
}

function manageQuantity(e){
    let clickedBtn = e.target.parentElement;
    var parent = clickedBtn.parentElement;
    let input = parent.getElementsByClassName('itemQuantity')[0];
    if (input.value == '') {
        input.value = 1;
    }
    let currentQty = parseInt(input.value);
    if(clickedBtn.classList.contains('increaseQuantity')){
        input.value = currentQty + 1;
        if(input.value > 10){
            input.value = 10;
            alert('Max Quantity is 10')
         }
    }
    else if(clickedBtn.classList.contains('decreaseQuantity')){
        input.value = currentQty -1;
        if(input.value < 1){
            input.value = 1;
        }
    }
    getTotalQuantityAndAmount();
}
getTotalQuantityAndAmount();
function getTotalQuantityAndAmount(){
    let totalQty = 0;
    let totalAmt = 0;
    for (let i=0;i<inputElements.length;i++){
        let strQuantity = inputElements[i].value;
        let Quantity = parseInt(strQuantity);
        let strPrice = prices[i].textContent.replace('Rs ','');
        let price = parseInt(strPrice)
        totalQty = totalQty + Quantity;
        totalAmt = totalAmt + price * Quantity;
    }
    document.getElementById('totalQuantity').innerText = totalQty;
    document.getElementById('totalAmount').innerText = 'Rs ' + totalAmt;
}

for (i=0;i<deleteBtns.length;i++){
    deleteBtns[i].addEventListener('click',(e)=>{
        var clickedDeleteBtn = e.target;
        var cartItem = clickedDeleteBtn.closest('.item');
        // api call here
        cartItem.remove();
    })
}