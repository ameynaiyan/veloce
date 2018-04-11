function Update () {
//hide the cursor (at the beginning of the game)
camera.GetComponent(BlurEffect).enabled = false;
camera.GetComponent(AudioListener).enabled = true;
Screen.showCursor = false;
}