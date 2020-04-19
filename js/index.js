const cakeItem = [
  {
    img: 1,
    price: 5,
    name: "Cake",
  },
  {
    img: 2,
    price: 10,
    name: "Cake",
  },
  {
    img: 3,
    price: 15,
    name: "Cake",
  },
];

const cupcakeItem = [
  {
    img: 7,
    price: 5,
    name: "Cupcake",
  },
  {
    img: 8,
    price: 10,
    name: "Cupcake",
  },
  {
    img: 9,
    price: 15,
    name: "Cupcake",
  },
];

const sweetItem = [
  {
    img: 4,
    price: 5,
    name: "Sweet",
  },
  {
    img: 5,
    price: 10,
    name: "Sweet",
  },
  {
    img: 6,
    price: 15,
    name: "Sweet",
  },
];

const doughnutItem = [
  {
    img: 10,
    price: 5,
    name: "Doughnut",
  },
  {
    img: 11,
    price: 10,
    name: "Doughnut",
  },
  {
    img: 12,
    price: 15,
    name: "Doughnut",
  },
];

const allButtons = ["All", "Sweet", "Cake", "Cupcake", "Doughnut"];
allButtons.map((el) => {
  let btn = `<button class=" btn btn${el}" data-filter="${el}">
      ${el}
    </button>`;
  centre.innerHTML += btn;
});

function allItem(sortItem) {
  sortItem.map((elem) => {
    let root = `<span class="${elem.name}">
        <img src="img/${elem.img}.jpeg" width="100%" />
        <h3>${elem.name} Item</h3>
        <h4>${elem.price}$</h4>
      </span>`;
    centre.innerHTML += root;
  });
}

allItem(doughnutItem);
allItem(sweetItem);
allItem(cakeItem);
allItem(cupcakeItem);

const buttons = document.querySelectorAll(".btn");
const storeItems = document.querySelectorAll("span");

buttons.forEach((button) => {
  button.addEventListener("click", (elem) => {
    elem.preventDefault();
    const filter = elem.target.dataset.filter;
    storeItems.forEach((item) => {
      if (filter === "All") {
        item.style.display = "block";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});

const searchBox = document.querySelector("input");

searchBox.addEventListener("keyup", (e) => {
  const searchFilter = e.target.value.toLowerCase().trim();
  console.log(e.target.value);

  storeItems.forEach((item) => {
    if (item.textContent.toLowerCase().includes(searchFilter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  setTimeout(() => {
    e.target.value = "";
  }, 2000);
});
