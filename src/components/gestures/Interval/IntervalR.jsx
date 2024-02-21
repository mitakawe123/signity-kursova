import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const IntervalR = new GestureDescription(" ");

IntervalR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
IntervalR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

IntervalR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
IntervalR.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

IntervalR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
IntervalR.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

IntervalR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
IntervalR.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

IntervalR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
IntervalR.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default IntervalR;

/*
Thumb | No Curl | Diagonal Up Right
Index | Full Curl | Diagonal Up Right
Middle | Full Curl | Diagonal Up Right
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/