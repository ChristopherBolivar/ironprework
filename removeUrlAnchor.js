function removeUrlAnchor(url){
    let col = url;
    for(i=0; i<=url.length; i++){
  
       if(url[i]==="#"){
       url.split("#");
       col= url.slice(0,i);
      }
  }
  
       return col;
  }