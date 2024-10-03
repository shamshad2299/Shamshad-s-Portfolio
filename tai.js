
// document.addEventListener('DOMContentLoaded', function() {
//   const projectes = document.querySelectorAll('.project');
  
//   projectes.forEach((project, i) => {
//     setTimeout(() => {
//       project.classList.add('show');
//     }, i * 200);
//   });
// });

window.onscroll = function() {
  const projectes = document.querySelectorAll('.project');
  const scrollPosition = window.scrollY;

  projectes.forEach((project, i) => {
    const projectTop = project.offsetTop;
    const projectHeight = project.offsetHeight;
    if (scrollPosition >= projectTop - window.innerHeight + projectHeight / 2) {
      project.classList.add('show');
    }
  });
};


