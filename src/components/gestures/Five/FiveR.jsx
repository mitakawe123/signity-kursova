import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const FiveR = new GestureDescription("5");

FiveR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
FiveR.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

FiveR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FiveR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

FiveR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
FiveR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

FiveR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
FiveR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

FiveR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
FiveR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default FiveR;

/*
Thumb | No Curl | Diagonal Up Right
Index | No Curl | Diagonal Up Right
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/