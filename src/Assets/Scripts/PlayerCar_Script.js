// ----------- CAR TUTORIAL-----------------
public var id:int;
// These variables allow the script to power the wheels of the car.
var FrontLeftWheel : WheelCollider;
var FrontRightWheel : WheelCollider;
var cam : Camera;
// These variables are for the gears, the array is the list of ratios. The script
// uses the defined gear ratios to determine how much torque to apply to the wheels.
var GearRatio : float[];
var CurrentGear : int = 0;
// These variables are just for applying torque to the wheels and shifting gears.
// using the defined Max and Min Engine RPM, the script can determine what gear the
// car needs to be in.
var EngineTorque : float = 230.0;
var MaxEngineRPM : float = 2000.0;
var MinEngineRPM : float = 1000.0;
var Nitrous : boolean;
var MaxNitro :int = 50;
private var EngineRPM : float = 0.0;
var tempEngtor : float;
var rpmskin : GUISkin;
var rpmskin2 : GUISkin;
var nenable : boolean;
var dotcount : int;
var pwpactive : boolean=false;
var nitrocount:int=3;
var nbar:Texture;
var hudtexp1:Texture;
var poison:Texture;
var poi:boolean;

var rpm0 :Texture;
var rpm1 :Texture;
var rpm2 :Texture;
var rpm3 :Texture;
var rpm4 :Texture;
var rpm5 :Texture;
var rpm6 :Texture;
var rpm7 :Texture;
var rpm8 :Texture;

var start:int=0;
var mode:int;

var timer:float = 5.0;
var timern:float = 1.0;
private var lastPosition : Vector3;

var p1h:int;
var p1v:int;
function Awake(){
	if(PlayerPrefs.GetInt("gameMode")==4){
	if(!networkView.isMine){
		//We aren't the network owner, disable this script
		//RPC's and OnSerializeNetworkView will STILL get trough!
		enabled=false;	
	}}
}

function Start () {
	cheating=PlayerPrefs.GetInt("cheat1");
	// I usually alter the center of mass to make the car more stable. I'ts less likely to flip this way.
	rigidbody.centerOfMass += Vector3(0, -1.4, .25);
	tempEngtor = 0;
	nenable=false;
	dotcount = 0;
	mode = PlayerPrefs.GetInt("gameMode");
	if(mode==3)
	{
	if(id==1)
		cam.rect=new Rect(0,0.5,1,0.5);
	else
		cam.rect=new Rect(0,0,1,0.5);
    }
}

