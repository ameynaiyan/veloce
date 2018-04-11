var lSkin : GUISkin;
var rSkin : GUISkin;
var menuskin : GUISkin;
var obj : GameObject;
var tr0 : Texture;
var tr1 : Texture;
var tr2 : Texture;
var tr3 : Texture;
var tr4 : Texture;
var tr5 : Texture;
var lk : Texture;
var title : Texture;
var pl:GameObject;
var option:int=0;
var circuit1 :int=0;
var mback :GameObject;
var mode:int;
var laps:int;
var p1_prof1:int=0;
function Update(){
	mode = PlayerPrefs.GetInt("gameMode");
}

p1_prof1=PlayerPrefs.GetInt("p1_profile");
switch(p1_prof1)
{
case 1: circuit1=PlayerPrefs.GetInt("SavedLevel1");
		//car1=PlayerPrefs.GetInt("SavedCar1");
		break;
case 2: circuit1=PlayerPrefs.GetInt("SavedLevel2");
		//car1=PlayerPrefs.GetInt("SavedCar2");
		break;
case 3: circuit1=PlayerPrefs.GetInt("SavedLevel3");
		//car1=PlayerPrefs.GetInt("SavedCar3");
		break;
case 4: circuit1=PlayerPrefs.GetInt("SavedLevel4");
		//car1=PlayerPrefs.GetInt("SavedCar4");
		break;
}

function theMapS() {
    GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.height));
    var i:int;
    
	
    //map preview/icon
    //GUI.Label(Rect(-80, 12, 400, 70),title );
    GUI.skin = lSkin;
    if(obj.transform.position.x !=0){
	    if(GUI.Button(Rect(0, Screen.height/2-64, 128, 128), "")) {
		    if(option==1)
		    	obj.animation.Play("maplist21");
		    else if(option==2)
		    	obj.animation.Play("maplist32");
		    else if(option==3)
		    	obj.animation.Play("maplist43");
		    else if(option==4)
		    	obj.animation.Play("maplist54");
		    else if(option==5)
		    	obj.animation.Play("maplist65");
		    option--;
		    changeBack();
	    }
    }
    if(option<=circuit1)
    {
    	GUI.skin = menuskin;
    	if(GUI.Button(Rect(Screen.width-340, Screen.height-60, 400, 70), "SELECT CAR")) {
	    	if(mode!=3)
	    		Application.LoadLevel("CarSelection2");
	    	else
	    		Application.LoadLevel("CarSelectionSplitScreen");
	    	}
    	
    }else
    	 GUI.Label (Rect (Screen.width/2-200,Screen.height/2-200,400,400),lk);
    
    GUI.skin = rSkin;
    if(obj.transform.position.x !=-2500){
    if(GUI.Button(Rect(Screen.width-128, Screen.height/2-64, 128, 128), "")) {
    if(option==0)
    	obj.animation.Play("maplist12");
    else if(option==1)
    	obj.animation.Play("maplist23");
    else if(option==2)
    	obj.animation.Play("maplist34");
    else if(option==3)
    	obj.animation.Play("maplist45");
    else if(option==4)
    	obj.animation.Play("maplist56");
    option++;
    changeBack();
    }
    }
    
   
    //layout end
    GUI.EndGroup(); 
}

function changeBack()
{
if(option==0)
{
	pl.renderer.material.SetTexture("_MainTex", tr0);
	PlayerPrefs.SetInt("ckt_select",option);
}	
else if(option==1){
	pl.renderer.material.SetTexture("_MainTex", tr1);
	PlayerPrefs.SetInt("ckt_select",option);
	}
else if(option==2){
	pl.renderer.material.SetTexture("_MainTex", tr2);
	PlayerPrefs.SetInt("ckt_select",option);
	}
else if(option==3){
	pl.renderer.material.SetTexture("_MainTex", tr3);
	PlayerPrefs.SetInt("ckt_select",option);
}
else if(option==4){
	pl.renderer.material.SetTexture("_MainTex", tr4);
	PlayerPrefs.SetInt("ckt_select",option);
}
else if(option==5){
	pl.renderer.material.SetTexture("_MainTex", tr5);
	PlayerPrefs.SetInt("ckt_select",option);
}
}

function OnGUI () {
    //load GUI skin 
    GUI.skin = lSkin;
    
    //execute theMapMenu function
    theMapS();
}