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

const menu = document.getElementById("menu");

menuItems.forEach((item) => {

    const card = document.createElement("div");
    card.className = "menu-item-wrap";

    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <span class="menu-item-label">${item.name}</span>
    `;

    card.addEventListener("click", () => {

        document.getElementById("detail-image").src = item.image;
        document.getElementById("detail-name").textContent = item.name;
        document.getElementById("Rating-display").textContent = item.rating;
        document.getElementById("Comment-display").textContent = item.comment;

    });

    menu.appendChild(card);

});