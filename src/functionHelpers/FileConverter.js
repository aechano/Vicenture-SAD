function FileToBytes(file, callback) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function () {
        callback(new Uint8Array(reader.result));
    }
}

function BytesToFile(bytes) { //to be used when necessary
    const blob = new Blob([bytes], { type: 'application/octet-stream' });
    const newFile = new File([blob], `${new Date()}`, { lastModified: new Date() });
    return newFile;
}

function BytesToLink(bytes) { //to be used on src like <img src={link}/>
    const blob = new Blob([bytes], { type: 'application/octet-stream' });
    return URL.createObjectURL(blob);
}

export { FileToBytes, BytesToFile, BytesToLink };