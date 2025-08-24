document.addEventListener('DOMContentLoaded', function () {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Handle the reset filter button click
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', function () {
            document.getElementById('searchString').value = '';
            document.getElementById('sectionId').selectedIndex = 0;
            document.getElementById('period').selectedIndex = 0;
            document.getElementById('filterForm').submit();
        });
    }
});
