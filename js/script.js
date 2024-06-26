// Initialize the controller when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const controller = new Controller(new View());
  controller.initialize();
});
