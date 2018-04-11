var cam:GameObject;
var skin:GUISkin;
var platform:GameObject;
var i:float;
var ak:GameObject;
var title:GameObject;
function Update () {
	/*if(platform.transform.position.z>-6100){
	platform.transform.Translate(Vector3(platform.transform.position.x,platform.transform.position.y,i));
	i=i-0.02;
	}*/
	if(platform.transform.position.z<-3200)
	{
		//cam.GetComponent(BlurEffect).enabled = false;
		ak.renderer.enabled=true;
		
		if(Input.anyKey){
			PlayerPrefs.SetInt("gameState",2);
			Application.LoadLevel("Profile");
		}
	}
	else if(platform.transform.position.z<-2700)
	{
		cam.GetComponent(BlurEffect).enabled = true;
	}
}
function OnGUI(){
	GUI.skin = skin;
	if(platform.transform.position.z<-2900)
	{
		//GUI.Label (Rect (Screen.width/2-100,Screen.height-50,400,50), "Press any Key...");
		title.renderer.enabled=true;
	}
}