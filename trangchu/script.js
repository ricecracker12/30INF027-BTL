let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.banner-slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Ẩn tất cả các slide
        if (i === index) {
            slide.classList.add('active'); // Hiện slide hiện tại
        }
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.banner-slide');
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Quay lại slide cuối
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Quay lại slide đầu
    }

    showSlide(currentSlide);
}

// Tự động chuyển slide mỗi 5 giây
setInterval(() => {
    changeSlide(1);
}, 5000);

// Hiện slide đầu tiên
showSlide(currentSlide);
