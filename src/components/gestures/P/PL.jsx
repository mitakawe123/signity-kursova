import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const PL = new GestureDescription('П');

PL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
PL.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

PL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
PL.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

PL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
PL.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

PL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
PL.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

PL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
PL.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default PL;

// Thumb | No Curl | Diagonal Down Left
// Index | No Curl | Vertical Down
// Middle | No Curl | Vertical Down
// Ring | Full Curl | Vertical Down
// Pinky | Full Curl | Diagonal Down Right