/* ===============================
   CATEGORY PRODUCTS DATA
=================================*/

const categoryProducts = {

  architecture: [
    {image:"image/3Dbuildingplan.png",name:"3D Building Plan", price:2500,img1:"image/3Dbuildingplan.png",
img2:"image/3Dplanning2.png",
img3:"image/3Dbuildingplan1.png"},
    {image:"image/interior.png",name:"Interior Design Layout", price:4000},
    {image:"image/structural.png",name:"Structural Drawing", price:3500},
    {image:"image/elevation.png",name:"Elevation Plan", price:2000},
    {image:"image/siteplanning.png",name:"Site Planning Design", price:5000},
    {image:"image/modernvilla.png", name:"Modern Villa Design", price:6500},
  {image:"image/commercialplan.png", name:"Commercial Building Plan", price:8000},
  {image:"image/houseblueprint.png", name:"House Blueprint", price:3000},
  {image:"image/landscapeplan.png", name:"Landscape Design Plan", price:4500},
  {image: "image/apartmentfloor.png",name: "Apartment Floor Plan",price: 3200},
  {image: "image/duplexhouseplan.png",name: "Duplex House Plan",price: 5500}
  ],

  foundation: [
    {image:"image/ultratechcement.png",name:"UltraTech Cement", price:420},
    {image:"image/concretemix.png",name:"Concrete Mix", price:600},
    {image:"image/foundationsand.png",name:"Foundation Sand", price:300},
    {image:"image/bricks.png",name:"Bricks Pack", price:700},
    {image:"image/gravel.png",name:"Gravel Load", price:1500},
    {image:"image/acc.png",name:"ACC Cement", price:410},
  {image:"image/ambuja.png",name:"Ambuja Cement", price:430},
  {image:"image/birlacement.png",name:"Birla Cement", price:415},
  {image:"image/shreecement.png",name:"Shree Cement", price:400},

  {image:"image/whitecement.png",name:"White Cement 25kg", price:750},
  {image:"image/wallputty.png",name:"Wall Putty 20kg", price:900},

  {image:"image/roff_t01.png",name:"Roff T01 Tile Adhesive", price:405},
  {image:"image/roff_t02.png",name:"Roff T02 Tile Adhesive", price:695},
  {image:"image/roff_t09.png",name:"Roff T09 Tile Adhesive", price:560},

  {image:"image/laticrete305.png",name:"MYK Laticrete 305", price:385},
  {image:"image/laticrete315.png",name:"MYK Laticrete 315", price:420},

  {image:"image/flyashbricks.png",name:"Fly Ash Bricks Pack", price:650},
  {image:"image/hollowblocks.png",name:"Hollow Blocks", price:800}
  ],

  electrical: [
    {image:"image/electricalwire.png",name:"Electrical Wire Roll", price:1200},
    {image:"image/switchboard.png",name:"Switch Board", price:350},
    {image:"image/ledbulb.png",name:"LED Bulb Pack", price:500},
    {image:"image/mcbbox.png",name:"MCB Box", price:1500},
    {image:"image/electricalpanel.png",name:"Electrical Panel", price:4500},
    {image:"image/extensionboard.png", name:"Extension Board", price:450},
  {image:"image/circuitbreaker.png", name:"Circuit Breaker", price:800},
  {image:"image/ceilingfan.png", name:"Ceiling Fan", price:2200},
  {image:"image/exhaustfan.png", name:"Exhaust Fan", price:1500},
  {image:"image/inverter.png", name:"Inverter", price:8500},
  {image:"image/battery.png", name:"Inverter Battery", price:9500},
  {image:"image/socket.png", name:"Power Socket", price:120},
  {image:"image/stabilizer.png", name:"Voltage Stabilizer", price:3000},
  {image:"image/tubelights.png", name:"Tube Light Set", price:600},
  {image:"image/smartplug.png", name:"Smart Plug", price:900},
  {image:"image/conduitpipe.png", name:"PVC Conduit Pipe", price:120, img1:"image/conduitpipe.png", img2:"image/conduitpipe2.png", img3:"image/conduitpipe3.png"},
{image:"image/elbow.png", name:"Elbow", price:15, img1:"image/elbow.png", img2:"image/elbow2.png", img3:"image/elbow3.png"},
{image:"image/tee.png", name:"Tee", price:18, img1:"image/tee.png", img2:"image/tee2.png", img3:"image/tee3.png"},
{image:"image/coupling.png", name:"Coupling", price:10, img1:"image/coupling.png", img2:"image/coupling2.png", img3:"image/coupling3.png"},
{image:"image/bend.png", name:"Bend", price:20, img1:"image/bend.png", img2:"image/bend2.png", img3:"image/bend3.png"},
{image:"image/saddle.png", name:"Saddle Patti", price:5, img1:"image/saddle.png", img2:"image/saddle2.png", img3:"image/saddle3.png"},
{image:"image/junctionbox.png", name:"Junction Box", price:40, img1:"image/junctionbox.png", img2:"image/junctionbox2.png", img3:"image/junctionbox3.png"},
{image:"image/reducer.png", name:"Reducer", price:12, img1:"image/reducer.png", img2:"image/reducer2.png", img3:"image/reducer3.png"},
{image:"image/extensionring.png", name:"Extension Ring", price:25, img1:"image/extensionring.png", img2:"image/extensionring2.png", img3:"image/extensionring3.png"},
{image:"image/bush.png", name:"Female Bush Adapter", price:10, img1:"image/bush.png", img2:"image/bush2.png", img3:"image/bush3.png"},
{image:"image/pvccement.png", name:"PVC Cement", price:90, img1:"image/pvccement.png", img2:"image/pvccement2.png", img3:"image/pvccement3.png"},
{image:"image/bendingspring.png", name:"Bending Spring", price:150, img1:"image/bendingspring.png", img2:"image/bendingspring2.png", img3:"image/bendingspring3.png"},
{image:"image/fanbox.png", name:"Fan Box", price:120, img1:"image/fanbox.png", img2:"image/fanbox2.png", img3:"image/fanbox3.png"},

{image:"image/casing.png", name:"Casing Capping", price:80, img1:"image/casing.png", img2:"image/casing2.png", img3:"image/casing3.png"},
{image:"image/internalbend.png", name:"Internal Bend", price:20, img1:"image/internalbend.png", img2:"image/internalbend2.png", img3:"image/internalbend3.png"},
{image:"image/externalbend.png", name:"External Bend", price:20, img1:"image/externalbend.png", img2:"image/externalbend2.png", img3:"image/externalbend3.png"},
{image:"image/squarebox.png", name:"Square Box", price:50, img1:"image/squarebox.png", img2:"image/squarebox2.png", img3:"image/squarebox3.png"},

{image:"image/paneltrunking.png", name:"Panel Trunking", price:300, img1:"image/paneltrunking.png", img2:"image/paneltrunking2.png", img3:"image/paneltrunking3.png"},

{image:"image/switch.png", name:"Switch", price:50, img1:"image/switch.png", img2:"image/switch2.png", img3:"image/switch3.png"},
{image:"image/socket.png", name:"Socket", price:60, img1:"image/socket.png", img2:"image/socket2.png", img3:"image/socket3.png"},
{image:"image/dimmer.png", name:"Dimmer", price:250, img1:"image/dimmer.png", img2:"image/dimmer2.png", img3:"image/dimmer3.png"},
{image:"image/regulator.png", name:"Fan Regulator", price:300, img1:"image/regulator.png", img2:"image/regulator2.png", img3:"image/regulator3.png"},
{image:"image/indicator.png", name:"Indicator", price:40, img1:"image/indicator.png", img2:"image/indicator2.png", img3:"image/indicator3.png"},
{image:"image/fuse.png", name:"Fuse", price:30, img1:"image/fuse.png", img2:"image/fuse2.png", img3:"image/fuse3.png"},
{image:"image/dpswitch.png", name:"DP Switch", price:250, img1:"image/dpswitch.png", img2:"image/dpswitch2.png", img3:"image/dpswitch3.png"},

{image:"image/gangbox.png", name:"Gang Box", price:40, img1:"image/gangbox.png", img2:"image/gangbox2.png", img3:"image/gangbox3.png"},
{image:"image/switchboard.png", name:"Switch Board", price:200, img1:"image/switchboard.png", img2:"image/switchboard2.png", img3:"image/switchboard3.png"},
{image:"image/surfacebox.png", name:"Surface Box", price:60, img1:"image/surfacebox.png", img2:"image/surfacebox2.png", img3:"image/surfacebox3.png"},
{image:"image/concealedbox.png", name:"Concealed Box", price:50, img1:"image/concealedbox.png", img2:"image/concealedbox2.png", img3:"image/concealedbox3.png"},

{image:"image/mcb.png", name:"MCB", price:350, img1:"image/mcb.png", img2:"image/mcb2.png", img3:"image/mcb3.png"},
{image:"image/rccb.png", name:"RCCB", price:1200, img1:"image/rccb.png", img2:"image/rccb2.png", img3:"image/rccb3.png"},
{image:"image/isolator.png", name:"Isolator", price:500, img1:"image/isolator.png", img2:"image/isolator2.png", img3:"image/isolator3.png"},
{image:"image/mcbbox.png", name:"MCB Box", price:400, img1:"image/mcbbox.png", img2:"image/mcbbox2.png", img3:"image/mcbbox3.png"},
{image:"image/db.png", name:"Distribution Board", price:1500, img1:"image/db.png", img2:"image/db2.png", img3:"image/db3.png"},

{image:"image/bulbholder.png", name:"Bulb Holder", price:40, img1:"image/bulbholder.png", img2:"image/bulbholder2.png", img3:"image/bulbholder3.png"},
{image:"image/extensionbox.png", name:"Extension Box", price:300, img1:"image/extensionbox.png", img2:"image/extensionbox2.png", img3:"image/extensionbox3.png"},
{image:"image/linetester.png", name:"Line Tester", price:120, img1:"image/linetester.png", img2:"image/linetester2.png", img3:"image/linetester3.png"},
{image:"image/multiplug.png", name:"Multiplug", price:200, img1:"image/multiplug.png", img2:"image/multiplug2.png", img3:"image/multiplug3.png"},
{image:"image/spikeguard.png", name:"Spike Guard", price:500, img1:"image/spikeguard.png", img2:"image/spikeguard2.png", img3:"image/spikeguard3.png"},

{image:"image/pvctape.png", name:"PVC Tape", price:20, img1:"image/pvctape.png", img2:"image/pvctape2.png", img3:"image/pvctape3.png"},
{image:"image/cabletie.png", name:"Cable Tie", price:2, img1:"image/cabletie.png", img2:"image/cabletie2.png", img3:"image/cabletie3.png"},
{image:"image/wallplug.png", name:"Wall Plug", price:3, img1:"image/wallplug.png", img2:"image/wallplug2.png", img3:"image/wallplug3.png"},
{image:"image/wireclip.png", name:"Wire Clip", price:2, img1:"image/wireclip.png", img2:"image/wireclip2.png", img3:"image/wireclip3.png"},

{image:"image/doorbell.png", name:"Door Bell", price:250, img1:"image/doorbell.png", img2:"image/doorbell2.png", img3:"image/doorbell3.png"},
{image:"image/wirelessbell.png", name:"Wireless Door Bell", price:800, img1:"image/wirelessbell.png", img2:"image/wirelessbell2.png", img3:"image/wirelessbell3.png"},

{image:"image/wire.png", name:"Single Core Wire", price:1500, img1:"image/wire.png", img2:"image/wire2.png", img3:"image/wire3.png"},
{image:"image/multicore.png", name:"Multi Core Cable", price:3000, img1:"image/multicore.png", img2:"image/multicore2.png", img3:"image/multicore3.png"},
{image:"image/lan.png", name:"LAN Cable", price:2500, img1:"image/lan.png", img2:"image/lan2.png", img3:"image/lan3.png"},
{image:"image/coaxial.png", name:"Coaxial Cable", price:1800, img1:"image/coaxial.png", img2:"image/coaxial2.png", img3:"image/coaxial3.png"}
  ],

  plumbing: [
    {image:"image/pvcpipe.png",name:"PVC Pipe", price:300},
    {image:"image/watertap.png",name:"Water Tap", price:250},
    {image:"image/watertank.png",name:"Water Tank 500L", price:3500},
    {image:"image/shower.png",name:"Shower Set", price:1800},
    {image:"image/drainagepipe.png",name:"Drainage Pipe", price:400},
    {image:"image/placeholder.png", name:"Flush Tank", price:1200},
  {image:"image/placeholder.png", name:"Wash Basin", price:2500},
  {image:"image/placeholder.png", name:"Toilet Seat", price:3000},
  {image:"image/placeholder.png", name:"Hand Shower", price:900},
  {image:"image/placeholder.png", name:"Wall Mixer Tap", price:2200},
  {image:"image/placeholder.png", name:"Sink Pipe", price:350},
  {image:"image/placeholder.png", name:"Ball Valve", price:180},
  {image:"image/placeholder.png", name:"Pipe Clamp", price:120},
  {image:"image/placeholder.png", name:"Water Filter", price:4500},
  {image:"image/placeholder.png", name:"Overhead Shower", price:2000}
  ],

  paints: [
    {image:"image/asianpaints.png",name:"Asian Paints Premium", price:950},
    {image:"image/bergerpaint.png",name:"Berger Paint", price:880},
    {image:"image/wallprimer.png",name:"Wall Primer", price:600},
    {image:"image/exteriorpaint.png",name:"Exterior Paint", price:1200},
    {image:"image/enamelpaint.png",name:"Enamel Paint", price:750},
    {image:"image/placeholder.png", name:"Interior Emulsion Paint", price:1100},
  {image:"image/placeholder.png", name:"Distemper Paint", price:500},
  {image:"image/placeholder.png", name:"Waterproof Paint", price:1300},
  {image:"image/placeholder.png", name:"Texture Paint", price:1800},
  {image:"image/placeholder.png", name:"Wood Polish", price:900},
  {image:"image/placeholder.png", name:"Metal Paint", price:850},
  {image:"image/placeholder.png", name:"Anti Damp Paint", price:1400},
  {image:"image/placeholder.png", name:"Ceiling Paint", price:700},
  {image:"image/placeholder.png", name:"Spray Paint", price:300},
  {image:"image/placeholder.png", name:"Primer for Wood", price:650}
  ],

  tiles: [
    {image:"image/granitetiles.png",name:"Granite Tiles", price:75},
    {image:"image/marbletiles.png",name:"Marble Tiles", price:90},
    {image:"image/floortiles.png",name:"Floor Tiles", price:60},
    {image:"image/bathroomtiles.png",name:"Bathroom Tiles", price:85},
    {image:"image/walltiles.png",name:"Wall Tiles", price:55},
    {image:"image/placeholder.png", name:"Vitrified Tiles", price:95},
  {image:"image/placeholder.png", name:"Ceramic Tiles", price:70},
  {image:"image/placeholder.png", name:"Porcelain Tiles", price:110},
  {image:"image/placeholder.png", name:"Kitchen Tiles", price:80},
  {image:"image/placeholder.png", name:"Outdoor Tiles", price:120},
  {image:"image/placeholder.png", name:"Parking Tiles", price:100},
  {image:"image/placeholder.png", name:"Wood Finish Tiles", price:130},
  {image:"image/placeholder.png", name:"Anti-Skid Tiles", price:115},
  {image:"image/placeholder.png", name:"Designer Tiles", price:150},
  {image:"image/placeholder.png", name:"Glass Mosaic Tiles", price:200}
  ],

  pipes: [
    {image:"image/steelpipe.png",name:"Steel Pipe", price:500},
    {image:"image/gipipe.png",name:"GI Pipe", price:600},
    {image:"image/pvcdrainpipe.png",name:"PVC Drain Pipe", price:350},
    {image:"image/industrialpipe.png",name:"Industrial Pipe", price:900},
    {image:"image/watersupplypipe.png",name:"Water Supply Pipe", price:450}
  ],

  tools: [
    {image:"image/drillmachine.png",name:"Drill Machine", price:1800},
    {image:"image/hammer.png",name:"Hammer", price:250},
    {image:"image/concretemixer.png",name:"Concrete Mixer", price:12000},
    {image:"image/safetyhelmet.png",name:"Safety Helmet", price:450},
    {image:"image/measuringtape.png",name:"Measuring Tape", price:150},
    {image:"image/placeholder.png", name:"Angle Grinder", price:2200},
  {image:"image/placeholder.png", name:"Circular Saw", price:3500},
  {image:"image/placeholder.png", name:"Power Cutter", price:5000},
  {image:"image/placeholder.png", name:"Hand Saw", price:300},
  {image:"image/placeholder.png", name:"Screwdriver Set", price:400},
  {image:"image/placeholder.png", name:"Spanner Set", price:650},
  {image:"image/placeholder.png", name:"Wrench", price:350},
  {image:"image/placeholder.png", name:"Tool Kit Box", price:1200},
  {image:"image/placeholder.png", name:"Ladder", price:2500},
  {image:"image/placeholder.png", name:"Tile Cutter", price:2800}
  ],

  auto: [
    {image:"image/trucktyre.png",name:"Truck Tyre", price:4500},
    {image:"image/engineoil.png",name:"Engine Oil", price:900},
    {image:"image/brakepad.png",name:"Brake Pad", price:1500},
    {image:"image/battery.png",name:"Battery", price:5500},
    {image:"image/headlightset.png",name:"Headlight Set", price:2000},
    {image:"image/placeholder.png", name:"Car Tyre", price:3500},
  {image:"image/placeholder.png", name:"Bike Tyre", price:1800},
  {image:"image/placeholder.png", name:"Alloy Wheels", price:8000},
  {image:"image/placeholder.png", name:"Car Seat Cover", price:2500},
  {image:"image/placeholder.png", name:"Car Cover", price:1200},
  {image:"image/placeholder.png", name:"Air Filter", price:600},
  {image:"image/placeholder.png", name:"Oil Filter", price:400},
  {image:"image/placeholder.png", name:"Spark Plug", price:250},
  {image:"image/placeholder.png", name:"Car Battery Charger", price:3000},
  {image:"image/placeholder.png", name:"Fog Lights", price:1800}
  ],

  manpower: [
    {name:"Daily Labour", price:800},
    {name:"Site Supervisor", price:1500},
    {name:"Electrician", price:1200},
    {name:"Plumber", price:1100},
    {name:"Carpenter", price:1300}
  ],
  cement: [
    {image:"image/ultratechcement.png",name:"UltraTech Cement", price:420},
    {image:"image/acc.png",name:"ACC Cement", price:410},
    {image:"image/ambuja.png",name:"Ambuja Cement", price:430},
    {image:"image/birlacement.png",name:"Birla Cement", price:415},
    {image:"image/shreecement.png",name:"Shree Cement", price:400}
  ],

  steel: [
    {name:"TMT Steel Bar", price:65},
    {name:"JSW Steel Rod", price:70},
    {name:"Steel Sheet", price:1200},
    {name:"Iron Rod 10mm", price:550},
    {name:"Steel Channel", price:900}
  ],

 
  
};

