const btn = document.getElementById("emojiBtn");
const box = document.getElementById("emojiBox");
const selected = document.getElementById("selectedEmoji");

btn.addEventListener("click", () => {
    box.style.display = box.style.display === "none" ? "block" : "none";
});

document.querySelectorAll(".emoji").forEach(emoji => {
    emoji.addEventListener("click",() =>{
      selected.textContent = emoji.textContent;
      box.style.display = "none";
    });
});