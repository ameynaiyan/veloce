public var fadeOutTexture : Texture2D;
public var fadeSpeed = 1.2;
 
var drawDepth = -1000;
public var alpha = 1.0;
public var fadeDir = -1;
function OnGUI(){
 
	alpha += fadeDir * fadeSpeed * Time.deltaTime;	
	alpha = Mathf.Clamp01(alpha);	
 
	GUI.color.a = alpha;
 
	GUI.depth = drawDepth;
 
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeOutTexture);
}
 
function fadeIn(){
	fadeDir = -1;	
}
function fadeOut(){
	fadeDir = 1;
}
function b()
{
	alpha = 1.0;
}
 
function Start(){
	alpha=1;
	fadeIn();
}