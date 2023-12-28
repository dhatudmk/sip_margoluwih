// image slide
const splide = new Splide('.splide', {
  wheel: 'true',
  gap: '10px'
});
splide.mount();

// Data Penggunaan
(async function() {
  const data = [
    { jenis: 'Pertanian/Perkebunan', count: 269.25 },
    { jenis: 'Perkampungan', count: 156.59 },
    { jenis: 'Jasa', count: 13.63 },
    { jenis: 'Pertambangan', count: 9.10 },
    { jenis: 'Industri/Perbengkelan', count: 4.76 },
    { jenis: 'Perairan Darat', count: 4.75 },
    { jenis: 'Peternakan', count: 1.48 },
    { jenis: 'Tanah Terbuka', count: 1.38 },
  ];

  new Chart(
    document.getElementById('penggunaan'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.jenis),
        datasets: [
          {
            label: 'Luas Penggunaan Tanah Tanah',
            data: data.map(row => row.count),
            backgroundColor: [
              'rgba(235, 71, 30, 0.2)', // Pertanian/Perkebunan
              'rgba(206, 184, 43, 0.2)', // Perkampungan
              'rgba(47, 73, 206, 0.2)', // Jasa
              'rgba(137, 200, 82, 0.2)', // Pertambangan
              'rgba(205, 60, 227, 0.2)', // Industri/Perbengkelan
              'rgba(77, 155, 239, 0.2)', // Perairan Darat
              'rgba(239, 144, 189, 0.2)', // Peternakan
              'rgba(41, 217, 76, 0.2)', // Tanah Terbuka
            ],
            borderColor: [
              'rgba(235, 71, 30)', // Pertanian/Perkebunan
              'rgba(206, 184, 43)', // Perkampungan
              'rgba(47, 73, 206)', // Jasa
              'rgba(137, 200, 82)', // Pertambangan
              'rgba(205, 60, 227)', // Industri/Perbengkelan
              'rgba(77, 155, 239)', // Perairan Darat
              'rgba(239, 144, 189)', // Peternakan
              'rgba(41, 217, 76)', // Tanah Terbuka
            ],
            borderWidth: 1,
            // barThickness: 40
          }
        ]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
              display: false,
          },
          title: {
            display: true,
            text: 'Luas Penggunaan Tanah'
          }
        }
      }
    }
  );
})();

// Data Pemanfaatan
(async function() {
  const data = [
    { jenis: 'Produksi Pertanian', count: 272.48},
    { jenis: 'Tempat Tinggal', count: 98.61},
    { jenis: 'Tidak Ada Pemanfaatan', count: 36.01 },
    { jenis: 'Tempat Tinggal dan Usaha', count: 16.46 },
    { jenis: 'Jasa', count: 12.75 },
    { jenis: 'Industri', count: 12.65 },
    { jenis: 'Sosial', count: 9.66 },
    { jenis: 'Peternakan', count: 2.32 },
  ];

  new Chart(
    document.getElementById('pemanfaatan'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.jenis),
        datasets: [
          {
            label: 'Luas Pemanfaatan Tanah',
            data: data.map(row => row.count),
            backgroundColor: [
              'rgba(153, 97, 214, 0.2)', // Produksi Pertanian
              'rgba(59, 240, 157, 0.2)', // Tempat Tinggal
              'rgba(47, 73, 206, 0.2)', // Tidak Ada Pemanfaatan
              'rgba(214, 150, 91, 0.2)', // Tempat Tinggal dan Usaha
              'rgba(184, 200, 90, 0.2)', // Jasa
              'rgba(213, 66, 93, 0.2)', // Industri
              'rgba(233, 16, 200, 0.2)', // Soisal
              'rgba(64, 183, 207, 0.2)', // Peternakan
            ],
            borderColor: [
              'rgb(153, 97, 214)', // Produksi Pertanian
              'rgb(59, 240, 157)', // Tempat Tinggal
              'rgb(47, 73, 206)', // Tidak Ada Pemanfaatan
              'rgb(214, 150, 91)', // Tempat Tinggal dan Usaha
              'rgb(184, 200, 90)', // Jasa
              'rgb(213, 66, 93)', // Industri
              'rgb(233, 16, 200)', // Soisal
              'rgb(64, 183, 207)', // Peternakan
            ],
            borderWidth: 1,
            // barThickness: 40
          }
        ]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
              display: false,
          },
          title: {
            display: true,
            text: 'Luas Pemanfaatan Tanah'
          }
        }
      }
    }
  );
})();

