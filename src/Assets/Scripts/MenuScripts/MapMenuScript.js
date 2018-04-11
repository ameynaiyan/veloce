var newSkin : GUISkin;
var mapTexture : Texture2D;
var mcam : Camera;
var mcamobj : GameObject;
var tcam : Camera;

function theMapMenu() {
    //layout start
    camera.GetComponent(BlurEffect).enabled = true;
    mcam.enabled = true;
    GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.height));
    var i:int;
    var script3 = mcamobj.GetComponent("MapSelectScript"); 
    script3.enabled = true;
    var script5 = GetComponent("FadeInOut");
    script5.fadeIn();
    //boxes
    //GUI.Box(Rect(0, 0, 400, 300), "");
    //GUI.Box(Rect(96, 20, 200, 200), "");
    //GUI.Box(Rect(96, 222, 200, 20), "Coastside Level");
    GUI.Label(Rect(30, 30, 800, 370), "SELECT CIRCUIT");
    //buttons
    
    if(GUI.Button(Rect(-60,Screen.height-60, 400, 70), "MAIN MENU")) {
    camera.GetComponent(BlurEffect).enabled = true;
    mcam.enabled = false;
    tcam.enabled = true;
    script5.b();
    camera.GetComponent(BlurEffect).enabled = false;
    var script2 = GetComponent("MapMenuScript"); 
    script2.enabled = false;
    script3.enabled = false;
    script5.fadeIn();
    PlayerPrefs.SetInt("cktstate",0);
    }
    
    //layout end
    GUI.EndGroup(); 
}

function OnGUI () {
    //load GUI skin 
    GUI.skin = newSkin;
    
    //execute theMapMenu function
    theMapMenu();
}