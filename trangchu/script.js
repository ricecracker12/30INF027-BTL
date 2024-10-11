
const banner = document.querySelector('.banner');
const slides = document.querySelectorAll('.banner-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;
const slideCount = slides.length;

function showSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;

    // Xóa lớp active và thêm lớp inactive cho tất cả các slide
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.classList.add('inactive');
        if (i === index) {
            slide.classList.remove('inactive');
            slide.classList.add('active');
        }
    });

    // Di chuyển banner
    banner.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Tự động chuyển slide sau mỗi 10 giây
setInterval(nextSlide, 10000);
