public var pastTime :float;
public var BestTime : float=500;
var bt: String;
var pt: String;
var c:int;
var car:GameObject;
var ntyetstarted :boolean=true;
var timeskin:GUISkin;
var strnskin:GUISkin;
function Update()
{
	var start=PlayerPrefs.GetInt("gameactive");	
	if((start==1)&&(ntyetstarted==false))
	 {
	   c = car.GetComponent(LapInc).lap;	
	   pastTime+=Time.deltaTime;
	   ShowTime();
	 }
}
function OnTriggerEnter(col:Collider)
{	
	
	if((col.gameObject.name == "SF")&&(c==0))
		ntyetstarted=false;
		
		
	if((col.gameObject.name == "SF")&&(c>=1))
	{	
		if(pastTime<BestTime)
		{
			BestTime=pastTime;
			
		    ShowBestTime();
		}
		pastTime=0;
	}
	
	
}

function ShowBestTime()
{
	var min:int;
	var sec:int;
	min=BestTime/60;
	sec=BestTime%60;
	bt=min.ToString()+":"+sec.ToString("00");
}

function ShowTime()
{
	var min:int;
	var sec:int;
	min=pastTime/60;
	sec=pastTime%60;
	pt=min.ToString()+":"+sec.ToString("00");
}
function OnGUI()
{
	if((PlayerPrefs.GetInt("gameMode"))!=3&&PlayerPrefs.GetInt("gameactive")==1){
		GUI.skin=timeskin;
		GUI.Label (Rect (Screen.width-200,Screen.height-110,200,200), pt.ToString());
		GUI.Label (Rect (Screen.width-200,Screen.height-70,200,200), bt.ToString());
		if(c<=1)
			GUI.Label (Rect (Screen.width-200,Screen.height-70,200,200), "0:00");
			
			
			GUI.skin=strnskin;
		GUI.Label (Rect (Screen.width-200,Screen.height-120,200,200), "Lap Time");
		GUI.Label (Rect (Screen.width-200,Screen.height-80,200,200), "Best Time");
		
	}
}



	
	