import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const ZHL = new GestureDescription("Ж");

ZHL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ZHL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

ZHL.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
ZHL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

ZHL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ZHL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

ZHL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ZHL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

ZHL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ZHL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default ZHL;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/