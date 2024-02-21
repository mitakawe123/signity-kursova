import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const YR = new GestureDescription("Ъ");

YR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
YR.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

YR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
YR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

YR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
YR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

YR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
YR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

YR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
YR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default YR;

// Thumb | No Curl | Horizontal Right
// Index | No Curl | Vertical Up
// Middle | Full Curl | Diagonal Up Right
// Ring | Full Curl | Vertical Up
// Pinky | Full Curl | Vertical Up