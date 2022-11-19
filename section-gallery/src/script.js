const filterButtonContainer = document.querySelector(".filter-button");
const galleryItems = document.querySelectorAll(".item");

filterButtonContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
        filterButtonContainer.querySelector('.active').classList.remove('active');

        e.target.classList.add('active');
        const filterValue = e.target.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    }
});