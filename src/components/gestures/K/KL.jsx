import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const KL = new GestureDescription('К');

KL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
KL.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

KL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
KL.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

KL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
KL.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

KL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
KL.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

KL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
KL.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

export default KL;