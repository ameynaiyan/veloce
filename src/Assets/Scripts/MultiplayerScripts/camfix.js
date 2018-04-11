@SerializeField
var behavioursEnabledOnLocalClientsOnly : Behaviour[];
 
@SerializeField
var behavioursEnabledOnRemoteClientsOnly : Behaviour[];
 
@SerializeField
var gameObjectsEnabledOnLocalClientsOnly : GameObject[];
 
@SerializeField
var gameObjectsEnabledOnRemoteClientsOnly : GameObject[];
 
function OnNetworkInstantiate(msg : NetworkMessageInfo) {
    if (!networkView.isMine) {
        name += "(remote)";
    }
 
    for ( var behaviour in behavioursEnabledOnLocalClientsOnly) {
        behaviour.enabled = networkView.isMine;
    }
 
    for ( var behaviour in behavioursEnabledOnRemoteClientsOnly) {
        behaviour.enabled = !networkView.isMine;
    }
 
    for (var go in gameObjectsEnabledOnLocalClientsOnly) {
        go.active = networkView.isMine;
    }
 
    for (var go in gameObjectsEnabledOnRemoteClientsOnly) {
        go.active = !networkView.isMine;
    }
}