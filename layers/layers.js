var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ORTO_UGKK_freemap_1 = new ol.layer.Tile({
            'title': 'ORTO_UGKK_freemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ofmozaika.tiles.freemap.sk/{z}/{x}/{y}.jpg'
            })
        });

        var lyr_Positron_2 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_kraj_3 = new ol.format.GeoJSON();
var features_kraj_3 = format_kraj_3.readFeatures(json_kraj_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kraj_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kraj_3.addFeatures(features_kraj_3);
var lyr_kraj_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kraj_3, 
                style: style_kraj_3,
                popuplayertitle: 'kraj',
                interactive: true,
                title: '<img src="styles/legend/kraj_3.png" /> kraj'
            });
var format_okres_4 = new ol.format.GeoJSON();
var features_okres_4 = format_okres_4.readFeatures(json_okres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_okres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_okres_4.addFeatures(features_okres_4);
var lyr_okres_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_okres_4, 
                style: style_okres_4,
                popuplayertitle: 'okres',
                interactive: true,
                title: '<img src="styles/legend/okres_4.png" /> okres'
            });
var format_2022_5 = new ol.format.GeoJSON();
var features_2022_5 = format_2022_5.readFeatures(json_2022_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022_5.addFeatures(features_2022_5);
var lyr_2022_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022_5, 
                style: style_2022_5,
                popuplayertitle: '2022',
                interactive: true,
    title: '2022<br />\
    <img src="styles/legend/2022_5_0.png" /> mimo obce<br />\
    <img src="styles/legend/2022_5_1.png" /> v obci<br />\
    <img src="styles/legend/2022_5_2.png" /> <br />' });
var format_2020_6 = new ol.format.GeoJSON();
var features_2020_6 = format_2020_6.readFeatures(json_2020_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_6.addFeatures(features_2020_6);
var lyr_2020_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_6, 
                style: style_2020_6,
                popuplayertitle: '2020',
                interactive: true,
    title: '2020<br />\
    <img src="styles/legend/2020_6_0.png" /> mimo obce<br />\
    <img src="styles/legend/2020_6_1.png" /> v obci<br />' });
var format_2021_7 = new ol.format.GeoJSON();
var features_2021_7 = format_2021_7.readFeatures(json_2021_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_7.addFeatures(features_2021_7);
var lyr_2021_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021_7, 
                style: style_2021_7,
                popuplayertitle: '2021',
                interactive: true,
    title: '2021<br />\
    <img src="styles/legend/2021_7_0.png" /> mimo obce<br />\
    <img src="styles/legend/2021_7_1.png" /> v obci<br />\
    <img src="styles/legend/2021_7_2.png" /> <br />' });
var group_NEHODY = new ol.layer.Group({
                                layers: [lyr_2022_5,lyr_2020_6,lyr_2021_7,],
                                fold: 'open',
                                title: 'NEHODY'});
var group_HRANICE = new ol.layer.Group({
                                layers: [lyr_kraj_3,lyr_okres_4,],
                                fold: 'open',
                                title: 'HRANICE'});
var group_PODKLAD = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_ORTO_UGKK_freemap_1,lyr_Positron_2,],
                                fold: 'open',
                                title: 'PODKLAD'});

