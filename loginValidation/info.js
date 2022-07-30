const results = document.getElementById("show-results");
const params = new URLSearchParams(window.location.search);
console.log(results);
params.forEach((value, key) => {
  const show = document.createElement("div");
  show.classList.add("result");
  if (key === "password" || key === "confirm-password") {
    let dotPassword = "";
    for (const s of value) {
      dotPassword += "*";
    }
    show.innerHTML = `<span class = "key">${key}</span>
       <span class = "equal">=</span>
        <span class = "value">${dotPassword}</span>`;
  } else {
    show.innerHTML = `<span class = "key">${key}</span>
       <span class = "equal">=</span>
        <span class = "value">${value}</span>`;
  }

  results.appendChild(show);
});
