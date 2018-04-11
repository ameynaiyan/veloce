var i :double;
var h = Screen.width;
function Update () {
	var mousePos : Vector3 = Input.mousePosition;
	i += (h/2-mousePos.x)/200;
	transform.rotation = Quaternion.Euler(transform.rotation.x,i, transform.rotation.z);
}