lyr_OpenStreetMap_0.setVisible(false);lyr_ORTO_UGKK_freemap_1.setVisible(false);lyr_Positron_2.setVisible(true);lyr_kraj_3.setVisible(true);lyr_okres_4.setVisible(true);lyr_2022_5.setVisible(true);lyr_2020_6.setVisible(true);lyr_2021_7.setVisible(true);
var layersList = [group_PODKLAD,group_HRANICE,group_NEHODY];
lyr_kraj_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DOW': 'DOW', 'AUT': 'AUT', 'ACH': 'ACH', 'SOI': 'SOI', 'FACC': 'FACC', 'IDN2': 'IDN2', 'NM2': 'NM2', 'VYMERA': 'VYMERA', 'NUTS1': 'NUTS1', 'NUTS1_CODE': 'NUTS1_CODE', 'NUTS2': 'NUTS2', 'NUTS2_CODE': 'NUTS2_CODE', 'NUTS3': 'NUTS3', 'NUTS3_CODE': 'NUTS3_CODE', });
lyr_okres_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DOW': 'DOW', 'AUT': 'AUT', 'ACH': 'ACH', 'SOI': 'SOI', 'FACC': 'FACC', 'IDN3': 'IDN3', 'NM3': 'NM3', 'IDN2': 'IDN2', 'NM2': 'NM2', 'VYMERA': 'VYMERA', 'NUTS1': 'NUTS1', 'NUTS1_CODE': 'NUTS1_CODE', 'NUTS2': 'NUTS2', 'NUTS2_CODE': 'NUTS2_CODE', 'NUTS3': 'NUTS3', 'NUTS3_CODE': 'NUTS3_CODE', 'LAU1': 'LAU1', 'LAU1_CODE': 'LAU1_CODE', });
lyr_2022_5.set('fieldAliases', {'Dátum': 'Dátum', 'Kód.dopravnej.nehody': 'Kód.dopravnej.nehody', 'Rok': 'Rok', 'Čas': 'Čas', 'Okres': 'Okres', 'Číslo.cesty': 'Číslo.cesty', 'Lokalita.dopravnej.nehody': 'Lokalita.dopravnej.nehody', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'Kilometrovníkové.staničenie.dopravnej.nehody', 'Smerové.pomery': 'Smerové.pomery', 'Druh.nehody': 'Druh.nehody', 'Zrážka.vozidiel': 'Zrážka.vozidiel', 'Zavinenie.nehody': 'Zavinenie.nehody', 'Prítomnosť.alkoholu': 'Prítomnosť.alkoholu', 'Počet.zúčastnených.vozidiel': 'Počet.zúčastnených.vozidiel', 'Hlavná.príčina.nehody': 'Hlavná.príčina.nehody', 'Usmrtení': 'Usmrtení', 'Ťažko.zranení': 'Ťažko.zranení', 'Ľahko.zranení': 'Ľahko.zranení', 'Celková.hmotná.škoda': 'Celková.hmotná.škoda', 'Zemepisná.dĺžka': 'Zemepisná.dĺžka', 'Zemepisná.šírka': 'Zemepisná.šírka', });
lyr_2020_6.set('fieldAliases', {'Dátum': 'Dátum', 'Kód.dopravnej.nehody': 'Kód.dopravnej.nehody', 'Rok': 'Rok', 'Čas': 'Čas', 'Okres': 'Okres', 'Číslo.cesty': 'Číslo.cesty', 'Lokalita.dopravnej.nehody': 'Lokalita.dopravnej.nehody', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'Kilometrovníkové.staničenie.dopravnej.nehody', 'Smerové.pomery': 'Smerové.pomery', 'Druh.nehody': 'Druh.nehody', 'Zrážka.vozidiel': 'Zrážka.vozidiel', 'Zavinenie.nehody': 'Zavinenie.nehody', 'Prítomnosť.alkoholu': 'Prítomnosť.alkoholu', 'Počet.zúčastnených.vozidiel': 'Počet.zúčastnených.vozidiel', 'Hlavná.príčina.nehody': 'Hlavná.príčina.nehody', 'Usmrtení': 'Usmrtení', 'Ťažko.zranení': 'Ťažko.zranení', 'Ľahko.zranení': 'Ľahko.zranení', 'Celková.hmotná.škoda': 'Celková.hmotná.škoda', 'Zemepisná.dĺžka': 'Zemepisná.dĺžka', 'Zemepisná.šírka': 'Zemepisná.šírka', });
lyr_2021_7.set('fieldAliases', {'Dátum': 'Dátum', 'Kód.dopravnej.nehody': 'Kód.dopravnej.nehody', 'Rok': 'Rok', 'Čas': 'Čas', 'Okres': 'Okres', 'Číslo.cesty': 'Číslo.cesty', 'Lokalita.dopravnej.nehody': 'Lokalita.dopravnej.nehody', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'Kilometrovníkové.staničenie.dopravnej.nehody', 'Smerové.pomery': 'Smerové.pomery', 'Druh.nehody': 'Druh.nehody', 'Zrážka.vozidiel': 'Zrážka.vozidiel', 'Zavinenie.nehody': 'Zavinenie.nehody', 'Prítomnosť.alkoholu': 'Prítomnosť.alkoholu', 'Počet.zúčastnených.vozidiel': 'Počet.zúčastnených.vozidiel', 'Hlavná.príčina.nehody': 'Hlavná.príčina.nehody', 'Usmrtení': 'Usmrtení', 'Ťažko.zranení': 'Ťažko.zranení', 'Ľahko.zranení': 'Ľahko.zranení', 'Celková.hmotná.škoda': 'Celková.hmotná.škoda', 'Zemepisná.dĺžka': 'Zemepisná.dĺžka', 'Zemepisná.šírka': 'Zemepisná.šírka', });
lyr_kraj_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'DOW': 'DateTime', 'AUT': 'TextEdit', 'ACH': 'TextEdit', 'SOI': 'TextEdit', 'FACC': 'TextEdit', 'IDN2': 'Range', 'NM2': 'TextEdit', 'VYMERA': 'TextEdit', 'NUTS1': 'TextEdit', 'NUTS1_CODE': 'TextEdit', 'NUTS2': 'TextEdit', 'NUTS2_CODE': 'TextEdit', 'NUTS3': 'TextEdit', 'NUTS3_CODE': 'TextEdit', });
lyr_okres_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'DOW': 'DateTime', 'AUT': 'TextEdit', 'ACH': 'TextEdit', 'SOI': 'TextEdit', 'FACC': 'TextEdit', 'IDN3': 'Range', 'NM3': 'TextEdit', 'IDN2': 'Range', 'NM2': 'TextEdit', 'VYMERA': 'TextEdit', 'NUTS1': 'TextEdit', 'NUTS1_CODE': 'TextEdit', 'NUTS2': 'TextEdit', 'NUTS2_CODE': 'TextEdit', 'NUTS3': 'TextEdit', 'NUTS3_CODE': 'TextEdit', 'LAU1': 'TextEdit', 'LAU1_CODE': 'TextEdit', });
lyr_2022_5.set('fieldImages', {'Dátum': 'TextEdit', 'Kód.dopravnej.nehody': 'TextEdit', 'Rok': 'Range', 'Čas': 'DateTime', 'Okres': 'TextEdit', 'Číslo.cesty': 'TextEdit', 'Lokalita.dopravnej.nehody': 'TextEdit', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'TextEdit', 'Smerové.pomery': 'TextEdit', 'Druh.nehody': 'TextEdit', 'Zrážka.vozidiel': 'TextEdit', 'Zavinenie.nehody': 'TextEdit', 'Prítomnosť.alkoholu': 'TextEdit', 'Počet.zúčastnených.vozidiel': 'Range', 'Hlavná.príčina.nehody': 'TextEdit', 'Usmrtení': 'TextEdit', 'Ťažko.zranení': 'TextEdit', 'Ľahko.zranení': 'TextEdit', 'Celková.hmotná.škoda': 'TextEdit', 'Zemepisná.dĺžka': 'TextEdit', 'Zemepisná.šírka': 'TextEdit', });
lyr_2020_6.set('fieldImages', {'Dátum': 'TextEdit', 'Kód.dopravnej.nehody': 'TextEdit', 'Rok': 'Range', 'Čas': 'DateTime', 'Okres': 'TextEdit', 'Číslo.cesty': 'TextEdit', 'Lokalita.dopravnej.nehody': 'TextEdit', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'TextEdit', 'Smerové.pomery': 'TextEdit', 'Druh.nehody': 'TextEdit', 'Zrážka.vozidiel': 'TextEdit', 'Zavinenie.nehody': 'TextEdit', 'Prítomnosť.alkoholu': 'TextEdit', 'Počet.zúčastnených.vozidiel': 'Range', 'Hlavná.príčina.nehody': 'TextEdit', 'Usmrtení': 'TextEdit', 'Ťažko.zranení': 'TextEdit', 'Ľahko.zranení': 'TextEdit', 'Celková.hmotná.škoda': 'TextEdit', 'Zemepisná.dĺžka': 'TextEdit', 'Zemepisná.šírka': 'TextEdit', });
lyr_2021_7.set('fieldImages', {'Dátum': 'TextEdit', 'Kód.dopravnej.nehody': 'TextEdit', 'Rok': 'Range', 'Čas': 'DateTime', 'Okres': 'TextEdit', 'Číslo.cesty': 'TextEdit', 'Lokalita.dopravnej.nehody': 'TextEdit', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'TextEdit', 'Smerové.pomery': 'TextEdit', 'Druh.nehody': 'TextEdit', 'Zrážka.vozidiel': 'TextEdit', 'Zavinenie.nehody': 'TextEdit', 'Prítomnosť.alkoholu': 'TextEdit', 'Počet.zúčastnených.vozidiel': 'Range', 'Hlavná.príčina.nehody': 'TextEdit', 'Usmrtení': 'TextEdit', 'Ťažko.zranení': 'TextEdit', 'Ľahko.zranení': 'TextEdit', 'Celková.hmotná.škoda': 'TextEdit', 'Zemepisná.dĺžka': 'TextEdit', 'Zemepisná.šírka': 'TextEdit', });
lyr_kraj_3.set('fieldLabels', {'OBJECTID': 'no label', 'DOW': 'no label', 'AUT': 'no label', 'ACH': 'no label', 'SOI': 'no label', 'FACC': 'no label', 'IDN2': 'no label', 'NM2': 'no label', 'VYMERA': 'no label', 'NUTS1': 'no label', 'NUTS1_CODE': 'no label', 'NUTS2': 'no label', 'NUTS2_CODE': 'no label', 'NUTS3': 'no label', 'NUTS3_CODE': 'no label', });
lyr_okres_4.set('fieldLabels', {'OBJECTID': 'no label', 'DOW': 'no label', 'AUT': 'no label', 'ACH': 'no label', 'SOI': 'no label', 'FACC': 'no label', 'IDN3': 'no label', 'NM3': 'no label', 'IDN2': 'no label', 'NM2': 'no label', 'VYMERA': 'no label', 'NUTS1': 'no label', 'NUTS1_CODE': 'no label', 'NUTS2': 'no label', 'NUTS2_CODE': 'no label', 'NUTS3': 'no label', 'NUTS3_CODE': 'no label', 'LAU1': 'no label', 'LAU1_CODE': 'no label', });
lyr_2022_5.set('fieldLabels', {'Dátum': 'no label', 'Kód.dopravnej.nehody': 'no label', 'Rok': 'no label', 'Čas': 'no label', 'Okres': 'no label', 'Číslo.cesty': 'no label', 'Lokalita.dopravnej.nehody': 'no label', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'no label', 'Smerové.pomery': 'no label', 'Druh.nehody': 'no label', 'Zrážka.vozidiel': 'no label', 'Zavinenie.nehody': 'no label', 'Prítomnosť.alkoholu': 'no label', 'Počet.zúčastnených.vozidiel': 'no label', 'Hlavná.príčina.nehody': 'no label', 'Usmrtení': 'no label', 'Ťažko.zranení': 'no label', 'Ľahko.zranení': 'no label', 'Celková.hmotná.škoda': 'no label', 'Zemepisná.dĺžka': 'no label', 'Zemepisná.šírka': 'no label', });
lyr_2020_6.set('fieldLabels', {'Dátum': 'no label', 'Kód.dopravnej.nehody': 'no label', 'Rok': 'no label', 'Čas': 'no label', 'Okres': 'no label', 'Číslo.cesty': 'no label', 'Lokalita.dopravnej.nehody': 'no label', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'no label', 'Smerové.pomery': 'no label', 'Druh.nehody': 'no label', 'Zrážka.vozidiel': 'no label', 'Zavinenie.nehody': 'no label', 'Prítomnosť.alkoholu': 'no label', 'Počet.zúčastnených.vozidiel': 'no label', 'Hlavná.príčina.nehody': 'no label', 'Usmrtení': 'no label', 'Ťažko.zranení': 'no label', 'Ľahko.zranení': 'no label', 'Celková.hmotná.škoda': 'no label', 'Zemepisná.dĺžka': 'no label', 'Zemepisná.šírka': 'no label', });
lyr_2021_7.set('fieldLabels', {'Dátum': 'no label', 'Kód.dopravnej.nehody': 'no label', 'Rok': 'no label', 'Čas': 'no label', 'Okres': 'no label', 'Číslo.cesty': 'no label', 'Lokalita.dopravnej.nehody': 'no label', 'Kilometrovníkové.staničenie.dopravnej.nehody': 'no label', 'Smerové.pomery': 'no label', 'Druh.nehody': 'no label', 'Zrážka.vozidiel': 'no label', 'Zavinenie.nehody': 'no label', 'Prítomnosť.alkoholu': 'no label', 'Počet.zúčastnených.vozidiel': 'no label', 'Hlavná.príčina.nehody': 'no label', 'Usmrtení': 'no label', 'Ťažko.zranení': 'no label', 'Ľahko.zranení': 'no label', 'Celková.hmotná.škoda': 'no label', 'Zemepisná.dĺžka': 'no label', 'Zemepisná.šírka': 'no label', });
lyr_2021_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});