// Data Tanah Desa
(async function() {
    const data = [
      { jenis: 'Produksi Pertanian', count: 62.89 },
      { jenis: 'Sosial', count: 8.07 },
      { jenis: 'Peternakan', count: 4.10 },
      { jenis: 'Industri', count: 1.55 },
      { jenis: 'Jasa', count: 1.43 },
      { jenis: 'Tidak Ada Pemanfaatan', count: 0.29 }
    ];

    new Chart(
      document.getElementById('tanahDesa'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.jenis),
          datasets: [
            {
              label: 'Luas Pemanfaatan Tanah',
              data: data.map(row => row.count),
              backgroundColor: [
                'rgba(153, 97, 214, 0.2)',
                'rgba(233, 16, 200, 0.2)',
                'rgba(64, 183, 207, 0.2)',
                'rgba(213, 66, 93, 0.2)',
                'rgba(184, 200, 90, 0.2)',
                'rgba(47, 73, 206, 0.2)',
              ],
              borderColor: [
                'rgb(153, 97, 214)',
                'rgb(233, 16, 200)',
                'rgb(64, 183, 207)',
                'rgb(213, 66, 93)',
                'rgb(184, 200, 90)',
                'rgb(47, 73, 206)',
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          indexAxis: 'y',
          plugins: {
            legend: {
                display: false,
            },
            title: {
              display: true,
              text: 'Luas Pemanfaatan Tanah Desa'
            }
          }
        }
      }
    );
  })();

// Data Fasum Fasos
(async function() {
  const data = [
    { jenis: 'Kantor Lurah', count: 1 },
    { jenis: 'Fasilitas Ketertiban', count: 2 },
    { jenis: 'Fasilitas Pendidikan', count: 16 },
    { jenis: 'Fasilitas Kesehatan', count: 4 },
    { jenis: 'Pemakaman', count: 29 },
    { jenis: 'Fasilitas Peribadatan', count: 30 },
    { jenis: 'Pariwisata', count: 7 },
    { jenis: 'Lapangan Olahraga', count: 9 },
  ];

  new Chart(
    document.getElementById('fasumFasos'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.jenis),
        datasets: [
          {
            label: 'Jumlah Fasilitas Umum/Sosial',
            data: data.map(row => row.count),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(91, 235, 52, 0.2)'],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgba(91, 235, 52)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        plugins: {
          legend: {
              display: false,
          },
          title: {
            display: true,
            text: 'Jumlah Fasilitas Umum/Sosial'
          }
        }
      }
    }
  );
})();

// layers change
const judulPeta = $('#mapContainer p:first');
console.log(judulPeta);
const currentIndex = $('.carousel-item.active').index();
const myCarousel = document.getElementById('mycarousel')

myCarousel.addEventListener('slid.bs.carousel', function () {
  const indexActive = $('.carousel-item.active').index();
  // console.log('Ini bekerja');
  if (indexActive == 0){
    layersList[2]=lyr_Persil_Tanah_1;
    judulPeta.text('Peta Administrasi Dusun');
    map.getLayers().removeAt(2);
    map.getLayers().insertAt(2, lyr_Persil_Tanah_1);
  } if (indexActive == 1){
    layersList[2]=lyr_Persil_Tanah_ptn;
    judulPeta.text('Peta Penggunaan Tanah (ptn)');
    map.getLayers().removeAt(2);
    map.getLayers().insertAt(2, lyr_Persil_Tanah_ptn);
  } if (indexActive == 2){
    layersList[2]=lyr_Persil_Tanah_pfn;
    judulPeta.text('Peta Pemanfaatan Tanah (pfn)');
    map.getLayers().removeAt(2);
    map.getLayers().insertAt(2, lyr_Persil_Tanah_pfn);
  } if (indexActive == 3){
    layersList[2]=lyr_Persil_Tanah_pfnKasDesa;
    judulPeta.text('Peta Pemanfaatan Tanah Kas Desa (pfn)');
    map.getLayers().removeAt(2);
    map.getLayers().insertAt(2, lyr_Persil_Tanah_pfnKasDesa);

  }
});