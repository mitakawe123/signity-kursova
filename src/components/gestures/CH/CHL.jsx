import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose'; 

const CHL = new GestureDescription("Ч");

CHL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
CHL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);

CHL.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
CHL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1);

CHL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
CHL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1);

CHL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
CHL.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1);

CHL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
CHL.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1);

export default CHL;

// Thumb | No Curl | Diagonal Up Left
// Index | Half Curl | Diagonal Up Left
// Middle | Full Curl | Diagonal Up Left
// Ring | Full Curl | Diagonal Up Left
// Pinky | Full Curl | Vertical Up