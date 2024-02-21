import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const SL = new GestureDescription('С');

SL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
SL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

SL.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
SL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

SL.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
SL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

SL.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
SL.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

SL.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
SL.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default SL;

// Thumb | No Curl | Horizontal Left
// Index | Half Curl | Diagonal Up Left
// Middle | Half Curl | Diagonal Up Left
// Ring | Half Curl | Diagonal Up Left
// Pinky | Half Curl | Diagonal Up Left