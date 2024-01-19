
(function(){
    const button = document.getElementById('run');
    button.onclick = handleClick;

    const h1=document.getElementById("h1");  

    //h1
    h1.classList.add("ty-12");    
    
    //h12

    const h12 =document.getElementById("h12");
    setTimeout(() => {       
        h12.classList.add("ty-08");  
     },1200);

     //h3
     const h3 =document.getElementById("h3");

     setTimeout(() => {       
         h3.classList.add("ty-08");  
      },2000);


    

    //h2
    const h2 =document.getElementById("h2");

    setTimeout(() => {       
        h2.classList.add("ty-08");  
     },2600);

       //h13
    const h13 =document.getElementById("h13");
    const h4 =document.getElementById("h4");
    const h11 =document.getElementById("h11");
    const h5=document.getElementById("h5");
    const h15=document.getElementById("h15");
    const h6=document.getElementById("h6");

    setTimeout(() => {       
        h13.classList.add("ty-08");  
        h4.classList.add("ty-08");  
        h11.classList.add("ty-08");  
     },3000);      
    // setTimeout(() => {       
    //     document.getElementById("tb").classList.add("show");
    //     document.getElementById("tb").classList.add("br-red-4");
    //  },400);
    //  setTimeout(() => {            
    //     document.getElementById("db").classList.add("show");
    //     document.getElementById("db").classList.add("br-red-4");
    //  },800);
    //  setTimeout(() => {       
    //     document.getElementById("db").classList.add("show");
    //     document.getElementById("db").classList.add("br-red-4","br-green-4");
    //  },2200);
    // setTimeout(() => {       
    //     document.getElementById("tb").classList.add("show");
    //     document.getElementById("tb").classList.add("br-red-4","br-green-4");
    //  },2800);
    //  setTimeout(() => {       
    //     document.getElementById("tb").classList.remove("show");
    //     document.getElementById("tb").classList.remove("br-green-4");
    //     document.getElementById("db").classList.remove("show");
    //     document.getElementById("db").classList.remove("br-green-4");
    // },4000);



   function handleClick(x){
      
    // var tb=document.getElementById("tb").classList
         
    // tb.replace("br-green-4","br-tr-4");
    // var db=document.getElementById("db").classList
    
    // db.replace("br-green-4","br-tr-4");



      
     
     
     setTimeout(() => {
     
         var ts=document.getElementsByClassName("t-50p");
     
        for (let i  = 0; i  < ts.length; i ++) {
         ts[i].classList.add("t-100-y");    
        }
        document.getElementById("h3").classList.replace("t-100-y","tm-100-y");
      
     },1000);
//      setTimeout(() => {
          
//      },2000);
     


     setTimeout(() => {
        h4.style.width="600px";
          h2.style.width="600px";
          h1.style.width="800px";
         document.getElementById("h4").classList.replace("ty-08","h4-bc-2");
         document.getElementById("h2").classList.replace("ty-08","h2-bc-2");
         h1.classList.replace("ty-12","h1-bc-2");
     
     },3000);
     setTimeout(() => {   
        document.getElementById("h5").classList.add("show");
        document.getElementById("h6").classList.add("show");
        document.getElementById("h15").classList.add("show");
    
    },3200);

          setTimeout(() => { 
         document.getElementById("h4").classList.add("t-135-y");
         document.getElementById("h2").classList.add("t-135-y");
         document.getElementById("h11").classList.add("t-135-y");
         document.getElementById("h13").classList.add("t-135-y");
        //  h1.style.marginLeft="4px";
         document.getElementById("h1").classList.replace("t-100-y","t-260-y");
         document.getElementById("h12").classList.replace("t-100-y","t-260-y");      
         document.getElementById("h5").classList.add("tm-70-y");
         document.getElementById("h15").classList.add("tm-40-y");

         setTimeout(() => {
            setTimeout(() => {
                h6.style.opacity=1;
                h5.style.opacity=1;
               h15.style.opacity=1;
              // element.style.transform = 'translateY(-130px)'
               h6.style.transform = 'translateY(-130px)'
               h5.style.transform = 'translateY(-90px)'
              h15.style.transform = 'translateY(22px)'
     h6.classList.replace("show","br-green-4");
     h5.classList.replace("show","br-green-4");
     h15.classList.replace("show","br-green-4");


   },1000);    
    }, 2000);
     
     },3600);


    

//     setTimeout(() => {
//         document.getElementById("h2").classList.add("hov-r-08");      
//     },10000);
//     setTimeout(() => {
//         document.getElementById("h3").classList.add("hov-g-08");     
//     },10800);
//     setTimeout(() => {
//         document.getElementById("h3").classList.remove("hov-g-08");
//         document.getElementById("h2").classList.remove("hov-r-08");
//         document.getElementById("h5").classList.remove("hov-zg-08");
//  },13000);

//     setTimeout(() => {
//         document.getElementById("h6").classList.add("hov-g-08");
//       },14000);
//     setTimeout(() => {   
//         document.getElementById("h4").classList.add("hov-r-08");
//      },15000);
//     setTimeout(() => {
//         document.getElementById("h6").classList.remove("hov-g-08");
//         document.getElementById("h4").classList.remove("hov-r-08");
//     },16000);
//     setTimeout(() => {
//         document.getElementById("h5").classList.remove("tr-op-1");
//         document.getElementById("h6").classList.remove("tr-op-1");
//         document.getElementById("h4").classList.add("tm-100-y");       
//         document.getElementById("h1").classList.replace("t-200-y","t-260-y");
//         document.getElementById("h2").classList.replace("t-200-y","t-170-y"); 
//       },18000);
    }


   
})();
