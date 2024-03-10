function selecionarFoto() {
    var inputFile = document.getElementById('inputFile');

    inputFile.click();
    inputFile.addEventListener('change', function() {
        var arquivo = inputFile.files[0];

        if (arquivo) {
            var novaFotoUrl = URL.createObjectURL(arquivo);
            var photoContainer = document.getElementById('photoContainer');
            photoContainer.style.backgroundImage = 'url(' + novaFotoUrl + ')';
        }
    });
}
