const textInput = document.getElementById("textInput");
const charcount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    const remaining = 50 - textInput.ariaValueMax.length;
    charcount.textContent = remaining;
})