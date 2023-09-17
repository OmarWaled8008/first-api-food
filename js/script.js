let arrFood = [];
let foodTypes = [];
let demoApi = new XMLHttpRequest();
demoApi.addEventListener("readystatechange", function () {
  if (demoApi.readyState === 4) {
    arrFood = JSON.parse(demoApi.responseText);
    foodTypes = arrFood.data.recipes;
    dispalyFood();
  }
});
demoApi.open(
  "get",
  "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza"
);
demoApi.send();
function dispalyFood() {
  let ele = "";
  for (let i = 0; i < foodTypes.length; i++) {
    ele += `
    <div class="card col-4" style="width: 18rem">
    <img src="${foodTypes[i].image_url}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${foodTypes[i].title}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${foodTypes[i].publisher}</li>
      <li class="list-group-item">${foodTypes[i].id}</li>
    </ul>
  </div>
        `;
  }
  document.getElementById("demoDiv").innerHTML = ele;
}
function search(foodSearch) {
  let ele = "";
  for (let i = 0; i < foodTypes.length; i++) {
    if (
      foodTypes[i].publisher.toLowerCase().includes(foodSearch.toLowerCase())
    ) {
      ele += `
    <div class="card col-4" style="width: 18rem">
    <img src="${foodTypes[i].image_url}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${foodTypes[i].title}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${foodTypes[i].publisher}</li>
      <li class="list-group-item">${foodTypes[i].id}</li>
    </ul>
  </div>
        `;
    }
  }
  document.getElementById("demoDiv").innerHTML = ele;
}
