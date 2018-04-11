var lap :int;
var cpt :int;
var lapback :Texture;
var speedskin : GUISkin;
var nol : int;
private var value:int;
var pid:int;
var isai:boolean;
var timewin:boolean=false;
var res:boolean=false;
var cftex:Texture;
var gcam:Camera;
var timecontainer:GameObject;
var carvalue:int;
var ctrl:GameObject;
var p1_prof1:int=0;
function Start()
{
	value=ctrl.GetComponent("Controller_script").value;
	lap=0;
	cpt=2;
	if(isai==false)
		pid = GetComponent("PlayerCar_Script").id;
}
function OnTriggerEnter(col:Collider)
{
	
	if((col.gameObject.name == "SF")&&(cpt==2))
	{
		lap++;
		cpt=0;
	}
	if(col.gameObject.name == "CPT1"&&cpt==0)
	{
		cpt=1;
	}
	if(col.gameObject.name == "CPT2"&&cpt==1)
	{
		cpt=2;
	}
	if(PlayerPrefs.GetInt("gameMode")==1&&PlayerPrefs.GetInt("gameactive")==1){
		if(lap==nol+1)
		{
				PlayerPrefs.SetInt("gameactive",0);
				
	            Debug.Log("SavedLevel = value");
	            if(isai==true)
	            	gcam.enabled=true;
	            else{
		            p1_prof1=PlayerPrefs.GetInt("p1_profile");
					switch(p1_prof1)
					{
					case 1: if(PlayerPrefs.GetInt("SavedLevel1")<value){
						        PlayerPrefs.SetInt("SavedLevel1", value);
						    	PlayerPrefs.SetInt("ulock",1);
						    }
							break;
					case 2: if(PlayerPrefs.GetInt("SavedLevel2")<value){
						        PlayerPrefs.SetInt("SavedLevel2", value);
						    	PlayerPrefs.SetInt("ulock",1);
						    }
							break;
					case 3: if(PlayerPrefs.GetInt("SavedLevel3")<value){
						       	PlayerPrefs.SetInt("SavedLevel3", value);
						    	PlayerPrefs.SetInt("ulock",1);
						    }
							break;
					case 4: if(PlayerPrefs.GetInt("SavedLevel4")<value){
						        PlayerPrefs.SetInt("SavedLevel4", value);
						    	PlayerPrefs.SetInt("ulock",1);
						    }
							break;
					}
		            
	            }
	            PlayerPrefs.SetInt("Pl1",ctrl.GetComponent("Controller_script").countarray[0]);
	            PlayerPrefs.SetInt("Pl2",ctrl.GetComponent("Controller_script").countarray[1]);
	            PlayerPrefs.SetInt("Pl3",ctrl.GetComponent("Controller_script").countarray[2]);
	            PlayerPrefs.SetInt("Pl4",ctrl.GetComponent("Controller_script").countarray[3]);
				yield WaitForSeconds(3.0);
				PlayerPrefs.SetInt("res",1);
	            Application.LoadLevel("result");
	            
		}
	}
	else if(PlayerPrefs.GetInt("gameMode")==2&&PlayerPrefs.GetInt("gameactive")==1)
	{
		if(lap==2&&timecontainer.GetComponent(Timer).timeremaining>0)
		{
			PlayerPrefs.SetInt("gameactive",0);
			timewin=true;
			yield WaitForSeconds(3.0);
			PlayerPrefs.SetInt("res",1);
			PlayerPrefs.SetFloat("tr",timecontainer.GetComponent(Timer).timeremaining);
			p1_prof1=PlayerPrefs.GetInt("p1_profile");
			switch(p1_prof1)
			{
			case 1: if(PlayerPrefs.GetInt("SavedCar1")<value){
						PlayerPrefs.SetInt("SavedCar1",value);
						PlayerPrefs.SetInt("ulock",2);
					}
					break;
			case 2: if(PlayerPrefs.GetInt("SavedCar2")<value){
						PlayerPrefs.SetInt("SavedCar2",value);
						PlayerPrefs.SetInt("ulock",2);
					}
					break;
			case 3: if(PlayerPrefs.GetInt("SavedCar3")<value){
						PlayerPrefs.SetInt("SavedCar3",value);
						PlayerPrefs.SetInt("ulock",2);
					}
					break;
			case 4: if(PlayerPrefs.GetInt("SavedCar4")<value){
						PlayerPrefs.SetInt("SavedCar4",value);
						PlayerPrefs.SetInt("ulock",2);
					}
					break;
			}
			Application.LoadLevel("result");
		}
	}
	if(PlayerPrefs.GetInt("gameMode")==3&&PlayerPrefs.GetInt("gameactive")==1)
	{
		if(lap==nol+1)
		{
		PlayerPrefs.SetInt("gameactive",0);
		PlayerPrefs.SetInt("Pl1",ctrl.GetComponent("Controller_script").countarray[0]);
	    PlayerPrefs.SetInt("Pl2",ctrl.GetComponent("Controller_script").countarray[1]);
		/*if(pid==1)
			PlayerPrefs.SetInt("res",1);
		else if(pid==2)
			PlayerPrefs.SetInt("res",2);*/
		Application.LoadLevel("result");
		}
	}
}

function OnGUI()
{
	if(isai==false){
	GUI.skin=speedskin;
	if(PlayerPrefs.GetInt("gameactive")==1){
		if(PlayerPrefs.GetInt("gameMode")==3){
			if(pid==2){
				GUI.Label (Rect (0,Screen.height/2,160,160), lapback);
				GUI.Label (Rect (50,Screen.height/2+36,200,150), "Lap");
				GUI.Label (Rect (45,Screen.height/2+72,200,150), (lap.ToString()+"/"+nol));
			}
			else if(pid==1)
			{
				GUI.Label (Rect (0,0,160,160), lapback);
				GUI.Label (Rect (50,36,200,150), "Lap");
				GUI.Label (Rect (45,72,200,150), (lap.ToString()+"/"+nol));
			}
		}
		else if(PlayerPrefs.GetInt("gameMode")!=2){
			GUI.Label (Rect (0,0,160,160), lapback);
			GUI.Label (Rect (50,36,200,150), "Lap");
			GUI.Label (Rect (45,72,200,150), (lap.ToString()+"/"+nol));
		}
	}
	if(lap==nol+1||timewin==true)
	{
		
		
		if(PlayerPrefs.GetInt("res")==0)
			GUI.Label(new Rect(Screen.width/2-128,Screen.height/2-128,256,256),cftex);
	}
	}
}