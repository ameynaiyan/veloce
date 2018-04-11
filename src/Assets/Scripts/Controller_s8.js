var car : int = 0;
var DiabloFXCAM :Transform;
var ExigeFXCAM :Transform;
var guiCountDown :GUIText;
var countMax :int;
var cam: GameObject;
private var countDown :int;
//var cam : Camera;
function Start () {
guiCountDown.enabled=true;
 car = PlayerPrefs.GetInt("car_select");
 PlayerPrefs.SetInt("gameactive",0);
 if(car==0)
  { 	 
  
        Instantiate (DiabloFXCAM , Vector3(-11.37331,2.451896, -604.301), Quaternion.identity);
      // cam.GetComponent(SmoothFollow).target = DiabloFXCAM;
      for(countDown=countMax;countDown>-1;countDown--)
	{
		if(countDown==0)
		{
			
			PlayerPrefs.SetInt("gameactive",1);
			guiCountDown.text="GO!";
			}
			
		else
			guiCountDown.text=countDown.ToString();
		yield WaitForSeconds(1);	
	}
	guiCountDown.enabled=false;
  }
else if(car==1)
  {
  	Instantiate (ExigeFXCAM, Vector3(13.63811,2.451896,-604.301), Quaternion.identity);
  	//cam.GetComponent(SmoothFollow).target = ExigeFXCAM;
  	for(countDown=countMax;countDown>-1;countDown--)
	{
		if(countDown==0)
		{
			PlayerPrefs.SetInt("gameactive",1);
			guiCountDown.text="GO!";
		
			}
			
		else
			guiCountDown.text=countDown.ToString();
		yield WaitForSeconds(1);	
	}
	guiCountDown.enabled=false;
  }
}