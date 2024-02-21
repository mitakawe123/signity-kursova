import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'; 

const YUR = new GestureDescription("Ю");

YUR.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
YUR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

YUR.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
YUR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

YUR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
YUR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

YUR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
YUR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

YUR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
YUR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

export default YUR;

// Thumb | Half Curl | Vertical Up
// Index | Full Curl | Diagonal Up Right
// Middle | Full Curl | Vertical Up
// Ring | Full Curl | Vertical Up
// Pinky | No Curl | Vertical Up