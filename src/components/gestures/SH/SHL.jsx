import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const SHL = new GestureDescription("Ш");

SHL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
SHL.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

SHL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
SHL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

SHL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
SHL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

SHL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
SHL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

SHL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
SHL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default SHL;

/*
Thumb | No Curl | Horizontal Left
Index | No Curl | Vertical Up
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/