function fileToBase64(file, callback) {
    const reader = new FileReader();

    reader.onload = function () {
        const base64String = reader.result.split(',')[1]; // Extract the base64 data part
        callback(base64String);
    };

    reader.readAsDataURL(file);
}

function BytesToFile(bytes, fileName = 'file') {
    const blob = new Blob([bytes], { type: 'application/octet-stream' });
    const newFile = new File([blob], fileName, { lastModified: new Date() });
    return newFile;
}

function BytesToLink(bytes) {
    const blob = new Blob([bytes], { type: 'application/octet-stream' });
    return URL.createObjectURL(blob);
}

export { fileToBase64, BytesToFile, BytesToLink };