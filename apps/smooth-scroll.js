const url = new URL(window.location);
const targetSection = url.searchParams.get("section");
if (targetSection) {
  document.querySelector(`#${targetSection}`).scrollIntoView({ 
    behavior: 'smooth' 
  });
}