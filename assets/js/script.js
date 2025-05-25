document.addEventListener("DOMContentLoaded", function () {
    const descriptionText = "I am a web developer with a passion for creating dynamic and responsive websites. I love coding and enjoy learning new technologies.";
    const target = document.querySelector(".msr_main_content");

    console.log(descriptionText.length);

    typeLetterByLetter("p", "msr_main_description", descriptionText, target, 100);
});


function typeLetterByLetter(tagName, className, text, container, speed = 100) {
    const element = document.createElement(tagName);
    element.className = className;
    container.appendChild(element);

    let index = 0;

    function typeNextChar() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeNextChar, speed);
        }
    }

    typeNextChar();
}
