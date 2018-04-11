var lbl1 : GameObject;
var lbl2 : GameObject;
var rbl1 : GameObject;
var rbl2 : GameObject;
var pid:int;

function Start(){
	lbl1.renderer.enabled=false;
	lbl2.renderer.enabled=false;
	rbl1.renderer.enabled=false;
	rbl2.renderer.enabled=false;
	pid = GetComponent("PlayerCar_Script").id;
}

function Update () {
	if(pid==1){
	if(Input.GetKeyDown(KeyCode.DownArrow))
	{
		lbl1.renderer.enabled=true;
		lbl2.renderer.enabled=true;
		rbl1.renderer.enabled=true;
		rbl2.renderer.enabled=true;
	}
	
	else if(Input.GetKeyUp(KeyCode.DownArrow))
	{
		lbl1.renderer.enabled=false;
		lbl2.renderer.enabled=false;
		rbl1.renderer.enabled=false;
		rbl2.renderer.enabled=false;
	}
	}
	else if(pid==2){
	if(Input.GetKeyDown(KeyCode.S))
	{
		lbl1.renderer.enabled=true;
		lbl2.renderer.enabled=true;
		rbl1.renderer.enabled=true;
		rbl2.renderer.enabled=true;
	}
	
	else if(Input.GetKeyUp(KeyCode.S))
	{
		lbl1.renderer.enabled=false;
		lbl2.renderer.enabled=false;
		rbl1.renderer.enabled=false;
		rbl2.renderer.enabled=false;
	}
	}
}