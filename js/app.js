window.addEventListener('load',function(){
    var ps=document.querySelector('.markdown').querySelectorAll('p');
    var i=0;
    for(i=0;i<ps.length;i++){
        var p=ps[i];
        var txt=p.innerHTML;
        if(txt.indexOf('<')==-1){
           console.log(txt); 
           var text='';
            var ii=0;
           for(ii=0;i<txt.length;ii++){
               text+='';
               text+=txt[ii];
           }
           p.innerHTML=text;
        }
    }
});