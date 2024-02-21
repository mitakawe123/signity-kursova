import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const TwoL = new GestureDescription("2");

TwoL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TwoL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

TwoL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TwoL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

TwoL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
TwoL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

TwoL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
TwoL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

TwoL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
TwoL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default TwoL;

/*
Thumb | No Curl | Vertical Up
Index | No Curl | Diagonal Up Left
Middle | No Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/