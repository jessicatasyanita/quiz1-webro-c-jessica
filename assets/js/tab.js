/*==================== JOURNEY TABS ====================*/ 
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('journey__active');
        })

        target.classList.add('journey__active');

        tabs.forEach(tab =>{
            tab.classList.remove('journey__active');
        })

        tab.classList.add('journey__active');
    })
})