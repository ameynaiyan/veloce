using UnityEngine;
using System.Collections;

public class sparkScript : MonoBehaviour {
	
	public GameObject spark;
	void OnCollisionEnter(Collision collision) {
   // 1st point of contact
   ContactPoint contactPoint = collision.contacts[0];
 
   // Create the prefab at the contact point of the collision
   Instantiate(spark, contactPoint.point, Quaternion.identity);
}
}
