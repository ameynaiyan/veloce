using UnityEngine;
using System.Collections;

public class tmap : MonoBehaviour {
	
	public RenderTexture MapTexture;
	public Material MapMaterial;
	private int offset;

	void Awake()
	{
		offset=10;
	}
	void OnGUI()
	{
		if(Event.current.type == EventType.Repaint)
			Graphics.DrawTexture(new Rect(Screen.width - 256 - offset,offset,256,256),MapTexture,MapMaterial);
	}
}
