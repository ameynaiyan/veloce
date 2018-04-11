var cam : Camera;
var ke : int;
var pla : GameObject;
var pakskin : GUISkin;
function Start(){
yield WaitForSeconds(5.0);
ke=1;
}
function Update () {
if(cam.fieldOfView > 150){
	cam.fieldOfView = cam.fieldOfView-cam.fieldOfView*0.016;
	pla.GetComponent(autorotpl).spd = -3.2;
	}
else if(cam.fieldOfView > 135){
	cam.fieldOfView = cam.fieldOfView-cam.fieldOfView*0.01;
	pla.GetComponent(autorotpl).spd = -2;
	}
else if(cam.fieldOfView > 120){
	cam.fieldOfView = cam.fieldOfView-cam.fieldOfView*0.008;
	pla.GetComponent(autorotpl).spd = -1;
	}
else if(cam.fieldOfView > 100){
	cam.fieldOfView = cam.fieldOfView-cam.fieldOfView*0.005;
	pla.GetComponent(autorotpl).spd = -0.4;
	}
else if(cam.fieldOfView > 90){
	cam.fieldOfView = cam.fieldOfView-cam.fieldOfView*0.001;
	pla.GetComponent(autorotpl).spd = -0.4;
	}
else
{
	pla.GetComponent(autorotpl).spd = -0.4;
	cam.fieldOfView = 90;
	}
if(ke==1){
	if(Input.anyKey)
		Application.LoadLevel("m3");
}
}
function g(){
GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.width));
if(ke==1)
{
	GUI.Label (Rect (Screen.width/2-100,Screen.height-50,400,50), "Press any Key...");
}
GUI.EndGroup(); 
}

function OnGUI(){
	GUI.skin=pakskin;
	g();
}