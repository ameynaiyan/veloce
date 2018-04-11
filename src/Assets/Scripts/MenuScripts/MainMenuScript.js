var newSkin : GUISkin;
var logoTexture : Texture2D;
public var Attention: String="";
function theFirstMenu() {
	
   
    //layout start
    camera.GetComponent(BlurEffect).enabled = false;
    GUI.BeginGroup(Rect(0,0, Screen.width,Screen.height));
    
    //the menu background box
    //GUI.Box(Rect(0, 0, 300, 200), "");
    
    //logo picture
    //GUI.Label(Rect(Screen.width/2-160,60, 320, 180), logoTexture);
    var script = GetComponent("MainMenuScript");
    var script2 = GetComponent("SinglePlayerScript");
    var script3 = GetComponent("MainQuitScript");
    var script4 = GetComponent("MultiPlayerScript");
    var script5 = GetComponent("FadeInOut");
    
    ///////main menu buttons
    //game start button
    if(GUI.Button(Rect(-60, Screen.height-275, 400, 50), "SINGLE PLAYER")) {
    script2.enabled = true;
    script3.enabled = false;
    script4.enabled = false;
    }
    //quit button
    if(GUI.Button(Rect(-60, Screen.height-220, 400, 50), "MULTI PLAYER")) {
    script2.enabled = false;
    script3.enabled = false;
    script4.enabled = true;
    }
    if(GUI.Button(Rect(-60, Screen.height-165, 400, 50), "OPTIONS")) {
    script5.fadeOut();
    }
    if(GUI.Button(Rect(-60, Screen.height-110, 400, 50), "CREDITS")) {
    script5.fadeOut();
    yield WaitForSeconds(0.4);
    Application.LoadLevel("Credits");
    }
    if(GUI.Button(Rect(-60, Screen.height-55, 400, 50), "QUIT")) {
    script2.enabled = false;
    script3.enabled = true;
    script4.enabled = false;
    }
    
    
    //layout end
    GUI.EndGroup(); 
}
function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    theFirstMenu();
}