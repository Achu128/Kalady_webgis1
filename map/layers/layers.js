var wms_layers = [];


var lyr_OSMStandard_0 = new ol.layer.Tile({
    'title': 'OSM Standard',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

var lyr_GoogleSatellite_1 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});
var lyr_DEM_2 = new ol.layer.Image({
    opacity: 1,

    title: 'DEM<br />\
    <img src="styles/legend/DEM_2_0.png" /> -1<br />\
    <img src="styles/legend/DEM_2_1.png" /> 38<br />' ,


    source: new ol.source.ImageStatic({
        url: "./layers/DEM_2.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [8505381.155104, 1136587.654753, 8511318.194613, 1141677.138614]
    })
});
var lyr_Pseudocolour_3 = new ol.layer.Image({
    opacity: 1,

    title: 'Pseudocolour<br />\
    <img src="styles/legend/Pseudocolour_3_0.png" /> 0<br />\
    <img src="styles/legend/Pseudocolour_3_1.png" /> 10<br />\
    <img src="styles/legend/Pseudocolour_3_2.png" /> 19<br />\
    <img src="styles/legend/Pseudocolour_3_3.png" /> 29<br />\
    <img src="styles/legend/Pseudocolour_3_4.png" /> 38<br />' ,


    source: new ol.source.ImageStatic({
        url: "./layers/Pseudocolour_3.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [8505381.155113, 1136587.654779, 8511318.194585, 1141677.138640]
    })
});
var lyr_Hillshade_4 = new ol.layer.Image({
    opacity: 1,

    title: 'Hillshade<br />',


    source: new ol.source.ImageStatic({
        url: "./layers/Hillshade_4.png",
        attributions: ' ',
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [8505381.155113, 1136587.654779, 8511318.194585, 1141677.138640]
    })
});
var format_Geomorphology_5 = new ol.format.GeoJSON();
var features_Geomorphology_5 = format_Geomorphology_5.readFeatures(json_Geomorphology_5,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Geomorphology_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorphology_5.addFeatures(features_Geomorphology_5);
var lyr_Geomorphology_5 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Geomorphology_5,
    style: style_Geomorphology_5,
    popuplayertitle: 'Geomorphology',
    interactive: false,
    title: 'Geomorphology<br />\
    <img src="styles/legend/Geomorphology_5_0.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/Geomorphology_5_1.png" /> Piedmont Zone<br />\
    <img src="styles/legend/Geomorphology_5_2.png" /> Valley Fill<br />\
    <img src="styles/legend/Geomorphology_5_3.png" /> Water Body<br />\
    <img src="styles/legend/Geomorphology_5_4.png" /> <br />' });
var format_Geology_6 = new ol.format.GeoJSON();
var features_Geology_6 = format_Geology_6.readFeatures(json_Geology_6,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Geology_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_6.addFeatures(features_Geology_6);
var lyr_Geology_6 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Geology_6,
    style: style_Geology_6,
    popuplayertitle: 'Geology',
    interactive: false,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_6_0.png" /> Basic Rocks<br />\
    <img src="styles/legend/Geology_6_1.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/Geology_6_2.png" /> <br />' });
var format_Kalady_7 = new ol.format.GeoJSON();
var features_Kalady_7 = format_Kalady_7.readFeatures(json_Kalady_7,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Kalady_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kalady_7.addFeatures(features_Kalady_7);
var lyr_Kalady_7 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Kalady_7,
    style: style_Kalady_7,
    popuplayertitle: 'Kalady',
    interactive: false,
    title: '<img src="styles/legend/Kalady_7.png" /> Kalady'
});
var jsonSource_Buildings_8 = new ol.source.Vector({
    attributions: ' ',
});
var buildingsLoaded = false;
var buildingsLoading = false;

