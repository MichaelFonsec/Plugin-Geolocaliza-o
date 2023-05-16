
function localiza(){

document.addEventListener("click", function() {
    var onSuccess = function(position) {
        alert('Latitude:' + position.coords.latitude + '\n' +
        'Longitude:' + position.coords.longitude + '\n' +
        'Altitude:' + position.coords.altitude + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.coords.timestamp + '\n');
    };
});
}