import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'; 

const FR = new GestureDescription("Ф");

FR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
FR.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

FR.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
FR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

FR.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
FR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

FR.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
FR.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

FR.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
FR.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default FR;

// Thumb | No Curl | Vertical Up
// Index | Half Curl | Horizontal Right
// Middle | Half Curl | Horizontal Right
// Ring | Half Curl | Horizontal Right
// Pinky | Half Curl | Horizontal Right