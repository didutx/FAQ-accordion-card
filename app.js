
const allInfoDivs = [...document.querySelectorAll(".info")];

[...document.querySelectorAll(".top")].forEach(function (item) {
    item.addEventListener("click", (event) => {
        event.stopPropagation();

        const infoDiv = item.parentElement.querySelector(".info");
        const question = item.querySelector(".question p");
        const arrowImage = item.querySelector(".image-arrow img");

        if (window.getComputedStyle(infoDiv, null).display === "block") {
            infoDiv.style.display = "none";
            question.style.fontWeight = "400";
            arrowImage.classList.remove("rotate180");
        } else {
            infoDiv.style.display = "block";
            question.style.fontWeight = "700";
            arrowImage.classList.add("rotate180");

            allInfoDivs.forEach((currDiv) => {
                if (currDiv !== infoDiv) {
                    currDiv.style.display = "none";
                    currDiv.previousElementSibling.querySelector(".question").style.fontWeight = "400";
                    currDiv.previousElementSibling.querySelector(".image-arrow img").classList.remove("rotate180");
                }
            });
        }
    });
});


