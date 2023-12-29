ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:23835").setExtent([285319.334421, 641060.759158, 291469.785056, 644267.155224]);
var wms_layers = [];


var lyr_GoogleMapHybrid_0 = new ol.layer.Tile({
    'title': 'Google Sattelite',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

var lyr_OpenStreetMap_0 = new ol.layer.Tile({
    'title': 'Open Street Map',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

var format_Persil_Tanah_1 = new ol.format.GeoJSON();
var features_Persil_Tanah_1 = format_Persil_Tanah_1.readFeatures(json_Persil_Tanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23835'});
var jsonSource_Persil_Tanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Persil_Tanah_1.addFeatures(features_Persil_Tanah_1);

// layer_Dusun
var lyr_Persil_Tanah_1 = new ol.layer.Vector({
    declutter: true,
    source:jsonSource_Persil_Tanah_1, 
    style: style_Persil_Tanah_1,
    interactive: true,
    title: 'Dusun<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_0_dusun.png" /> Barak I<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_1_dusun.png" /> Barak II<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_2_dusun.png" /> Cibuk Kidul<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_3_dusun.png" /> Cibuk Lor I<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_4_dusun.png" /> Cibuk Lor II<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_5_dusun.png" /> Klaci I<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_6_dusun.png" /> Klaci II<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_7_dusun.png" /> Klaci III<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_8_dusun.png" /> Klangkapan I<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_9_dusun.png" /> Klangkapan II<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_10_dusun.png" /> Klinyo<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_11_dusun.png" /> Mandungan I<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_12_dusun.png" /> Mandungan II<br />\
    <img src="styles/legend/dusun/Persil_Tanah_1_13_dusun.png" /> Ngentak<br />\
    '
});
// Layer PTN
var lyr_Persil_Tanah_ptn = new ol.layer.Vector({
    declutter: true,
    source:jsonSource_Persil_Tanah_1, 
    style: style_Persil_Tanah_ptn,
    interactive: true,
    title: 'Penggunaan Tanah<br />\
    <img src="styles/legend/ptn/Persil_Tanah_1_0_ptn.png" /> Industri/Perbengkelan/Gudang/Instalasi<br />\
    <img src="styles/legend/ptn/Persil_Tanah_1_1_ptn.png" /> Jasa<br />\
    <img src="styles/legend/ptn/Persil_Tanah_1_2_ptn.png" /> Perairan Darat<br />\
    <img src="styles/legend/ptn/Persil_Tanah_1_3_ptn.png" /> Perkampungan<br />\
    <img src="styles/legend/ptn/Persil_Tanah_1_4_ptn.png" /> Pertambangan<br />\
    <img src="styles/legend/ptn/Persil_Tanah_1_5_ptn.png" /> Pertanian/Perkebunan<br />\
    <img src="styles/legend/ptn/Persil_Tanah_1_6_ptn.png" /> Peternakan<br />\
    <img src="styles/legend/ptn/Persil_Tanah_1_7_ptn.png" /> Tanah Terbuka/Jalan/Padang<br />\
    '
});
// Layer PFN
var lyr_Persil_Tanah_pfn = new ol.layer.Vector({
    declutter: true,
    source:jsonSource_Persil_Tanah_1, 
    style: style_Persil_Tanah_pfn,
    interactive: true,
    title: 'Pemanfaatan Tanah<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_0_pfn.png" /> Industri<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_1_pfn.png" /> Jasa<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_2_pfn.png" /> Peternakan<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_3_pfn.png" /> Produksi Pertanian<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_4_pfn.png" /> Sosial<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_5_pfn.png" /> Tempat Tinggal<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_6_pfn.png" /> Tempat Tinggal dan Usaha<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_7_pfn.png" /> Tidak Ada Pemanfaatan<br />'
});
// Layer PFN_kas Desa
var lyr_Persil_Tanah_pfnKasDesa = new ol.layer.Vector({
    declutter: true,
    source:jsonSource_Persil_Tanah_1, 
    style: style_Persil_Tanah_pfnKasDesa,
    interactive: true,
    title: 'Pemanfaatan Tanah<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_0_pfn.png" /> Industri<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_1_pfn.png" /> Jasa<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_2_pfn.png" /> Peternakan<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_3_pfn.png" /> Produksi Pertanian<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_4_pfn.png" /> Sosial<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_5_pfn.png" /> Tempat Tinggal<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_6_pfn.png" /> Tempat Tinggal dan Usaha<br />\
    <img src="styles/legend/pfn/Persil_Tanah_1_7_pfn.png" /> Tidak Ada Pemanfaatan<br />'
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

lyr_GoogleMapHybrid_0.setVisible(true);
lyr_OpenStreetMap_0.setVisible(true);
lyr_Persil_Tanah_1.setVisible(true);
lyr_Persil_Tanah_ptn.setVisible(true);
lyr_Persil_Tanah_pfn.setVisible(true);
lyr_Persil_Tanah_pfnKasDesa.setVisible(true);
lyr_Area_Dusun_2.setVisible(true);
lyr_Garis_Batas_Administrasi_3.setVisible(true);

var layersList = [
    lyr_GoogleMapHybrid_0,
    lyr_OpenStreetMap_0,
    lyr_Persil_Tanah_1,
    lyr_Area_Dusun_2,
    lyr_Garis_Batas_Administrasi_3
];

lyr_Persil_Tanah_1.set('fieldAliases', {'ptn': 'ptn', 'pfn': 'pfn', 'rt': 'rt', 'rw': 'rw', 'dusun': 'dusun', 'pm': 'pm', });
lyr_Persil_Tanah_ptn.set('fieldAliases', {'ptn': 'ptn', 'pfn': 'pfn', 'rt': 'rt', 'rw': 'rw', 'dusun': 'dusun', 'pm': 'pm', });
lyr_Persil_Tanah_pfn.set('fieldAliases', {'ptn': 'ptn', 'pfn': 'pfn', 'rt': 'rt', 'rw': 'rw', 'dusun': 'dusun', 'pm': 'pm', });
lyr_Persil_Tanah_pfnKasDesa.set('fieldAliases', {'ptn': 'ptn', 'pfn': 'pfn', 'rt': 'rt', 'rw': 'rw', 'dusun': 'dusun', 'pm': 'pm', });
lyr_Area_Dusun_2.set('fieldAliases', {'fid': 'fid', 'dusun': 'dusun', 'rt': 'rt', 'rw': 'rw', 'blok': 'blok', 'kalurahan': 'kalurahan', });
lyr_Garis_Batas_Administrasi_3.set('fieldAliases', {'fid': 'fid', 'dusun': 'dusun', 'tipe_batas': 'tipe_batas', });

lyr_Persil_Tanah_1.set('fieldImages', {'ptn': '', 'pfn': '', 'rt': '', 'rw': '', 'dusun': '', 'pm': '', });
lyr_Persil_Tanah_ptn.set('fieldImages', {'ptn': '', 'pfn': '', 'rt': '', 'rw': '', 'dusun': '', 'pm': '', });
lyr_Persil_Tanah_pfn.set('fieldImages', {'ptn': '', 'pfn': '', 'rt': '', 'rw': '', 'dusun': '', 'pm': '', });
lyr_Persil_Tanah_pfnKasDesa.set('fieldImages', {'ptn': '', 'pfn': '', 'rt': '', 'rw': '', 'dusun': '', 'pm': '', });
lyr_Area_Dusun_2.set('fieldImages', {'fid': 'TextEdit', 'dusun': 'TextEdit', 'rt': 'TextEdit', 'rw': 'TextEdit', 'blok': 'TextEdit', 'kalurahan': 'TextEdit', });
lyr_Garis_Batas_Administrasi_3.set('fieldImages', {'fid': '', 'dusun': '', 'tipe_batas': '', });

lyr_Persil_Tanah_1.set('fieldLabels', {'ptn': 'inline label', 'pfn': 'inline label', 'rt': 'inline label', 'rw': 'inline label', 'dusun': 'inline label', 'pm': 'inline label', });
lyr_Persil_Tanah_ptn.set('fieldLabels', {'ptn': 'inline label', 'pfn': 'inline label', 'rt': 'inline label', 'rw': 'inline label', 'dusun': 'inline label', 'pm': 'inline label', });
lyr_Persil_Tanah_pfn.set('fieldLabels', {'ptn': 'inline label', 'pfn': 'inline label', 'rt': 'inline label', 'rw': 'inline label', 'dusun': 'inline label', 'pm': 'inline label', });
lyr_Persil_Tanah_pfnKasDesa.set('fieldLabels', {'ptn': 'inline label', 'pfn': 'inline label', 'rt': 'inline label', 'rw': 'inline label', 'dusun': 'inline label', 'pm': 'inline label', });
lyr_Area_Dusun_2.set('fieldLabels', {'fid': 'no label', 'dusun': 'no label', 'rt': 'no label', 'rw': 'no label', 'blok': 'no label', 'kalurahan': 'no label', });
lyr_Garis_Batas_Administrasi_3.set('fieldLabels', {'fid': 'no label', 'dusun': 'no label', 'tipe_batas': 'no label', });

lyr_Garis_Batas_Administrasi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});