import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const TSR = new GestureDescription('Ц');

TSR.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
TSR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1);

TSR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TSR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

TSR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
TSR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

TSR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
TSR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

TSR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
TSR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

export default TSR;

// Thumb | Half Curl | Diagonal Up Left
// Index | No Curl | Vertical Up
// Middle | No Curl | Vertical Up
// Ring | Full Curl | Vertical Up
// Pinky | Full Curl | Diagonal Up Left