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