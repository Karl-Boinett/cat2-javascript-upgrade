const menuItems = [
    {
        name: "Grilled Tilapia",
        image: "submission/img food/images no 1 Tilapia.jpg.jpeg",
        rating: 10,
        comment: "Fresh from Lake Baringo."
    },
    {
        name: "Beef Stew",
        image: "submission/img food/image 2 beef stew.jpg.jpeg",
        rating: 9,
        comment: "Tender beef cooked to perfection."
    },
    {
        name: "Pilau Rice",
        image: "submission/img food/pilau ricw.jpg.jpeg",
        rating: 8,
        comment: "Richly spiced Kenyan pilau."
    },
    {
        name: "Nyama Choma",
        image: "submission/img food/image 3 nyama choma.jpg.jpeg",
        rating: 10,
        comment: "Our customers' favourite."
    },
    {
        name: "Chapati & Beans",
        image: "submission/img food/Chapo beans.jpg.jpeg",
        rating: 8,
        comment: "Classic homemade meal."
    }
];


const addButton = document.getElementById("add-favorite");
const favoriteInput = document.getElementById("favorite-input");
const favoriteList = document.getElementById("favorite-list");

// Load saved items from localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Render saved items on page load
function renderFavorites() {
    favoriteList.innerHTML = "";

    favorites.forEach((dish, index) => {
        const li = document.createElement("li");

        const text = document.createTextNode(dish + " ");

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.type = "button";

        removeBtn.addEventListener("click", function () {
            favorites.splice(index, 1);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            renderFavorites();
        });

        li.appendChild(text);
        li.appendChild(removeBtn);
        favoriteList.appendChild(li);
    });
}

// Initial render
renderFavorites();

// Add new item
addButton.addEventListener("click", function () {

    const dish = favoriteInput.value.trim();

    if (dish === "") {
        alert("Please enter a dish name.");
        return;
    }

    favorites.push(dish);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    favoriteInput.value = "";

    renderFavorites();
});
// ===== FORM HANDLING WITH VALIDATION FEEDBACK =====

const reviewForm = document.getElementById("review-form");

const nameInput = document.getElementById("new-name");
const ratingInput = document.getElementById("new-rating");
const commentInput = document.getElementById("new-comment");

reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const rating = Number(ratingInput.value);
    const comment = commentInput.value.trim();

    // validation rules
    if (name === "" || comment === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (rating < 1 || rating > 10) {
        alert("Rating must be between 1 and 10.");
        return;
    }

    // success feedback (VISIBLE on page)
    const message = document.createElement("p");
    message.textContent = `✅ Thanks! You rated ${name} a ${rating}/10`;
    message.style.color = "green";
    message.style.fontWeight = "bold";

    reviewForm.appendChild(message);

    // clear inputs
    nameInput.value = "";
    ratingInput.value = "";
    commentInput.value = "";
});
const banner = document.getElementById("banner");
const bannerText = document.getElementById("banner-text");

banner.addEventListener("click", function () {
    bannerText.classList.toggle("show");
});