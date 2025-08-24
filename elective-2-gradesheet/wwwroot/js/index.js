document.getElementById('uploadButton').addEventListener('click', function (event) {
    var fileInput = document.getElementById('file');
    if (fileInput.files.length === 0) {
        alert('Please select a file.');
        event.preventDefault();
    } else {
        var fileName = fileInput.files[0].name;
        var extension = fileName.split('.').pop().toLowerCase();
        if (extension !== 'csv') {
            alert('Please select a .csv file.');
            event.preventDefault();
        }
    }
});
