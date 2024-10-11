function showContent(itemId) {
    // Ẩn tất cả nội dung
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Hiện nội dung tương ứng
    const activeContent = document.getElementById(itemId);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    // Cập nhật trạng thái của các nav-item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Đánh dấu nav-item đang hoạt động
    const currentNavItem = Array.from(navItems).find(item => item.getAttribute('onclick').includes(itemId));
    if (currentNavItem) {
        currentNavItem.classList.add('active');
    }
}

// Thêm hàm để set nav-item đầu tiên là active khi trang được tải
function setInitialActiveNavItem() {
    const firstNavItem = document.querySelector('.nav-item');
    if (firstNavItem) {
        firstNavItem.click(); // Kích hoạt sự kiện click trên nav-item đầu tiên
    }
}

// Gọi hàm khi trang được tải
window.onload = setInitialActiveNavItem;