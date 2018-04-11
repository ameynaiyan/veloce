public var count :int;
var cpt :int;
var fwd:boolean=true;
var start:int;
var wdtex:Texture;
var postex:Texture;
var laptex:Texture;
var lap:int;
var def:GUISkin;
var pid:int;
var nop:int;
var countarray:int[];
var isai:boolean;
var ctrl:GameObject;
var pos:int=3;
public var cdiff:int;
function Start()
{
	count=0;
	cpt=2;
	if(isai==false)
		pid = GetComponent("PlayerCar_Script").id;
	lap = GetComponent("LapInc").lap;
	nop = PlayerPrefs.GetInt("noOfPlayers");
	if(PlayerPrefs.GetInt("gameMode")==1||PlayerPrefs.GetInt("gameMode")==3)
	{
		countarray = ctrl.GetComponent("Controller_script").countarray;
		
	}
}
function Update()
{
	start = PlayerPrefs.GetInt("gameactive");
	lap = GetComponent("LapInc").lap;
	if(PlayerPrefs.GetInt("gameMode")!=4)
	countarray = ctrl.GetComponent("Controller_script").countarray;
	calcPosition();
	if(PlayerPrefs.GetInt("gameMode")==1&&isai==true)
		cdiff=countarray[0]-count;
}
function calcPosition()
{
	var tpos:int=1;
	if(pid==1){
	if(PlayerPrefs.GetInt("gameMode")!=4){
	if(countarray[0]<countarray[1])
		tpos++;
	if(PlayerPrefs.GetInt("gameMode")==1)
	{
		if(countarray[0]<countarray[2])
			tpos++;
		if(countarray[0]<countarray[3])
			tpos++;
	}
	}
	}
	else if(pid==2){
	if(countarray[1]<=countarray[0])
		tpos++;
	if(PlayerPrefs.GetInt("gameMode")==1)
	{
		if(countarray[1]<=countarray[2])
			tpos++;
		if(countarray[1]<=countarray[3])
			tpos++;
	}
	}
	pos = tpos;
}
function OnTriggerEnter(col:Collider)
{
	if(start==1&&lap>0)
	{
	if(col.gameObject.name == "p0")
	{
		if(fwd==true)
		{
			if(cpt==0)
			{
				fwd=false;
				count--;
			}
			else if(cpt==1)
			{
				fwd=false;
				count--;
				count--;
			}
			else if(cpt==2)
			{
				count++;
			}
		}
		else if(fwd==false)
		{
			if(cpt==0)
			{ 
				fwd=true;
				count++;
			}
			else if(cpt==1)
			{
				count--;
			}
			else if(cpt==2)
			{
				fwd=true;
				count++;
				count++;
			}
		}
		cpt=0;
	}
	if(col.gameObject.name == "p1")
	{
		if(fwd==true)
		{
			if(cpt==1)
			{
				fwd=false;
				count--;
			}
			else if(cpt==2)
			{
				fwd=false;
				count--;
				count--;
			}
			else if(cpt==0)
			{
				count++;
			}
		}
		else if(fwd==false)
		{
			if(cpt==1)
			{
				fwd=true;
				count++;
			}
			else if(cpt==2)
			{
				count--;
			}
			else if(cpt==0)
			{
				fwd=true;
				count++;
				count++;
			}
		}
		cpt=1;
	}
	if(col.gameObject.name == "p2")
	{
		if(fwd==true)
		{
			if(cpt==2)
			{
				fwd=false;
				count--;
			}
			else if(cpt==0)
			{
				fwd=false;
				count--;
				count--;
			}
			else if(cpt==1)
			{
				count++;
			}
		}
		else if(fwd==false)
		{
			if(cpt==2)
			{
				fwd=true;
				count++;
			}
			else if(cpt==0)
			{
				count--;
			}
			else if(cpt==1)
			{
				fwd=true;
				count++;
				count++;
			}
		}
		cpt=2;
	}
	}
	
}

function OnGUI()
{
	if(isai==false){
		//GUI.Label(new Rect(300,300,400,70),count.ToString());
	if(fwd==false&&PlayerPrefs.GetInt("res")==0){
		if(Time.time%2<1){
			if(PlayerPrefs.GetInt("gameMode")==3)
			{
				if(pid==1){
					GUI.Label(new Rect(Screen.width/2-64,Screen.height/4-64,128,128),wdtex);
				}
				else if(pid==2){
					GUI.Label(new Rect(Screen.width/2-64,3*Screen.height/4-64,128,128),wdtex);
				}
			}
			else
				GUI.Label(new Rect(Screen.width/2-128,Screen.height/2-128,256,256),wdtex);
		}	
	}
	
	GUI.skin=def;
	if((PlayerPrefs.GetInt("gameMode")==1||PlayerPrefs.GetInt("gameMode")==4)&&PlayerPrefs.GetInt("gameactive")==1){
		GUI.Label (Rect (Screen.width-270,Screen.height-350,270,360), postex);
		GUI.Label (Rect (Screen.width-170,Screen.height-262,200,150), "Pos");
		GUI.Label (Rect (Screen.width-165,Screen.height-226,200,150), pos.ToString()+"/"+nop.ToString());
	}
	if((PlayerPrefs.GetInt("gameMode")==3)&&PlayerPrefs.GetInt("gameactive")==1){
		if(pid==1){
			GUI.Label (Rect (161,0,160,160), laptex);
			GUI.Label (Rect (208,36,200,150), "Pos");
			GUI.Label (Rect (203,72,200,150), pos.ToString()+"/"+nop.ToString());
		}
		else if(pid==2)
		{
			GUI.Label (Rect (161,Screen.height/2,160,160), laptex);
			GUI.Label (Rect (208,Screen.height/2+36,200,150), "Pos");
			GUI.Label (Rect (203,Screen.height/2+72,200,150), pos.ToString()+"/"+nop.ToString());	
		}
	}
	}
}