import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const UR = new GestureDescription("У");

UR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
UR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

UR.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
UR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

UR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
UR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

UR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
UR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

UR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
UR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default UR;

// Thumb | No Curl | Horizontal Right
// Index | Full Curl | Diagonal Up Right
// Middle | Full Curl | Vertical Up
// Ring | Full Curl | Vertical Up
// Pinky | No Curl | Vertical Up