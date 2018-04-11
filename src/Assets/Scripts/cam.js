var car:Transform;
var dist :float = 6.4;
var rotDamp : float = 3.0;
var ZoomRatio : float = 0.5;
private var rotVector = Vector3;


function LateUpdate(){
	var wantedAngle = car.eulerAngles.y;
	var myAngle = transform.eulerAngles.y;
	myAngle=Mathf.LerpAngle(myAngle,wantedAngle,rotDamp*Time.deltaTime);
	var curRot=Quaternion.Euler(0,myAngle,0);
	transform.position=car.position;
	transform.position-=curRot*Vector3.forward*dist;
	transform.LookAt(car);
}