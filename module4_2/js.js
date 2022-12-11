const searchFormElem = document.querySelector("form");
const showsContainerElem = document.querySelector("#shows");
const dialogElem = document.querySelector("dialog");
const closeModelElem = document.querySelector("#closeModel");
const modalTitleElem = document.querySelector("#modalTitle");

closeModelElem.addEventListener("click", () => dialogElem.close());

searchFormElem.addEventListener("submit", async function(submitEvent) {
  submitEvent.preventDefault();
  const formData = new FormData(this);
  const search = new URLSearchParams(formData).toString();
  const fetchData = await fetch(this.action + search);
  const jsonData = await fetchData.json();
  
  if(jsonData.length) showsContainerElem.innerHTML = "";
  else showsContainerElem.innerHTML = "<p>No results</p>";
  jsonData.forEach(result => {
    const {show} = result;
    const showContainerElem = document.createElement("div");
    showContainerElem.classList.add("show");
    const nameElem = document.createElement("h2");
    nameElem.textContent = show.name;
  
    const moreDetailsElem = document.createElement("a");
    moreDetailsElem.href = show.url;
    moreDetailsElem.target = "details";
    moreDetailsElem.textContent = "More details";

    moreDetailsElem.addEventListener("click", () => {
      dialogElem.showModal();
      modalTitleElem.textContent = show.name;
    });
  
    const img = document.createElement("img");
    img.src = show.image?.medium ?? "https://via.placeholder.com/100x200?text=text+here";
    
    const genreContainer = document.createElement("div");
    genreContainer.innerHTML += "<h2>Genres</h2>"
    genreContainer.classList.add("genres");
    show.genres.forEach(genre => {
      const genreElem = document.createElement("p");
      genreElem.textContent = genre;
      genreElem.classList.add("genre");
      genreContainer.appendChild(genreElem);
    });
  
    const summaryElem = document.createElement("div");
    summaryElem.classList.add("summary");
    summaryElem.innerHTML = show.summary;
    showContainerElem.append(nameElem, img, summaryElem, moreDetailsElem);
    if(show.genres?.length) img.after(genreContainer)
    showsContainerElem.append(showContainerElem);
  });
});