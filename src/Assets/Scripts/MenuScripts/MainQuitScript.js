var newSkin : GUISkin;

function mainQuit() {
    //layout start
    GUI.BeginGroup(Rect(0,0, Screen.width,Screen.height));
    var script10 = GetComponent("MainQuitScript"); 
    ///////main menu buttons
    //game start button
    GUI.Label(Rect(600, 475, Screen.height-175, 50), "ARE YOU SURE ?");
    if(GUI.Button(Rect(300, Screen.height-55, 400, 50), "YES")) {
    Application.Quit();
    }
    if(GUI.Button(Rect(660, Screen.height-55, 400, 50), "NO")) {
    script10.enabled = false;
    }
    GUI.EndGroup(); 
}

function OnGUI () {
    //load GUI skin
    GUI.skin = newSkin;
    
    //execute theFirstMenu function
    mainQuit();
}