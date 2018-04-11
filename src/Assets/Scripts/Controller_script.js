
var car : int = 0;
var car2: int = 0;

var DiabloFXCAM :Transform;
var ExigeFXCAM :Transform;
var MicraFXCAM :Transform;
var SP12FXCAM :Transform;

var DiabloE :Transform;
var ExigeE :Transform;
var MicraE :Transform;
var SP12E :Transform;

var countMax :int;
private var countDown :int;
var pl:GameObject;
var plcam:Camera;
var s321:AudioClip;
var sgo:AudioClip;
var clr:Color;
var mode:int;
public var countarray:int[];
var nop:int;

public var value:int;
var icar:GameObject;

var posfl:Vector3;
var posfr:Vector3;
var posrl:Vector3;
var posrr:Vector3;

var p1car;
var p2car;
var p3car;
var p4car;

var rot:float;
function Start () {
	PlayerPrefs.SetInt("ulock",0);
	countarray = new int[4];
	mode = PlayerPrefs.GetInt("gameMode");
	if(mode==1)
		nop=4;
	else if(mode==2)
		nop=1;
	else if(mode==3)
		nop=2;
	PlayerPrefs.SetInt("noOfPlayers",nop);
	var c = PlayerPrefs.GetInt("p1_cc");
	var c2 = PlayerPrefs.GetInt("p2_cc");
 	car = PlayerPrefs.GetInt("car_select");
 	car2 = PlayerPrefs.GetInt("car_select2");
 	/*if(mode==4)
 		PlayerPrefs.SetInt("nwReady",0);
 	else*/
 		PlayerPrefs.SetInt("nwReady",1);
  	PlayerPrefs.SetInt("gameactive",0);
 	
 	if(mode!=4){
 	if(c==1)
 		clr = Color.black;
 	else if(c==2)
 		clr = Color(0.15,0.15,0.15);
 	else if(c==3)
 		clr = Color(0.2,0,0.1);
 	else if(c==4)
 		clr = Color(0,0,0.1);
 	else if(c==5)
 		clr = Color.blue;
 	else if(c==6)
 		clr = Color.cyan;
 	else if(c==7)
 		clr = Color.green;
 	else if(c==8)
 		clr = Color.yellow;
 	else if(c==9)
 		clr = Color(1,0.1,0);
 	else if(c==10)
 		clr = Color.red;
 	else if(c==11)
 		clr = Color(0.3,0.3,0.3);
 	else if(c==12)
 		clr = Color.white;
 	
 	if(mode!=3)
 	{
 	if(car==3)
 	{
    	p1car=Instantiate (SP12FXCAM , posrl, Quaternion.Euler(0,rot,0));
    	p1car.renderer.materials[4].color=clr;
    	if(mode==1)
    	{
    		p2car = Instantiate (DiabloE , posrr, Quaternion.Euler(0,rot,0));
    		p2car.renderer.materials[1].color=Color.yellow;
    		p3car = Instantiate (DiabloE , posfl, Quaternion.Euler(0,rot,0));
    		p3car.renderer.materials[1].color=Color.blue;
    		p4car = Instantiate (SP12E , posfr, Quaternion.Euler(0,rot,0));
    		p4car.renderer.materials[4].color=Color.red;
    	}
 	}
 	else if(car==2)
 	{
    	p1car=Instantiate (DiabloFXCAM , posrl, Quaternion.Euler(0,rot,0));
    	p1car.renderer.materials[1].color=clr;
    	if(mode==1)
    	{
    		p2car = Instantiate (SP12E , posrr, Quaternion.Euler(0,rot,0));
    		p2car.renderer.materials[4].color=Color.black;
    		p3car = Instantiate (DiabloE , posfl, Quaternion.Euler(0,rot,0));
    		p3car.renderer.materials[1].color=Color.cyan;
    		p4car = Instantiate (SP12E , posfr, Quaternion.Euler(0,rot,0));
    		p4car.renderer.materials[4].color=Color.grey;
    	}
 	}
  	else if(car==1)
  	{
  		p1car=Instantiate (ExigeFXCAM, posrl, Quaternion.Euler(0,rot,0));
    	p1car.renderer.materials[2].color=clr;
    	if(mode==1)
    	{
    		p2car = Instantiate (ExigeE , posrr, Quaternion.Euler(0,rot,0));
    		p2car.renderer.materials[2].color=Color.green;
    		p3car = Instantiate (ExigeE , posfl, Quaternion.Euler(0,rot,0));
    		p3car.renderer.materials[2].color=Color.blue;
    		p4car = Instantiate (ExigeE , posfr, Quaternion.Euler(0,rot,0));
    		p4car.renderer.materials[2].color=Color.white;
    	}
  	}
  	else if(car==0)
  	{
  		p1car=Instantiate (MicraFXCAM, posrl, Quaternion.Euler(0,rot,0));
    	p1car.renderer.materials[0].color=clr;
    	if(mode==1)
    	{
    		p2car = Instantiate (MicraE , posrr, Quaternion.Euler(0,rot,0));
    		p2car.renderer.materials[0].color=Color.red;
    		p3car = Instantiate (MicraE , posfl, Quaternion.Euler(0,rot,0));
    		p3car.renderer.materials[0].color=Color.yellow;
    		p4car = Instantiate (MicraE , posfr, Quaternion.Euler(0,rot,0));
    		p4car.renderer.materials[0].color=Color.white;
    	}
    }
    p1car.GetComponent("PlayerCar_Script").setid(1);
  	}
  	else
  	{
  	if(car==3)
 	{
    	p1car=Instantiate (SP12FXCAM , posfl, Quaternion.Euler(0,rot,0));
    	p1car.renderer.materials[4].color=clr;
 	}
 	else if(car==2)
 	{
    	p1car=Instantiate (DiabloFXCAM , posfl, Quaternion.Euler(0,rot,0));
    	p1car.renderer.materials[1].color=clr;
 	}
  	else if(car==1)
  	{
  		p1car=Instantiate (ExigeFXCAM, posfl, Quaternion.Euler(0,rot,0));
    	p1car.renderer.materials[2].color=clr;
  	}
  	else if(car==0)
  	{
  		p1car=Instantiate (MicraFXCAM, posfl, Quaternion.Euler(0,rot,0));
    	p1car.renderer.materials[0].color=clr;
  	}
  	p1car.GetComponent("PlayerCar_Script").setid(1);
  	if(c2==1)
 		clr = Color.black;
 	else if(c2==2)
 		clr = Color(0.15,0.15,0.15);
 	else if(c2==3)
 		clr = Color(0.2,0,0.1);
 	else if(c2==4)
 		clr = Color(0,0,0.1);
 	else if(c2==5)
 		clr = Color.blue;
 	else if(c2==6)
 		clr = Color.cyan;
 	else if(c2==7)
 		clr = Color.green;
 	else if(c2==8)
 		clr = Color.yellow;
 	else if(c2==9)
 		clr = Color(1,0.1,0);
 	else if(c2==10)
 		clr = Color.red;
 	else if(c2==11)
 		clr = Color(0.3,0.3,0.3);
 	else if(c2==12)
 		clr = Color.white;
  	
  	if(car2==3)
 	{
    	p2car=Instantiate (SP12FXCAM , posfr, Quaternion.Euler(0,rot,0));
    	p2car.renderer.materials[4].color=clr;
 	}
 	else if(car2==2)
 	{
    	p2car=Instantiate (DiabloFXCAM , posfr, Quaternion.Euler(0,rot,0));
    	p2car.renderer.materials[1].color=clr;
 	}
  	else if(car2==1)
  	{
  		p2car=Instantiate (ExigeFXCAM, posfr, Quaternion.Euler(0,rot,0));
    	p2car.renderer.materials[2].color=clr;
  	}
  	else if(car2==0)
  	{
  		p2car=Instantiate (MicraFXCAM, posfr, Quaternion.Euler(0,rot,0));
    	p2car.renderer.materials[0].color=clr;
  	}
  	p2car.GetComponent("PlayerCar_Script").setid(2);
  	}
  	}
  	if(PlayerPrefs.GetInt("nwReady")==1){
  	pl.animation.Play("321");	
	for(countDown=countMax;countDown>-1;countDown--)
	{
		if(countDown==0)
		{
			PlayerPrefs.SetInt("gameactive",1);
			audio.PlayOneShot(sgo);
			yield WaitForSeconds(0.833);
		}
		else
		{
			if(countDown!=4)
				audio.PlayOneShot(s321);
				//guiCountDown.text=countDown.ToString();
		}
		yield WaitForSeconds(1);	
	}
	plcam.enabled=false;
	}
}
function Update(){
	if(mode==1||mode==3){
		countarray[0]=p1car.GetComponent(PosInc).count;
		countarray[1]=p2car.GetComponent(PosInc).count;
		if(mode==1||mode==4){
			countarray[2]=p3car.GetComponent(PosInc).count;
			countarray[3]=p4car.GetComponent(PosInc).count;
		}
	}
	
		
}


