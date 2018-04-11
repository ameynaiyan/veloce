var platform : GameObject;
var spd : double;
var i :double;

function Update () {
	var mousePos : Vector3 = Input.mousePosition;
	if(Input.GetMouseButton(0)){
	platform.transform.rotation = Quaternion.Euler(platform.transform.rotation.x,i, 0);
	i+=(Screen.width/2-mousePos.x)/50;
	}
	else{
	platform.transform.rotation = Quaternion.Euler(platform.transform.rotation.x,i, 0);
	i+=Time.deltaTime*30*spd;
	}
}