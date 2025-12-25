// Menambahkan efek "Active" pada link yang sedang dibuka
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('bg-blue-600', 'text-white'));
    this.classList.add('bg-blue-600', 'text-white');
  });
});

// Navbar berubah warna saat scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('shadow-lg', 'border-b', 'border-blue-100');
  } else {
    nav.classList.remove('shadow-lg', 'border-b', 'border-blue-100');
  }
});

// Animasi Muncul Satu Per Satu (Fade-in Slide)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

// Targetkan semua kartu tim
document.querySelectorAll('.team-card').forEach((card) => {
    // Set awal: tidak terlihat dan agak ke bawah
    card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
    observer.observe(card);
});