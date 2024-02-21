import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const LL = new GestureDescription("Л");

LL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LL.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1);

LL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LL.addDirection(Finger.Index, FingerDirection.VerticalDown, 1);

LL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
LL.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1);

LL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
LL.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1);

LL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
LL.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1);

export default LL;
/*
Thumb | No Curl | Diagonal Down Left
Index | No Curl | Vertical Down
Middle | Half Curl | Vertical Down
Ring | Full Curl | Vertical Down
Pinky | Full Curl | Diagonal Down Right
*/