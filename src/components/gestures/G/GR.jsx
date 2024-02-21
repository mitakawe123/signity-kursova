import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const GR = new GestureDescription("Г");

GR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
GR.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);

GR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
GR.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

GR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
GR.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

GR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
GR.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

GR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
GR.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default GR;

/*
Thumb | No Curl | Diagonal Down Right
Index | No Curl | Vertical Down
Middle | Full Curl | Vertical Down
Ring | Full Curl | Vertical Down
Pinky | Full Curl | Vertical Down
*/