/*===============================
   GLOBAL STORAGE
=================================*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

/* ===============================
   LOAD CATEGORY PAGE
=================================*/
if(window.location.pathname.includes("category.html")){

const params = new URLSearchParams(window.location.search);

let type = params.get("type");
const search = params.get("search");

const title = document.getElementById("category-title");
const container = document.getElementById("category-products");

container.innerHTML = "";

// 🔥 LOOP THROUGH ALL CATEGORIES (IMPORTANT FIX)
Object.keys(categoryProducts).forEach(category => {

categoryProducts[category].forEach(product => {

// ✅ SEARCH FILTER
if(search && !product.name.toLowerCase().includes(search.toLowerCase())){
return;
}

// ✅ TYPE FILTER (optional)
if(type && category !== type.toLowerCase()){
return;
}

container.innerHTML += `
<div class="product-card">

<a href="product.html?name=${encodeURIComponent(product.name)}
&price=${product.price}
&img1=${encodeURIComponent(product.img1 || product.image)}
&img2=${encodeURIComponent(product.img2 || product.image)}
&img3=${encodeURIComponent(product.img3 || product.image)}">

${product.image ? `<img src="${product.image}" class="product-img">` : ""}

<h4>${product.name}</h4>
<p>₹${product.price}</p>

</a>

<div class="cart-row">

  <!-- QTY -->
  <div class="qty-control">
    <button onclick="decreaseQty('${product.name}')">-</button>
    <span id="qty-${product.name.replace(/\s/g,'')}">1</span>
    <button onclick="increaseQty('${product.name}')">+</button>
  </div>

  <!-- ADD -->
  <button class="add-btn"
    onclick="addToCartWithQty('${product.name}', ${product.price}, '${product.image}')">
    ADD
  </button>


<button onclick="addToWishlist('${product.name}',${product.price},'${product.image}')">
❤️ 
</button>
</div>
`;

});

});

// title update
if(search){
title.innerText = "SEARCH RESULTS: " + search.toUpperCase();
}else if(type){
title.innerText = type.toUpperCase() + " PRODUCTS";
}else{
title.innerText = "ALL PRODUCTS";
}

updateCartCount();
}

