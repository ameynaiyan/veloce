using UnityEngine;
using System.Collections;

public class MouseEnterScript : MonoBehaviour {

	void OnMouseEnter(){
		renderer.material.color = Color.white;
	}
	void OnMouseExit(){
		renderer.material.color = Color.black;
	}
}