function Update () {
	start=PlayerPrefs.GetInt("gameactive");
	var dot = Vector3.Dot(transform.up, Vector3.up);
	if(dot<0)
	{
		dotcount++;
		if(dotcount>=10)
		{
			resetcar();
		}
		dotcount=0;
	}
		// Compute the engine RPM based on the average RPM of the two wheels, then call the shift gear function
	EngineRPM = (FrontLeftWheel.rpm + FrontRightWheel.rpm)/2 * GearRatio[CurrentGear];
	ShiftGears();

	// set the audio pitch to the percentage of RPM to the maximum RPM plus one, this makes the sound play
	// up to twice it's pitch, where it will suddenly drop when it switches gears.
	audio.pitch = Mathf.Abs(EngineRPM / MaxEngineRPM) + 1.0 ;
	// this line is just to ensure that the pitch does not reach a value higher than is desired.
	if ( audio.pitch > 3.0 ) {
		audio.pitch = 3.0;
	}
	cam.fieldOfView = 55 + rigidbody.velocity.magnitude*2.4*0.183;
	
	
	if(start==1)
	{
	if(id==1||mode==4)
	{
	if((networkView.isMine&&mode==4)||mode!=4){
	cam.GetComponent("AudioListener").enabled = true;
	if(Input.GetKeyDown(KeyCode.RightShift)&&Nitrous==true)
	{
		pwpactive=true;
		nenable = true;
	}
	if(Input.GetKeyUp(KeyCode.RightShift)&&Nitrous==true)
	{
		pwpactive=false;
		nenable=false;
	}
	if(Input.GetKeyUp(KeyCode.KeypadPeriod))
	{
		resetcar();
	}
	}
	}
	else if(id==2){
	cam.GetComponent("AudioListener").enabled = false;
	if(Input.GetKeyDown(KeyCode.Q)&&Nitrous==true)
	{
		pwpactive=true;
		nenable = true;
	}
	if(Input.GetKeyUp(KeyCode.Q)&&Nitrous==true)
	{
		pwpactive=false;
		nenable=false;
	}
	if(Input.GetKeyUp(KeyCode.R))
	{
		resetcar();
	}
	}
	if((nenable==true&&pwpactive==true&&nitrocount>0)||PlayerPrefs.GetInt("cheat1")==1)
	{	
		timern-=Time.deltaTime;
		tempEngtor=1.7;
		cam.GetComponent(BloomAndLensFlares).bloomBlurIterations=3;
		cam.GetComponent(MotionBlur).blurAmount = 0.7;
		cam.GetComponent(BloomAndLensFlares).bloomIntensity=1+(rigidbody.velocity.magnitude*2.4*0.0043);
		if(timern<=0)
		{
			if(nitrocount!=0)
			{
				nitrocount--;
			}
			else
			{
				pwpactive=false;
				tempEngtor=1;
				cam.GetComponent(MotionBlur).blurAmount = rigidbody.velocity.magnitude*2.4*0.002;
				cam.GetComponent(BloomAndLensFlares).bloomBlurIterations=1;
				cam.GetComponent(BloomAndLensFlares).bloomIntensity=1+(rigidbody.velocity.magnitude*2.4*0.0043);
			}
			timern=1.0;
		}
	}
	else
	{
		tempEngtor=1;
		cam.GetComponent(MotionBlur).blurAmount = rigidbody.velocity.magnitude*2.4*0.002;
		cam.GetComponent(BloomAndLensFlares).bloomBlurIterations=1;
		cam.GetComponent(BloomAndLensFlares).bloomIntensity=1+(rigidbody.velocity.magnitude*2.4*0.0043);
	}
	if(poi==true)
	{
		tempEngtor=0.3;
		timer-=Time.deltaTime;
		if(timer<=0)
		{
			tempEngtor=1;
			pwpactive=false;
			timer=5;
			poi=false;
		}
	}
	if(id==1||mode==4){
	if((networkView.isMine&&mode==4)||mode!=4){
	// finally, apply the values to the wheels.	The torque applied is divided by the current gear, and
	// multiplied by the user input variable.
	FrontLeftWheel.motorTorque = EngineTorque * GearRatio[CurrentGear]* Input.GetAxis("Vertical")*tempEngtor;
	FrontRightWheel.motorTorque = EngineTorque * GearRatio[CurrentGear]* Input.GetAxis("Vertical")*tempEngtor;

	// the steer angle is an arbitrary value multiplied by the user input.
	FrontLeftWheel.steerAngle = (16 - rigidbody.velocity.magnitude*2.4*0.04545) * Input.GetAxis("Horizontal");
	FrontRightWheel.steerAngle = (16 - rigidbody.velocity.magnitude*2.4*0.04545) * Input.GetAxis("Horizontal");
	rigidbody.drag=0.5+(rigidbody.velocity.magnitude*2.4*0.001)/(CurrentGear+1);
	}
	}
	else if(id==2){
	// finally, apply the values to the wheels.	The torque applied is divided by the current gear, and
	// multiplied by the user input variable.
	FrontLeftWheel.motorTorque = EngineTorque * GearRatio[CurrentGear]* Input.GetAxis("Vertical2")*tempEngtor;
	FrontRightWheel.motorTorque = EngineTorque * GearRatio[CurrentGear]* Input.GetAxis("Vertical2")*tempEngtor;

	// the steer angle is an arbitrary value multiplied by the user input.
	FrontLeftWheel.steerAngle = (16 - rigidbody.velocity.magnitude*2.4*0.04545) * Input.GetAxis("Horizontal2");
	FrontRightWheel.steerAngle = (16 - rigidbody.velocity.magnitude*2.4*0.04545) * Input.GetAxis("Horizontal2");
	rigidbody.drag=0.5+(rigidbody.velocity.magnitude*2.4*0.001)/(CurrentGear+1);
	}
	}/*
	if(mode==4)
	{
			//Save some network bandwidth; only send an rpc when the position has moved more than X
			if(Vector3.Distance(transform.position, lastPosition)>=0.05){
				lastPosition=transform.position;
			
			//Send the position Vector3 over to the others; in this case all clients
			networkView.RPC("SetPosition", RPCMode.Others, transform.position);
		}
	}*/
}
function OnTriggerEnter(col:Collider)
{
	if(col.gameObject.name == "pwp_Nitroboost"&&pwpactive!=true)
	{
		if(nitrocount!=3)
			nitrocount++;
	}
	if(col.gameObject.name == "pwp_Dgr"&&pwpactive!=true)
	{
		pwpactive=true;
		poi=true;
	}
}
function ShiftGears() {
	// this funciton shifts the gears of the vehcile, it loops through all the gears, checking which will make
	// the engine RPM fall within the desired range. The gear is then set to this "appropriate" value.
	if ( EngineRPM >= MaxEngineRPM ) {
		var AppropriateGear : int = CurrentGear;
		
		for ( var i = 0; i < GearRatio.length; i ++ ) {
			if ( FrontLeftWheel.rpm * GearRatio[i] < MaxEngineRPM ) {
				AppropriateGear = i;
				break;
			}
		}
		
		CurrentGear = AppropriateGear;
	}
	
	if ( EngineRPM <= MinEngineRPM && FrontLeftWheel.motorTorque >= -600 ) {
		AppropriateGear = CurrentGear;
		
		for ( var j = GearRatio.length-1; j >= 0; j -- ) {
			if ( FrontLeftWheel.rpm * GearRatio[j] > MinEngineRPM ) {
				AppropriateGear = j;
				break;
			}
		}
		
		CurrentGear = AppropriateGear;
	}
	else if( FrontLeftWheel.motorTorque < -600)
	{
		CurrentGear = 3;
	}
}

