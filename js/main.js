
$(document).ready(function(){
 
  var code=$('#edit').text();
  // alert(code);
  code=code.trim();
  console.log(typeof code);
  console.log(code.length);

  //for(let i=0;i<code.length;i++){
    var str="";
    var pos1= code.indexOf("/*");
    var pos2= code.indexOf("*/");
    for(var i=pos1;i<=pos2+1;i++)
      {
          str=str+code[i];
          console.log(str);
      }

 // }
  console.log(str);
  // console.log(pos2);

 


});