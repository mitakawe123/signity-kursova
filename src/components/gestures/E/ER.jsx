import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const ER = new GestureDescription("Е");

ER.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ER.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

ER.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
ER.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

ER.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ER.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

ER.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ER.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

ER.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ER.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default ER;

/*
Thumb | Half Curl | Vertical Up
Index | Full Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Diagonal Up Left
Pinky | Full Curl | Diagonal Up Left
*/