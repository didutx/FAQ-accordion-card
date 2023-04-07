
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
            arrowImage.style.transform = "rotate(0deg)"
        } else {
            infoDiv.style.display = "block";
            question.style.fontWeight = "700";
            arrowImage.style.transform = "rotate(-180deg)"

            allInfoDivs.forEach((currDiv) => {
                if (currDiv !== infoDiv) {
                    currDiv.style.display = "none";
                    const currQuestion = currDiv.parentElement.querySelector(".question p");
                    const currArrowImage = currDiv.parentElement.querySelector(".image-arrow img");
                    currQuestion.style.fontWeight = "400";
                    currArrowImage.style.transform = "rotate(0deg)";
                }
            });
        }
    });
});


