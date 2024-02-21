import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const YL = new GestureDescription("Ъ");

YL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
YL.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

YL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
YL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

YL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
YL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

YL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
YL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

YL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
YL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default YL;

// Thumb | No Curl | Horizontal Left
// Index | No Curl | Vertical Up
// Middle | Full Curl | Diagonal Up Left
// Ring | Full Curl | Vertical Up
// Pinky | Full Curl | Vertical Up