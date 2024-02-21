import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const TR = new GestureDescription("Т");

TR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TR.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

TR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TR.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

TR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
TR.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

TR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
TR.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

TR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
TR.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default TR;

// Thumb | No Curl | Diagonal Down Right
// Index | No Curl | Vertical Down
// Middle | No Curl | Vertical Down
// Ring | No Curl | Vertical Down
// Pinky | Full Curl | Vertical Down