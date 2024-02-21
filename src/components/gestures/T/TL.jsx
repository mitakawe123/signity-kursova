import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const TL = new GestureDescription("Т");

TL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TL.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

TL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
TL.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

TL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
TL.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

TL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
TL.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

TL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
TL.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default TL;

// Thumb | No Curl | Diagonal Down Left
// Index | No Curl | Vertical Down
// Middle | No Curl | Vertical Down
// Ring | No Curl | Vertical Down
// Pinky | Full Curl | Vertical Down