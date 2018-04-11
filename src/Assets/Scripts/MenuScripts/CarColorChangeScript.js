var black:GUISkin;
var blue:GUISkin;
var burgundy:GUISkin;
var cyan:GUISkin;
var graphite:GUISkin;
var green:GUISkin;
var indigo:GUISkin;
var orange:GUISkin;
var red:GUISkin;
var silver:GUISkin;
var white:GUISkin;
var yellow:GUISkin;

var c0:GameObject;
var c1:GameObject;
var c2:GameObject;
var c3:GameObject;

var c02:GameObject;
var c12:GameObject;
var c22:GameObject;
var c32:GameObject;

var mode:int;

function Start()
{
	PlayerPrefs.SetInt("p1_cc",12);
	PlayerPrefs.SetInt("p2_cc",12);
	mode = PlayerPrefs.GetInt("gameMode");
	c0.renderer.materials[0].color=Color.white;
	c1.renderer.materials[2].color=Color.white;
	c2.renderer.materials[1].color=Color.white;
	c3.renderer.materials[4].color=Color.white;
	if(mode==3){
		c02.renderer.materials[0].color=Color.white;
		c12.renderer.materials[2].color=Color.white;
		c22.renderer.materials[1].color=Color.white;
		c32.renderer.materials[4].color=Color.white;
	}
}

