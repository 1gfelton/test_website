document.addEventListener("DOMContentLoaded", function() {
  const projectLinks = document.querySelectorAll('.project-link');

  projectLinks.forEach(link => {
    const projectTile = link.querySelector('.project');

    link.addEventListener('mousemove', (e) => {
      const { x, y, width, height } = link.getBoundingClientRect();
      const rotY = (e.clientX - (x + width / 2)) / (width / 2) * 10;
      const rotX = (e.clientY - (y + height / 2)) / (height / 2) * -10;

      projectTile.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    link.addEventListener('mouseleave', () => {
      projectTile.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
});