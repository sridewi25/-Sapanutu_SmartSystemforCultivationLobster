
    const nbOfEltsx = 300;
    const nbOfEltsz = 300;
    

    firebase.database().ref('perangkat1/history/salinitas').limitToLast(nbOfEltsx).on('value', ts_measures => {
    let timestamp = [];
    let nilai = [];
    ts_measures.forEach(ts_measure => {
         timestamp.push(moment(ts_measure.val().timestamp).format('YYYY-MM-DD HH:mm:ss'));
        nilai.push(ts_measure.val().nilai);
        console.log(ts_measure);
    });
   myPlotDiv = document.getElementById('myPlot3');
      var satu = {
        x: timestamp,
        y: nilai,
        mode: 'linecolor',
        name: 'Alat 1'
      };
     
       var data = [ satu ];

    const layout = {
        title: '<b>Nilai Salinitas Air Laut Pada Kolam Lobster</b>',
        titlefont: {
            family: 'Courier New, monospace',
            size: 16,
            color: 'black'
        },
        xaxis: {
            linecolor: 'black',
            linewidth: 2,
            title: '<b>Waktu Terjadi Hujan (WIB)</b>',
            titlefont: {
                family: 'Courier New, monospace',
                size: 14,
                color: '#000'
            },
        },
        yaxis: {
            title: '<b>NIlai Salinitas Air Laut (ppt)</b>',
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
    Plotly.newPlot(myPlotDiv, data, layout, { responsive: true });}
);