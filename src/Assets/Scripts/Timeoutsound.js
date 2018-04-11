var s321:AudioClip;
function Start () {
	if(PlayerPrefs.GetInt("gameactive")==1){
		audio.PlayOneShot(s321);
		yield WaitForSeconds(1);
		audio.PlayOneShot(s321);
		yield WaitForSeconds(1);
		audio.PlayOneShot(s321);
		yield WaitForSeconds(1);
		audio.PlayOneShot(s321);
		yield WaitForSeconds(1);
		audio.PlayOneShot(s321);
		yield WaitForSeconds(1);
		audio.PlayOneShot(s321);
	}
}