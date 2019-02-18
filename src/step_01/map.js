const loadMap = function(){
    console.log('Loading the map...');

    /* Mapbox GL map initialization */
    const map = new mapboxgl.Map({
        container: 'map',
        style: carto.basemaps.darkmatter,
        center: [73,1],
        zoom: 3,
        scrollZoom: true
    });

    const nav = new mapboxgl.NavigationControl({
        showCompass: false
    });
    map.addControl(nav, 'top-right');

    // Add the CARTO VL layer to the map
    layer.addTo(map, 'watername_ocean');

    console.log('Map loaded');
}