/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
var ch=0;
var x_0 = 40,y_0 = 40;
$(document).ready(function(){
    adiwe4(0);
});

function rng(s,e,st){
    var adi=[];
    for(i=0;i<=st;i++){
        adi[i]=(s+i*(e-s)/st);
    }
    return adi;
};

function adiwe4(a){
    if(a==0)
    {
        $("#grph").hide();    
        ch=0;
    }
    else if(a==3){
        alert("Choose any Real Value between 15 and 21");
    }
    else if(a==4){
        alert("Choose any Real Value between 0.15 and 0.5");
    }
    else if(a==5){
        alert("Choose any Real Value between 200 and 250");
    }
    else if(a==6){
        alert("Choose any Real Value between 2 and 8");
    }
    else
    {
        $("#grph").show();
        if(a==1){

            adiplt(Number($("#av").val()),Number($("#as").val()),Number($("#ac").val()),Number($("#ad").val()));
        }
        else if(a==2){
            $("#grph").hide();
            $('#av').val('');
            $('#ad').val('');    
            $('#ac').val('');
            $('#as').val('');
            ch=0;
        }
    }

};

function adimul(muf,rn){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=muf*rn[i]/rn[i];
    }
    return res;
};

function adimatmul(rn,mul){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=Math.pow(rn[i],mul);
    }
    return res;
};

function adismatmul(sca,rn){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=sca*rn[i];
    }
    return res;
};

function adismatsum(rn,sca){
    var res=[];
    for(i=0;i<=rn.length;i++){
        res[i]=sca+rn[i];
    }
    return res;
};

function adimatsum(rn1,rn2){
    var res=[];
    for(i=0;i<=rn1.length;i++){
        res[i]=rn2[i]+rn1[i];
    }
    return res;
};

function adiplt(v, s, i, h){
  bw = 12.202+(i*0.0746)+(0.2196*h)+(0.0436*v)-(48.517*s);
  bh = -1.059+(0.016*i)+(0.1296*h)+(0.028*v)-(9.033*s);
  bp = 16.403-(0.002*i)-(0.173*h)-(0.112*v)-(9.287*s);
  x_0 = 40;
  y_0 = 40;
  xa = rng((x_0-(bw/2)), (x_0+(bw/2)), 1000);
  xa2=adimatmul(xa,2);
  // equation for upper curve
    A = -((4*bh)/Math.pow(bw,2));
    B = ((8*bh*x_0)/Math.pow(bw,2));
    C =  (((bh*Math.pow(bw,2)))+(y_0*Math.pow(bw,2))-(4*bh*(Math.pow(x_0,2))))/Math.pow(bw,2);
    y_up =adismatsum(adimatsum(adismatmul(A,xa2),adismatmul(B,xa)),C);
//# equation for Lower curve
    A = ((4*bp)/Math.pow(bw,2));
    B = -((8*bp*x_0)/Math.pow(bw,2));
    C =  -(((bp*Math.pow(bw,2)))-(y_0*Math.pow(bw,2))-(4*bp*(Math.pow(x_0,2))))/Math.pow(bw,2);
    y_down =adismatsum(adimatsum(adismatmul(A,xa2),adismatmul(B,xa)),C);


  x1=rng(20, 60, 1000);
  y1=adimul(20,x1);
  x2=rng(20, 60, 1000);
  y2=adimul(40,x1);
  y3=rng(20, 40, 1000);
  x3=adimul(20,y3);
  y4=rng(20, 40, 1000);
  x4=adimul(60,y3);

var g1 = {
        x: xa,
        y: y_up,
        type: 'scatter',
        name: 'xy_up'
    };
var g2 = {
        x: xa,
        y: y_down,
        type: 'scatter',
        name: 'xy_down'
    };
var g3 = {
        x: x1,
        y: y1,
        type: 'scatter',
        name: 'x1y1'
    };
var g4 = {
        x: x2,
        y: y2,
        type: 'scatter',
        name: 'x2y2'
    };
var g5 = {
        x: x3,
        y: y3,
        type: 'scatter',
        name: 'x3y3'
    };
var g6 = {
        x: x4,
        y: y4,
        type: 'scatter',
        name: 'x4y4'
    };
    
var gda = [g1,g2,g3,g4,g5,g6];

    var gr = document.getElementById('grph');
    var layout={title: 'Principles of Shielded Metal Arc Welding',showlegend: true,
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
        title:'X axis -->',
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
        range:[10,70]
         },
    yaxis: {
        title:'Y axis -->',
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
        range:[10,50]
        }
    };
    Plotly.newPlot(gr, gda, layout);
};