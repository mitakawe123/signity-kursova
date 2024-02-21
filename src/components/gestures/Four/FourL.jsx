import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const FourL = new GestureDescription("4");

FourL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
FourL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

FourL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FourL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

FourL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
FourL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

FourL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
FourL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

FourL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
FourL.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default FourL;

/*
Thumb | No Curl | Vertical Up
Index | No Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/