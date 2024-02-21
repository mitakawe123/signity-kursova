import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const SR = new GestureDescription('С');

SR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
SR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

SR.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
SR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

SR.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
SR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

SR.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
SR.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

SR.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
SR.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default SR;

// Thumb | No Curl | Horizontal Right
// Index | Half Curl | Diagonal Up Right
// Middle | Half Curl | Diagonal Up Right
// Ring | Half Curl | Diagonal Up Right
// Pinky | Half Curl | Diagonal Up Right