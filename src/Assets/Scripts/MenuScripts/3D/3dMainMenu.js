
#pragma strict
var hovermaterial:Material;
var normalmaterial:Material;
var selectmaterial:Material;
var cam : Camera;
var bcamera : GameObject;
var platform: GameObject;

var t1 : GameObject;
var t2 : GameObject;
var t3 : GameObject;
var t4 : GameObject;
var t5 : GameObject;

var t6 : GameObject;
var t7 : GameObject;
var t8 : GameObject;
var t9 : GameObject;
var t10 : GameObject;
var t11 : GameObject;


var Singleplayer : GameObject;
var Multiplayer : GameObject;
var Options : GameObject;
var Credits : GameObject;
var Quit : GameObject;
var maincam : GameObject;

var SP : GameObject;
var qr : GameObject;
var tt : GameObject;

var MP : GameObject;
var ss : GameObject;
var lp : GameObject;

var QuitP : GameObject;
var y : GameObject;
var n : GameObject;

var skin : GUISkin;
var f : int = 0;

var me:int = 1;

var cktstate:int;

public var Attention:String="";

var choice:int = 0;
function Start(){
	PlayerPrefs.SetInt("cheat1",0);
		PlayerPrefs.SetInt("cheat2",0);
		PlayerPrefs.SetInt("cheat3",0);
 var scrm= maincam.GetComponent(MapMenuScript); 
	maincam.GetComponent(BlurEffect).enabled = false;
	if(cktstate==1)
	{
		scrm.enabled=true;
		cam.enabled=false;
	}
	else
	{
		PlayerPrefs.SetInt("ckt_select",0);
	}
	
	
}

