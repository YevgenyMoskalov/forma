document.getElementById('sign_up').addEventListener("click", function (event) {
    let data = document.getElementById('first-form');
    if (data.checkValidity()) {
        event.preventDefault();
        formVisibility();
    }
});

function formVisibility() {
    document.getElementById("first-form").style.display = "none";
    document.getElementById("second-form").style.display = "block";
}