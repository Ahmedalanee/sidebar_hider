frappe.ready(function() {
    setTimeout(function() {
        let toggleButton = document.querySelector('[href="#es-line-sidebar-expand"]');
        if (toggleButton) {
            toggleButton.closest('button').click();
            console.log("Sidebar toggle button clicked!");
        } else {
            console.log("Sidebar toggle button not found.");
        }
    }, 1000);
});
