const textInput = document.querySelector("#validation-input");
const lengthValue = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", (event) => {
    if (event.target.value.length === lengthValue) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    }
    else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }

});