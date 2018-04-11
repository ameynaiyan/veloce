var hl1 : GameObject;
var rl : Light;
var hr1 : GameObject;
var ll: Light;
var f : uint;
var pid:int;


function Start(){
	pid = GetComponent("PlayerCar_Script").id;
	hl1.renderer.enabled = false;
	hr1.renderer.enabled = false;
	rl.enabled = !rl.enabled;
	ll.enabled = !ll.enabled;
	f = 0;
}

function Update () {
	if(pid==1){
	if(Input.GetKeyUp(KeyCode.Keypad0))
	{
		if(f==0)
		{
			hl1.renderer.enabled = true;
			hr1.renderer.enabled = true;
			f = 1;
		}
		else if(f==1)
		{
			hl1.renderer.enabled = false;
			hr1.renderer.enabled = false;
			f = 0;
		}
		rl.enabled = !rl.enabled;
		ll.enabled = !ll.enabled;
	}
	}
	else if(pid==2){
	if(Input.GetKeyUp(KeyCode.E))
	{
		if(f==0)
		{
			hl1.renderer.enabled = true;
			hr1.renderer.enabled = true;
			f = 1;
		}
		else if(f==1)
		{
			hl1.renderer.enabled = false;
			hr1.renderer.enabled = false;
			f = 0;
		}
		rl.enabled = !rl.enabled;
		ll.enabled = !ll.enabled;
	}
	}
}