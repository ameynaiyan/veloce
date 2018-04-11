var pl: GameObject;
function Start(){
	PlayerPrefs.SetInt("gameState",0);
	yield WaitForSeconds(1.9);
	pl.renderer.enabled=true;
	yield WaitForSeconds(0.1);
	Application.LoadLevel("loading2");
}