const scrollIndication = document.querySelector('.scroll-indication');

const content = document.querySelector('.content');

const observer = new IntersectionObserver(handleIntersect);

observer.observe(content);

function handleIntersect(entries) {

   const el = entries[0];

   if(el.isIntersecting) {
      window.addEventListener("scroll", indicationAnimation);
   }
   else if(!el.isIntersecting) {
      window.removeEventListener("scroll", indicationAnimation);
   }
}

function indicationAnimation() {

   if(window.scrollY > content.offsetTop) {
      const pourcentage = ((window.scrollY - content.offsetTop) / content.scrollHeight * 100).toFixed(2);

      scrollIndication.style.transform = `scaleX(${(pourcentage / 100)})`;
   }
   else {
      scrollIndication.style.transform = "scaleX(0)";
   }
}

// 925DEV