var newSkin : GUISkin;
var roboskin:GUISkin;
var roboskin2:GUISkin;
var otype:int=0;
var p1 : int;
var tc:float;
var tt:float;
var prog:float;
var hSliderValue:float;
function Start(){
	p1 = PlayerPrefs.GetInt("p1_profile");
	hSliderValue=PlayerPrefs.GetFloat("vol");
	//PlayerPrefs.SetInt("mode",2);
	
}
function OMenu () {
	GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.height));
	GUI.Label(Rect(30, 30, 800, 370), "OPTIONS");
	if(GUI.Button(Rect(-60,Screen.height-60, 400, 70), "MAIN MENU")) {
		Application.LoadLevel("m3");
    }
    if(GUI.Button(Rect(-60,100, 400, 70), "SOUND")) {
		otype=1;
    }
    if(GUI.Button(Rect(-60,180, 400, 70), "PROFILE")) {
		otype=2;
    }
    if(GUI.Button(Rect(-60,260, 400, 70), "GRAPHICS")) {
		otype=3;
    }
    if(GUI.Button(Rect(-60,340, 400, 70), "DIFFICULTY")) {
		otype=4;
    }
    if(otype==2){
   	GUI.skin=roboskin2;
	if(p1==1)
	{
   		GUI.Label(Rect(Screen.width/2-100, 60, 800, 370), PlayerPrefs.GetString("sA_name"));
   		GUI.skin = roboskin;
   		GUI.Label(Rect(Screen.width/2-100, 200, 800, 370), ("Total Tracks Unlocked = "+PlayerPrefs.GetInt("SavedLevel1").ToString()));
   		GUI.Label(Rect(Screen.width/2-100, 250, 800, 370), ("Total Cars Unlocked = "+PlayerPrefs.GetInt("SavedCar1").ToString()));
   		GUI.skin=roboskin2;
   		prog = (PlayerPrefs.GetInt("SavedLevel1")+PlayerPrefs.GetInt("SavedCar1"))/(tt+tc)*100;
   		GUI.Label(Rect(Screen.width/2-100, 350, 800, 370), ("Total Progress = "+(Mathf.Floor(prog*100)/100).ToString()+"%" ));
   	}
   	if(p1==2)
	{
   		GUI.Label(Rect(Screen.width/2-100, 60, 800, 370), PlayerPrefs.GetString("sB_name"));
   		GUI.skin = roboskin;
   		GUI.Label(Rect(Screen.width/2-100, 200, 800, 370), ("Total Tracks Unlocked = "+PlayerPrefs.GetInt("SavedLevel2").ToString()));
   		GUI.Label(Rect(Screen.width/2-100, 250, 800, 370), ("Total Cars Unlocked = "+PlayerPrefs.GetInt("SavedCar2").ToString()));
   		GUI.skin=roboskin2;
   		prog = (PlayerPrefs.GetInt("SavedLevel2")+PlayerPrefs.GetInt("SavedCar2"))/(tt+tc)*100;
   		GUI.Label(Rect(Screen.width/2-100, 350, 800, 370), ("Total Progress = "+(Mathf.Floor(prog*100)/100).ToString()+"%" ));
   	}
   	if(p1==3)
	{
   		GUI.Label(Rect(Screen.width/2-100, 60, 800, 370), PlayerPrefs.GetString("sC_name"));
   		GUI.skin = roboskin;
   		GUI.Label(Rect(Screen.width/2-100, 200, 800, 370), ("Total Tracks Unlocked = "+PlayerPrefs.GetInt("SavedLevel3").ToString()));
   		GUI.Label(Rect(Screen.width/2-100, 250, 800, 370), ("Total Cars Unlocked = "+PlayerPrefs.GetInt("SavedCar3").ToString()));
   		GUI.skin=roboskin2;
   		prog = (PlayerPrefs.GetInt("SavedLevel3")+PlayerPrefs.GetInt("SavedCar3"))/(tt+tc)*100;
   		GUI.Label(Rect(Screen.width/2-100, 350, 800, 370), ("Total Progress = "+(Mathf.Floor(prog*100)/100).ToString()+"%" ));
   	}
   	if(p1==4)
	{
   		GUI.Label(Rect(Screen.width/2-100, 60, 800, 370), PlayerPrefs.GetString("sD_name"));
   		GUI.skin = roboskin;
   		GUI.Label(Rect(Screen.width/2-100, 200, 800, 370), ("Total Tracks Unlocked = "+PlayerPrefs.GetInt("SavedLevel4").ToString()));
   		GUI.Label(Rect(Screen.width/2-100, 250, 800, 370), ("Total Cars Unlocked = "+PlayerPrefs.GetInt("SavedCar4").ToString()));
   		GUI.skin=roboskin2;
   		prog = (PlayerPrefs.GetInt("SavedLevel4")+PlayerPrefs.GetInt("SavedCar4"))/(tt+tc)*100;
   		GUI.Label(Rect(Screen.width/2-100, 350, 800, 370), ("Total Progress = "+(Mathf.Floor(prog*100)/100).ToString()+"%" ));
   	}
    GUI.skin = newSkin;
    if(GUI.Button(new Rect(Screen.width-410, Screen.height-150,400,70),"RESET PROGRESS")){
    	PlayerPrefs.SetInt("SavedLevel1",0);
    	PlayerPrefs.SetInt("SavedLevel1",0);
    }
    if(GUI.Button(new Rect(Screen.width-410, Screen.height-70,400,70),"CHANGE PROFILE")){
    	PlayerPrefs.SetInt("gameState",1);
    	Application.LoadLevel("Loading2");
    }
    }
    
    if(otype==1){
    
    GUI.Label(Rect(Screen.width/2-100, 60, 800, 370), "SOUND LEVEL");
    hSliderValue = GUI.HorizontalSlider (Rect (Screen.width/2-100, 90, 500, 10), hSliderValue, 0.0, 1.0);
    if(GUI.Button(Rect (Screen.width/2-100, 120, 50, 50),"SET"))
    	PlayerPrefs.SetFloat("vol",hSliderValue);
    
    }
    
    if(otype==3){
     GUI.Label(Rect(Screen.width/2-100, 60, 800, 370), "GRAPHICS LEVEL");
    if(GUI.Button(new Rect(Screen.width/2-100, 100,200,40),"LOW")){
    	QualitySettings.currentLevel=QualityLevel.Fastest;
    }
    if(GUI.Button(new Rect(Screen.width/2+100, 100,200,40),"MEDIUM")){
    	QualitySettings.currentLevel=QualityLevel.Good;
    }
    if(GUI.Button(new Rect(Screen.width/2+300, 100,200,40),"HIGH")){
    	QualitySettings.currentLevel=QualityLevel.Beautiful;
    }
    
    }
    if(otype==4)
    {
    GUI.Label(Rect(Screen.width/2-100, 60, 800, 370), "DIFFICULTY LEVEL");
    if(GUI.Button(new Rect(Screen.width/2-100, 100,200,40),"EASY")){
    	PlayerPrefs.SetFloat("ai_torque",0.7);
    	PlayerPrefs.SetInt("mode",1);
    }
    if(GUI.Button(new Rect(Screen.width/2+100, 100,200,40),"NORMAL")){
    	PlayerPrefs.SetFloat("ai_torque",1);
    	PlayerPrefs.SetInt("mode",2);
    }
    if(GUI.Button(new Rect(Screen.width/2+300, 100,200,40),"ADVANCED")){
    	PlayerPrefs.SetFloat("ai_torque",1.3);
    	PlayerPrefs.SetInt("mode",3);
    }
    }
	GUI.EndGroup();
}
function OnGUI () {
    GUI.skin = newSkin;
    OMenu();
}