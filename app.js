
const allInfoDivs = [...document.querySelectorAll(".info")];
let prevItem = null;

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
            // 
            if (prevItem !== null) {
                const prevInfoDiv = prevItem.parentElement.querySelector(".info");
                const prevQuestion = prevItem.querySelector(".question p");
                const prevArrowImage = prevItem.querySelector(".image-arrow img");

                prevInfoDiv.style.display = "block";
                prevQuestion.style.fontWeight = "400";
                prevArrowImage.style.transform = "rotate(-180deg)"
            }
            prevItem = item;
            //   

            allInfoDivs.forEach((currDiv) => {
                if (currDiv !== infoDiv) {
                    currDiv.style.display = "none";
                    currDiv.previousElementSibling.querySelector(".question").style.fontWeight = "400";
                    currDiv.previousElementSibling.querySelector(".image-arrow img").style.transform = "rotate(0deg)"
                }
            });
        }
    });
});
