#pragma strict


//These are the actual "buttons" that we use to click on to trigger an action to happen.
//In our case they cause a level to be loaded depending on the collider you click on.
//You will drag the collider button for each level into it's corresponding slot in the inspector.
var level1Collider : GameObject;
var level2Collider : GameObject;
var level3Collider : GameObject;



function Update () 
{	       
	if (Input.GetMouseButtonDown (0)) {
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition); //typical mouse click input
		var hit:RaycastHit;
	if (Physics.Raycast (ray, hit, 20)) {
		
		if(hit.collider.name == "Level1Collider") //this is all of our code for triggering loading levels when a collider is clicked on
		Application.LoadLevel("m2");
		
		if(hit.collider.name == "Level2Collider")
		Application.LoadLevel("s6");
		
		if(hit.collider.name == "Level3Collider")
		Application.LoadLevel("s5n");
		}
	}
}