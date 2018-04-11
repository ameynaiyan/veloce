#pragma strict
var cam : Camera;
var p : GameObject;
var y : GameObject;
var n : GameObject;
function Update () 
{	 
	
	if (Input.GetMouseButtonDown (0)) {
		var ray = cam.ScreenPointToRay (Input.mousePosition); 
		var hit:RaycastHit;
		if (Physics.Raycast (ray, hit, 50)) {
		
			if(hit.collider.name == "y") {
				Application.Quit();
			}
		
			if(hit.collider.name == "n"){
				p.transform.Translate(0,-50,0);
			}
		}
	}
}