import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const VR = new GestureDescription("В");

VR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
VR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

VR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
VR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

VR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
VR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

VR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
VR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

VR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
VR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default VR;

/*
Thumb | No Curl | Diagonal Up Right
Index | No Curl | Vertical Up
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/