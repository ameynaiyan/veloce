#pragma strict
#pragma implicit
#pragma downcast

var car : int = 0;

var DiabloFXCAM :Transform;
var ExigeFXCAM :Transform;
var MicraFXCAM :Transform;
var SP12FXCAM :Transform;
var clr:Color;
var mode:int;
public var countarray:int[];
var nop:int;

var posfl:Vector3;
var posfr:Vector3;
var posrl:Vector3;
var posrr:Vector3;

var p1car;
var p2car;
var p3car;
var p4car;
var carno:int;
function Awake(){
	//RE-enable the network messages now we've loaded the right level
	if(PlayerPrefs.GetInt("gameMode")==4){
		Network.isMessageQueueRunning = true;
		if(Network.peerType == NetworkPeerType.Server){
			Spawnplayer();
		}
		else if(Network.peerType == NetworkPeerType.Client){
			Spawnplayer();
		}
	}
}
/*function OnServerInitialized(){
	Debug.Log("Server joined");
	Spawnplayer();
}

function OnConnectedToServer(){
	Debug.Log("Client joined");
	Spawnplayer();
}*/
function Spawnplayer(){
	mode = PlayerPrefs.GetInt("gameMode");
	var c = PlayerPrefs.GetInt("p1_cc");
 	car = PlayerPrefs.GetInt("car_select");
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
	//if(carno==1)
	//{
		carno=PlayerPrefs.GetInt("car_no");
	 	if(car==3)
	 	{
	    	/*p1car=*/Network.Instantiate (SP12FXCAM , Vector3(-214.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	    	//p1car.renderer.materials[4].color=clr;
	    	
	 	}
	 	else if(car==2)
	 	{
	    	p1car=Network.Instantiate (DiabloFXCAM , Vector3(-214.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	    	//p1car.renderer.materials[1].color=clr;
	    	
	 	}
	  	else if(car==1)
	  	{
	  		/*p1car=*/Network.Instantiate (ExigeFXCAM, Vector3(-214.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	    	//p1car.renderer.materials[2].color=clr;
	    	
	  	}
	  	else if(car==0)
	  	{
	  		Network.Instantiate(Resources.Load("MicraFX"), Vector3(-214.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	  		//Network.Instantiate(MicraFXCAM, Vector3(-214.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	    	//p1car.renderer.materials[0].color=clr;
	    	Debug.Log("inst1");
	    }
		carno++;
		PlayerPrefs.SetInt("car_no",carno);
		//p1car.GetComponent("PlayerCar_Script").setid(1);
	//}
	/*else if(carno==2)
	{
		carno=PlayerPrefs.GetInt("car_no");
	 	if(car==3)
	 	{
	    	p2car=Network.Instantiate (SP12FXCAM , Vector3(-235.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	    	//p2car.renderer.materials[4].color=clr;
	    	
	 	}
	 	else if(car==2)
	 	{
	    	p2car=Network.Instantiate (DiabloFXCAM , Vector3(-235.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	    	//p2car.renderer.materials[1].color=clr;
	    	
	 	}
	  	else if(car==1)
	  	{
	  		p2car=Network.Instantiate (ExigeFXCAM, Vector3(-235.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	    	//p2car.renderer.materials[2].color=clr;
	    	
	  	}
	  	else if(car==0)
	  	{
	  		//p2car=Network.Instantiate (MicraFXCAM, Vector3(-235.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	    	Network.Instantiate(Resources.Load("MicraFX"), Vector3(-214.1964,2.451896,314), Quaternion.Euler(0,180,0),0);
	    	//p2car.renderer.materials[0].color=clr;
	    	Debug.Log("inst2");
	    	
	    }
		carno++;
		PlayerPrefs.SetInt("car_no",carno);
		 //p2car.GetComponent("PlayerCar_Script").setid(1);
	}
	else if(carno==3)
	{
		carno=PlayerPrefs.GetInt("car_no");
	 	if(car==3)
	 	{
	    	p3car=Network.Instantiate (SP12FXCAM , Vector3(-214.1964,2.451896,277), Quaternion.Euler(0,180,0),0);
	    	//p3car.renderer.materials[4].color=clr;
	    	
	 	}
	 	else if(car==2)
	 	{
	    	p1car=Network.Instantiate (DiabloFXCAM , Vector3(-214.1964,2.451896,277), Quaternion.Euler(0,180,0),0);
	    	//p3car.renderer.materials[1].color=clr;
	    	
	 	}
	  	else if(car==1)
	  	{
	  		p3car=Network.Instantiate (ExigeFXCAM, Vector3(-214.1964,2.451896,277), Quaternion.Euler(0,180,0),0);
	    	//p3car.renderer.materials[2].color=clr;
	    	
	  	}
	  	else if(car==0)
	  	{
	  		p3car=Network.Instantiate (MicraFXCAM, Vector3(-214.1964,2.451896,277), Quaternion.Euler(0,180,0),0);
	    	//p3car.renderer.materials[0].color=clr;
	    	
	    }
		carno++;
		PlayerPrefs.SetInt("car_no",carno);
	}
	else if(carno==4)
	{
		carno=PlayerPrefs.GetInt("car_no");
	 	if(car==3)
	 	{
	    	p4car=Network.Instantiate (SP12FXCAM , Vector3(-235.1964,2.451896,277), Quaternion.Euler(0,180,0),0);
	    	//p4car.renderer.materials[4].color=clr;
	    	
	 	}
	 	else if(car==2)
	 	{
	    	p4car=Network.Instantiate (DiabloFXCAM , Vector3(-235.1964,2.451896,277), Quaternion.Euler(0,180,0),0);
	    	//p4car.renderer.materials[1].color=clr;
	    	
	 	}
	  	else if(car==1)
	  	{
	  		p4car=Network.Instantiate (ExigeFXCAM, Vector3(-235.1964,2.451896,277), Quaternion.Euler(0,180,0),0);
	    	//p4car.renderer.materials[2].color=clr;
	    	
	  	}
	  	else if(car==0)
	  	{
	  		p4car=Network.Instantiate (MicraFXCAM, Vector3(-235.1964,2.451896,277), Quaternion.Euler(0,180,0),0);
	    	//p4car.renderer.materials[0].color=clr;
	    	
	    }
		carno++;
		PlayerPrefs.SetInt("car_no",carno);
	}*/
	
}


function Start () {
	
	PlayerPrefs.SetInt("car_no",1);
	countarray = new int[4];
	mode = PlayerPrefs.GetInt("gameMode");
}
@RPC
function inst(){
	Spawnplayer();
}

