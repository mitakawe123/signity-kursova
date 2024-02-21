import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const UL = new GestureDescription("У");

UL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
UL.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

UL.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
UL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

UL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
UL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

UL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
UL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

UL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
UL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default UL;

// Thumb | No Curl | Horizontal Left
// Index | Full Curl | Diagonal Up Left
// Middle | Full Curl | Vertical Up
// Ring | Full Curl | Vertical Up
// Pinky | No Curl | Vertical Up