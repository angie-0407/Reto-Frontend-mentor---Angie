const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const btn = item.querySelector('.accordion-btn');
    const accordionDescription = item.querySelector('.accordion-description');
    const plusIcon = item.querySelector('.plus-icon');
    const minusIcon = item.querySelector('.minus-icon');

    item.addEventListener('mouseenter', function () {
        accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
    });

    item.addEventListener('mouseleave', function () {
        accordionDescription.style.maxHeight = '0px';
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
    });
});
