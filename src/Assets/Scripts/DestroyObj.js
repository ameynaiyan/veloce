
function Update () {
	if(PlayerPrefs.GetInt("res")==0)
		Destroy(gameObject);
}