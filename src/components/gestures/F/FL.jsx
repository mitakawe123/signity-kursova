import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'; 

const FL = new GestureDescription("Ф");

FL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
FL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

FL.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
FL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

FL.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
FL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

FL.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
FL.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

FL.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
FL.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default FL;

// Thumb | No Curl | Vertical Up
// Index | Half Curl | Horizontal Left
// Middle | Half Curl | Horizontal Left
// Ring | Half Curl | Horizontal Left
// Pinky | Half Curl | Horizontal Left