function onScanSuccess(qrCodeMessage) {
  document.getElementById("result").innerHTML =
    '<p>' + qrCodeMessage + "</p>";
}

function onScanError(errorMessage) {
}

var html5QrCodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250
});

html5QrCodeScanner.render(onScanSuccess, onScanError);
