

// Initialize and add the map
function initMap() {
    // The location of Neiva
    const neiva = { lat: 2.93537, lng: -75.288911 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: neiva,
    });
    addMarkers(map);
}

function addMarkers(map) {
    fetch('https://www.datos.gov.co/resource/knjs-bqqm.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element)
            let location = { lat: parseFloat(element.geocoded_column.latitude), lng: parseFloat(element.geocoded_column.longitude) };
            const marker = new google.maps.Marker({
                position: location,
                map: map,
            });
        });

    });    
}