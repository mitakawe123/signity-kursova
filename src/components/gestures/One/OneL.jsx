import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const OneL = new GestureDescription("1");

OneL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
OneL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

OneL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
OneL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

OneL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
OneL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

OneL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
OneL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

OneL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
OneL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default OneL;

/*
Thumb | No Curl | Vertical Up
Index | No Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/