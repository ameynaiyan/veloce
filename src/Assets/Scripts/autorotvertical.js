var platform : GameObject;
var spd : double;
var i :double;

function Update () {
	platform.transform.rotation = Quaternion.Euler(platform.transform.rotation.x,platform.transform.rotation.y, i);
	i= i+Time.deltaTime*30*spd;
}