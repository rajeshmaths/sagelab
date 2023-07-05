$(document).ready(function()
    {
        InitSetUp();        
        prepareEventHandlers();    
    })
    //declare the function
    function InitSetUp() {
        //SetSageSrc();
        //var ReSetRollNo = setInterval(ActIfRNoChanged, 6000);
	    document.getElementById("CollName").innerHTML = localStorage.getItem("College");	
            document.getElementById("rollno").innerHTML = localStorage.getItem("DispNewRno");														 
            document.getElementById("date_time").innerHTML = "Date &amp; Time : "+localStorage.getItem("practical_date_and_time");
            //DefineSageMathCell();
            StampCurrentUsers();
        }
    function prepareEventHandlers() {
        document.getElementById("bttAddCell").addEventListener("click", function(){
            });  
            Cls=document.getElementsByClassName("clsAnchorPracticalFileDownloded").addEventListener("click", function(){
            });                                    
        }
    function DefineSageMathCell()
        {
            alert("This button not programmed");
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
        return localStorage.getItem("NewRno");
    }