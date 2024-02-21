import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const HL = new GestureDescription("Х");

HL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
HL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

HL.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
HL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

HL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
HL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

HL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
HL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

HL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
HL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default HL;

/*
Thumb | No Curl | Diagonal Up Left
Index | Half Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Diagonal Up Left
Pinky | Full Curl | Diagonal Up Left
*/