function OnGUI () {
	GUI.BeginGroup(Rect(0, 0, Screen.width, Screen.height));
	if(mode!=3){
	GUI.skin=black;
	if(GUI.Button(new Rect(Screen.width/2-32*6-5-10*5,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color.black;
		c1.renderer.materials[2].color=Color.black;
		c2.renderer.materials[1].color=Color.black;
		c3.renderer.materials[4].color=Color.black;
		PlayerPrefs.SetInt("p1_cc",1);
	}
	GUI.skin=graphite;
	if(GUI.Button(new Rect(Screen.width/2-32*5-5-10*4,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color(0.15,0.15,0.15);
		c1.renderer.materials[2].color=Color(0.15,0.15,0.15);
		c2.renderer.materials[1].color=Color(0.15,0.15,0.15);
		c3.renderer.materials[4].color=Color(0.15,0.15,0.15);
		PlayerPrefs.SetInt("p1_cc",2);
	}	
	GUI.skin=burgundy;
	if(GUI.Button(new Rect(Screen.width/2-32*4-5-10*3,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color(0.2,0,0.1);
		c1.renderer.materials[2].color=Color(0.2,0,0.1);
		c2.renderer.materials[1].color=Color(0.2,0,0.1);
		c3.renderer.materials[4].color=Color(0.2,0,0.1);
		PlayerPrefs.SetInt("p1_cc",3);
	}
	GUI.skin=indigo;
	if(GUI.Button(new Rect(Screen.width/2-32*3-5-10*2,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color(0,0,0.1);
		c1.renderer.materials[2].color=Color(0,0,0.1);
		c2.renderer.materials[1].color=Color(0,0,0.1);
		c3.renderer.materials[4].color=Color(0,0,0.1);
		PlayerPrefs.SetInt("p1_cc",4);
	}
	GUI.skin=blue;
	if(GUI.Button(new Rect(Screen.width/2-32*2-5-10*1,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color.blue;
		c1.renderer.materials[2].color=Color.blue;
		c2.renderer.materials[1].color=Color.blue;
		c3.renderer.materials[4].color=Color.blue;
		PlayerPrefs.SetInt("p1_cc",5);
	}
	GUI.skin=cyan;
	if(GUI.Button(new Rect(Screen.width/2-32*1-5-10*0,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color.cyan;
		c1.renderer.materials[2].color=Color.cyan;
		c2.renderer.materials[1].color=Color.cyan;
		c3.renderer.materials[4].color=Color.cyan;
		PlayerPrefs.SetInt("p1_cc",6);
	}
	GUI.skin=green;
	if(GUI.Button(new Rect(Screen.width/2+32*0+5+10*0,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color.green;
		c1.renderer.materials[2].color=Color.green;
		c2.renderer.materials[1].color=Color.green;
		c3.renderer.materials[4].color=Color.green;
		PlayerPrefs.SetInt("p1_cc",7);
	}
	GUI.skin=yellow;
	if(GUI.Button(new Rect(Screen.width/2+32*1+5+10*1,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color.yellow;
		c1.renderer.materials[2].color=Color.yellow;
		c2.renderer.materials[1].color=Color.yellow;
		c3.renderer.materials[4].color=Color.yellow;
		PlayerPrefs.SetInt("p1_cc",8);
	}
	GUI.skin=orange;
	if(GUI.Button(new Rect(Screen.width/2+32*2+5+10*2,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color(1,0.1,0);
		c1.renderer.materials[2].color=Color(1,0.1,0);
		c2.renderer.materials[1].color=Color(1,0.1,0);
		c3.renderer.materials[4].color=Color(1,0.1,0);
		PlayerPrefs.SetInt("p1_cc",9);
	}
	GUI.skin=red;
	if(GUI.Button(new Rect(Screen.width/2+32*3+5+10*3,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color.red;
		c1.renderer.materials[2].color=Color.red;
		c2.renderer.materials[1].color=Color.red;
		c3.renderer.materials[4].color=Color.red;
		PlayerPrefs.SetInt("p1_cc",10);
	}
	GUI.skin=silver;
	if(GUI.Button(new Rect(Screen.width/2+32*4+5+10*4,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color(0.3,0.3,0.3);
		c1.renderer.materials[2].color=Color(0.3,0.3,0.3);
		c2.renderer.materials[1].color=Color(0.3,0.3,0.3);
		c3.renderer.materials[4].color=Color(0.3,0.3,0.3);
		PlayerPrefs.SetInt("p1_cc",11);
	}
	GUI.skin=white;
	if(GUI.Button(new Rect(Screen.width/2+32*5+5+10*5,Screen.height-150,32,32),""))
	{
		c0.renderer.materials[0].color=Color.white;
		c1.renderer.materials[2].color=Color.white;
		c2.renderer.materials[1].color=Color.white;
		c3.renderer.materials[4].color=Color.white;
		PlayerPrefs.SetInt("p1_cc",12);
	}
	}
	else
	{
	GUI.skin=black;
	if(GUI.Button(new Rect(Screen.width/2-32*6-5-10*5,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color.black;
		c1.renderer.materials[2].color=Color.black;
		c2.renderer.materials[1].color=Color.black;
		c3.renderer.materials[4].color=Color.black;
		PlayerPrefs.SetInt("p1_cc",1);
	}
	if(GUI.Button(new Rect(Screen.width/2-32*6-5-10*5,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color.black;
		c12.renderer.materials[2].color=Color.black;
		c22.renderer.materials[1].color=Color.black;
		c32.renderer.materials[4].color=Color.black;
		PlayerPrefs.SetInt("p2_cc",1);
	}
	GUI.skin=graphite;
	if(GUI.Button(new Rect(Screen.width/2-32*5-5-10*4,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color(0.15,0.15,0.15);
		c1.renderer.materials[2].color=Color(0.15,0.15,0.15);
		c2.renderer.materials[1].color=Color(0.15,0.15,0.15);
		c3.renderer.materials[4].color=Color(0.15,0.15,0.15);
		PlayerPrefs.SetInt("p1_cc",2);
	}	
	if(GUI.Button(new Rect(Screen.width/2-32*5-5-10*4,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color(0.15,0.15,0.15);
		c12.renderer.materials[2].color=Color(0.15,0.15,0.15);
		c22.renderer.materials[1].color=Color(0.15,0.15,0.15);
		c32.renderer.materials[4].color=Color(0.15,0.15,0.15);
		PlayerPrefs.SetInt("p2_cc",2);
	}
	GUI.skin=burgundy;
	if(GUI.Button(new Rect(Screen.width/2-32*4-5-10*3,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color(0.2,0,0.1);
		c1.renderer.materials[2].color=Color(0.2,0,0.1);
		c2.renderer.materials[1].color=Color(0.2,0,0.1);
		c3.renderer.materials[4].color=Color(0.2,0,0.1);
		PlayerPrefs.SetInt("p1_cc",3);
	}
	if(GUI.Button(new Rect(Screen.width/2-32*4-5-10*3,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color(0.2,0,0.1);
		c12.renderer.materials[2].color=Color(0.2,0,0.1);
		c22.renderer.materials[1].color=Color(0.2,0,0.1);
		c32.renderer.materials[4].color=Color(0.2,0,0.1);
		PlayerPrefs.SetInt("p2_cc",3);
	}
	GUI.skin=indigo;
	if(GUI.Button(new Rect(Screen.width/2-32*3-5-10*2,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color(0,0,0.1);
		c1.renderer.materials[2].color=Color(0,0,0.1);
		c2.renderer.materials[1].color=Color(0,0,0.1);
		c3.renderer.materials[4].color=Color(0,0,0.1);
		PlayerPrefs.SetInt("p1_cc",4);
	}
	if(GUI.Button(new Rect(Screen.width/2-32*3-5-10*2,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color(0,0,0.1);
		c12.renderer.materials[2].color=Color(0,0,0.1);
		c22.renderer.materials[1].color=Color(0,0,0.1);
		c32.renderer.materials[4].color=Color(0,0,0.1);
		PlayerPrefs.SetInt("p2_cc",4);
	}
	GUI.skin=blue;
	if(GUI.Button(new Rect(Screen.width/2-32*2-5-10*1,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color.blue;
		c1.renderer.materials[2].color=Color.blue;
		c2.renderer.materials[1].color=Color.blue;
		c3.renderer.materials[4].color=Color.blue;
		PlayerPrefs.SetInt("p1_cc",5);
	}
	if(GUI.Button(new Rect(Screen.width/2-32*2-5-10*1,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color.blue;
		c12.renderer.materials[2].color=Color.blue;
		c22.renderer.materials[1].color=Color.blue;
		c32.renderer.materials[4].color=Color.blue;
		PlayerPrefs.SetInt("p2_cc",5);
	}
	GUI.skin=cyan;
	if(GUI.Button(new Rect(Screen.width/2-32*1-5-10*0,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color.cyan;
		c1.renderer.materials[2].color=Color.cyan;
		c2.renderer.materials[1].color=Color.cyan;
		c3.renderer.materials[4].color=Color.cyan;
		PlayerPrefs.SetInt("p1_cc",6);
	}
	if(GUI.Button(new Rect(Screen.width/2-32*1-5-10*0,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color.cyan;
		c12.renderer.materials[2].color=Color.cyan;
		c22.renderer.materials[1].color=Color.cyan;
		c32.renderer.materials[4].color=Color.cyan;
		PlayerPrefs.SetInt("p2_cc",6);
	}
	GUI.skin=green;
	if(GUI.Button(new Rect(Screen.width/2+32*0+5+10*0,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color.green;
		c1.renderer.materials[2].color=Color.green;
		c2.renderer.materials[1].color=Color.green;
		c3.renderer.materials[4].color=Color.green;
		PlayerPrefs.SetInt("p1_cc",7);
	}
	if(GUI.Button(new Rect(Screen.width/2+32*0+5+10*0,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color.green;
		c12.renderer.materials[2].color=Color.green;
		c22.renderer.materials[1].color=Color.green;
		c32.renderer.materials[4].color=Color.green;
		PlayerPrefs.SetInt("p2_cc",7);
	}
	GUI.skin=yellow;
	if(GUI.Button(new Rect(Screen.width/2+32*1+5+10*1,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color.yellow;
		c1.renderer.materials[2].color=Color.yellow;
		c2.renderer.materials[1].color=Color.yellow;
		c3.renderer.materials[4].color=Color.yellow;
		PlayerPrefs.SetInt("p1_cc",8);
	}
	if(GUI.Button(new Rect(Screen.width/2+32*1+5+10*1,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color.yellow;
		c12.renderer.materials[2].color=Color.yellow;
		c22.renderer.materials[1].color=Color.yellow;
		c32.renderer.materials[4].color=Color.yellow;
		PlayerPrefs.SetInt("p2_cc",8);
	}
	GUI.skin=orange;
	if(GUI.Button(new Rect(Screen.width/2+32*2+5+10*2,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color(1,0.1,0);
		c1.renderer.materials[2].color=Color(1,0.1,0);
		c2.renderer.materials[1].color=Color(1,0.1,0);
		c3.renderer.materials[4].color=Color(1,0.1,0);
		PlayerPrefs.SetInt("p1_cc",9);
	}
	if(GUI.Button(new Rect(Screen.width/2+32*2+5+10*2,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color(1,0.1,0);
		c12.renderer.materials[2].color=Color(1,0.1,0);
		c22.renderer.materials[1].color=Color(1,0.1,0);
		c32.renderer.materials[4].color=Color(1,0.1,0);
		PlayerPrefs.SetInt("p2_cc",9);
	}
	GUI.skin=red;
	if(GUI.Button(new Rect(Screen.width/2+32*3+5+10*3,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color.red;
		c1.renderer.materials[2].color=Color.red;
		c2.renderer.materials[1].color=Color.red;
		c3.renderer.materials[4].color=Color.red;
		PlayerPrefs.SetInt("p1_cc",10);
	}
	if(GUI.Button(new Rect(Screen.width/2+32*3+5+10*3,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color.red;
		c12.renderer.materials[2].color=Color.red;
		c22.renderer.materials[1].color=Color.red;
		c32.renderer.materials[4].color=Color.red;
		PlayerPrefs.SetInt("p2_cc",10);
	}
	GUI.skin=silver;
	if(GUI.Button(new Rect(Screen.width/2+32*4+5+10*4,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color(0.3,0.3,0.3);
		c1.renderer.materials[2].color=Color(0.3,0.3,0.3);
		c2.renderer.materials[1].color=Color(0.3,0.3,0.3);
		c3.renderer.materials[4].color=Color(0.3,0.3,0.3);
		PlayerPrefs.SetInt("p1_cc",11);
	}
	if(GUI.Button(new Rect(Screen.width/2+32*4+5+10*4,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color(0.3,0.3,0.3);
		c12.renderer.materials[2].color=Color(0.3,0.3,0.3);
		c22.renderer.materials[1].color=Color(0.3,0.3,0.3);
		c32.renderer.materials[4].color=Color(0.3,0.3,0.3);
		PlayerPrefs.SetInt("p2_cc",11);
	}
	GUI.skin=white;
	if(GUI.Button(new Rect(Screen.width/2+32*5+5+10*5,Screen.height/2-40,32,32),""))
	{
		c0.renderer.materials[0].color=Color.white;
		c1.renderer.materials[2].color=Color.white;
		c2.renderer.materials[1].color=Color.white;
		c3.renderer.materials[4].color=Color.white;
		PlayerPrefs.SetInt("p1_cc",12);
	}
	if(GUI.Button(new Rect(Screen.width/2+32*5+5+10*5,Screen.height/2+8,32,32),""))
	{
		c02.renderer.materials[0].color=Color.white;
		c12.renderer.materials[2].color=Color.white;
		c22.renderer.materials[1].color=Color.white;
		c32.renderer.materials[4].color=Color.white;
		PlayerPrefs.SetInt("p2_cc",12);
	}
	}
	
	GUI.EndGroup();
}