function loadBuildingsLayerAsync(callback) {
    if (buildingsLoaded || buildingsLoading) return;
    buildingsLoading = true;
    window.dispatchEvent(new CustomEvent('gis-layer-loading', { detail: { layer: 'Buildings', status: 'loading' } }));

    var script = document.createElement('script');
    script.src = 'layers/Buildings_8.js';
    script.onload = function () {
        if (typeof json_Buildings_8 !== 'undefined') {
            var format_Buildings_8 = new ol.format.GeoJSON();
            var features_Buildings_8 = format_Buildings_8.readFeatures(json_Buildings_8, {
                dataProjection: 'EPSG:4326',
                featureProjection: 'EPSG:3857'
            });
            jsonSource_Buildings_8.addFeatures(features_Buildings_8);
            buildingsLoaded = true;
            buildingsLoading = false;
            window.dispatchEvent(new CustomEvent('gis-layer-loading', { detail: { layer: 'Buildings', status: 'loaded', count: features_Buildings_8.length } }));
            if (callback) callback();
        }
    };
    script.onerror = function () {
        buildingsLoading = false;
        window.dispatchEvent(new CustomEvent('gis-layer-loading', { detail: { layer: 'Buildings', status: 'error' } }));
    };
    document.head.appendChild(script);
}

if (typeof json_Buildings_8 !== 'undefined') {
    var format_Buildings_8 = new ol.format.GeoJSON();
    var features_Buildings_8 = format_Buildings_8.readFeatures(json_Buildings_8, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
    });
    jsonSource_Buildings_8.addFeatures(features_Buildings_8);
    buildingsLoaded = true;
}

var lyr_Buildings_8 = new ol.layer.Vector({
declutter: false,
    source: jsonSource_Buildings_8,
        style: style_Buildings_8,
            maxResolution: 2.5, // Level of Detail (LOD): renders only at street/neighborhood zoom
                popuplayertitle: 'Buildings',
                    interactive: false,
                        title: '<img src="styles/legend/Buildings_8.png" /> Buildings'
});

lyr_Buildings_8.on('change:visible', function () {
    if (lyr_Buildings_8.getVisible() && !buildingsLoaded) {
        loadBuildingsLayerAsync();
    }
});
var format_Contours_9 = new ol.format.GeoJSON();
var features_Contours_9 = format_Contours_9.readFeatures(json_Contours_9,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Contours_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_9.addFeatures(features_Contours_9);
var lyr_Contours_9 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Contours_9,
    style: style_Contours_9,
    popuplayertitle: 'Contours',
    interactive: false,
    title: '<img src="styles/legend/Contours_9.png" /> Contours'
});
var format_Roads_10 = new ol.format.GeoJSON();
var features_Roads_10 = format_Roads_10.readFeatures(json_Roads_10,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Roads_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_10.addFeatures(features_Roads_10);
var lyr_Roads_10 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Roads_10,
    style: style_Roads_10,
    popuplayertitle: 'Roads',
    interactive: false,
    title: '<img src="styles/legend/Roads_10.png" /> Roads'
});
var format_Streams_11 = new ol.format.GeoJSON();
var features_Streams_11 = format_Streams_11.readFeatures(json_Streams_11,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Streams_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_11.addFeatures(features_Streams_11);
var lyr_Streams_11 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Streams_11,
    style: style_Streams_11,
    popuplayertitle: 'Streams',
    interactive: false,
    title: '<img src="styles/legend/Streams_11.png" /> Streams'
});
var format_WardKalady_12 = new ol.format.GeoJSON();
var features_WardKalady_12 = format_WardKalady_12.readFeatures(json_WardKalady_12,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_WardKalady_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WardKalady_12.addFeatures(features_WardKalady_12);
var lyr_WardKalady_12 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_WardKalady_12,
    style: style_WardKalady_12,
    popuplayertitle: 'Ward Kalady',
    interactive: false,
    title: 'Ward Kalady<br />\
    <img src="styles/legend/WardKalady_12_0.png" /> KAIPPATTOOR<br />\
    <img src="styles/legend/WardKalady_12_1.png" /> KAIPPATTOOR SOUTH<br />\
    <img src="styles/legend/WardKalady_12_2.png" /> KALADY TOWN<br />\
    <img src="styles/legend/WardKalady_12_3.png" /> MANICKAMANGALAM<br />\
    <img src="styles/legend/WardKalady_12_4.png" /> MAROTTICHODU<br />\
    <img src="styles/legend/WardKalady_12_5.png" /> MATTOOR NORTH<br />\
    <img src="styles/legend/WardKalady_12_6.png" /> MATTOOR SOUTH<br />\
    <img src="styles/legend/WardKalady_12_7.png" /> MATTOOR WEST<br />\
    <img src="styles/legend/WardKalady_12_8.png" /> MEKKALADY<br />\
    <img src="styles/legend/WardKalady_12_9.png" /> NETTINAMPILLY<br />\
    <img src="styles/legend/WardKalady_12_10.png" /> PANAYALI<br />\
    <img src="styles/legend/WardKalady_12_11.png" /> PIRAROOR<br />\
    <img src="styles/legend/WardKalady_12_12.png" /> POTHIYAKKARA<br />\
    <img src="styles/legend/WardKalady_12_13.png" /> PULIYELIPPADY<br />\
    <img src="styles/legend/WardKalady_12_14.png" /> THALASSERY<br />\
    <img src="styles/legend/WardKalady_12_15.png" /> THEVARMADOM<br />\
    <img src="styles/legend/WardKalady_12_16.png" /> THOTTAKAM<br />\
    <img src="styles/legend/WardKalady_12_17.png" /> VATTAPPARAMBU<br />\
    <img src="styles/legend/WardKalady_12_18.png" /> YORDHANAPURAM<br />\
    <img src="styles/legend/WardKalady_12_19.png" /> <br />' });

