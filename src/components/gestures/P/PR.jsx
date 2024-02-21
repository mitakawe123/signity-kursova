import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const PR = new GestureDescription('П');

PR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
PR.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

PR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
PR.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

PR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
PR.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

PR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
PR.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

PR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
PR.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default PR;

// Thumb | No Curl | Diagonal Down Right
// Index | No Curl | Vertical Down
// Middle | No Curl | Vertical Down
// Ring | Full Curl | Vertical Down
// Pinky | Full Curl | Diagonal Down Right