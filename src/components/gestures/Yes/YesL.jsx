import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const YesL = new GestureDescription("Да!");

YesL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
YesL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

YesL.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
YesL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

YesL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
YesL.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

YesL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
YesL.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

YesL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
YesL.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

export default YesL;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Horizontal Left
Pinky | Full Curl | Horizontal Left
*/