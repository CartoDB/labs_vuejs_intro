/* CARTO VL layer */
carto.setDefaultAuth({
    username: 'cartovl',
    apiKey: 'default_public'
});

const source = new carto.source.Dataset('populated_places');
const viz = new carto.Viz(
    `
    color: ramp(globalQuantiles($pop_max, 5), prism)
    width: 4
    strokeWidth: 0
    
    @totalCount: viewportCount()
    @totalPop: viewportSum($pop_max)
    @features: viewportFeatures($name,$pop_max)
    
    filter: 1
    `
);

const layer = new carto.Layer('layer', source, viz);
