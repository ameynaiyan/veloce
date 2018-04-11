var dialTex: Texture2D;
var needleTex: Texture2D;
var dialPos: Vector2;
var topSpeed: float;
var stopAngle: float;
var topSpeedAngle: float;
var speed: float;


function OnGUI() {
	GUI.DrawTexture(Rect(dialPos.x, dialPos.y, dialTex.width, dialTex.height), dialTex);
	var centre = Vector2(dialPos.x + dialTex.width / 2, dialPos.y + dialTex.height / 2);
	var savedMatrix = GUI.matrix;
	var speedFraction = speed / topSpeed;
	var needleAngle = Mathf.Lerp(stopAngle, topSpeedAngle, speedFraction);
	GUIUtility.RotateAroundPivot(needleAngle, centre);
	GUI.DrawTexture(Rect(centre.x, centre.y - needleTex.height / 2, needleTex.width, needleTex.height), needleTex);
	GUI.matrix = savedMatrix;
}