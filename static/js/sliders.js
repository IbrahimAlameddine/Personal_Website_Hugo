function slider(name) {
    let slidePosition = 1;

    viewSlide(slidePosition);

    let nextButton = document.querySelector("#" + name + " .next");
    let prevButton = document.querySelector("#" + name + " .prev");

    function sliderMover(n) {
        viewSlide(slidePosition += n);
    }

    nextButton.addEventListener("click", function () {
        sliderMover(1);
    });

    prevButton.addEventListener("click", function () {
        sliderMover(-1);
    });

    function viewSlide(n) {
        let i;
        let slides = document.querySelectorAll("#" + name + " .slides");

        if (n > slides.length) {
            slidePosition = 1;
        }

        if (n < 1) {
            slidePosition = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slidePosition - 1].style.display = "block";
    }
}

slider("work");
slider("reviews");