import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const IntervalL = new GestureDescription(" ");

IntervalL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
IntervalL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

IntervalL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
IntervalL.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

IntervalL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
IntervalL.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

IntervalL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
IntervalL.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

IntervalL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
IntervalL.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

export default IntervalL;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/