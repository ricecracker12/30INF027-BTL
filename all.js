// TODO - Cho người dùng thay đổi cỡ chữ bài viết
function changeFontSize(delta) {
    const content = document.getElementById('content');
    const currentSize = window.getComputedStyle(content, null).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) + delta;

    content.style.fontSize = newSize + 'px';
}

/*
window.addEventListener('scroll', function() {
    const relatedNews = document.getElementById('sidebar');
    const articleTitle = document.querySelector('.main');
    const articleEnd = document.getElementById('articleEnd');
    const articleTitleBottom = articleTitle.getBoundingClientRect().top;
    const articleEndTop = articleEnd.getBoundingClientRect().top;
    const relatedNewsHeight = relatedNews.offsetHeight;

    if (articleTitleBottom < 0 && articleEndTop > relatedNewsHeight) {
        relatedNews.style.position = 'fixed';
        relatedNews.style.right = '15';
    } else if (articleEndTop <= relatedNewsHeight) {
        relatedNews.style.position = 'absolute';
        relatedNews.style.top = (window.scrollY + articleEndTop - relatedNewsHeight) + 'px';
        relatedNews.style.right = '15';
    } else {
        relatedNews.style.position = 'relative';
        relatedNews.style.top = '0';
        relatedNews.style.right = '0';
    }
});
*/