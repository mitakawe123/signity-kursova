import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const KR = new GestureDescription('К');

KR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
KR.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

KR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
KR.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

KR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
KR.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

KR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
KR.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

KR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
KR.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

export default KR;