$(document).ready(function()
{
    InitSetUp();        
    prepareEventHandlers();    
})
// Inital setup
function InitSetUp() {
}
// Setting Practical data
function SetPracticalNow()
    {   
       if (typeof(localStorage) !== "undefined") {
            var R = document.getElementById("rollno").value;
	    var C = document.getElementById("college").value;
	    alert(C);
            if (sessionStorage.getItem("OrigRNo") === null)
                {   
                    localStorage.setItem("OrigRNo", R);
                    sessionStorage.setItem("OrigRNo", R);
                    localStorage.setItem("ctrWSNo","1");
                    //localStorage.setItem("NewRno", R);
                    localStorage.setItem("NewRno", localStorage.getItem("OrigRNo")+" -> "+String(R));
                    localStorage.setItem("DispNewRno", "RollNo. : "+R+" [ WS No: 1]");
                }
            else
                {
                    if (String(R)!==localStorage.getItem("OrigRno"))
                    {   
                        strNewSheetNo=String(parseInt(localStorage.getItem("ctrWSNo"))+1);
                        localStorage.setItem("ctrWSNo",strNewSheetNo);
                        localStorage.setItem("DispNewRno", "Created By : "+localStorage.getItem("OrigRNo")+" for "+R+" [ WS No.: "+strNewSheetNo+" ]");
                        localStorage.setItem("NewRno", localStorage.getItem("OrigRNo")+" -> "+String(R));
                    }
                }
            var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',minute:'numeric' };
            const today  = new Date();
            FormatedToDay=new Intl.DateTimeFormat('en-GB').format(today);
            arrDOW=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
            CDOW=arrDOW[today.getDay()];
            localStorage.setItem("practical_date_and_time",FormatedToDay+"  [ "+CDOW+" ]");
	    localStorage.setItem("College", C);
            } 
        else {
            alert('Web Storage NOT supported.');
            }
        window.open("sagemaths.html");
}