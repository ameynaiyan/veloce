var platform : GameObject;
var spd : double;
var i :double;

function Update () {
	platform.transform.rotation = Quaternion.Euler(340,0, i);
	i= i+spd;
}