const nbOfElts2 = 300;
const nbOfEltse = 300;


    firebase.database().ref('perangkat1/history/ph').limitToLast(nbOfElts2).on('value', ts_measures => {
    let timestamp = [];
    let nilai = [];
    ts_measures.forEach(ts_measure => {
         timestamp.push(moment(ts_measure.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai.push(ts_measure.val().nilai);
        console.log(ts_measure);
    });

     firebase.database().ref('perangkat1/historykelembapantanah/2').limitToLast(nbOfEltse).on('value', ts_measures1 => {
    let timestamp1 = [];
    let nilai1 = [];
    ts_measures1.forEach(ts_measure1 => {
         timestamp1.push(moment(ts_measure1.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai1.push(ts_measure1.val().nilai);
        console.log(ts_measure1);
    });
    firebase.database().ref('perangkat1/historykelembapantanah/3').limitToLast(nbOfEltsb).on('value', ts_measures2 => {
    let timestamp2 = [];
    let nilai2 = [];
    ts_measures2.forEach(ts_measure2 => {
         timestamp2.push(moment(ts_measure2.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai2.push(ts_measure2.val().nilai);
        console.log(ts_measure2);
    });
    firebase.database().ref('perangkat1/historykelembapantanah/4').limitToLast(nbOfEltsb).on('value', ts_measures3 => {
    let timestamp3 = [];
    let nilai3 = [];
    ts_measures3.forEach(ts_measure3 => {
         timestamp3.push(moment(ts_measure3.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai3.push(ts_measure3.val().nilai);
        console.log(ts_measure3);
    });
    firebase.database().ref('perangkat1/historykelembapantanah/5').limitToLast(nbOfEltsb).on('value', ts_measures4 => {
    let timestamp4 = [];
    let nilai4 = [];
    ts_measures4.forEach(ts_measure4 => {
         timestamp4.push(moment(ts_measure4.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai4.push(ts_measure4.val().nilai);
        console.log(ts_measure4);
    });
    firebase.database().ref('perangkat1/historykelembapantanah/6').limitToLast(nbOfEltsb).on('value', ts_measures5 => {
    let timestamp5 = [];
    let nilai5 = [];
    ts_measures5.forEach(ts_measure5 => {
         timestamp5.push(moment(ts_measure5.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai5.push(ts_measure5.val().nilai);
        console.log(ts_measure5);
    });
    firebase.database().ref('perangkat1/historykelembapantanah/7').limitToLast(nbOfEltsb).on('value', ts_measures6 => {
    let timestamp6 = [];
    let nilai6 = [];
    ts_measures6.forEach(ts_measure6 => {
         timestamp6.push(moment(ts_measure6.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai6.push(ts_measure6.val().nilai);
        console.log(ts_measure6);
    });
    firebase.database().ref('perangkat1/historykelembapantanah/8').limitToLast(nbOfEltsb).on('value', ts_measures7 => {
    let timestamp7 = [];
    let nilai7 = [];
    ts_measures7.forEach(ts_measure7 => {
         timestamp7.push(moment(ts_measure7.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai7.push(ts_measure7.val().nilai);
        console.log(ts_measure7);
    });
    firebase.database().ref('perangkat1/historykelembapantanah/9').limitToLast(nbOfEltsb).on('value', ts_measures8 => {
    let timestamp8 = [];
    let nilai8 = [];
    ts_measures8.forEach(ts_measure8 => {
         timestamp8.push(moment(ts_measure8.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai8.push(ts_measure8.val().nilai);
        console.log(ts_measure8);
    });
    firebase.database().ref('perangkat1/historykelembapantanah/10').limitToLast(nbOfEltsb).on('value', ts_measures9 => {
    let timestamp9 = [];
    let nilai9 = [];
    ts_measures9.forEach(ts_measure9 => {
         timestamp9.push(moment(ts_measure9.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai9.push(ts_measure9.val().nilai);
        console.log(ts_measure9);
    });
      myPlotDiv = document.getElementById('myPlot2');
      var satu = {
        x: timestamp,
        y: nilai,
        mode: 'linecolor',
        name: 'pH Air Laut'
      };
      var dua = {
        x: timestamp1,
        y: nilai1,
        name: 'Kelembapan Tanah Hari Ke-2'
      };var tiga = {
        x: timestamp2,
        y: nilai2,
        name: 'Kelembapan Tanah Hari Ke-3'
      };
       var empat = {
        x: timestamp3,
        y: nilai3,
        name: 'Kelembapan Tanah Hari Ke-4'
      };
      var lima = {
        x: timestamp4,
        y: nilai4,
        name: 'Kelembapan Tanah Hari Ke-5'
      };
      var enam = {
        x: timestamp5,
        y: nilai5,
        name: 'Kelembapan Tanah Hari Ke-6'
      };
      var tujuh = {
        x: timestamp6,
        y: nilai6,
        name: 'Kelembapan Tanah Hari Ke-7'
      };
       var delapan= {
        x: timestamp7,
        y: nilai7,
        name: 'Kelembapan Tanah Hari Ke-8'
      };
       var sembilan = {
        x: timestamp8,
        y: nilai8,
        name: 'Kelembapan Tanah Hari Ke-9'
      };
       var sepuluh = {
        x: timestamp9,
        y: nilai9,
        name: 'Kelembapan Tanah Hari Ke-10'
      };
       var data = [ satu , dua , tiga , empat , lima , enam , tujuh, delapan, sembilan, sepuluh];
    const layout = {
        title: '<b> Nilai Tingkat pH Air Laut dalam Kolam Lobster</b>',
        titlefont: {
            family: 'Courier New, monospace',
            size: 16,
            color: 'black'
        },
        xaxis: {
            linecolor: 'black',
            linewidth: 2,
            title: '<b>Waktu dan Tanggal (WIB) </b>',
            titlefont: {
                family: 'Courier New, monospace',
                size: 14,
                color: '#000'
            },
        },
        yaxis: {
            title: '<b>Nilai pH Air Laut  </b>',
            titlefont: {
                family: 'Courier New, monospace',
                size: 14,
                color: '#000'
            },
            linecolor: 'black',
            linewidth: 2,
        },
        margin: {
            r: 50,
            pad: 0
        }
    }
    // At last we plot data :-)
    Plotly.newPlot(myPlotDiv, data, layout, { responsive: true });
})})})})})})})})})});