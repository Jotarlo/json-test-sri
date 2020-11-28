

// Initialize and add the map
function initMap() {
    // The location of Neiva
    const neiva = { lat: 2.93537, lng: -75.288911 };
    // The map, centered at Uluru
    let zoom = parseInt(document.querySelector("#txtZoom").value);
    if (zoom == undefined || zoom == null || zoom == "") {
        zoom = 12;
    }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoom,
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
                let image = getMarkerImage(element.tipo);
                let location = { lat: parseFloat(element.geocoded_column.latitude), lng: parseFloat(element.geocoded_column.longitude) };
                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: element.nombre_del_establecimiento,
                    icon: image,
                    draggable:true
                });
            });

        });
}

function getMarkerImage(type) {
    let image = "";
    switch (type) {
        case 'RESTAURANTE':
            image = 'https://cdn0.iconfinder.com/data/icons/travel-vacation/290/travel-transport-hotel-vacation-holidays-tourist-tourism-travelling-traveling_149-512.png'
            break;

        case 'BAR':
            image = 'https://cdn4.vectorstock.com/i/1000x1000/14/98/bar-icon-vector-16751498.jpg';
            break;

        case 'PIZZERIA':
            image = 'https://img.icons8.com/pastel-glyph/2x/pizza--v2.png';
            break;

        case 'DISCOTECA':
            image = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/disco-1584711-1338269.png';
            break;
    }
    return "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
}

function RefreshZoom() {
    initMap();
}