function goCategory(type){
window.location.href = "category.html?type=" + type;
}


/* ===============================
   UPDATE CART COUNT (WORKS EVERYWHERE)
=================================*/

function updateCartCount(){
  const cartCount = document.getElementById("cart-count");
  if(cartCount){
    const total = cart.reduce((sum,item)=> sum + (item.quantity || 1),0);
    cartCount.innerText = total;
  }
}

updateCartCount();

/* ===============================
   QTY SYSTEM
=================================*/
let selectedQty = {}

// ➕ INCREASE
function increaseQty(name){

  let id = name.replace(/\s/g,'')

  if(!selectedQty[name]){
    selectedQty[name] = 1
  }

  selectedQty[name]++

  document.getElementById("qty-" + id).innerText = selectedQty[name]
}

// ➖ DECREASE
function decreaseQty(name){

  let id = name.replace(/\s/g,'')

  if(!selectedQty[name]){
    selectedQty[name] = 1
  }

  if(selectedQty[name] > 1){
    selectedQty[name]--
  }

  document.getElementById("qty-" + id).innerText = selectedQty[name]
}
/* ===============================
   ADD TO CART WITH QTY
=================================*/
function addToCartWithQty(name, price, image){

  let qty = selectedQty[name] || 1

  let existing = cart.find(item => item.name === name)

  if(existing){
    existing.quantity += qty
  } else {
    cart.push({
      name,
      price,
      image,
      quantity: qty
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))

  updateCartCount()
  alert("✔ Added " + qty + " items")
}

/* ===============================
   WISHLIST
=================================*/
function addToWishlist(name, price, image){

  let exists = wishlist.find(item => item.name === name);
  if(exists){
    alert("Already in Wishlist ❤️");
    return;
  }

  wishlist.push({ name, price, image });
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert("❤️ Added to Wishlist");
}

/* ===============================
   DISPLAY CART PAGE
=================================*/

if(document.getElementById("cart-items")){
  displayCart();
  showRecommended();   // ✅ ADD THIS LINE
}
let discount = 0

function displayCart(){

const container = document.getElementById("cart-items")
const totalBox = document.getElementById("total-price")

container.innerHTML = ""

let total = 0

cart.forEach((item,index)=>{

let itemTotal = item.price * item.quantity
total += itemTotal

container.innerHTML += `
<div class="cart-item">

<div class="cart-left">
<img src="${item.image}">

<div class="cart-details">
<h4>${item.name}</h4>
<p>₹${item.price} x ${item.quantity}</p>
<small>Total: ₹${itemTotal}</small>
</div>
</div>

 <div class="quantity-box">
      <button onclick="decreaseCartQty(${index})">-</button>
      <span>${item.quantity}</span>
      <button onclick="increaseCartQty(${index})">+</button>
    </div>

</div>
`
})

let delivery = 40
let platform = 5

// ✅ GET CURRENT COUPON
let applied = document.getElementById("coupon-input")?.value?.toUpperCase()

let discount = 0

if(applied === "RRANDO123"){
  discount = Math.floor(total * 0.2)
}
else if(applied === "SAVE200"){
  discount = 200
}
else if(applied === "NEWUSER09"){
  delivery = 0
}

let final = total + delivery + platform - discount
// ✅ UPDATE UI
totalBox.innerHTML = `
<p>Subtotal: ₹${total}</p>
<p>Delivery: ₹${delivery} ${delivery === 0 ? "(Free 🎉)" : ""}</p>
<p>Platform Fee: ₹${platform}</p>
<p style="color:green;">Discount: -₹${discount}</p>
<h3>Total: ₹${final}</h3>
`
}

function toggleCoupons(){
let box = document.getElementById("coupon-list")

if(box.style.display === "none"){
box.style.display = "block"
}else{
box.style.display = "none"
}
}

// APPLY FROM CLICK
function applyCouponCode(code){
document.getElementById("coupon-input").value = code
applyCoupon()
}

function applyCouponAndGo(code){

// save coupon
localStorage.setItem("appliedCoupon", code)

// go back to cart
window.location.href = "cart.html"
}

function applyCoupon(){

let code = document.getElementById("coupon-input").value.toUpperCase().trim()

  localStorage.setItem("appliedCoupon", code)

  displayCart()
}

function goToCoupons(){
window.location.href = "coupons.html"
}

function increaseCartQty(index){
  cart[index].quantity++
  localStorage.setItem("cart", JSON.stringify(cart))
  displayCart()
  updateCartCount()
}

function decreaseCartQty(index){
  if(cart[index].quantity > 1){
    cart[index].quantity--
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  displayCart()
  updateCartCount()
}

/*7/4/26*/
function showRecommended(){

  let container = document.getElementById("recommended-products");
  if(!container) return;

  container.innerHTML = "";

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if(cart.length === 0) return;

  // 👉 take first cart item (simple logic)
  let firstItem = cart[0].name.toLowerCase();

  let suggestions = [];

  // 🔥 FIND SIMILAR PRODUCTS
  Object.keys(categoryProducts).forEach(category => {

    categoryProducts[category].forEach(product => {

      // skip already in cart
      let exists = cart.find(item => item.name === product.name);
      if(exists) return;

      // simple matching (same category keyword)
      if(firstItem.includes(category)){
        suggestions.push(product);
      }

    });

  });

  // 👉 if no match, show random products
  if(suggestions.length === 0){
    suggestions = Object.values(categoryProducts).flat().slice(0,4);
  }

  // 👉 show only 3–4 products
  suggestions.slice(0,4).forEach(product => {

    container.innerHTML += `
      <div class="product-card">
        ${product.image ? `<img src="${product.image}" class="product-img">` : ""}
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>

        <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">
  ADD
</button>
      </div>
    `;
  });

}
/* ===============================
   REMOVE FROM CART
=================================*/

function removeFromCart(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

/* ===============================
   DISPLAY WISHLIST PAGE
=================================*/

if(document.getElementById("wishlist-items")){
  displayWishlist();
}

/*1/4/24*/
function displayWishlist(){

  const container = document.getElementById("wishlist-items");
  if(!container) return;

  container.innerHTML = "";

  if(wishlist.length === 0){
    container.innerHTML = "<p style='padding:20px;'>Your wishlist is empty 😢</p>";
    return;
  }

  wishlist.forEach((item,index)=>{

    container.innerHTML += `
      <div class="wishlist-card">

        <img src="${item.image}" class="wishlist-img">

        <h4>${item.name}</h4>
        <p>₹${item.price}</p>

        <button class="add-cart-btn"
          onclick="addToCart('${item.name}',${item.price},'${item.image}')">
          Add to Cart
        </button>

        <button class="remove-btn"
          onclick="removeFromWishlist(${index})">
          Remove
        </button>

      </div>
    `;
  });
}

/* ===============================
   REMOVE FROM WISHLIST
=================================*/

function removeFromWishlist(index){
  wishlist.splice(index,1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  displayWishlist();
}

/* ===============================
   CHECKOUT PAGE
=================================*/

if(document.getElementById("order-summary")){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 🔥 FIX: check empty cart
  if (cart.length === 0) {
    alert("Your cart is empty ❗");
    window.location.href = "index.html";
    return;
  }

  let container = document.getElementById("order-summary");
  let total = 0;

  container.innerHTML = "";

  cart.forEach(item=>{
    let itemTotal = item.price * item.quantity;
    total += itemTotal;

    container.innerHTML +=
      `<p>${item.name} x ${item.quantity} = ₹${itemTotal}</p>`;
  });

  let delivery = 40;
  let platform = 5;
  let discount = 0;

  let finalTotal = total + delivery + platform - discount;

  document.getElementById("checkout-total").innerText =
    "Total: ₹" + finalTotal;
}
function proceedCheckout(){

  // ✅ ADD THIS HERE (TOP)
  let user = localStorage.getItem("currentUser");

  if (!user) {
    alert("Please login first ❗");
    window.location.href = "login.html";
    return;
  }

  // existing code
  localStorage.setItem("fromCheckout", "true");
  window.location.href = "address.html";
}

function placeOrder(){

  // ✅ GET ADDRESS
  let address = JSON.parse(localStorage.getItem("userAddress"));

  if(!address){
    alert("Please add address first 📍");
    window.location.href = "address.html";
    return;
  }

  // ✅ GET CART
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if(cart.length === 0){
    alert("Cart is empty ❌");
    return;
  }

  // ✅ CREATE ORDER DATA
  let orderData = {
    items: cart,
    total: cart.reduce((sum,item)=> sum + item.price * item.quantity, 0),
    address: address
  };

  console.log("Sending:", orderData);

  // ✅ SEND TO BACKEND
  fetch("http://127.0.0.1:5000/create_order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  })
  .then(res => res.json())
  .then(data => {

    console.log("Response:", data);

    if(data.error){
      alert("Backend error: " + data.error);
    }else{
      alert("🎉 Order placed successfully!");

      // ✅ CLEAR CART
      localStorage.removeItem("cart");

      // ✅ REDIRECT
      setTimeout(()=>{
        window.location.href = "index.html";
      },1000);
    }

  })
  .catch(err => {
    console.error("Error:", err);
    alert("Order failed ❌");
  });

}

/* ===============================
   SIDEBAR (IF EXISTS)
=================================*/

function toggleSidebar(){
  const sidebar = document.getElementById("sidebar");
  if(sidebar){
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
  }
}

function closeSidebar(){
  const sidebar = document.getElementById("sidebar");
  if(sidebar){
    sidebar.style.left = "-250px";
  }
}

/* ===============================
   SHOW CUSTOM NOTIFICATION
=================================*/

function showMessage(text){
  const msg = document.createElement("div");
  msg.className = "custom-message";
  msg.innerText = text;

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.classList.add("show");
  }, 10);

  setTimeout(() => {
    msg.classList.remove("show");
    setTimeout(()=> msg.remove(),300);
  }, 2000);
}


/* ===============================
   IMAGE AUTO SLIDER
=================================*/
let bannerIndex = 0;

const bannerSlides = document.querySelectorAll(".banner-img");
const bannerContainer = document.querySelector(".slides");

if (bannerSlides.length > 0 && bannerContainer) {

  setInterval(() => {

    bannerIndex++;

    if (bannerIndex >= bannerSlides.length) {
      bannerIndex = 0;
    }

    bannerContainer.style.transform =
      `translateX(-${bannerIndex * 100}%)`;

  }, 3000);

}

/* ===============================
   SEARCH
=================================*/
function searchProducts(){

let input = document.getElementById("search-input").value.toLowerCase()

let cards = document.querySelectorAll(".product-card")

cards.forEach(card => {

let name = card.querySelector("h4").innerText.toLowerCase()

if(name.includes(input)){
card.style.display = "block"
}else{
card.style.display = "none"
}

})

}

//

function handleSearch(e){

if(e.key === "Enter"){
let value = document.getElementById("search-input").value.toLowerCase()
window.location.href = "category.html?search=" + value
}

}

// 👇👇 ADD HERE (LAST LINE OF FILE)

/* ===============================
   COUPON AUTO APPLY
=================================*/
// 🔥 AUTO APPLY COUPON FROM PAGE
let savedCoupon = localStorage.getItem("appliedCoupon")

if(savedCoupon){

let input = document.getElementById("coupon-input")

// ✅ IMPORTANT CHECK (prevents error on other pages)
if(input){
input.value = savedCoupon
applyCoupon()
}

localStorage.removeItem("appliedCoupon")
}

/* ===============================
   LOCATION (MAP + GPS)
=================================*/

let map, marker;

// OPEN POPUP
function openLocationPopup(){
  document.getElementById("location-popup").style.display = "flex";
  setTimeout(initMap, 300);
}

// CLOSE POPUP
function closeLocationPopup(){
  document.getElementById("location-popup").style.display = "none";
}

// INIT MAP
function initMap(){

  if(map) return;

  map = L.map('map').setView([20.5937, 78.9629], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19
  }).addTo(map);

  marker = L.marker([20.5937, 78.9629], {draggable:true}).addTo(map);

  getCurrentLocation();

  marker.on('dragend', function(){
    let pos = marker.getLatLng();
    getAddress(pos.lat, pos.lng);
  });
}

// GET ADDRESS
async function getAddress(lat, lng){
  try{
    let res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    let data = await res.json();

    let el = document.getElementById("selected-address");
    if(el){
      el.innerText = data.display_name;
    }

  }catch(err){
    console.log(err);
  }
}

// GPS
function getCurrentLocation(){

  if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(position => {

      let lat = position.coords.latitude;
      let lng = position.coords.longitude;

      map.setView([lat, lng], 15);
      marker.setLatLng([lat, lng]);

      getAddress(lat, lng);

    });

  }else{
    alert("Geolocation not supported ❌");
  }
}

// SEARCH LOCATION

// ✅ CONFIRM LOCATION (FINAL)
 // UPDATE NAVBAR
  

/*1/4/26*/
async function searchLocation(e){

  if(e.key !== "Enter") return

  let query = document.getElementById("location-search").value

  if(!query) return

  try{
    let res = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`)
    let data = await res.json()

    if(data.length === 0){
      alert("Location not found ❌")
      return
    }

    let lat = data[0].lat
    let lon = data[0].lon

    // move map
    map.setView([lat, lon], 15)
    marker.setLatLng([lat, lon])

    // update address
    getAddress(lat, lon)

  }catch(err){
    console.log(err)
    alert("Search failed ❌")
  }
}


// ==========================
// ✅ ADD HERE (AFTER ABOVE FUNCTION)
// ==========================
let userType = localStorage.getItem("userType");
let btn = document.getElementById("auth-btn");

if(btn){
  if(userType === "user"){
   btn.innerHTML = '<a href="profile.html"><i class="fa-solid fa-user"></i></a>';
  } else {
    btn.innerHTML = '<a href="login.html"><i class="fa-solid fa-user"></i></a>';  }
}


// ==========================
// ✅ CONFIRM LOCATION (FIXED)
// ==========================

function confirmLocation(){

  let address = document.getElementById("selected-address").innerText;

  if(!address || address.includes("Select") || address.includes("Detect")){
    alert("Please select location ❌");
    return;
  }

  // ✅ SAVE LOCATION
  localStorage.setItem("selectedLocation", address);

  localStorage.setItem("userAddress", JSON.stringify({
    name: localStorage.getItem("userName") || "User",
    phone: "",
    street: address,
    city: ""
  }));

  // ✅ UPDATE NAVBAR TEXT
  let el = document.getElementById("selected-location");
  if(el){
    let parts = address.split(",");
    el.innerText = parts[0] + (parts[1] ? ", " + parts[1] : "");
  }

  // ✅ CLOSE POPUP
  closeLocationPopup();
}
/* ===============================
   SAVED ADDRESSES (OPTIONAL)
=================================*/

function loadSavedAddresses(){
  fetch("http://127.0.0.1:5000/get_addresses")
  .then(res => res.json())
  .then(data => {

    let container = document.getElementById("saved-addresses")
    if(!container) return

    container.innerHTML = ""

    data.forEach(addr => {
      container.innerHTML += `
      <div class="address-card" onclick="selectAddress('${addr.city}')">
        ${addr.name} - ${addr.city}
      </div>`
    })

  })
}

function selectAddress(city){
  document.getElementById("selected-location").innerText = city
  localStorage.setItem("selectedLocation", city)
  closeLocationPopup()
}
////////////////////  
// ✅ RUN ONLY IN INDEX PAGE
if(window.location.pathname.includes("index.html")){

  let ask = localStorage.getItem("askLocation")

  if(ask === "true"){

    // ⏳ small delay (IMPORTANT)
    setTimeout(() => {
      openLocationPopup()
    }, 500)

    localStorage.removeItem("askLocation")
  }
}
if(window.location.pathname.includes("index.html")){

  let saved = localStorage.getItem("selectedLocation");

  if(saved){
    let el = document.getElementById("selected-location");

    if(el){

      let parts = saved.split(",");
      let shortLocation = parts[0] + (parts[1] ? ", " + parts[1] : "");

      el.innerText = shortLocation;

    }
  }

}

// SHOW ADDRESS IN CHECKOUT
if(document.getElementById("delivery-address")){

  let address = JSON.parse(localStorage.getItem("userAddress"))

  if(address){
    document.getElementById("delivery-address").innerHTML = `
      <h3>📍 Deliver To:</h3>
      <p>${address.street}</p>
    `
  }
}

// CHANGE ADDRESS BUTTON
function changeAddress(){
  window.location.href = "address.html"
}