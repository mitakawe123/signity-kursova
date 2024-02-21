import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const FiveL = new GestureDescription("5");

FiveL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
FiveL.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

FiveL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
FiveL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

FiveL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
FiveL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

FiveL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
FiveL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

FiveL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
FiveL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default FiveL;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Diagonal Up Left
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/