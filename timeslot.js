function timeslot(){
    $("#time1").hide();
    $("#time2").hide();
    $("#time3").hide();
    $("#time4").hide();
    $("#time5").hide();
    let d = new Date(document.getElementById("date").value);
    
    let day = (d.getDate()+1);
    
    if(day % 2 == 0){
        $("#time1").show();
   
    }
    if(day % 3 == 0){
           
        $("#time2").show();
           
    }
    if(day % 5 == 0){
        $("#time3").show();
    }
        
    if(day % 7 == 0){
        $("#time4").show();
    }
    if(day % 11 == 0){
        $("#time5").show();
    }

    }
