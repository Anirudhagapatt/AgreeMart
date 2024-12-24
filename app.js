const wrapper = document.querySelector('.wrapper:first-of-type');

function activeSignUp() {
    wrapper.classList.add("activeSignUp");
    wrapper.classList.remove("activesignin");
}

function activesignin() {
    wrapper.classList.add("activesignin");
    wrapper.classList.remove("activeSignUp");
}

