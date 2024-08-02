window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.card').style.display = 'block';
    setTimeout(function() {
        document.querySelector('.gorilla').style.display = 'block';
    }, 2000); // Espera 2 segundos antes de mostrar o gorila
};

function closeGorilla() {
    document.querySelector('.gorilla').style.display = 'none';
}
