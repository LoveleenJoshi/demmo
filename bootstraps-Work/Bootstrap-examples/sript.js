function printPage() {
    window.print(); // Open the print dialog
}
// Add a click event listener to the print button
var printButton = document.getElementById("printButton");
if (printButton) {
    printButton.addEventListener("click", printPage);
} else {
    console.error("Print button not found.");
}