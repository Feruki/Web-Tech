//? Get menu icon

let burger = false;

document.getElementById("burgerMenu").addEventListener("click", () => {
    if(!burger) {
        document.getElementById("navLinks").style.display = "flex";
    }
    else {
        document.getElementById("navLinks").style.display = "none";
    }
    burger = !burger;
});