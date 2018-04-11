var StartTime :float;
var guiTime :GUIText;
public var timeremaining: float;
var guiTimeUp: GUIText;
var timeskin:GUISkin;
var timestring:String;
var gcam:Camera;
var m:int;
var t_id:int;
function Start()
{
	guiTimeUp.enabled=false;
	m=PlayerPrefs.GetInt("mode");
	switch(t_id)
	{
		case 1:
		switch(m)
		{
		case 1: StartTime=100.0;break;
		case 2: StartTime=90.0;break;
		case 3: StartTime=74.0;break;
		}
		break;
		case 2:
		switch(m)
		{
		case 1: StartTime=65.0;break;
		case 2: StartTime=57.0;break;
		case 3: StartTime=50.0;break;
		}
		break;
		case 3:
		switch(m)
		{
		case 1: StartTime=150.0;break;
		case 2: StartTime=140.0;break;
		case 3: StartTime=130.0;break;
		}
		break;
		case 4:
		switch(m)
		{
		case 1: StartTime=95.0;break;
		case 2: StartTime=85.0;break;
		case 3: StartTime=74.0;break;
		}
		break;
		case 5:
		switch(m)
		{
		case 1: StartTime=105.0;break;
		case 2: StartTime=90.0;break;
		case 3: StartTime=78.0;break;
		}
		break;
		case 6:
		switch(m)
		{
		case 1: StartTime=80.0;break;
		case 2: StartTime=70.0;break;
		case 3: StartTime=60.0;break;
		}
		break;
	}
	timeremaining=StartTime;
}

function Update()
{
	if(PlayerPrefs.GetInt("gameMode")==2){
		var start=PlayerPrefs.GetInt("gameactive");
		if(start==1)
			CountD();
	}
}

function CountD()
{
	
	var tos = GetComponent(Timeoutsound);
	if(timeremaining<6)
		tos.enabled=true;
	timeremaining -= Time.deltaTime;
	ShowTime();
	if(timeremaining<0)
	{
		guiTimeUp.enabled=true;
		gcam.enabled=true;
		guiTimeUp.text="TIME IS UP!!"; 
		guiTime.text="0";
		timeIsUp();
	}

}

function ShowTime()
{
	var min:int;
	var sec:int;
	min=timeremaining/60;
	sec=timeremaining%60;
	timestring=min.ToString()+":"+sec.ToString("00");
}

function timeIsUp()
{
 	PlayerPrefs.SetInt("gameactive",0);
	yield WaitForSeconds(3);
	PlayerPrefs.SetInt("res",0);
	Application.LoadLevel("result");
}

function OnGUI()
{
	if(PlayerPrefs.GetInt("gameMode")==2&&PlayerPrefs.GetInt("gameactive")==1){
	GUI.skin=timeskin;
	GUI.Label (Rect (45,64,200,150), timestring);
	if(timeremaining<0)
		GUI.Label (Rect (Screen.width/2-100,24,200,150), timestring);
	}
}
		