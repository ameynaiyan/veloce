var n:String;
var s:GUISkin;
function OnGUI() {
	GUI.skin=s;
	n=GUI.TextField(new Rect(100,100,200,20),n);
}