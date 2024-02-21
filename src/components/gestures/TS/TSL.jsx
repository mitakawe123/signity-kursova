import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const TSL = new GestureDescription('Ц');

TSL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
TSL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1);

TSL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TSL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

TSL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
TSL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1);

TSL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
TSL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1);

TSL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
TSL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

export default TSL;

// Thumb | Half Curl | Diagonal Up Right
// Index | No Curl | Vertical Up
// Middle | No Curl | Vertical Up
// Ring | Full Curl | Vertical Up
// Pinky | Full Curl | Diagonal Up Right