// Network-optimized default visibility:
// Active core layers for fast initial render:
lyr_OSMStandard_0.setVisible(true);
lyr_GoogleSatellite_1.setVisible(false);
lyr_DEM_2.setVisible(false);
lyr_Pseudocolour_3.setVisible(false);
lyr_Hillshade_4.setVisible(false);
lyr_Geomorphology_5.setVisible(false);
lyr_Geology_6.setVisible(false);
lyr_Kalady_7.setVisible(true);
lyr_Buildings_8.setVisible(false);
lyr_Contours_9.setVisible(false);
lyr_Roads_10.setVisible(true);
lyr_Streams_11.setVisible(true);
lyr_WardKalady_12.setVisible(true);
var layersList = [lyr_OSMStandard_0, lyr_GoogleSatellite_1, lyr_DEM_2, lyr_Pseudocolour_3, lyr_Hillshade_4, lyr_Geomorphology_5, lyr_Geology_6, lyr_Kalady_7, lyr_Buildings_8, lyr_Contours_9, lyr_Roads_10, lyr_Streams_11, lyr_WardKalady_12];
lyr_Geomorphology_5.set('fieldAliases', { 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Geology_6.set('fieldAliases', { 'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_Kalady_7.set('fieldAliases', { 'id': 'id', });
lyr_Buildings_8.set('fieldAliases', { 'source': 'source', 'height': 'height', });
lyr_Contours_9.set('fieldAliases', { 'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Roads_10.set('fieldAliases', { 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Streams_11.set('fieldAliases', { 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_WardKalady_12.set('fieldAliases', { 'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_Geomorphology_5.set('fieldImages', { 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Geology_6.set('fieldImages', { 'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Kalady_7.set('fieldImages', { 'id': 'TextEdit', });
lyr_Buildings_8.set('fieldImages', { 'source': '', 'height': '', });
lyr_Contours_9.set('fieldImages', { 'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_Roads_10.set('fieldImages', { 'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Streams_11.set('fieldImages', { 'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_WardKalady_12.set('fieldImages', { 'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_Geomorphology_5.set('fieldLabels', { 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Geology_6.set('fieldLabels', { 'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_Kalady_7.set('fieldLabels', { 'id': 'no label', });
lyr_Buildings_8.set('fieldLabels', { 'source': 'no label', 'height': 'no label', });
lyr_Contours_9.set('fieldLabels', { 'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Roads_10.set('fieldLabels', { 'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Streams_11.set('fieldLabels', { 'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_WardKalady_12.set('fieldLabels', { 'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_WardKalady_12.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});