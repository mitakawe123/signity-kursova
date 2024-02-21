import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const ZHR = new GestureDescription("Ж");

ZHR.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
ZHR.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

ZHR.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
ZHR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

ZHR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ZHR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

ZHR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ZHR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

ZHR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ZHR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default ZHR;

/*
Thumb | No Curl | Diagonal Up Right
Index | Full Curl | Diagonal Up Right
Middle | Full Curl | Diagonal Up Right
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/