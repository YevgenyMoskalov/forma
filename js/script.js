$(document).ready(function () {
    $('select').niceSelect();
});

document.getElementById('sign_up').addEventListener("click", function (event) {
    const data = document.getElementById('first-form');
    if (data.checkValidity()) {
        event.preventDefault();
        formVisibility();
    } else {

    }
});

function formVisibility() {
    document.getElementById("first-form").style.display = "none";
    document.getElementById("second-form").style.display = "block";
}

const wallpaper = new Map([
    ['Baratheon of Dragonstone', 'https://vignette.wikia.nocookie.net/gameofthrones/images/4/4a/House-Baratheon-of-Dragonstone-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170519003417'],
    ['Martell', 'https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/House-Martell-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170523024859'],
    ['Stark', 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101103142'],
    ['Bolton', 'https://vignette.wikia.nocookie.net/gameofthrones/images/d/dd/House-Bolton-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20161231131431'],
    ['Tully', 'https://vignette.wikia.nocookie.net/gameofthrones/images/b/bd/House-Tully-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170523040648'],
    ['Arryn', 'https://vignette.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101094153'],
    ['Lannister', 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101095357'],
    ['Tyrell', 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170108163035'],
    ['Baratheon', 'https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170519002924'],
    ['Greyjoy', 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170523015836']
]);

$(".option").on("click", function () {
    const content = $(this).html();
    $('.image').css({'background-image': 'url(' + wallpaper.get(content) + ')'});
    console.log("Ok");
});