let itemsArray = [
  {
    btnID : "buy_btn1",
    name: "Ergonomic Desk Bundle",
    src: "img/Ergonomic Desk Bundle.jpg"
  },{
    btnID : "buy_btn2",
    name: "Compact Standing Desk",
    src: "img/Compact Standing Desk.jpg"
  },{
    btnID : "buy_btn3",
    name: "Dual-Monitor Standing Desk Converter",
    src: "img/Dual-Monitor Standing Desk Converter.jpg"
  },{
    btnID : "buy_btn4",
    name: "Electric Height-Adjustable Desk",
    src: "img/Electric Height-Adjustable Desk.jpg"
  },{
    btnID : "buy_btn5",
    name: "Standing Desk Mat",
    src: "img/Standing Desk Mat.jpg"
  },{
    btnID : "buy_btn6",
    name: "Adjustable Standing Desk",
    src: "img/Adjustable Standing Desk.jpg"
  },{
    btnID : "buy_btn7",
    name: "Height-Adjustable Desk",
    src: "img/Height-Adjustable Desk.jpg"
  },{
    btnID : "buy_btn8",
    name: "Convertible Standing Desk",
    src: "img/Convertible Standing Desk.jpg"
  },{
    btnID : "buy_btn9",
    name: "Desktop Riser",
    src: "img/Desktop Riser.jpg"
  },{
    btnID : "buy_btn10",
    name: "Corner Standing Desk",
    src: "img/Corner Standing Desk.jpg"
  },{
    btnID : "buy_btn11",
    name: "Adjustable Office Chair",
    src: "img/Adjustable Office Chair.jpg"
  },{
    btnID : "buy_btn12",
    name: "Executive Ergonomic Chair",
    src: "img/Executive Ergonomic Chair.jpg"
  },{
    btnID : "buy_btn13",
    name: "Mesh Back Task Chair",
    src: "img/Mesh Back Task Chair.jpg"
  },{
    btnID : "buy_btn14",
    name: "Standing Desk Chair",
    src: "img/Standing Desk Chair.jpg"
  },{
    btnID : "buy_btn15",
    name: "Monitor Arm",
    src: "img/Monitor Arm.jpg"
  },{
    btnID : "buy_btn16",
    name: "Keyboard Tray",
    src: "img/Keyboard Tray.jpg"
  },{
    btnID : "buy_btn17",
    name: "Cable Management Kit",
    src: "img/Cable Management Kit.jpg"
  },{
    btnID : "buy_btn18",
    name: "Adjustable Foot Rest",
    src: "img/Adjustable Foot Rest.jpg"
  }
]

// start of search bar
let searchBox = document.getElementById("search_box");
let searchContainer = document.getElementById("search_container");
searchContainer.innerHTML = "";

searchBox.addEventListener("keyup" , (event) =>{
  
  let SearchText = event.target.value.toLowerCase().split(' ').join('').replace(/[^a-zA-Z0-9 ]/g, '');
  
  let filteredItem = itemsArray.filter((item) =>{
  return item.name.toLowerCase().split(' ').join('').replace(/[^a-zA-Z0-9 ]/g, '').includes(SearchText);
  })

  if(SearchText.length == 0 || filteredItem.length == 0){
    searchContainer.style.display = "none";
  }else{
    searchContainer.style.display = "block";
  }

  searchContainer.innerHTML = "";

      for(let i=0;i<filteredItem.length;i++){
        searchContainer.innerHTML += `
              <div class="search_item">
                    <img src="${filteredItem[i].src}" alt="">
                    <div class="vr_line"></div>
                    <h5>${filteredItem[i].name}</h5>
              </div>
        `
      }
  
});
//end of searh bar

//start of shopping cart
let buttons = document.querySelectorAll(".buy_btn");
let buyItemContainer = document.getElementById("buy_item_container");
let cartIcon = document.querySelector(".icon-container");
let hello = document.querySelector(".hello");
let itemCount = document.querySelector("#badge");
let buyModel = document.getElementById("buyModel");
var closeBtn = document.getElementsByClassName("close")[1];
let count = 0;

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let buttonId = this.id;
        count++;
        itemCount.innerHTML = count;

        for(let i=0;i<itemsArray.length;i++){
          if(itemsArray[i].btnID == buttonId){
            buyItemContainer.innerHTML += `
            <div class="buy_item">
              <img src="${itemsArray[i].src}" alt="">
              <div class="vr_line"></div>
              <h3>${itemsArray[i].name}</h3>
              <div class="vr_line"></div>
              <i class="fa-solid fa-trash"></i>
            </div>
            `
          }
        }
    });
});

cartIcon.onclick = function() {
  if(count == 0){
    buyItemContainer.innerHTML = "There is no buy item."
  }
  buyModel.style.display = "block";
}

closeBtn.onclick = function() {
  buyModel.style.display = "none";
  console.log("click")
}
//end of shopping cart