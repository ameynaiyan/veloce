var newSkin : GUISkin;
var newSkint : GUISkin;
var lSkin : GUISkin;
var rSkin : GUISkin;
var obj : GameObject;
var obj2 : GameObject;

var tr0 : Texture;
var tr1 : Texture;
var tr2 : Texture;
var tr3 : Texture;
var title : Texture;
var pl:GameObject;
var specb:Texture;
var s100:Texture;
var s80:Texture;
var s60:Texture;
var s40:Texture;
var s20:Texture;
public var caroption:int=0;
public var caroption2:int=0;
var mode:int;

function Start()
{
	mode = PlayerPrefs.GetInt("gameMode");
	PlayerPrefs.SetInt("car_select",0);
	PlayerPrefs.SetInt("car_select2",0);
	
}

function theCarS() {
    GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.height));
    var i:int;
    if(mode!=3)
    {
    GUI.Label(new Rect(Screen.width/2-359, 15, 285, 120),specb);
    changeBack();
    GUI.Label(Rect(30, 30, 800, 370), "SELECT CAR");
    GUI.skin = lSkin;
    if(obj.transform.position.z !=0){
    	if(GUI.Button(Rect(0, Screen.height/2-64, 128, 128), "")) {
    		caroption--;
   			changeBack();
   			if(caroption==0)
    			obj.animation.Play("carlist21");
    		else if(caroption==1)
    			obj.animation.Play("carlist32");
    		else if(caroption==2)
    			obj.animation.Play("carlist43");
    	}
    }
    
    
    
    
    GUI.skin = rSkin;
    if(obj.transform.position.z !=-30){
    	if(GUI.Button(Rect(Screen.width-128, Screen.height/2-64, 128, 128), "")) {
    		caroption++;
    		changeBack();
   			if(caroption==1)
    			obj.animation.Play("carlist12");
    		else if(caroption==2)
    			obj.animation.Play("carlist23");
    		else if(caroption==3)
    			obj.animation.Play("carlist34");
    	}
    }
    }
    else
    {
    GUI.Label(new Rect(Screen.width-300, Screen.height/4-60, 285, 120),specb);
    GUI.Label(new Rect(Screen.width-300, Screen.height/4*3-60, 285, 120),specb);
    changeBack();
    GUI.skin = newSkint;
    if(PlayerPrefs.GetInt("p1_profile")==1)
    	GUI.Label(Rect(30, 15, 800, 370), PlayerPrefs.GetString("sA_name"));
    else if(PlayerPrefs.GetInt("p1_profile")==2)
    	GUI.Label(Rect(30, 15, 800, 370), PlayerPrefs.GetString("sB_name"));
    else if(PlayerPrefs.GetInt("p1_profile")==3)
    	GUI.Label(Rect(30, 15, 800, 370), PlayerPrefs.GetString("sC_name"));
    else if(PlayerPrefs.GetInt("p1_profile")==4)
    	GUI.Label(Rect(30, 15, 800, 370), PlayerPrefs.GetString("sD_name"));
    GUI.skin = lSkin;
    if(obj.transform.position.z !=0){
    	if(GUI.Button(Rect(0, Screen.height/4-32, 64, 64), "")) {
    		caroption--;
   			changeBack();
   			if(caroption==0)
    			obj.animation.Play("carlist21");
    		else if(caroption==1)
    			obj.animation.Play("carlist32");
    		else if(caroption==2)
    			obj.animation.Play("carlist43");
    	}
    }
    GUI.skin = rSkin;
    if(obj.transform.position.z !=-30){
    	if(GUI.Button(Rect(Screen.width/2+100, Screen.height/4-32, 64, 64), "")) {
    		caroption++;
    		changeBack();
   			if(caroption==1)
    			obj.animation.Play("carlist12");
    		else if(caroption==2)
    			obj.animation.Play("carlist23");
    		else if(caroption==3)
    			obj.animation.Play("carlist34");
    	}
    }
    
     GUI.skin = lSkin;
    if(obj2.transform.position.z !=0){
    	if(GUI.Button(Rect(0, 3*Screen.height/4-32, 64, 64), "")) {
    		caroption2--;
   			changeBack();
   			if(caroption2==0)
    			obj2.animation.Play("carlist21");
    		else if(caroption2==1)
    			obj2.animation.Play("carlist32");
    		else if(caroption2==2)
    			obj2.animation.Play("carlist43");
    	}
    }
    GUI.skin = rSkin;
    if(obj2.transform.position.z !=-30){
    	if(GUI.Button(Rect(Screen.width/2+100, 3*Screen.height/4-32, 64, 64), "")) {
    		caroption2++;
    		changeBack();
   			if(caroption2==1)
    			obj2.animation.Play("carlist12");
    		else if(caroption2==2)
    			obj2.animation.Play("carlist23");
    		else if(caroption2==3)
    			obj2.animation.Play("carlist34");
    	}
    }
    
    }
    //layout end
    GUI.EndGroup(); 
}

