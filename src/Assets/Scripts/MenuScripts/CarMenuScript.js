var newSkin : GUISkin;
var circuit1: int=0;
var ckt:int=0;
var lk : Texture;
var mode:int;
var car1: int=0;
private var co1;
private var co2;
var p1_prof1:int=0;
function Start(){
p1_prof1=PlayerPrefs.GetInt("p1_profile");
switch(p1_prof1)
{
case 1: circuit1=PlayerPrefs.GetInt("SavedLevel1");
		car1=PlayerPrefs.GetInt("SavedCar1");
		break;
case 2: circuit1=PlayerPrefs.GetInt("SavedLevel2");
		car1=PlayerPrefs.GetInt("SavedCar2");
		break;
case 3: circuit1=PlayerPrefs.GetInt("SavedLevel3");
		car1=PlayerPrefs.GetInt("SavedCar3");
		break;
case 4: circuit1=PlayerPrefs.GetInt("SavedLevel4");
		car1=PlayerPrefs.GetInt("SavedCar4");
		break;
}
ckt=PlayerPrefs.GetInt("ckt_select");

mode=PlayerPrefs.GetInt("gameMode");


}
function Update()
{
 co1 = GetComponent("CarSelectScript").caroption;
  co2 = GetComponent("CarSelectScript").caroption2;
}
function theCarMenu() {
    GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.width));
    var i:int;
    var script3 = GetComponent("CarSelectScript"); 
    script3.enabled = true;
    var script5 = GetComponent("FadeInOut");
    
      
    //buttons
   
    if(mode!=3)
    {
    if(co1<=car1)
   {
    if(GUI.Button(Rect(Screen.width-340, Screen.height-70, 400, 70), "RACE")) {
    script5.fadeOut();
    PlayerPrefs.SetInt("cktstate",0);
    if(ckt==0)
    	PlayerPrefs.SetInt("gameState",10);
    else if(ckt==1)
    	PlayerPrefs.SetInt("gameState",11);
    else if(ckt==2)
    	PlayerPrefs.SetInt("gameState",12);
    else if(ckt==3)
    	PlayerPrefs.SetInt("gameState",13);
    else if(ckt==4)
    	PlayerPrefs.SetInt("gameState",14);
    else if(ckt==5)
    	PlayerPrefs.SetInt("gameState",15);
    Application.LoadLevel("loading2");
    }
    }else
    	 GUI.Label (Rect (Screen.width/2-200,Screen.height/2-200,400,400),lk);
    
    if(GUI.Button(Rect(-60,Screen.height-70, 400, 70), "SELECT CIRCUIT")) {
    script5.fadeOut();
    PlayerPrefs.SetInt("cktstate",1);
    Application.LoadLevel("m3");
    
    }
    }
    else
    {
     if((co1<=car1)&&(co2<=car1))
   {
    if(GUI.Button(Rect(Screen.width-340, Screen.height/2-35, 400, 70), "RACE")) {
    script5.fadeOut();
    PlayerPrefs.SetInt("cktstate",0);
    if(ckt==0)
    	PlayerPrefs.SetInt("gameState",10);
    else if(ckt==1)
    	PlayerPrefs.SetInt("gameState",11);
    else if(ckt==2)
    	PlayerPrefs.SetInt("gameState",12);
    else if(ckt==3)
    	PlayerPrefs.SetInt("gameState",13);
    Application.LoadLevel("loading2");
    }
    }else
     { 
     if (co1>car1)
    	 GUI.Label (Rect (Screen.width/3-100,Screen.height/4-100,200,200),lk);
    
      if(co2>car1)
         GUI.Label (Rect (Screen.width/3-100,3*Screen.height/4-100,200,200),lk);
    }
    if(GUI.Button(Rect(-60,Screen.height/2-35, 400, 70), "SELECT CIRCUIT")) {
    PlayerPrefs.SetInt("cktstate",1);
    script5.fadeOut();
    Application.LoadLevel("m3");
    }
    }
     //layout end
    GUI.EndGroup(); 
   }
    

function OnGUI () {
    //load GUI skin 
    GUI.skin = newSkin;
    
    //execute theMapMenu function
    theCarMenu();
}