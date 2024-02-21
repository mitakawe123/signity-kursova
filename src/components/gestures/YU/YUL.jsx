import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'; 

const YUL = new GestureDescription("Ю");

YUL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
YUL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

YUL.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
YUL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

YUL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
YUL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

YUL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
YUL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

YUL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
YUL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

export default YUL;

// Thumb | Half Curl | Vertical Up
// Index | Full Curl | Diagonal Up Left
// Middle | Full Curl | Vertical Up
// Ring | Full Curl | Vertical Up
// Pinky | No Curl | Vertical Up