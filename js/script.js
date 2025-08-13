
const container = document.getElementById("content");
const links = document.querySelectorAll("nav a");
let url = "./partials/home.html"; 

function loadContent(urlFeed) {
  fetch(urlFeed)
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.text();
    })
    .then((data) => {
      container.innerHTML = data;
    })
    .catch((err) => {
      container.innerHTML = "<p>Sorry, content could not be loaded.</p>";
      console.error(err);
    });
}

function selectContent(e) {
  e.preventDefault();
  let newUrl = this.getAttribute("href");
  loadContent(newUrl);
}

links.forEach((link) => {
  link.addEventListener("click", selectContent);
});

loadContent(url);
