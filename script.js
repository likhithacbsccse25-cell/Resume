 <script>
    // Scroll Animation
    const sections = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('visible');
        }
      });
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = "☀️ Light Mode";
      } else {
        themeToggle.textContent = "🌙 Dark Mode";
      }
    });
  </script>
