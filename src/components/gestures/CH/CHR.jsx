import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'; 

const CHR = new GestureDescription("Ч");

CHR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
CHR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

CHR.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
CHR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1);

CHR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
CHR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1);

CHR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
CHR.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1);

CHR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
CHR.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1);

export default CHR;

// Thumb | No Curl | Diagonal Up Right
// Index | Half Curl | Diagonal Up Right
// Middle | Full Curl | Diagonal Up Right
// Ring | Full Curl | Diagonal Up Right
// Pinky | Full Curl | Vertical Up