function Update () 
{	
	var scrm= maincam.GetComponent(MapMenuScript);  
	cktstate=PlayerPrefs.GetInt("cktstate");
	if(cktstate==1)
	{
		scrm.enabled=true;
		cam.enabled=false;
	}/*
	else
	{
		PlayerPrefs.SetInt("ckt_select",0);
	}*/
	if(cam.enabled==true)
		me=1;
	else
		me=0;
	
	var hov = cam.ScreenPointToRay(Input.mousePosition);
	var hovover:RaycastHit;
	if (Physics.Raycast (hov,hovover, 50)) {
		if(hovover.collider.name == "O1"&&choice!=1) {
		
			t1.renderer.material = hovermaterial;
		}
		else{
		if(choice!=1)
			t1.renderer.material = normalmaterial;
		}
		if(hovover.collider.name == "O2"&&choice!=2){
			t2.renderer.material = hovermaterial;
		}
		else{
		if(choice!=2)
			t2.renderer.material = normalmaterial;
		}
		if(hovover.collider.name == "O3"&&choice!=3){
			t3.renderer.material = hovermaterial;
		}
		else{
		if(choice!=3)
			t3.renderer.material = normalmaterial;
		}
		if(hovover.collider.name == "O4"&&choice!=4){
			t4.renderer.material = hovermaterial;
		}
		else{
		if(choice!=4)
			t4.renderer.material = normalmaterial;
		}
		if(hovover.collider.name == "O5"&&choice!=5){
			t5.renderer.material = hovermaterial;
		}
		else{
		if(choice!=5)
			t5.renderer.material = normalmaterial;
		}
		
			if(hovover.collider.name == "qr") {
				t6.renderer.material = hovermaterial;
			}
			else{
				t6.renderer.material = normalmaterial;
			}
		
			if(hovover.collider.name == "tt"){
				t7.renderer.material = hovermaterial;
			}
			else{
				t7.renderer.material = normalmaterial;
			}
			
			if(hovover.collider.name == "ss") {
				t8.renderer.material = hovermaterial;
			}
			else{
				t8.renderer.material = normalmaterial;
			}
		
			if(hovover.collider.name == "lp"){
				t9.renderer.material = hovermaterial;
			}
			else{
				t9.renderer.material = normalmaterial;
			}
			
			if(hovover.collider.name == "y") {
				t10.renderer.material = hovermaterial;
			}
			else{
				t10.renderer.material = normalmaterial;
			}
		
			if(hovover.collider.name == "n"){
				t11.renderer.material = hovermaterial;
			}
			else{
				t11.renderer.material = normalmaterial;
			}
	}
	if(me==1){
	if (Input.GetMouseButtonDown (0)) {
		var ray = cam.ScreenPointToRay (Input.mousePosition); 
		var hit:RaycastHit;
		if (Physics.Raycast (ray, hit, 50)) {
		
			if(hit.collider.name == "O1"&&choice!=1) {
			//Application.LoadLevel("s6");
			if(choice==0||choice==3||choice==4)
				platform.animation.Play("plat_menu_up");
			if(choice==2){
				t2.renderer.material = normalmaterial;
				MP.animation.Play("mp_down");
				}
			if(choice==5){
				t5.renderer.material = normalmaterial;
				QuitP.animation.Play("q_down");
				}
			choice=1;
			Singleplayer.renderer.material.color=Color(0,100,255);
			SP.animation.Play("sp_up");
			t1.renderer.material = selectmaterial;
			}
			
			if(hit.collider.name == "O2"&&choice!=2){
			if(choice==0||choice==3||choice==4)
				platform.animation.Play("plat_menu_up");
			if(choice==1){
				t1.renderer.material = normalmaterial;
				SP.animation.Play("sp_down");
				}
			if(choice==5){
				t5.renderer.material = normalmaterial;
				QuitP.animation.Play("q_down");
				}
			choice=2;
			MP.animation.Play("mp_up");
			t2.renderer.material = selectmaterial;
			}
			
			if(hit.collider.name == "O3"){
			if(choice==1){
				t1.renderer.material = normalmaterial;
				SP.animation.Play("sp_down");
				}
			if(choice==2){
				t2.renderer.material = normalmaterial;
				MP.animation.Play("mp_down");
				}
			if(choice==5){
				t5.renderer.material = normalmaterial;
				QuitP.animation.Play("q_down");
				}
			choice=3;
			f=5;
			t3.renderer.material = selectmaterial;
			Application.LoadLevel("Options");
			}
			
			if(hit.collider.name == "O4"){
			if(choice==1){
				t1.renderer.material = normalmaterial;
				SP.animation.Play("sp_down");
				}
			if(choice==2){
				t2.renderer.material = normalmaterial;
				MP.animation.Play("mp_down");
				}
			if(choice==5){
				t5.renderer.material = normalmaterial;
				QuitP.animation.Play("q_down");
				}
			choice=4;
			f=6;
			t4.renderer.material = selectmaterial;
			//yield WaitForSeconds(1.5);
			Application.LoadLevel("Credits");
			}
			
			if(hit.collider.name == "O5"&&choice!=5){
			if(choice==0||choice==3||choice==4)
				platform.animation.Play("plat_menu_up");
			if(choice==1){
				t1.renderer.material = normalmaterial;
				SP.animation.Play("sp_down");
				}
			if(choice==2){
				t2.renderer.material = normalmaterial;
				MP.animation.Play("mp_down");
				}
			choice=5;
			QuitP.animation.Play("q_up");
			t5.renderer.material = selectmaterial;
			}
			
			if(hit.collider.name == "qr") {
				cam.enabled=false;
				f=1;
				scrm.enabled = true;
				PlayerPrefs.SetInt("gameMode",1);
			}
		
			if(hit.collider.name == "tt"){
				cam.enabled=false;
				f=2;
				scrm.enabled = true;
				PlayerPrefs.SetInt("gameMode",2);
			}
			
			if(hit.collider.name == "ss") {
				cam.enabled=false;
				f=3;
				scrm.enabled = true;
				PlayerPrefs.SetInt("gameMode",3);
			}
		
			if(hit.collider.name == "lp"){
				cam.enabled=false;
				f=4;
				scrm.enabled = true;
				PlayerPrefs.SetInt("gameMode",4);
				Application.LoadLevel("Lobby");
			}
			
			if(hit.collider.name == "y") {
				Application.Quit();
			}
		
			if(hit.collider.name == "n"){
				platform.animation.Play("plat_menu_down");
				QuitP.animation.Play("q_down");
				choice=0;
			}
		}
	}
	}
	
	
}
function OnGUI(){
}