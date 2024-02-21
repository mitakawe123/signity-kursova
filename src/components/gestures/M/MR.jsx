import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const MR = new GestureDescription("М");

MR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
MR.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

MR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
MR.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

MR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
MR.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

MR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
MR.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

MR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
MR.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default MR;

/*
Thumb | No Curl | Diagonal Down Left
Index | No Curl | Diagonal Down Left
Middle | No Curl | Vertical Down
Ring | No Curl | Vertical Down
Pinky | Full Curl | Vertical Down
*/