var car : int = 0;
var DiabloFXCAM :Transform;
var ExigeFXCAM :Transform;
//var cam : Camera;
function Start () {

 car = PlayerPrefs.GetInt("car_select");
 
 if(car==0)
  { 	 
  
        Instantiate (DiabloFXCAM , Vector3(-939.6118,2.451896,910.2462), Quaternion.identity);
      //  cam.GetComponent(SmoothFollow2D).target = DiabloFXCAM;
  }
else if(car==1)
  {
  	Instantiate (ExigeFXCAM, Vector3(-909.0436,2.451896, 910.2462), Quaternion.identity);
  	//cam.GetComponent(SmoothFollow2D).target = ExigeFXCAM;
  }
}