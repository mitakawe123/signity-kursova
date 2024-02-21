import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const DL = new GestureDescription("Д");

DL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
DL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

DL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
DL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

DL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
DL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

DL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
DL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

DL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
DL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default DL;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Vertical Up
Middle | No Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Diagonal Up Right
*/