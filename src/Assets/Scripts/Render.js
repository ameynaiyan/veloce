@script ExecuteInEditMode

var cubemapSize = 128;
var oneFacePerFrame = false;
public var cam : Camera;
public var rtex : RenderTexture;

function Start () {
    // render all six faces at startup
    UpdateCubemap( 63 );
}

function LateUpdate () {
    if (oneFacePerFrame) {
        var faceToRender = Time.frameCount % 6;
        var faceMask = 1 << faceToRender;
        UpdateCubemap (faceMask);
    } else {
        UpdateCubemap (63); // all six faces
    }
}

function UpdateCubemap (faceMask : int) {
    if (!cam) {
        var go = new GameObject ("CubemapCamera", Camera);
        go.hideFlags = HideFlags.HideAndDontSave;
        go.transform.position = transform.position;
        go.transform.rotation = Quaternion.identity;
        cam = go.camera;
        cam.farClipPlane = 100; // don't render very far into cubemap
        cam.enabled = false;
    }
    
    if (!rtex) {    
        rtex = new RenderTexture (cubemapSize, cubemapSize, 16);
        rtex.isCubemap = true;
        rtex.hideFlags = HideFlags.HideAndDontSave;
        renderer.sharedMaterial.SetTexture ("_Cube", rtex);
    }
    
    cam.transform.position = transform.position;
    cam.RenderToCubemap (rtex, faceMask);
}

function OnDisable () {
    DestroyImmediate (cam);
    DestroyImmediate (rtex);
}