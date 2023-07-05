$(document).ready(function()
    {
	    //alert('In sagemath.js');
        InitSetUp();        
        prepareEventHandlers();
    })
     //declare the function
    function prepareEventHandlers() {
        //get a specific page ID and assign it as a variable
		//alert('In sagemath.js 111');
        document.getElementById("bttAddCell").addEventListener("click", function(){
            });  
            Cls=document.getElementsByClassName("clsAnchorPracticalFileDownloded").addEventListener("click", function(){
            });                                    
        }
    function InitSetUp() {
            //var ReSetRollNo = setInterval(ActIfRNoChanged, 6000);
            document.getElementById("rollno").innerHTML = sessionStorage.getItem("DispNewRno");														 
            document.getElementById("date_time").innerHTML = sessionStorage.getItem("practical_date_and_time");
            //DefineSageMathCell();
            StampCurrentUsers();
        }
    function DefineSageMathCell()
        {
            a=b+c//
        }       
    function StampCurrentUsers(eltDIv)
        {  
            // We shall add some dull background text(Roll No and later may be name also)
            // by creating and appending desired number of header elemetns (presently h5) 
            // to any division element with belonging to class clsBgrno
            EltsOfClass_clsBgrno=document.getElementsByClassName("clsBgrno");
			BGText=getBGText();
            for (var i=0; i<EltsOfClass_clsBgrno.length; i++) {
                    for (var j=0; j<5; j++) {
                        var tag = document.createElement("h6");
                        RotationDegree=Math.floor((Math.random() * 360) + 1);
                        tag.style=('transform: rotate('+RotationDegree+'deg); font-weight=bolder; -webkit-transform: rotate('+RotationDegree+'deg);opacity:0.4; display: inline-block; ');
                        var bgtext = document.createTextNode(BGText);
                        tag.appendChild(bgtext);
                        EltsOfClass_clsBgrno.item(i).appendChild(tag);
                    }
                }
        }
    function getBGText()
    {
        return sessionStorage.getItem("NewRno");
    }
	function SetPracticalNow()
		{   
		   if (typeof(sessionStorage) !== "undefined") {
				var R = document.getElementById("rollno").value;
				if (sessionStorage.getItem("NewRno") === null)
					{   
						sessionStorage.setItem("ctrWSNo","1");
						sessionStorage.setItem("NewRno", R);
						sessionStorage.setItem("DispNewRno", R+" [ Worksheet No: 1]");
						sessionStorage.setItem("OrigRNo", R);
					}
				else
					{
						if (String(R)!==sessionStorage.getItem("OrigRno"))
						{   
							strNewSheetNo=String(parseInt(sessionStorage.getItem("ctrWSNo"))+1);
							sessionStorage.setItem("ctrWSNo",strNewSheetNo);
							sessionStorage.setItem("DispNewRno", " 0000  [WS created By : "+sessionStorage.getItem("OrigRNo")+" for "+R+" [ Worksheet No: "+strNewSheetNo+" ]");
							sessionStorage.setItem("NewRno", sessionStorage.getItem("OrigRNo")+" -> "+String(R));
						}
					}
				var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',minute:'numeric' };
				const today  = new Date();
				FormatedToDay=new Intl.DateTimeFormat('en-GB').format(today);
				arrDOW=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
				CDOW=arrDOW[today.getDay()];
				sessionStorage.setItem("practical_date_and_time",FormatedToDay+"  [ "+CDOW+" ]");
				} 
			else {
				alert('Web Storage NOT supported.');
				}
			window.open("sagemaths.html");
		}
