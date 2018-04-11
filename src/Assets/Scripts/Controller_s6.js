var car : int = 0;
var DiabloFXCAM :Transform;
var ExigeFXCAM :Transform;
//var cam : Camera;
function Start () {

 car = PlayerPrefs.GetInt("car_select");
 
 if(car==0)
  { 	 
  
        Instantiate (DiabloFXCAM , Vector3(-733.6725,2.451896, 172.7115), Quaternion.identity);
      //  cam.GetComponent(SmoothFollow2D).target = DiabloFXCAM;
  }
else if(car==1)
  {
  	Instantiate (ExigeFXCAM, Vector3(-712.9325,2.451896,172.7115), Quaternion.identity);
  	//cam.GetComponent(SmoothFollow2D).target = ExigeFXCAM;
  }
}