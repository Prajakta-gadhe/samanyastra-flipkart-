// Category Dropdowns
const categoryItems = document.querySelectorAll('.category-item');
const fashionItem = document.getElementById('fashion-item');
const fashionDropdown = document.getElementById('fashion-dropdown');
const electronicsItem = document.getElementById('electronics-item');
const electronicsDropdown = document.getElementById('electronics-dropdown');
const homeFurnitureItem = document.getElementById('home-furniture-item');
const homeFurnitureDropdown = document.getElementById('home-furniture-dropdown');
const beautyToysItem = document.getElementById('beauty-toys-item');
const beautyToysDropdown = document.getElementById('beauty-toys-dropdown');
const twoWheelersItem = document.getElementById('two-wheelers-item');
const twoWheelersDropdown = document.getElementById('two-wheelers-dropdown');

categoryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 0.3s ease';
    });
});

fashionItem.addEventListener('click', (event) => {
    event.stopPropagation();
    fashionDropdown.style.display = fashionDropdown.style.display === 'flex' ? 'none' : 'flex';
    electronicsDropdown.style.display = 'none';
    homeFurnitureDropdown.style.display = 'none';
    beautyToysDropdown.style.display = 'none';
    twoWheelersDropdown.style.display = 'none';
});

electronicsItem.addEventListener('click', (event) => {
    event.stopPropagation();
    electronicsDropdown.style.display = electronicsDropdown.style.display === 'flex' ? 'none' : 'flex';
    fashionDropdown.style.display = 'none';
    homeFurnitureDropdown.style.display = 'none';
    beautyToysDropdown.style.display = 'none';
    twoWheelersDropdown.style.display = 'none';
});

homeFurnitureItem.addEventListener('click', (event) => {
    event.stopPropagation();
    homeFurnitureDropdown.style.display = homeFurnitureDropdown.style.display === 'flex' ? 'none' : 'flex';
    fashionDropdown.style.display = 'none';
    electronicsDropdown.style.display = 'none';
    beautyToysDropdown.style.display = 'none';
    twoWheelersDropdown.style.display = 'none';
});

beautyToysItem.addEventListener('click', (event) => {
    event.stopPropagation();
    beautyToysDropdown.style.display = beautyToysDropdown.style.display === 'flex' ? 'none' : 'flex';
    fashionDropdown.style.display = 'none';
    electronicsDropdown.style.display = 'none';
    homeFurnitureDropdown.style.display = 'none';
    twoWheelersDropdown.style.display = 'none';
});

twoWheelersItem.addEventListener('click', (event) => {
    event.stopPropagation();
    twoWheelersDropdown.style.display = twoWheelersDropdown.style.display === 'flex' ? 'none' : 'flex';
    fashionDropdown.style.display = 'none';
    electronicsDropdown.style.display = 'none';
    homeFurnitureDropdown.style.display = 'none';
    beautyToysDropdown.style.display = 'none';
});

// Image Slider
let index = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");

function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
}

setInterval(nextSlide, 2000);



document.addEventListener('click', () => {
    fashionDropdown.style.display = 'none';
    electronicsDropdown.style.display = 'none';
    homeFurnitureDropdown.style.display = 'none';
    beautyToysDropdown.style.display = 'none';
    twoWheelersDropdown.style.display = 'none';
});
function sort(type) {
    alert(`Sorting by ${type} (functionality to be implemented)`);
  }
  
  function toggleFilter(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";
  }
  


