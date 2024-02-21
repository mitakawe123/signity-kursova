import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const OneR = new GestureDescription("1");

OneR.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
OneR.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

OneR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
OneR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

OneR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
OneR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

OneR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
OneR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

OneR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
OneR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default OneR;

/*
Thumb | No Curl | Vertical Up
Index | No Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/