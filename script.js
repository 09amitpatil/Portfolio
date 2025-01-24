

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    this.reset(); 
    alert('Message sent successfully!');
});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => 
{
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
