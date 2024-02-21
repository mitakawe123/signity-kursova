import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const BR = new GestureDescription("Б");

BR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
BR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

BR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
BR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

BR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
BR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

BR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
BR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

BR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
BR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default BR;

/*
Thumb | No Curl | Diagonal Up Right
Index | No Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/