import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const YesR = new GestureDescription("Да!");

YesR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
YesR.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

YesR.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
YesR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

YesR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
YesR.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

YesR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
YesR.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

YesR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
YesR.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default YesR;

/*
Thumb | No Curl | Diagonal Up Right
Index | Full Curl | Diagonal Up Right
Middle | Full Curl | Diagonal Up Right
Ring | Full Curl | Horizontal Right
Pinky | Full Curl | Horizontal Right
*/