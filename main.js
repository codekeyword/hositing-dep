(function () {
  const button = document.getElementById("run");
  button.onclick = handleClick;

  const h1 = document.getElementById("h1");

  //h1
  h1.classList.add("ty-2");

  setTimeout(() => {
      document.getElementById("tb").classList.add("red-border-3");  
        
   },600);
   setTimeout(() => {
     
    document.getElementById("db").classList.add("red-border-3");     
 },800);



  //h12

  const h12 = document.getElementById("h12");
  setTimeout(() => {
    h12.classList.add("ty-1");
  }, 2000);

  //h3
  const h3 = document.getElementById("h3");

  setTimeout(() => {
    h3.classList.add("ty-08");
  }, 3000);
  setTimeout(() => {
    document.getElementById("tb").classList.replace("red-border-3","green-border-3");    
 },3200);
  //h2
  const h2 = document.getElementById("h2");

  setTimeout(() => {
    h2.classList.add("ty-08");
  }, 3800);
  setTimeout(() => {
    document.getElementById("db").classList.replace("red-border-3","green-border-3");    
 },4000);

  //h13
  const h13 = document.getElementById("h13");
  const h4 = document.getElementById("h4");
  const h11 = document.getElementById("h11");
  const h5 = document.getElementById("h5");
  const h15 = document.getElementById("h15");
  const h6 = document.getElementById("h6");

  setTimeout(() => {
    h13.classList.add("ty-08");

  }, 4400);
  setTimeout(() => {

    h4.classList.add("ty-08");
 
  }, 4900);
  setTimeout(() => {
   
    h11.classList.add("ty-08");
  }, 5200);
  setTimeout(() => {
    document.getElementById("db").classList.remove("green-border-3");   
    document.getElementById("tb").classList.remove("green-border-3");    
 },5500);
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

  function handleClick(x) {
    // var tb=document.getElementById("tb").classList

    // tb.replace("br-green-4","br-tr-4");
    // var db=document.getElementById("db").classList

    // db.replace("br-green-4","br-tr-4");

    setTimeout(() => {
      var ts = document.getElementsByClassName("t-50p");

      for (let i = 0; i < ts.length; i++) {
        ts[i].classList.add("t-100-y");
      }
      document.getElementById("h3").classList.replace("t-100-y", "tm-100-y");
    }, 2000); 
    setTimeout(() => {
      h4.style.width = "600px";
      h2.style.width = "600px";
      h1.style.width = "550px";
      document.getElementById("h4").classList.replace("ty-08", "h4-bc-2");
      document.getElementById("h2").classList.replace("ty-08", "h2-bc-2");
      h1.classList.replace("ty-2", "h1-bc-2");
    }, 4200);
    setTimeout(() => {
      document.getElementById("h5").classList.add("show");
      document.getElementById("h6").classList.add("show");
      document.getElementById("h15").classList.add("show");
    }, 4200);

    setTimeout(() => {
      document.getElementById("h4").classList.add("t-135-y");
      document.getElementById("h2").classList.add("t-135-y");
      document.getElementById("h11").classList.add("t-135-y");
      document.getElementById("h13").classList.add("t-135-y");
      document.getElementById("h1").classList.replace("t-100-y", "t-260-y");
      document.getElementById("h12").classList.replace("t-100-y", "t-260-y");
      document.getElementById("h5").classList.add("tm-70-y");
      document.getElementById("h15").classList.add("tm-40-y");

      

      setTimeout(() => {
        h11.classList.add("comments");
     
        h1.style.backgroundImage = "url(h16.png)";
        h2.style.backgroundImage = "url(h7.png)";
        h4.style.backgroundImage = "url(h8.png)";
        h3.style.width="560px"
        h6.style.opacity = 1;
        h5.style.opacity = 1;
        h15.style.opacity = 1;
        h6.style.transform = "translateY(-116px)";
        h5.style.transform = "translateY(-70px)";
        h15.style.transform = "translateY(30px)";

        h6.classList.replace("show", "br-green-4");
        h5.classList.replace("show", "br-green-4");
        h15.classList.replace("show", "br-green-4");
        setTimeout(() => {     
          h5.classList.remove("br-green-4");
          h6.classList.remove("br-green-4");
          h15.classList.remove("br-green-4");
              h1.classList.replace("h1-bc-2","br-red-4");
              h2.classList.replace("h2-bc-2","br-red-4");
             


        //   setTimeout(() => {
            
        //     // h6.classList.remove("br-green-4");
        //     // h5.classList.remove("br-green-4");
        //     // h15.classList.remove("br-green-4");
        //   }, 1500);
          setTimeout(() => {
           
           
      
            h1.classList.remove("br-red-4");       
            h2.classList.remove("br-red-4");    
            h4.classList.remove("br-red-4");  
             
          
            setTimeout(() => {
              h3.style.backgroundSize="contain";
              h3.classList.replace("ty-08","br-green-4");
               h12.style.width="300px";
               h13.style.width="360px";
              setTimeout(() => {
                h3.classList.remove("br-green-4");
               // h4.classList.replace("h4-bc-2","br-red-4");
                h12.classList.add("br-red-4");
                h13.classList.add("br-red-4");
                setTimeout(() => {
                  h13.style.transform="translateY(-15px)";
                  h1.style.transform="translateY(540px)";
                  h2.style.transform="translateY(262px)";
                  h4.style.transform="translateY(52px)";

                }, 2000);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1500);
      }, 2000);
    }, 4200);

  }
})();
