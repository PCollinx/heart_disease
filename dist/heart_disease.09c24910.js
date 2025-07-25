// import "core-js/stable";
// import "regenerator-runtime/runtime";
document.addEventListener("DOMContentLoaded", ()=>{
    const tabs = document.querySelectorAll(".operations__tab");
    const tabsContainer = document.querySelector(".operations__tab-container");
    const tabsContent = document.querySelectorAll(".operations__content");
    console.log("Script loaded!", document.body);
    // TAB Section
    function handleTabClick(e) {
        const clicked = e.target.closest(".operations__tab");
        if (!clicked) return;
        tabs.forEach((tab)=>tab.classList.remove("operations__tab--active"));
        tabsContent.forEach((content)=>content.classList.remove("operations__content--active"));
        console.log(clicked);
        clicked.classList.add("operations__tab--active");
        document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
    }
    if (tabsContainer) tabsContainer.addEventListener("click", handleTabClick);
    else console.log("Tabs container not found");
    document.querySelectorAll(".content-container .question").forEach((q)=>{
        q.addEventListener("click", function() {
            const container = this.parentElement;
            container.classList.toggle("active");
        });
    });
    // Initialize the carousel
    const track = document.getElementById("carousel-track");
    const images = track.children.length;
    let index = 0;
    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
        activateDot(index);
    }
    document.getElementById("carousel-prev").onclick = ()=>{
        index = (index - 1 + images) % images;
        updateCarousel();
    };
    document.getElementById("carousel-next").onclick = ()=>{
        index = (index + 1) % images;
        updateCarousel();
    };
    // creating dots for the carousel
    const dotContainer = document.querySelector(".dots");
    const slides = document.querySelectorAll(".slide");
    const createDots = function() {
        slides.forEach(function(_, i) {
            dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    };
    const activateDot = function(slide) {
        document.querySelectorAll(".dots__dot").forEach((dot)=>dot.classList.remove("dots__dot--active"));
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
    };
    createDots();
    activateDot(0);
    // Touch/swipe support
    let startX = 0;
    track.addEventListener("touchstart", (e)=>{
        startX = e.touches[0].clientX;
    });
    track.addEventListener("touchend", (e)=>{
        const endX = e.changedTouches[0].clientX;
        if (endX - startX > 50) {
            // swipe right
            index = (index - 1 + images) % images;
            updateCarousel();
        } else if (startX - endX > 50) {
            // swipe left
            index = (index + 1) % images;
            updateCarousel();
        }
    });
});

//# sourceMappingURL=heart_disease.09c24910.js.map
