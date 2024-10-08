let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "aini") {
            event.target.setAttribute("src", "assets/image/about_pacitan.jpeg");
            return;
        } else if (event.target.id === "ragam") {
            event.target.setAttribute("src", "assets/image/9ragam9new.jpg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "aini") {
            event.target.setAttribute("src", "assets/image/about_pacitan.jpeg");
            return;
        }
        if (event.target.id === "ragam") {
            event.target.setAttribute("src", "assets/image/9ragam9.jpg");
            return;
        }
    });
}