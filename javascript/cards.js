const expandButtons = document.querySelectorAll('.expand-button');

expandButtons.forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.card');

        if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
            this.textContent = '+';
        } else {
            card.classList.add('expanded');
            this.textContent = '-';
        }
    })
})