function generateQR() {
    var personDetails = document.getElementById('person_details').value;
    var qr = new QRCode(document.getElementById('qrcode'), {
        text: personDetails,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
