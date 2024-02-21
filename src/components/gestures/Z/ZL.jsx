import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const ZL = new GestureDescription("З");

ZL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ZL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

ZL.addCurl(Finger.Index, FingerCurl.Halfcurl, 1.0);
ZL.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

ZL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ZL.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

ZL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ZL.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

ZL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ZL.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default ZL;