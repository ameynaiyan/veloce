using UnityEngine;
[ExecuteInEditMode()] 
public class RotatableGuiItem : MonoBehaviour {
 
    public Texture2D texture = null;
    public float angle = 0;
    public Vector2 size = new Vector2(128, 128);
    Vector2 pos = new Vector2(0, 0);
    Rect rect;
    Vector2 pivot;
 
    void Start() {
        UpdateSettings();
    }
 
    void UpdateSettings() {
        pos = new Vector2(124, Screen.height-128);
        rect = new Rect(pos.x - size.x * 0.5f, pos.y - size.y * 0.5f, size.x, size.y);
        pivot = new Vector2(rect.xMin + rect.width * 0.5f, rect.yMin + rect.height * 0.5f);
		angle = rigidbody.velocity.magnitude*2;
    }
 
    void OnGUI() {
        if (Application.isEditor) { UpdateSettings(); }
        Matrix4x4 matrixBackup = GUI.matrix;
        GUIUtility.RotateAroundPivot(angle, pivot);
		if(PlayerPrefs.GetInt("gameactive")==1)
        	GUI.DrawTexture(rect, texture);
        GUI.matrix = matrixBackup;
    }
}
