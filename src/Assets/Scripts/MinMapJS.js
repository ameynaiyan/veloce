var minimapRT:RenderTexture;
var minimapM:Material;
var minimapRT2:RenderTexture;
var minimapM2:Material;
var border:Texture;
var pid:int;
var mapcam:Camera;
	// Use this for initialization
function Start () {
	pid = GetComponent("PlayerCar_Script").id;
	if(pid==2){
		mapcam.targetTexture = minimapRT2;	
	}
}
	
	// Update is called once per frame
function OnGUI () {
	if(PlayerPrefs.GetInt("gameactive")==1)
	{	
		if(pid==1)
			GUI.Label(new Rect(Screen.width - 275,Screen.height/4-135,270,270),border);
		else if(pid==2)
			GUI.Label(new Rect(Screen.width - 275,3*Screen.height/4-135,270,270),border);
		if(Event.current.type == EventType.Repaint) 
		{
			if(pid==1)
				Graphics.DrawTexture(new Rect(Screen.width - 268,Screen.height/4-128,256,256),minimapRT,minimapM);
			else if(pid==2)
				Graphics.DrawTexture(new Rect(Screen.width - 268,3*Screen.height/4-128,256,256),minimapRT2,minimapM2);
		}
	}
}