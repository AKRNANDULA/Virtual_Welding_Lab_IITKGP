/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */
var c1=0;
var c2=0;

$(document).ready(function(){
    adiwe3(0);
});

function adiwe3(a){
    if(a==0)
    {
        c1=0;
        c2=0;
    }
    else
    {
        if(a==1){console.log(c1);}
        else if(a==2){console.log(c2);}
        else if(a==3){
            $("#sid").show();
            $("#d5").html("<br> c1 = "+c1+"<br> c2 =  "+c2);
            $('#d1').draggable();
        }
    }

};