// JavaScript untuk menambahkan kelas 'active' ke link navigasi yang sedang aktif
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Fungsi untuk menambahkan kelas 'active' pada link yang sesuai
    const setActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    };

    // Ketika halaman di-scroll, perbarui link navigasi yang aktif
    window.addEventListener("scroll", setActiveLink);

    // Jika halaman di-refresh, aktifkan link yang sesuai
    setActiveLink();
});
