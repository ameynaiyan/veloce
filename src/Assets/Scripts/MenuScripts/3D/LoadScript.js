function Start(){
	var gs=PlayerPrefs.GetInt("gameState");
	yield WaitForSeconds(3.0);
	animation.Play("gs0");
	yield WaitForSeconds(0.8);
	if(gs==0){
		PlayerPrefs.SetInt("gameState",1);
		Application.LoadLevel("spl2");
	}
	if(gs==1){
		PlayerPrefs.SetInt("gameState",2);
		Application.LoadLevel("Profile");
	}
	if(gs==2){
		PlayerPrefs.SetInt("gameState",3);
		Application.LoadLevel("m3");	
	}	
	if(gs==10){
		PlayerPrefs.SetInt("res",0);
		Application.LoadLevel("s52");
	}
	if(gs==11){
		PlayerPrefs.SetInt("res",0);
		Application.LoadLevel("s11");
	}
	if(gs==12){
		PlayerPrefs.SetInt("res",0);
		Application.LoadLevel("s7ns");
	}
	if(gs==13){
		PlayerPrefs.SetInt("res",0);
		Application.LoadLevel("s9t");
	}
	if(gs==14){
		PlayerPrefs.SetInt("res",0);
		Application.LoadLevel("s8");
	}
	if(gs==15){
		PlayerPrefs.SetInt("res",0);
		Application.LoadLevel("s6");
	}
}