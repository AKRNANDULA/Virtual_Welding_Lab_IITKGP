/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
function da(fil){
    var ymax=0,xmax=0;
    Plotly.d3.csv(fil, function(dat){ 
        var t = [], y1 = [], y2 = [], y3 = [];
        for (var i=0; i<dat.length; i++) {
            row = dat[i];
            t[i]=Number(row['X_Value']);
            y1[i]=row['Temperature_1'];
            y2[i]=row['Temperature_0'];
            y3[i]=row['Temperature_2'];
          }
        t.sort(function(a,b){return a-b;});
        y1.sort(function(a,b){return a-b;});
        y2.sort(function(a,b){return a-b;});
        y3.sort(function(a,b){return a-b;});
        xmax=Math.round(Number(t[t.length-1])+10);
        ymax=Math.round(Math.max(Number(y1[y1.length-1]),Number(y2[y2.length-1]),Number(y3[y3.length-1]))+10);
        $('#temp1').text(Number(y1[y1.length-1]));
        $('#temp2').text(Number(y2[y2.length-1]));
        $('#temp3').text(Number(y3[y3.length-1]));
    });
Plotly.d3.csv(fil, function(data){ 
    var t = [], y1 = [], y2 = [], y3 = [];
    for (var i=0; i<data.length; i++) {
        row = data[i];
        t[i]=Number(row['X_Value']);
        y1[i]=row['Temperature_1'];
        y2[i]=row['Temperature_0'];
        y3[i]=row['Temperature_2'];
      }
    var g1 = {
        x: t,
        y: y1,
        type: 'scatter',
        name: 'Temp 1'
        };
    var g2 = {
            x: t,
            y: y2,
            type: 'scatter',
            name: 'Temp 2'
            };
    var g3 = {
            x: t,
            y: y3,
            type: 'scatter',
            name: 'Temp 3'
            };
    var data = [g1,g2,g3];
    grp(data,xmax,ymax);
});
};

function grp(gda,xmax,ymax){
    gr = document.getElementById('grph');
    var layout={title: 'Temperature Vs Time',showlegend: true,
    legend: {
      x: 1,
      xanchor: 'right',
      y: 1
    },
    font: {
        family: 'Courier New, monospace',
        size: 15,
        color: 'black'
        },
    xaxis: {
        title:'Time (s)',
        showticklabels: true,
        autotick: true,
        showgrid: true,
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 3,
        linecolor: '#636363',
        linewidth: 1,
        zeroline: true,
        showline: true,
        mirror: 'ticks',
        range: [
            0,
            xmax
          ] },
    yaxis: {
        title:'Temprature (<sup>o</sup>C)',
        showticklabels: true,
        autotick: true,
        showgrid: true,
        gridcolor: '#bdbdbd',
        gridwidth: 1,
        zerolinecolor: '#969696',
        zerolinewidth: 3,
        linecolor: '#636363',
        linewidth: 1,
        zeroline: true,
        showline: true,
        mirror: 'ticks',
        range: [
            0,
            ymax
          ] }
    };
    Plotly.newPlot(gr, gda, layout);
}

$(document).ready(function(){
    adiwe2(0);
});
function adiwe2(a){
    if(a==0)
    {
        $("#grph").hide();
        $("#grpt").hide();    
        ch=0;
    }
    else
    {
        $("#grph").show();
        $("#grpt").show();
        if(a==1){da("./2mm_sec.csv");}else if(a==2){da("./4mm_sec.csv");}
    }

};