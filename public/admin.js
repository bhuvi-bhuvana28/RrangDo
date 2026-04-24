let admin = localStorage.getItem("adminUser")

if(!admin){
  window.location.href = "adminlogin.html"
}
function logout(){
  localStorage.removeItem("adminUser")
  window.location.href = "adminlogin.html"
}

function loadOrders(){

fetch("http://127.0.0.1:5000/orders")
.then(res => res.json())
.then(data => {

let container = document.getElementById("orders-container")
let filter = document.getElementById("statusFilter").value

container.innerHTML = ""

// 🔥 DASHBOARD DATA
let totalOrders = data.length
let totalRevenue = 0
let pending = 0

data.forEach(order => {
totalRevenue += order.total
if(order.status === "Pending") pending++
})

document.getElementById("totalOrders").innerText = totalOrders
document.getElementById("totalRevenue").innerText = "₹" + totalRevenue
document.getElementById("pendingOrders").innerText = pending

// 🔥 FILTER
let filtered = data.filter(order => {
return filter === "" || order.status === filter
})

// 🔥 SHOW ORDERS
filtered.forEach(order => {

let statusColor =
order.status === "Delivered" ? "green" :
order.status === "Confirmed" ? "blue" : "orange"

container.innerHTML += `
<div class="order-card">

<div class="order-top">
<h3>Order #${order.id}</h3>
<span class="status-badge" style="background:${statusColor}">
${order.status}
</span>
</div>

<p class="order-total">₹${order.total}</p>

<div class="order-address">
<p><b>${order.address.name || ""}</b></p>
<p>${order.address.phone || ""}</p>
<p>${order.address.street || ""}, ${order.address.city || ""}</p>
</div>

<div class="order-items">
${order.items.map(item => `
<p>${item.name} x ${item.quantity}</p>
`).join("")}
</div>

<div class="order-actions">
<button onclick="updateStatus(${order.id}, 'Confirmed')" class="accept-btn">
Accept
</button>

<button onclick="updateStatus(${order.id}, 'Delivered')" class="deliver-btn">
Delivered
</button>
</div>

</div>
`

})

})
}

function updateStatus(id, status){

fetch("http://127.0.0.1:5000/update_status", {
method: "POST",
headers: {"Content-Type": "application/json"},
body: JSON.stringify({
order_id: id,
status: status
})
})
.then(() => {
loadOrders()
})

}

loadOrders()