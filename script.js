// Contact form submission
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Show modal instead of alert
    document.body.classList.add('modal-open');
    document.getElementById('contactModal').classList.add('show');
    this.reset();
  });
}

// Features section video logic
const featuresVideo = document.getElementById('featuresVideo');
const featuresPlayBtn = document.getElementById('featuresPlayBtn');

if (featuresVideo && featuresPlayBtn) {
  // Play/pause on video click
  featuresVideo.addEventListener('click', function(e) {
    if (featuresVideo.paused) {
      featuresVideo.play();
    } else {
      featuresVideo.pause();
    }
  });
  // Play/pause on play icon click
  featuresPlayBtn.addEventListener('click', function(e) {
    featuresVideo.play();
  });
  // Show/hide play icon
  featuresVideo.addEventListener('play', function() {
    featuresPlayBtn.classList.add('hide');
  });
  featuresVideo.addEventListener('pause', function() {
    featuresPlayBtn.classList.remove('hide');
  });
  // Show play icon initially
  featuresPlayBtn.classList.remove('hide');
}

// Testimonial slider logic (responsive, auto and manual)
const testimonialContents = document.querySelectorAll('.testimonial-main-content');
const testimonialClients = document.querySelectorAll('.testimonial-client');
const testimonialDots = document.querySelectorAll('.testimonial-dot');
let testimonialIndex = 0;
let testimonialInterval = null;

function showTestimonial(idx) {
  testimonialContents.forEach((el, i) => {
    el.style.display = i === idx ? 'block' : 'none';
  });
  testimonialClients.forEach((el, i) => {
    el.style.display = i === idx ? 'flex' : 'none';
  });
  testimonialDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
  testimonialIndex = idx;
}
function nextTestimonial() {
  let nextIdx = (testimonialIndex + 1) % testimonialContents.length;
  showTestimonial(nextIdx);
}
if (testimonialContents.length > 0 && testimonialDots.length > 0) {
  testimonialDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showTestimonial(i);
      resetTestimonialInterval();
    });
  });
  function resetTestimonialInterval() {
    if (testimonialInterval) clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }
  showTestimonial(0);
  testimonialInterval = setInterval(nextTestimonial, 5000);
}

// Modal logic for contact form
function closeModal() {
  document.getElementById('contactModal').classList.remove('show');
  document.body.classList.remove('modal-open');
}
document.addEventListener('DOMContentLoaded', function() {
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  // Close modal on outside click
  const modal = document.getElementById('contactModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });
  }
});

// Pricing card selection logic
const priceCards = document.querySelectorAll('.exact-price-card');
priceCards.forEach(card => {
  card.addEventListener('click', function() {
    priceCards.forEach(c => c.classList.remove('featured'));
    this.classList.add('featured');
  });
}); 