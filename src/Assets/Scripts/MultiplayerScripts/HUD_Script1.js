var speedskin : GUISkin;
var def : GUISkin;
var top : Texture;
function OnGUI () {
	GUI.Label(Rect (Screen.width/2,-10,Screen.width/2*2,top.height),top);
    GUI.skin=speedskin;
	GUI.Label (Rect (Screen.width/2+30,350,200,150), (Mathf.Floor(rigidbody.velocity.magnitude*2.4)).ToString());
	GUI.skin=def;
	GUI.Label (Rect (Screen.width/2+36,36,200,150), "Lap");
	GUI.Label (Rect (Screen.width-130,350,200,150), "RPM : ");
	GUI.Label (Rect (Screen.width-130,380,200,150), "Gear : ");
	GUI.Label (Rect (Screen.width/2+30,340,200,150), "Speed(kmph)");
}