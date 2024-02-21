import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const TwoR = new GestureDescription("2");

TwoR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TwoR.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

TwoR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TwoR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

TwoR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
TwoR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

TwoR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
TwoR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

TwoR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
TwoR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default TwoR;

/*
Thumb | No Curl | Vertical Up
Index | No Curl | Diagonal Up Right
Middle | No Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/