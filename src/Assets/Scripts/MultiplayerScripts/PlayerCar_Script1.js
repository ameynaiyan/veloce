// ----------- CAR TUTORIAL-----------------

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
public var tempEngtor : float;
var rpmskin : GUISkin;
var nenable : boolean;
function Start () {
	// I usually alter the center of mass to make the car more stable. I'ts less likely to flip this way.
	rigidbody.centerOfMass += Vector3(0, -1.4, .25);
	tempEngtor = 1.0;
	nenable=false;
    }

function Update () {
	
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
	if(Input.GetKeyDown(KeyCode.RightShift)&&Nitrous==true)
	{
		nenable = true;
	}
	if(Input.GetKeyUp(KeyCode.RightShift)&&Nitrous==true)
	{
		nenable=false;
	}
	
	if(Input.GetKeyUp(KeyCode.R))
	{
		resetcar();
	}
	cam.fieldOfView = 55 + rigidbody.velocity.magnitude*2.4*0.183;
	if(nenable==true)
	{
		tempEngtor=1.7;
		cam.GetComponent(BloomAndLensFlares).bloomBlurIterations=3;
		cam.GetComponent(MotionBlur).blurAmount = 0.7;
		cam.GetComponent(BloomAndLensFlares).bloomIntensity=1+(rigidbody.velocity.magnitude*2.4*0.0043);
	}
	else
	{
		tempEngtor=1;
		cam.GetComponent(MotionBlur).blurAmount = rigidbody.velocity.magnitude*2.4*0.002;
		cam.GetComponent(BloomAndLensFlares).bloomBlurIterations=1;
		cam.GetComponent(BloomAndLensFlares).bloomIntensity=1+(rigidbody.velocity.magnitude*2.4*0.0043);
	}
	// finally, apply the values to the wheels.	The torque applied is divided by the current gear, and
	// multiplied by the user input variable.
	FrontLeftWheel.motorTorque = EngineTorque * GearRatio[CurrentGear]* Input.GetAxis("Vertical")*tempEngtor;
	FrontRightWheel.motorTorque = EngineTorque * GearRatio[CurrentGear] * Input.GetAxis("Vertical")*tempEngtor;
		
	// the steer angle is an arbitrary value multiplied by the user input.
	FrontLeftWheel.steerAngle = (16 - rigidbody.velocity.magnitude*2.4*0.04545) * Input.GetAxis("Horizontal");
	FrontRightWheel.steerAngle = (16 - rigidbody.velocity.magnitude*2.4*0.04545) * Input.GetAxis("Horizontal");
	//FrontLeftWheel.steerAngle = 10 * Input.acceleration.z;
	//FrontRightWheel.steerAngle = 10 * Input.acceleration.z);
	rigidbody.drag=0.5+(rigidbody.velocity.magnitude*2.4*0.001)/(CurrentGear+1);
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


function resetcar()
{
	transform.Translate(0, 4, 0);
    transform.rotation = (Quaternion.Euler(new Vector3(transform.rotation.x, transform.rotation.y,transform.rotation.z)));
}
function OnGUI () {
	
	//GUI.Label (Rect (30,350,200,150), (FrontLeftWheel.motorTorque).ToString());
	
	GUI.skin=rpmskin;
	GUI.Label (Rect (Screen.width-80,350,200,150), (Mathf.Abs(Mathf.Floor(EngineRPM*3))).ToString());
	if(EngineRPM>=0)
	{
		GUI.Label (Rect (Screen.width-70,380,200,150), (CurrentGear+1).ToString());
	}
	else
	{
		GUI.Label (Rect (Screen.width-70,380,200,150), "R");
	}
}