function setid(sid:int){
	id = sid;
	Debug.Log("id = "+id);
}

function resetcar()
{
	transform.Translate(0, 4, 0);
    transform.rotation = (Quaternion.Euler(new Vector3(transform.rotation.x, transform.rotation.y,transform.rotation.z)));
}

function OnGUI () {
	
	
	if(start==1){
	GUI.skin=rpmskin;
	if(mode!=3){
	//GUI.Label (Rect (Screen.width-80,350,200,150), (Mathf.Abs(Mathf.Floor(EngineRPM*3))).ToString());
	if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>0)
		GUI.Label (Rect (256-rpm0.width,Screen.height-96+24,rpm0.width,16), rpm0);
	if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>1000)
		GUI.Label (Rect (256-rpm1.width,Screen.height-112+24,rpm1.width,16), rpm1);
	if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>2000)
		GUI.Label (Rect (256-rpm2.width,Screen.height-128+24,rpm2.width,16), rpm2);
	if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>3000)
		GUI.Label (Rect (256-rpm3.width,Screen.height-144+24,rpm3.width,16), rpm3);
	if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>4000)
		GUI.Label (Rect (256-rpm4.width,Screen.height-160+24,rpm4.width,16), rpm4);
	if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>5000)
		GUI.Label (Rect (256-rpm5.width,Screen.height-176+24,rpm5.width,16), rpm5);
	if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>6000)
		GUI.Label (Rect (256-rpm6.width,Screen.height-192+24,rpm6.width,16), rpm6);
	if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>7000)
		GUI.Label (Rect (256-rpm7.width,Screen.height-208+24,rpm7.width,16), rpm7);
	if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>8000)
		GUI.Label (Rect (256-rpm8.width,Screen.height-224+24,rpm8.width,16), rpm8);
	
	GUI.Label (Rect (0,Screen.height-256,256,256), hudtexp1);
	if(nitrocount>=1)
		GUI.Label (Rect (11,Screen.height-121,8,40), nbar);
	if(nitrocount>=2)
		GUI.Label (Rect (11,Screen.height-155,8,40), nbar);
	if(nitrocount==3)
		GUI.Label (Rect (11,Screen.height-188,8,40), nbar);
	if(poi==true)
	{
		GUI.Label (Rect (0,Screen.height-256,256,256), poison);
	}
	if(EngineRPM>=0)
	{
		GUI.Label (Rect (28,Screen.height-56,200,200), (CurrentGear+1).ToString());
	}
	else
	{
		GUI.Label (Rect (28,Screen.height-56,200,200), "R");
	}
	}
	else
	{
		var scr = GetComponent("RotatableGuiItem");
		scr.enabled=false;
		
		GUI.skin=rpmskin2;
		if(id==1){
			GUI.skin=rpmskin;
			GUI.Label (Rect (Screen.width/2,0,300,100), "PLAYER ONE");
			GUI.skin=rpmskin2;
			GUI.Label (Rect (24,Screen.height/2-70,200,300), (Mathf.Abs(Mathf.Floor(rigidbody.velocity.magnitude*2.4))).ToString());
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>0)
				GUI.Label (Rect (20+(rpm0.width+6)*0,Screen.height/2-26,rpm0.width,16), rpm0);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>1000)
				GUI.Label (Rect (20+(rpm0.width+6)*1,Screen.height/2-26,rpm1.width,16), rpm1);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>2000)
				GUI.Label (Rect (20+(rpm0.width+6)*2,Screen.height/2-26,rpm2.width,16), rpm2);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>3000)
				GUI.Label (Rect (20+(rpm0.width+6)*3,Screen.height/2-26,rpm3.width,16), rpm3);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>4000)
				GUI.Label (Rect (20+(rpm0.width+6)*4,Screen.height/2-26,rpm4.width,16), rpm4);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>5000)
				GUI.Label (Rect (20+(rpm0.width+6)*5,Screen.height/2-26,rpm5.width,16), rpm5);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>6000)
				GUI.Label (Rect (20+(rpm0.width+6)*6,Screen.height/2-26,rpm6.width,16), rpm6);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>7000)
				GUI.Label (Rect (20+(rpm0.width+6)*7,Screen.height/2-26,rpm7.width,16), rpm7);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>8000)
				GUI.Label (Rect (20+(rpm0.width+6)*8,Screen.height/2-26,rpm8.width,16), rpm8);
				
			if(nitrocount>=1)
				GUI.Label (Rect (10,Screen.height/2-26-nbar.height*1,8,40), nbar);
			if(nitrocount>=2)
				GUI.Label (Rect (10,Screen.height/2-26-nbar.height*2,8,40), nbar);
			if(nitrocount==3)
				GUI.Label (Rect (10,Screen.height/2-26-nbar.height*3,8,40), nbar);
			if(poi==true)
			{
				GUI.Label (Rect (0,Screen.height/2-256,256,256), poison);
			}
		}
		else{
			GUI.skin=rpmskin;
			GUI.Label (Rect (Screen.width/2,Screen.height/2,300,100), "PLAYER TWO");
			GUI.skin=rpmskin2;
			GUI.Label (Rect (24,Screen.height-70,200,150), (Mathf.Abs(Mathf.Floor(rigidbody.velocity.magnitude*2.4))).ToString());
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>0)
				GUI.Label (Rect (20+(rpm0.width+6)*0,Screen.height-26,rpm0.width,16), rpm0);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>1000)
				GUI.Label (Rect (20+(rpm0.width+6)*1,Screen.height-26,rpm1.width,16), rpm1);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>2000)
				GUI.Label (Rect (20+(rpm0.width+6)*2,Screen.height-26,rpm2.width,16), rpm2);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>3000)
				GUI.Label (Rect (20+(rpm0.width+6)*3,Screen.height-26,rpm3.width,16), rpm3);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>4000)
				GUI.Label (Rect (20+(rpm0.width+6)*4,Screen.height-26,rpm4.width,16), rpm4);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>5000)
				GUI.Label (Rect (20+(rpm0.width+6)*5,Screen.height-26,rpm5.width,16), rpm5);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>6000)
				GUI.Label (Rect (20+(rpm0.width+6)*6,Screen.height-26,rpm6.width,16), rpm6);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>7000)
				GUI.Label (Rect (20+(rpm0.width+6)*7,Screen.height-26,rpm7.width,16), rpm7);
			if(Mathf.Abs(Mathf.Floor(EngineRPM*3))>8000)
				GUI.Label (Rect (20+(rpm0.width+6)*8,Screen.height-26,rpm8.width,16), rpm8);
				
			if(nitrocount>=1)
				GUI.Label (Rect (10,Screen.height-26-nbar.height*1,8,40), nbar);
			if(nitrocount>=2)
				GUI.Label (Rect (10,Screen.height-26-nbar.height*2,8,40), nbar);
			if(nitrocount==3)
				GUI.Label (Rect (10,Screen.height-26-nbar.height*3,8,40), nbar);
			if(poi==true)
			{
				GUI.Label (Rect (0,Screen.height-256,256,256), poison);
			}
		}
	}
	}
}
function OnSerializeNetworkView(stream : BitStream, info : NetworkMessageInfo)
{
	if (stream.isWriting){
		//Executed on the owner of the networkview; 
		//The server sends it's position over the network
		
		var pos : Vector3 = transform.position;		
		stream.Serialize(pos);//"Encode" it, and send it
				
	}else{
		//Executed on the others; 
		//The clients receive a position and set the object to it
		
		var posReceive : Vector3 = Vector3.zero;
		stream.Serialize(posReceive); //"Decode" it and receive it
		transform.position = posReceive;
		
	}
}
/*
@RPC
function SetPosition(newPos : Vector3){
	//This RPC is in this case always called by the server,
	// but executed on all clients
	
	transform.position=newPos;	
}
*/