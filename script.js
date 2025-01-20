

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    this.reset(); 
    alert('Message sent successfully!');
});
