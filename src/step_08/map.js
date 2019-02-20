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
    // Add the map to the Vue instance
    Vue.set(app,'map', map);

    const nav = new mapboxgl.NavigationControl({
        showCompass: false
    });
    map.addControl(nav, 'top-right');

    // Add the CARTO VL layer to the map
    layer.addTo(map, 'watername_ocean');

    map.on('move',function(){
        /* Update the Vue app with new map state */
        app.zooming = 0;
        app.zoomLevel = map.getZoom();
        app.latitude = map.getCenter().lat;
        app.longitude = map.getCenter().lng;
    });

    layer.on('updated',function(){
        /* Update the Vue app with VL variables */
        app.totalPop = viz.variables.totalPop.value;
        app.features = viz.variables.features.value.map( function(f) {
            const p = f.properties;
            return {
                'name': p.name,
                'pop_max': p.pop_max
            }    
        });
    });

    console.log('Map loaded');
}