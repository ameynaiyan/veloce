
function OnTriggerEnter(other : Collider) 
{
    //
    if(other.gameObject.tag =="Player")
        {
            PlayerPrefs.SetInt("SavedLevel1", 2);
            Debug.Log("SavedLevel = 2");
            //
			yield WaitForSeconds(2.0); // wait for 5 seconds
            Application.LoadLevel("m3");
        }
}