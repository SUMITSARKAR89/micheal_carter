window.addEventListener("scroll", () => {
   const heroText = document.querySelector('.hero-text');
  const heroContent = document.querySelector('.hero-content');
  const scrollTop = window.scrollY;

  if (scrollTop < 10) {
    heroText.classList.add('show');
    heroContent.style.height = "550px";
    heroContent.style.backdropFilter = "blur(0.5px)";
  } else {
    heroText.classList.remove('show');
     heroContent.style.height = "100px";
     heroContent.style.backdropFilter = "blur(3px)";
  }
})

// =======================nav================ 

const openIcon = document.querySelector("#openMenu");
const closeIcon = document.querySelector("#closeMenu");
const navigation = document.querySelector(".navigation");

openIcon.addEventListener("click", () => {

  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  closeIcon.style.color = "red";
  navigation.style.top = "8%";
});
closeIcon.addEventListener("click", () => {

  openIcon.style.display = "block";
  closeIcon.style.display = "none";
  navigation.style.top = "-100%";
});


