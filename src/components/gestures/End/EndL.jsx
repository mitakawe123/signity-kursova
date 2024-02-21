import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const EndL = new GestureDescription(".");

EndL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
EndL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

EndL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
EndL.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

EndL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
EndL.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

EndL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
EndL.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

EndL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
EndL.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default EndL;

/*
Thumb | No Curl | Diagonal Up Right
Index | No Curl | Diagonal Up Right
Middle | No Curl | Diagonal Up Right
Ring | No Curl | Diagonal Up Right
Pinky | No Curl | Diagonal Up Right
*/