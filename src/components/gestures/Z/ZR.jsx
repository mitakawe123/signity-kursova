import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const ZR = new GestureDescription("З");

ZR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ZR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

ZR.addCurl(Finger.Index, FingerCurl.Halfcurl, 1.0);
ZR.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

ZR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
ZR.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

ZR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
ZR.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

ZR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ZR.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default ZR;