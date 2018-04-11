var profileskin : GUISkin;
var c_skin : GUISkin;
var d_skin : GUISkin;
var l_skin : GUISkin;
var n_skin : GUISkin;
var a_c :int=0;
var b_c :int=0;
var c_c :int=0;
var d_c :int=0;
var nameA : String="Player 1";
var nameB : String="Player 2";
var nameC : String="Player 3";
var nameD : String="Player 4";
function thePMenu() {
	GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.height));
	GUI.Label(Rect(30, 30, 800, 370), "USER PROFILES");
    GUI.Box(new Rect(Screen.width/2-410,Screen.height/2-210,400,200),"SLOT A");
    GUI.Box(new Rect(Screen.width/2+10,Screen.height/2-210,400,200),"SLOT B");
    GUI.Box(new Rect(Screen.width/2-410,Screen.height/2+10,400,200),"SLOT C");
    GUI.Box(new Rect(Screen.width/2+10,Screen.height/2+10,400,200),"SLOT D");
    GUI.skin = n_skin;
    if(a_c==0)
    	GUI.Label(new Rect(Screen.width/2-400, Screen.height/2-210+30, 380, 100), PlayerPrefs.GetString("sA_name"));
    if(b_c==0)
    	GUI.Label(new Rect(Screen.width/2+20, Screen.height/2-210+30, 380, 100), PlayerPrefs.GetString("sB_name"));
    if(c_c==0)
    	GUI.Label(new Rect(Screen.width/2-400, Screen.height/2+10+30, 380, 100), PlayerPrefs.GetString("sC_name"));
    if(d_c==0)
    	GUI.Label(new Rect(Screen.width/2+20, Screen.height/2+10+30, 380, 100), PlayerPrefs.GetString("sD_name"));
    GUI.skin = c_skin;
   	if(a_c==1)
    	nameA=GUI.TextField(new Rect(Screen.width/2-410+30, Screen.height/2-210+30, 340, 40),nameA,20);
    if(b_c==1)
    	nameB=GUI.TextField(new Rect(Screen.width/2+10+30, Screen.height/2-210+30, 340, 40),nameB,20);
    if(c_c==1)
    	nameC=GUI.TextField(new Rect(Screen.width/2-410+30, Screen.height/2+10+30, 340, 40),nameC,20);
    if(d_c==1)
    	nameD=GUI.TextField(new Rect(Screen.width/2+10+30, Screen.height/2+10+30, 340, 40),nameD,20);
    GUI.skin = n_skin;
    if(PlayerPrefs.GetInt("sA_active")==0){
    	GUI.skin = c_skin;
    	if(GUI.Button(new Rect(Screen.width/2-210-64, Screen.height/2-210+72, 128, 128),"")){
    		if(a_c==0)
    			a_c=1;
    		else if(a_c==1&&nameA!="")
    		{	
    			GUI.skin = c_skin;
    			PlayerPrefs.SetString("sA_name",nameA);
    			PlayerPrefs.SetInt("sA_active",1);
    			PlayerPrefs.SetInt("SavedLevel1",0);
    			PlayerPrefs.SetInt("SavedCar1",0);
    			a_c=0;
    		}
    	}
    }
	else{
		GUI.skin = d_skin;
		if(GUI.Button(new Rect(Screen.width/2-210-190, Screen.height/2-210+72, 128, 128),"")){	
    		PlayerPrefs.SetString("sA_name","EMPTY");
    		PlayerPrefs.SetInt("sA_active",0);
    	}
    	GUI.skin = l_skin;
    	if(GUI.Button(new Rect(Screen.width/2-210+72, Screen.height/2-210+72, 128, 128),"")){
    		PlayerPrefs.SetInt("p1_profile",1);
    		PlayerPrefs.SetInt("gameState",2);
    		Application.LoadLevel("Loading2");
    	}
	}
	
	if(PlayerPrefs.GetInt("sB_active")==0){
    	GUI.skin = c_skin;
    	if(GUI.Button(new Rect(Screen.width/2+210-64, Screen.height/2-210+72, 128, 128),"")){
    		if(b_c==0)
    			b_c=1;
    		else if(b_c==1&&nameB!="")
    		{	
				nameb=GUI.TextField(new Rect(Screen.width/2+10+30, Screen.height/2-210+50, 380, 100),nameB,20);
    			PlayerPrefs.SetString("sB_name",nameB);
    			PlayerPrefs.SetInt("sB_active",1);
    			PlayerPrefs.SetInt("SavedLevel2",0);
    			PlayerPrefs.SetInt("SavedCar2",0);
    			b_c=0;
    		}
    	}
    }
	else{
		GUI.skin = d_skin;
		if(GUI.Button(new Rect(Screen.width/2+210-190, Screen.height/2-210+72, 128, 128),"")){	
    		PlayerPrefs.SetString("sB_name","EMPTY");
    		PlayerPrefs.SetInt("sB_active",0);
    	}
    	GUI.skin = l_skin;
    	if(GUI.Button(new Rect(Screen.width/2+210+72, Screen.height/2-210+72, 128, 128),"")){
    		PlayerPrefs.SetInt("p1_profile",2);
    		PlayerPrefs.SetInt("gameState",2);
    		Application.LoadLevel("Loading2");
    	}
	}
	
	if(PlayerPrefs.GetInt("sC_active")==0){
    	GUI.skin = c_skin;
    	if(GUI.Button(new Rect(Screen.width/2-210-64, Screen.height/2+10+72, 128, 128),"")){
    		if(c_c==0)
    			c_c=1;
    		else if(c_c==1&&nameC!="")
    		{	
				nameC=GUI.TextField(new Rect(Screen.width/2-410+30, Screen.height/2+10+50, 380, 100),nameC,20);
    			PlayerPrefs.SetString("sC_name",nameC);
    			PlayerPrefs.SetInt("sC_active",1);
    			PlayerPrefs.SetInt("SavedLevel3",0);
    			PlayerPrefs.SetInt("SavedCar3",0);
    			c_c=0;
    		}
    	}
    }
	else{
		GUI.skin = d_skin;
		if(GUI.Button(new Rect(Screen.width/2-210-190, Screen.height/2+10+72, 128, 128),"")){	
    		PlayerPrefs.SetString("sC_name","EMPTY");
    		PlayerPrefs.SetInt("sC_active",0);
    	}
    	GUI.skin = l_skin;
    	if(GUI.Button(new Rect(Screen.width/2-210+72, Screen.height/2+10+72, 128, 128),"")){
    		PlayerPrefs.SetInt("p1_profile",3);
    		PlayerPrefs.SetInt("gameState",2);
    		Application.LoadLevel("Loading2");
    	}
	}
	
	if(PlayerPrefs.GetInt("sD_active")==0){
    	GUI.skin = c_skin;
    	if(GUI.Button(new Rect(Screen.width/2+210-64, Screen.height/2+10+72, 128, 128),"")){
    		if(d_c==0)
    			d_c=1;
    		else if(d_c==1&&nameD!="")
    		{	
				nameD=GUI.TextField(new Rect(Screen.width/2+10+30, Screen.height/2+10+50, 380, 100),nameD,20);
    			PlayerPrefs.SetString("sD_name",nameD);
    			PlayerPrefs.SetInt("sD_active",1);
    			PlayerPrefs.SetInt("SavedLevel4",0);
    			PlayerPrefs.SetInt("SavedCar4",0);
    			d_c=0;
    		}
    	}
    }
	else{
		GUI.skin = d_skin;
		if(GUI.Button(new Rect(Screen.width/2+210-190, Screen.height/2+10+72, 128, 128),"")){	
    		PlayerPrefs.SetString("sD_name","EMPTY");
    		PlayerPrefs.SetInt("sD_active",0);
    	}
    	GUI.skin = l_skin;
    	if(GUI.Button(new Rect(Screen.width/2+210+72, Screen.height/2+10+72, 128, 128),"")){
    		PlayerPrefs.SetInt("p1_profile",4);
    		PlayerPrefs.SetInt("gameState",2);
    		Application.LoadLevel("Loading2");
    	}
	}
    	
    		
	/*
	if(GUI.Button(Rect(Screen.width-340, Screen.height-60, 400, 70), "LOAD PROFILE")) {
	var script2 = GetComponent("ProfileScript"); 
    script2.enabled = false;
	camera.GetComponent(BlurEffect).enabled = false;
	camera.audio.enabled=true;
	rotcamobj.camera.enabled=true;
	car.GetComponent(AICar_Script).enabled = true;
    }
    if(GUI.Button(Rect(140, 190, 400, 50), "CREATE NEW PROFILE")) 
    {
    	//GUI.Button(Rect(140, 190, 400, 50), "")
    	GUI.TextField(Rect(140, 450, 400, 50),"");
    	
    	
    }
    if(GUI.Button(Rect(140, 250, 400, 50), "CREATE NEW PROFILE")) {
    }
    if(GUI.Button(Rect(140, 310, 400, 50), "CREATE NEW PROFILE")) {
    }
    if(GUI.Button(Rect(140, 370, 400, 50), "CREATE NEW PROFILE")) {
    }
    if(GUI.Button(Rect(Screen.width-200, 190, 400, 50), "DELETE           P")) {
    }
    if(GUI.Button(Rect(Screen.width-200, 250, 400, 50), "DELETE           P")) {
    }
    if(GUI.Button(Rect(Screen.width-200, 310, 400, 50), "DELETE           P")) {
    }
    if(GUI.Button(Rect(Screen.width-200, 370, 400, 50), "DELETE           P")) {
    }*/
	GUI.EndGroup();
}
function OnGUI () {
    GUI.skin = profileskin;
    thePMenu();
    //PlayerPrefs.SetInt("sA_active",0);
    //PlayerPrefs.SetInt("sB_active",0);
   // PlayerPrefs.SetInt("sC_active",0);
   // PlayerPrefs.SetInt("sD_active",0);
}