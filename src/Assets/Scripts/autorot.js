var platform : GameObject;
var spd : double;
var i :double;

function Update () {
	platform.transform.rotation = Quaternion.Euler(platform.transform.rotation.x,i, 0);
	i= i+Time.deltaTime*30*spd;
}