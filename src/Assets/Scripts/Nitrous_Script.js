var nl1 : GameObject;
var nl2 : GameObject;
var nr1 : GameObject;
var nr2 : GameObject;
var car : GameObject;

function Start(){
	nl1.renderer.enabled=false;
	nl2.renderer.enabled=false;
	nr1.renderer.enabled=false;
	nr2.renderer.enabled=false;
}

function Update () {
	var ne = car.GetComponent("PlayerCar_Script").nenable;
	var pa = car.GetComponent("PlayerCar_Script").pwpactive;
	var nc = car.GetComponent("PlayerCar_Script").nitrocount;
	if(ne==true&&pa==true&&nc>0){
		nl1.renderer.enabled=true;
		nl2.renderer.enabled=true;
		nr1.renderer.enabled=true;
		nr2.renderer.enabled=true;
	}
	else
	{
		nl1.renderer.enabled=false;
		nl2.renderer.enabled=false;
		nr1.renderer.enabled=false;
		nr2.renderer.enabled=false;
	}
}