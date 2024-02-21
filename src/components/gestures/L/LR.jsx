import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const LR = new GestureDescription("Л");

LR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LR.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1);

LR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LR.addDirection(Finger.Index, FingerDirection.VerticalDown, 1);

LR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
LR.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1);

LR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
LR.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1);

LR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
LR.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1);

export default LR;
/*
Thumb | No Curl | Diagonal Down Left
Index | No Curl | Vertical Down
Middle | Half Curl | Vertical Down
Ring | Full Curl | Vertical Down
Pinky | Full Curl | Diagonal Down Right
*/