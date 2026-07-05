// =============================================
// SECTION 1: NAV BAR & HERO INTERACTIVITY
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.btn-search');
    const jobInput = document.querySelector('.search-box input[type="text"]');
    const citySelect = document.querySelector('.search-box select');

    // Simple interaction logic handler for the Search feature
    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            const jobValue = jobInput.value.trim();
            const cityValue = citySelect.value;

            alert(`Searching for jobs matching: "${jobValue || 'Any'}" in region: "${cityValue || 'All Cities'}"`);
        });
    }
});
// =============================================
// SECTION 7: UPDATE FORM HANDLER
// =============================================

const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.querySelector('.subscribe-input');
        alert(`Thank you for subscribing with: ${emailInput.value}`);
        emailInput.value = '';
    });
}