var platform : GameObject;
var spd : double;
var i :double;

function Update () {
	platform.transform.rotation = Quaternion.Euler(0,30, i);
	i= i+spd;
}