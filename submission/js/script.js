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


/// Add & Remove Favorite Dishes

const addButton = document.getElementById("add-favorite");
const favoriteInput = document.getElementById("favorite-input");
const favoriteList = document.getElementById("favorite-list");

if (addButton && favoriteInput && favoriteList) {

    addButton.addEventListener("click", function () {

        const dish = favoriteInput.value.trim();

        if (dish === "") {
            alert("Please enter a dish name.");
            return;
        }

        const li = document.createElement("li");

        const text = document.createTextNode(dish + " ");

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.textContent = "Remove";

        removeBtn.onclick = function () {
            li.remove();
        };

        li.appendChild(text);
        li.appendChild(removeBtn);

        favoriteList.appendChild(li);

        favoriteInput.value = "";
    });

}