const inputUrl = document.getElementById("urlInput");
const res = document.getElementById("resultInput");
const copyBtn = document.getElementById("copyBtn");
const generateLinkBtn = document.getElementById("generateLink");

generateLinkBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (inputUrl.value === "") {
    return alert("enter a url");
  } else {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${inputUrl.value}`
    );
    const data = await response.json();
    if (data.ok) {
      res.value = data.result.full_short_link;
    } else {
      alert(data.error);
    }
  }
});

copyBtn.addEventListener("click", () => {
  res.select();
  navigator.clipboard.writeText(res.value);
});
