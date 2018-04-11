private var ch:boolean=false;
var drugcam:Camera;
private var cheat:String="";
var roboskin:GUISkin;
function Update () {
	var script4 = GetComponent("HideCursorScript");
	var s4 = GetComponent("CursorScript"); 
	if(Input.GetKey("escape")) {
	    //pause the game
	    Time.timeScale = 0;
	    camera.GetComponent(BlurEffect).enabled = true;
	    AudioListener.pause=true;
	   	
	   	//show the pause menu
	    var script3 = GetComponent("PauseMenuScript"); 
	    script3.enabled = true;
	    //disable the cursor hiding script
	    script4.enabled = false; 
    }
    if(Input.GetKey(KeyCode.C)&&ch==false) {
    	
	    script4.enabled = false;
	    s4.enabled = true;
	    //pause the game
	    Time.timeScale = 0;
	    camera.GetComponent(BlurEffect).enabled = true;
	    AudioListener.pause=true;
	   	ch=true;
	   	
    }
    if(Input.GetKey(KeyCode.Return)&&ch==true)
    {
    	
	    script4.enabled = false;
	    s4.enabled = false;
	    //unpause the game
	    Time.timeScale = 1;
	    camera.GetComponent(BlurEffect).enabled = false;
	    AudioListener.pause=false;
	    Debug.Log("cheat = "+cheat);
	    cheatf();
	    script4.enabled = true;
	   	ch=false;
	   	
    }
    var cs1 = GetComponent("EdgeDetectEffectNormals");
    var cs2 = GetComponent("ContrastEnhance");
    if(PlayerPrefs.GetInt("cheat2")==1){
	    cs1.enabled=true;
	    cs2.enabled=true;
    }
    else{
	    cs1.enabled=false;
	    cs2.enabled=false;
    }
    
    if(PlayerPrefs.GetInt("cheat3")==1){
	    drugcam.enabled=true;
    }
    else{
	    drugcam.enabled=false;
    }
}
function OnGUI(){
	GUI.skin=roboskin;
	if(ch==true){
		GUI.Label(new Rect(Screen.width/2-200, Screen.height/2, 500, 50), "Enter Code and press OK:-");
		cheat=GUI.TextField(new Rect(Screen.width/2-200, Screen.height/2+50, 400, 50),cheat,20);
		if(GUI.Button(new Rect(Screen.width/2-200,Screen.height/2+100, 400, 70),"OK")){
    		//unpause the game
		    Time.timeScale = 1;
		    camera.GetComponent(BlurEffect).enabled = false;
		    AudioListener.pause=false;
		    Debug.Log("cheat = "+cheat);
		    cheatf();
		    //disable the cursor hiding script
		    var script6 = GetComponent("HideCursorScript"); 
		    script6.enabled = true;
		   	ch=false;
		   	var s4 = GetComponent("CursorScript"); 
		   	s4.enabled = false;
    	}
	}
}

function cheatf(){
	if(cheat=="vindiesel")
		PlayerPrefs.SetInt("cheat1",1);
	if(cheat=="cartoonnetwork")
		PlayerPrefs.SetInt("cheat2",1);
	if(cheat=="iwannagethigh")
		PlayerPrefs.SetInt("cheat3",1);
	if(cheat=="iamannahazare"){
		PlayerPrefs.SetInt("cheat1",0);
		PlayerPrefs.SetInt("cheat2",0);
		PlayerPrefs.SetInt("cheat3",0);
	}
}
