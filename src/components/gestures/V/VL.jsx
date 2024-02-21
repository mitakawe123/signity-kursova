import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const VL = new GestureDescription("В");

VL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
VL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

VL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
VL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

VL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
VL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

VL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
VL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

VL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
VL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default VL;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Vertical Up
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/