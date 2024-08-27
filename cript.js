
let tex=1;
let c=1;
let x=document.getElementById("kg1");
let y=document.getElementById("kg2");
  setInterval( fun1,500); 
  
function fun(m1) 
      {  
          x.innerHTML = m1 ;
          if ( m1=="on " ) { x.style.color="red";y.style.color="green"; }
          if ( m1=="off" ) { x.style.color="blue";y.style.color="red"; }
          if ( m1=="tare" ) { x.style.color="green";y.style.color="blue"; }
      }  
function fun1()  
     {     
         document.getElementById("kg").innerHTML = tex+=c;
         if ( tex==50 ) { c=-1; }
         if ( tex==0 ) { c=1; }
    }      
