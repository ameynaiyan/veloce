using UnityEngine;
using System.Collections;

public class MiniMapScriptsmenu : MonoBehaviour {
	
	public RenderTexture minimapRT;
	public Material minimapM;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void OnGUI () {
		if(Event.current.type == EventType.Repaint) 
			Graphics.DrawTexture(new Rect(0,0,Screen.width,Screen.height),minimapRT,minimapM);
	}
}
