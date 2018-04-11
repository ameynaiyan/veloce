var newSkin : GUISkin;

function areYouSure() {
    GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.height));
    GUI.Label(Rect(Screen.width/2 - 90, 100, 400, 50), "ARE YOU SURE ?");
    ///////pause menu buttons
    //game resume button
    if(GUI.Button(Rect(Screen.width/2 - 200, 150, 400, 50), "YES")) {
    Application.Quit();
    }
    if(GUI.Button(Rect(Screen.width/2 - 200, 205, 400, 50), "NO")) {
    var script7 = GetComponent("QuitScript"); 
    script7.enabled = false;
    var script8 = GetComponent("PauseMenuScript"); 
    script8.enabled = true; 
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
    areYouSure();
}