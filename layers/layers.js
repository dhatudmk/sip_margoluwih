ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:23835").setExtent([285319.334421, 641060.759158, 291469.785056, 644267.155224]);
var wms_layers = [];


        var lyr_GoogleMapHybrid_0 = new ol.layer.Tile({
            'title': 'Google Map Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Persil_Tanah_1 = new ol.format.GeoJSON();
var features_Persil_Tanah_1 = format_Persil_Tanah_1.readFeatures(json_Persil_Tanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23835'});
var jsonSource_Persil_Tanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Persil_Tanah_1.addFeatures(features_Persil_Tanah_1);
var lyr_Persil_Tanah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Persil_Tanah_1, 
                style: style_Persil_Tanah_1,
                interactive: true,
    title: 'Persil_Tanah<br />\
    <img src="styles/legend/Persil_Tanah_1_0.png" /> Barak I<br />\
    <img src="styles/legend/Persil_Tanah_1_1.png" /> Barak II<br />\
    <img src="styles/legend/Persil_Tanah_1_2.png" /> Cibuk Kidul<br />\
    <img src="styles/legend/Persil_Tanah_1_3.png" /> Cibuk Lor I<br />\
    <img src="styles/legend/Persil_Tanah_1_4.png" /> Cibuk Lor II<br />\
    <img src="styles/legend/Persil_Tanah_1_5.png" /> Klaci I<br />\
    <img src="styles/legend/Persil_Tanah_1_6.png" /> Klaci II<br />\
    <img src="styles/legend/Persil_Tanah_1_7.png" /> Klaci III<br />\
    <img src="styles/legend/Persil_Tanah_1_8.png" /> Klangkapan I<br />\
    <img src="styles/legend/Persil_Tanah_1_9.png" /> Klangkapan II<br />\
    <img src="styles/legend/Persil_Tanah_1_10.png" /> Klinyo<br />\
    <img src="styles/legend/Persil_Tanah_1_11.png" /> Mandungan I<br />\
    <img src="styles/legend/Persil_Tanah_1_12.png" /> Mandungan II<br />\
    <img src="styles/legend/Persil_Tanah_1_13.png" /> Ngentak<br />\
    <img src="styles/legend/Persil_Tanah_1_14.png" /> <br />'
        });
var format_Area_Dusun_2 = new ol.format.GeoJSON();
var features_Area_Dusun_2 = format_Area_Dusun_2.readFeatures(json_Area_Dusun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23835'});
var jsonSource_Area_Dusun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Dusun_2.addFeatures(features_Area_Dusun_2);
var lyr_Area_Dusun_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_Dusun_2, 
                style: style_Area_Dusun_2,
                interactive: true,
                title: 'Area_Dusun'
            });
var format_Garis_Batas_Administrasi_3 = new ol.format.GeoJSON();
var features_Garis_Batas_Administrasi_3 = format_Garis_Batas_Administrasi_3.readFeatures(json_Garis_Batas_Administrasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23835'});
var jsonSource_Garis_Batas_Administrasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Garis_Batas_Administrasi_3.addFeatures(features_Garis_Batas_Administrasi_3);
var lyr_Garis_Batas_Administrasi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Garis_Batas_Administrasi_3, 
                style: style_Garis_Batas_Administrasi_3,
                interactive: true,
                title: 'Garis_Batas_Administrasi'
            });

lyr_GoogleMapHybrid_0.setVisible(true);lyr_Persil_Tanah_1.setVisible(true);lyr_Area_Dusun_2.setVisible(true);lyr_Garis_Batas_Administrasi_3.setVisible(true);
var layersList = [lyr_GoogleMapHybrid_0,lyr_Persil_Tanah_1,lyr_Area_Dusun_2,lyr_Garis_Batas_Administrasi_3];
lyr_Persil_Tanah_1.set('fieldAliases', {'ptn': 'ptn', 'pfn': 'pfn', 'rt': 'rt', 'rw': 'rw', 'dusun': 'dusun', 'pm': 'pm', });
lyr_Area_Dusun_2.set('fieldAliases', {'fid': 'fid', 'dusun': 'dusun', 'rt': 'rt', 'rw': 'rw', 'blok': 'blok', 'kalurahan': 'kalurahan', });
lyr_Garis_Batas_Administrasi_3.set('fieldAliases', {'fid': 'fid', 'dusun': 'dusun', 'tipe_batas': 'tipe_batas', });
lyr_Persil_Tanah_1.set('fieldImages', {'ptn': '', 'pfn': '', 'rt': '', 'rw': '', 'dusun': '', 'pm': '', });
lyr_Area_Dusun_2.set('fieldImages', {'fid': 'TextEdit', 'dusun': 'TextEdit', 'rt': 'TextEdit', 'rw': 'TextEdit', 'blok': 'TextEdit', 'kalurahan': 'TextEdit', });
lyr_Garis_Batas_Administrasi_3.set('fieldImages', {'fid': '', 'dusun': '', 'tipe_batas': '', });
lyr_Persil_Tanah_1.set('fieldLabels', {'ptn': 'inline label', 'pfn': 'inline label', 'rt': 'inline label', 'rw': 'inline label', 'dusun': 'inline label', 'pm': 'inline label', });
lyr_Area_Dusun_2.set('fieldLabels', {'fid': 'no label', 'dusun': 'no label', 'rt': 'no label', 'rw': 'no label', 'blok': 'no label', 'kalurahan': 'no label', });
lyr_Garis_Batas_Administrasi_3.set('fieldLabels', {'fid': 'no label', 'dusun': 'no label', 'tipe_batas': 'no label', });
lyr_Garis_Batas_Administrasi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});