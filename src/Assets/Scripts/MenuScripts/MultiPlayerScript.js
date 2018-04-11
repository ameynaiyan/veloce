var newSkin : GUISkin;

function multiPlayer() {
    //layout start
    GUI.BeginGroup(Rect(0,0, Screen.width,Screen.height));
    var script = GetComponent("MainMenuScript");
    var script7 = GetComponent("MultiPlayerScript"); 
    var script8 = GetComponent("MapMenuScript"); 
    var script5 = GetComponent("FadeInOut");
    ///////main menu buttons
    //game start button
    if(GUI.Button(Rect(300, Screen.height-220, 400, 50), "SPLIT SCREEN")) {
    camera.GetComponent(BlurEffect).enabled = true;
    script.enabled = false;
    script7.enabled = false;
    script8.enabled = true;
    script5.b();
    }
    if(GUI.Button(Rect(660, Screen.height-220, 400, 50), "LAN PLAY")) {
    camera.GetComponent(BlurEffect).enabled = true;
    script.enabled = false;
    script7.enabled = false;
    script8.enabled = true;
    script5.b();
    }
    GUI.EndGroup(); 
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    multiPlayer();
}