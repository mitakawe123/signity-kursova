import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const SHR = new GestureDescription("Ш");

SHR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
SHR.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

SHR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
SHR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

SHR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
SHR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

SHR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
SHR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

SHR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
SHR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default SHR;

/*
Thumb | No Curl | Horizontal Right
Index | No Curl | Vertical Up
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/