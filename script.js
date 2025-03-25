// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Email JS API for contact form submission 
emailjs.init("5tScuY8XLrEO-I1aI");

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.send("service_be257t1", "template_6g543ly", {
    first_name: document.getElementById("first-name").value,
    last_name: document.getElementById("last-name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone-number").value,
    message: document.getElementById("message").value
  }).then(function (response) {
    alert("Your message has been sent successfully!");
    document.getElementById("contactForm").reset();
  }, function (error) {
    alert("Error sending message. Please try again.");
  });
});

