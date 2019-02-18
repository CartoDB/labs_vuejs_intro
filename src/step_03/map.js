const loadMap = function(app){
    console.log('Loading the map...');

    /* Mapbox GL map initialization */
    const map = new mapboxgl.Map({
        container: 'map',
        style: carto.basemaps.darkmatter,
        center: { lat: app.latitude, lng: app.longitude },
        zoom: app.zoomLevel,
        scrollZoom: true
    });

    const nav = new mapboxgl.NavigationControl({
        showCompass: false
    });
    map.addControl(nav, 'top-right');

    // Add the CARTO VL layer to the map
    layer.addTo(map, 'watername_ocean');

    map.on('move',function(){
        /* Update the Vue app with new map state */
        app.zoomLevel = map.getZoom();
        app.latitude = map.getCenter().lat;
        app.longitude = map.getCenter().lng;
    });

    console.log('Map loaded');
}