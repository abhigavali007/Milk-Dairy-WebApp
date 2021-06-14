    
    var isSignedin=false;
    
    function display(form)
    {
        if (form.email.value=="root@123.com")
         { 
                if (form.password.value=="root") 
                { 
                isSignedin=true;
                
                location="rates2.html"
                
             
                        
                 
                } else 
                {
                    alert("Invalid Password")
                            
                }
        } 
        else {  
            alert("Invalid Username")
            }
    }
    
        var f1,f2,f3,f4;
        $(document).ready(function(){
            $("#form1").hide();
            $("#form2").hide();
            $("#form3").hide();
            $("#form4").hide();

            
            
            $("#adminsave2").hide();
            $("#adminedit").click(function(){
              $("#adminsave2").show();
              $("#form1").show();
              $("#field1").hide();
              $("#form2").show();
              $("#field2").hide();
              $("#form3").show();
              $("#field3").hide();
              $("#form4").show();
              $("#field4").hide();

            });
            $("#adminsave2").click(function(){
                f1=$("#frm1").val();
                f2=$("#frm2").val();
                f3=$("#frm3").val();
                f4=$("#frm4").val();
                $("#field1").text(f1);
                $("#field2").text(f2);
                $("#field3").text(f3);
                $("#field4").text(f4);
                
                $("#form1").hide();
                $("#field1").show();
                $("#form2").hide();
                $("#field2").show();
                $("#form3").hide();
                $("#field3").show();
                $("#form4").hide();
                $("#field4").show();
                
              });
            
          });
        console.log(isSignedin.toString());
       