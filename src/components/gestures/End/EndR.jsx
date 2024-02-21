import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const EndR = new GestureDescription(".");

EndR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
EndR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

EndR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
EndR.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

EndR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
EndR.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

EndR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
EndR.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

EndR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
EndR.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default EndR;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Diagonal Up Left
Middle | No Curl | Diagonal Up Left
Ring | No Curl | Diagonal Up Left
Pinky | No Curl | Diagonal Up Left
*/