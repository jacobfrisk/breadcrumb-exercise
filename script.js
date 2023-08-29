// Array
const links = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Fang ul
const ulPointer = document.querySelector("ul");

// Fang linkknap
const linkButton = document.querySelector("button");

// Kald funktionen for at vise brødkrumme
// showBreadCrumb(links);

// Funktion til at vise brødkrumme
function showBreadCrumb(arr) {
  // Looper gennem hvert element i arrayet med et index. Det betyder, at hver gang koden går gennem et element i arrayet, får den også adgang til elementets index (position) i arrayet.
  arr.forEach((each, index) => {
    // Hvis det er det sidste element i arrayet
    if (index === arr.length - 1) {
      // Tilføj kun navnet som en <li> uden link
      ulPointer.innerHTML += `<li>${each.name}</li>`;
    } else {
      // Ellers tilføj et <li> element med et link
      ulPointer.innerHTML += `<li><a href="${each.link}">${each.name}</a></li> /`;
    }
  });
}

// Dette er funktionaliteten til knappen
linkButton.addEventListener("click", () => {
  // Dette tømmer innerHTML, ellers ville brødkrummestien blive vist hvergang at knappen klikkes
  ulPointer.innerHTML = "";
  showBreadCrumb(links);
});
