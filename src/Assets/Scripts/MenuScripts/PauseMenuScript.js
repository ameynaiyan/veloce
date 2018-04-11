var newSkin : GUISkin;
var logoTexture : Texture2D;
var car:GameObject;
var cam:Camera;
var gcam:Camera;
function thePauseMenu() {
    //layout start
    GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.height));
    //the menu background box
    //GUI.Box(Rect(0, 0, 300, 250), "");
    var s1 = car.GetComponent("PlayerCar_Script");
    var s2 = car.GetComponent("PosInc");
    var s3 = car.GetComponent("LapInc");
    var s4 = GetComponent("CursorScript");
    var s5 = car.GetComponent("MinMapJS");
    var s6 = car.GetComponent("RotatableGuiItem");
    s1.enabled = false;
    s2.enabled = false;
    s3.enabled = false;
    s4.enabled = true;
    s5.enabled = false;
    s6.enabled = false;
    cam.enabled = false;
    gcam.enabled=true;
    //logo picture
    GUI.Label(Rect(Screen.width/2 - 80, 100, 400, 50), "GAME PAUSED");
    ///////pause menu buttons
    //game resume button
    if(GUI.Button(Rect(Screen.width/2 - 200, 200, 400, 50), "RESUME")) {
	    //resume the game
	    Time.timeScale = 1.0;
	    s1.enabled = true;
	    s2.enabled = true;
	    s3.enabled = true;
	    s5.enabled = true;
	    s6.enabled = true;
	    cam.enabled = true;
	    gcam.enabled=false;
	    AudioListener.pause=false;
	    //disable pause menu
	    var script3 = GetComponent("PauseMenuScript"); 
	    script3.enabled = false;
	    s4.enabled = false;
	    //enable cursor hiding script
	    var script4 = GetComponent("HideCursorScript"); 
	    script4.enabled = true; 
	    s4.enabled = false;
    }
    
    if(GUI.Button(Rect(Screen.width/2 - 200, 255, 400, 50), "RESTART RACE")) {
	    Time.timeScale = 1.0;
	    PlayerPrefs.SetInt("cheat1",0);
		PlayerPrefs.SetInt("cheat2",0);
		PlayerPrefs.SetInt("cheat3",0);
	    Application.LoadLevel("loading2");
    }
    //main menu return button (level 0)
    if(GUI.Button(Rect(Screen.width/2 - 200, 310, 400, 50), "MAIN MENU")) {
	    Time.timeScale = 1.0;
	    s1.enabled = true;
	    s2.enabled = true;
	    s3.enabled = true;
	    s5.enabled = true;
	    s6.enabled = true;
	    cam.enabled = true;
	    AudioListener.pause=false;
	    
		PlayerPrefs.SetInt("cheat1",0);
		PlayerPrefs.SetInt("cheat2",0);
		PlayerPrefs.SetInt("cheat3",0);
	    PlayerPrefs.SetInt("gameState",2);
	    Application.LoadLevel("loading2");
    }
    
    //quit button
    if(GUI.Button(Rect(Screen.width/2 - 200, 365, 400, 50), "QUIT")) {
	    var script5 = GetComponent("PauseMenuScript"); 
	    script5.enabled = false;
	    var script6 = GetComponent("QuitScript");
	    script6.enabled = true;
    }
    
    //layout end
    GUI.EndGroup(); 
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //show the mouse cursor
    //Screen.showCursor = true;
    
    //run the pause menu script
    thePauseMenu();
}