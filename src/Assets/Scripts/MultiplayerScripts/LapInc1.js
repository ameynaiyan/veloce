var lap :int;
var cpt :int;
var ss :GameObject;
var speedskin : GUISkin;
function Start()
{
	lap=0;
	cpt=2;
}
function OnTriggerEnter(col:Collider)
{
	if((col.gameObject.name == "SF")&&(cpt==2))
	{
		lap++;
		cpt=0;
	}
	if(col.gameObject.name == "CPT1"&&cpt==0)
	{
		cpt=1;
	}
	if(col.gameObject.name == "CPT2"&&cpt==1)
	{
		cpt=2;
	}
}

function OnGUI()
{
	GUI.skin=speedskin;
	GUI.Label (Rect (Screen.width/2+30,50,200,150), lap.ToString());
}