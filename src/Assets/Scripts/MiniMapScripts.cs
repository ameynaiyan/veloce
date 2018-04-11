using UnityEngine;
using System.Collections;

public class MiniMapScripts : MonoBehaviour {
	
	public RenderTexture minimapRT;
	public Material minimapM;
	public Texture border;
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void OnGUI () {
		if(PlayerPrefs.GetInt("gameactive")==1)
		{
		GUI.Label(new Rect(Screen.width - 275,5,270,270),border);
		if(Event.current.type == EventType.Repaint) 
				Graphics.DrawTexture(new Rect(Screen.width - 268,Screen.width/4-128,256,256),minimapRT,minimapM);
		}
	}
}
