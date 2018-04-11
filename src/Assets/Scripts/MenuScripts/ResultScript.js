var newSkin : GUISkin;
var roboskin: GUISkin;
var unlockcartex:Texture;
var unlockleveltex:Texture;

var wontex:Texture;
var p1wontex:Texture;
var p2wontex:Texture;
var losttex:Texture;
var timeuptex:Texture;

var c1:int;
var c2:int;
var c3:int;
var c4:int;
var win:int=0;

var c1pos:int=0;
var c2pos:int=0;
var c3pos:int=0;
var c4pos:int=0;

var pos:int;
var mode:int;
var lgt:int;
var pc:String;
var i:int;
var j:int;
var temp:int;

function Start(){
	PlayerPrefs.SetInt("cheat1",0);
	PlayerPrefs.SetInt("cheat2",0);
	PlayerPrefs.SetInt("cheat3",0);
	c1 = PlayerPrefs.GetInt("Pl1");
	c2 = PlayerPrefs.GetInt("Pl2");
	c3 = PlayerPrefs.GetInt("Pl3");
	c4 = PlayerPrefs.GetInt("Pl4");
	mode = PlayerPrefs.GetInt("gameMode");
	if(mode==1)
	{
		win=1;
		if((c1>=c2)&&(c1>=c3)&&(c1>=c4))
		{
			c1pos=1;
			if((c2>=c3)&&(c2>=c4))
			{
				c2pos=2;
				if(c3>=c4)
				{
					c3pos=3;
					c4pos=4;
				}
				else
				{
					c4pos=3;
					c3pos=4;
				}
			}
			if((c3>=c2)&&(c3>=c4))
			{
				c3pos=2;
				if(c2>=c4)
				{
					c2pos=3;
					c4pos=4;
				}
				else
				{
					c4pos=3;
					c2pos=4;
				}
			}
			if((c4>=c3)&&(c4>=c2))
			{
				c4pos=2;
				if(c3>=c2)
				{
					c3pos=3;
					c2pos=4;
				}
				else
				{
					c2pos=3;
					c3pos=4;
				}
			}		
		}
		else if((c2>=c1)&&(c2>=c3)&&(c2>=c4))
		{
			win=2;
			c2pos=1;
			if((c1>=c3)&&(c1>=c4))
			{
				c1pos=2;
				if(c3>=c4)
				{
					c3pos=3;
					c4pos=4;
				}
				else
				{
					c4pos=3;
					c3pos=4;
				}
			}
			if((c3>=c1)&&(c3>=c4))
			{
				c3pos=2;
				if(c1>=c4)
				{
					c1pos=3;
					c4pos=4;
				}
				else
				{
					c4pos=3;
					c1pos=4;
				}
			}
			if((c4>=c3)&&(c4>=c1))
			{
				c4pos=2;
				if(c3>=c1)
				{
					c3pos=3;
					c1pos=4;
				}
				else
				{
					c1pos=3;
					c3pos=4;
				}
			}		
		}
		else if((c3>=c2)&&(c3>=c1)&&(c3>=c4))
		{
			win=3;
			c3pos=1;
			if((c1>=c2)&&(c1>=c4))
			{
				c1pos=2;
				if(c2>=c4)
				{
					c2pos=3;
					c4pos=4;
				}
				else
				{
					c4pos=3;
					c2pos=4;
				}
			}
			if((c2>=c1)&&(c2>=c4))
			{
				c2pos=2;
				if(c1>=c4)
				{
					c1pos=3;
					c4pos=4;
				}
				else
				{
					c4pos=3;
					c1pos=4;
				}
			}
			if((c4>=c2)&&(c4>=c1))
			{
				c4pos=2;
				if(c2>=c1)
				{
					c2pos=3;
					c1pos=4;
				}
				else
				{
					c1pos=3;
					c2pos=4;
				}
			}		
		}
		else if((c4>=c2)&&(c4>=c3)&&(c4>=c1))
		{
			win=4;
			c4pos=1;
			if((c1>=c3)&&(c1>=c2))
			{
				c1pos=2;
				if(c3>=c2)
				{
					c3pos=3;
					c2pos=4;
				}
				else
				{
					c2pos=3;
					c3pos=4;
				}
			}
			if((c3>=c1)&&(c3>=c2))
			{
				c3pos=2;
				if(c1>=c2)
				{
					c1pos=3;
					c2pos=4;
				}
				else
				{
					c2pos=3;
					c1pos=4;
				}
			}
			if((c2>=c3)&&(c2>=c1))
			{
				c2pos=2;
				if(c3>=c1)
				{
					c3pos=3;
					c1pos=4;
				}
				else
				{
					c1pos=3;
					c3pos=4;
				}
			}		
		}		
	}
	else if(mode==2)
	{
	   if(PlayerPrefs.GetInt("res")==1)
	   	win=1;
	   else
	   	win=2;
	 }  
	if(mode==3)
	{
		if(c1>c2)
			win=1;
		else
			win=2;
	}
		
}
function RMenu () {
	GUI.Label(Rect(30, 30, 800, 370), "RACE RESULTS");
	if(GUI.Button(Rect(-60,Screen.height-60, 400, 70), "RESTART RACE")) {
		PlayerPrefs.SetInt("ulock",0);
		Application.LoadLevel("loading2");
    }
    if(GUI.Button(Rect(Screen.width-340,Screen.height-60, 400, 70), "MAIN MENU")) {
		PlayerPrefs.SetInt("gameState",2);
		PlayerPrefs.SetInt("ulock",0);
		Application.LoadLevel("loading2");
    }
    if(PlayerPrefs.GetInt("gameMode")==1)
    {
    	GUI.skin = roboskin;
    	switch(win)
    	{
    	case 1: GUI.Label(new Rect(Screen.width/2-256,Screen.height/2-90-50,512,180),wontex);
    			break;
    	default:GUI.Label(new Rect(Screen.width/2-256,Screen.height/2-90-50,512,180),losttex);
    			break;
    	}
    	
    	GUI.Label(new Rect(Screen.width/2-30,Screen.height/2+25+c1pos*25,300,100),c1pos.ToString()+" - You");
    	GUI.Label(new Rect(Screen.width/2-30,Screen.height/2+25+c2pos*25,300,100),c2pos.ToString()+" - Zeus");
    	GUI.Label(new Rect(Screen.width/2-30,Screen.height/2+25+c3pos*25,300,100),c3pos.ToString()+" - Thor");
    	GUI.Label(new Rect(Screen.width/2-30,Screen.height/2+25+c4pos*25,300,100),c4pos.ToString()+" - Isis");
    	GUI.skin = newSkin;
    }
    else if(PlayerPrefs.GetInt("gameMode")==2)
    {
    	if(win==1)
    	GUI.Label(new Rect(Screen.width/2-256,Screen.height/2-90-50,512,180),wontex);
    	else if(win==2)
    	GUI.Label(new Rect(Screen.width/2-256,Screen.height/2-90-50,512,180),timeuptex);
    }
    else if(PlayerPrefs.GetInt("gameMode")==3)
    {
    	switch(win)
    	{
    	case 1: GUI.Label(new Rect(Screen.width/2-256,Screen.height/2-90-50,512,180),p1wontex);
    			break;
    	case 2:GUI.Label(new Rect(Screen.width/2-256,Screen.height/2-90-50,512,180),p2wontex);
    			break;
    	}
    }
    
}

function OnGUI () {
    GUI.skin = newSkin;
    if(PlayerPrefs.GetInt("ulock")==1)
    	GUI.Label(new Rect(Screen.width-276,20,256,90),unlockleveltex);
    if(PlayerPrefs.GetInt("ulock")==2)
    	GUI.Label(new Rect(Screen.width-276,20,256,90),unlockcartex);
    RMenu();
}