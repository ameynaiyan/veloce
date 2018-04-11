var newSkin : GUISkin;
var title : Texture;

function credits() {
    //GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.width));
    GUI.Label(Rect(50, 30, 800, 370), "CREDITS");
    var script5 = GetComponent("FadeInOut");
    if(GUI.Button(Rect(-80,Screen.height-60, 400, 50), "MAIN MENU")) {
    script5.fadeOut();
     
    yield WaitForSeconds(0.4);
    Application.LoadLevel("m3");
    }
    //GUI.EndGroup();
    
}

function OnGUI () {
    //load GUI skin 
    GUI.skin = newSkin;
    
    //execute theMapMenu function
    credits();
}