function changeBack()
{
if(mode==3){

if(caroption==0){
	GUI.Label(new Rect(Screen.width-214, Screen.height/4-34, 200, 20),s20);
	GUI.Label(new Rect(Screen.width-214,Screen.height/4-7, 200, 20),s40);
	GUI.Label(new Rect(Screen.width-214, Screen.height/4+20, 200, 20),s100);
	GUI.Label(new Rect(Screen.width/2-32, 5, 64, 64), tr0);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, 15, 800, 128), "NISSAN MICRA");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select",caroption);
}
else if(caroption==1){
	GUI.Label(new Rect(Screen.width-214, Screen.height/4-34, 200, 20),s40);
	GUI.Label(new Rect(Screen.width-214, Screen.height/4-7, 200, 20),s60);
	GUI.Label(new Rect(Screen.width-214, Screen.height/4+20, 200, 20),s80);
	GUI.Label(new Rect(Screen.width/2-32, 5, 64, 64), tr1);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, 15, 800, 128), "LOTUS EXIGE SRX");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select",caroption);
}
else if(caroption==2){
	GUI.Label(new Rect(Screen.width-214, Screen.height/4-34, 200, 20),s80);
	GUI.Label(new Rect(Screen.width-214, Screen.height/4-7, 200, 20),s100);
	GUI.Label(new Rect(Screen.width-214, Screen.height/4+20, 200, 20),s60);
	GUI.Label(new Rect(Screen.width/2-32, 5, 64, 64), tr2);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, 15, 800, 128), "LAMBORGHINI DIABLO");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select",caroption);
}
else if(caroption==3){
	GUI.Label(new Rect(Screen.width-214, Screen.height/4-34, 200, 20),s100);
	GUI.Label(new Rect(Screen.width-214, Screen.height/4-7, 200, 20),s80);
	GUI.Label(new Rect(Screen.width-214, Screen.height/4+20, 200, 20),s60);
	GUI.Label(new Rect(Screen.width/2-32, 5, 64, 64), tr3);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, 15, 800, 128), "FERRARI SP12EC");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select",caroption);
}

if(caroption2==0){
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4-34, 200, 20),s20);
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4-7, 200, 20),s40);
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4+20, 200, 20),s100);
	GUI.Label(new Rect(Screen.width/2-32, Screen.height-64-5, 64, 64), tr0);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, Screen.height-15-42, 800, 128), "NISSAN MICRA");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select2",caroption2);
}
else if(caroption2==1){
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4-34, 200, 20),s40);
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4-7, 200, 20),s60);
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4+20, 200, 20),s80);
	GUI.Label(new Rect(Screen.width/2-32, Screen.height-64-5, 64, 64), tr1);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, Screen.height-15-42, 800, 128), "LOTUS EXIGE SRX");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select2",caroption2);
}
else if(caroption2==2){
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4-34, 200, 20),s80);
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4-7, 200, 20),s100);
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4+20, 200, 20),s60);
	GUI.Label(new Rect(Screen.width/2-32, Screen.height-64-5, 64, 64), tr2);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, Screen.height-15-42, 800, 128), "LAMBORGHINI DIABLO");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select2",caroption2);
}
else if(caroption2==3){
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4-34, 200, 20),s100);
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4-7, 200, 20),s80);
	GUI.Label(new Rect(Screen.width-214, 3*Screen.height/4+20, 200, 20),s60);
	GUI.Label(new Rect(Screen.width/2-32, Screen.height-64-5, 64, 64), tr3);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, Screen.height-15-42, 800, 128), "FERRARI SP12EC");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select2",caroption2);
}
}
else
{
if(caroption==0){
	GUI.Label(new Rect(Screen.width/2-274, 40, 200, 20),s20);
	GUI.Label(new Rect(Screen.width/2-274, 68, 200, 20),s40);
	GUI.Label(new Rect(Screen.width/2-274, 94, 200, 20),s100);
	GUI.Label(new Rect(Screen.width/2-64, 10, 128, 128), tr0);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, 15, 800, 128), "NISSAN MICRA");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select",caroption);
}
else if(caroption==1){
	GUI.Label(new Rect(Screen.width/2-274, 40, 200, 20),s40);
	GUI.Label(new Rect(Screen.width/2-274, 68, 200, 20),s60);
	GUI.Label(new Rect(Screen.width/2-274, 94, 200, 20),s80);
	GUI.Label(new Rect(Screen.width/2-64, 10, 128, 128), tr1);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, 15, 800, 128), "LOTUS EXIGE SRX");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select",caroption);
}
else if(caroption==2){
	GUI.Label(new Rect(Screen.width/2-274, 40, 200, 20),s80);
	GUI.Label(new Rect(Screen.width/2-274, 68, 200, 20),s100);
	GUI.Label(new Rect(Screen.width/2-274, 94, 200, 20),s60);
	GUI.Label(new Rect(Screen.width/2-64, 10, 128, 128), tr2);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, 15, 800, 128), "LAMBORGHINI DIABLO");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select",caroption);
}
else if(caroption==3){
	GUI.Label(new Rect(Screen.width/2-274, 40, 200, 20),s100);
	GUI.Label(new Rect(Screen.width/2-274, 68, 200, 20),s80);
	GUI.Label(new Rect(Screen.width/2-274, 94, 200, 20),s60);
	GUI.Label(new Rect(Screen.width/2-64, 10, 128, 128), tr3);
	GUI.skin = newSkint;
	GUI.Label(new Rect(Screen.width/2+74, 15, 800, 128), "FERRARI SP12EC");
	GUI.skin = newSkin;
	PlayerPrefs.SetInt("car_select",caroption);
}
}

}

function OnGUI () {
    //load GUI skin 
    GUI.skin = newSkin;
    changeBack();
    //execute theMapMenu function
    theCarS();
}