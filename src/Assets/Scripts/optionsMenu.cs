using UnityEngine;
using System.Collections;
using System.Text.RegularExpressions;
 
public class optionsMenu : MonoBehaviour {
       public static bool showMenu = false;
       private string settings;
    public static float ambianceLevel = 0.0f; //Start muted.
    public static bool fullscreen = false; //default...
    public static string screenres = "1"; //default.
    private string curRes = "1";
    // Use this for initialization
    void Start () {
    settings = System.IO.File.ReadAllText(@"settings.ini"); //Load the settings.
       string[] settingsLines = Regex.Split(settings,"\r\n");
       foreach(string line in settingsLines){
         string[] thisLine = Regex.Split(line,"=");
         if(thisLine[0] == "ambiance"){
         ambianceLevel = float.Parse(thisLine[1]);
          //Debug.Log("Setting ambiance to "+thisLine[1]);
         }else if(thisLine[0] == "fullscreen"){
          if(thisLine[1] == "True" || thisLine[1] == "true"){
         Screen.fullScreen = true;
              fullscreen = true;
          }else{
         Screen.fullScreen = false;
          }
         }else if(thisLine[0] == "screenresolution"){
          switch(thisLine[1]){
          case "1":
              Screen.SetResolution(1366,768,fullscreen);
          break;
 
          case "2":
              Screen.SetResolution(1600,900,fullscreen);
              break;
          }
          screenres = thisLine[1];
         }
       }
 
    }
 
    // Update is called once per frame
    void Update () {
         if(curRes != screenres){
          switch(screenres){
          case "1":
              Screen.SetResolution(1366,768,fullscreen);
          break;
 
          case "2":
              Screen.SetResolution(1600,900,fullscreen);
              break;
          }
         curRes = screenres;
         }
       if(Screen.fullScreen != optionsMenu.fullscreen){
       Screen.fullScreen = optionsMenu.fullscreen;   
       }
    }
 
    public void OnGUI(){
       GUI.depth = 1000;
       if(showMenu == true){
//         inGameMenu.showGameMenu = false;
         GUI.Box(new Rect(Screen.width/2-150,Screen.height/2-150,300,300),"");
         GUI.Label(new Rect(Screen.width/2-150,Screen.height/2-150,300,300),"Sound");
         GUI.Label(new Rect(Screen.width/2-145,Screen.height/2-130,300,300),"Ambience");
         GUI.Label (new Rect(Screen.width/2+115,Screen.height/2-130,300,300),((int)(ambianceLevel * 100)).ToString()+"%");
         ambianceLevel = GUI.HorizontalSlider (new Rect (Screen.width/2-80,Screen.height/2-125, 190, 50), ambianceLevel, 0.0f, 1.0f);
 
         //Video;
         GUI.Label(new Rect(Screen.width/2-150,Screen.height/2-100,300,300),"Graphics");
         fullscreen = GUI.Toggle(new Rect(Screen.width/2-150, Screen.height/2-80, 200, 30), fullscreen, "Fullscreen");
 
         if(GUI.Button(new Rect(Screen.width/2-60,Screen.height/2+110,120,30),"Close")){
          showMenu = false;
//          inGameMenu.showGameMenu = true;
          saveSettings();
         }
       }
       GUI.depth = 0;
    }
    public static void saveSettings(){
    string output = "ambiance="+((int)(ambianceLevel * 100)).ToString();
       output = output + "\r\nfullscreen="+fullscreen;
       output = output + "\r\nscreenresolution="+screenres;
       System.IO.StreamWriter file = new System.IO.StreamWriter(@"settings.ini");
       file.Write(output);
       file.Close();
    //output = output + "\r\n";
    }
}
