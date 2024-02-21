import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const FourR = new GestureDescription("4");

FourR.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
FourR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

FourR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FourR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

FourR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
FourR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

FourR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
FourR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

FourR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
FourR.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default FourR;

/*
Thumb | No Curl | Vertical Up
Index | No Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/