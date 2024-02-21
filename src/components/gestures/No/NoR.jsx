import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const NoR = new GestureDescription("Не!");

NoR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
NoR.addDirection(Finger.Thumb, FingerDirection.DiagonalDowndRight, 1.0);

NoR.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
NoR.addDirection(Finger.Index, FingerDirection.HorizontaldRight, 1.0);

NoR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
NoR.addDirection(Finger.Middle, FingerDirection.HorizontaldRight, 1.0);

NoR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
NoR.addDirection(Finger.Ring, FingerDirection.HorizontaldRight, 1.0);

NoR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
NoR.addDirection(Finger.Pinky, FingerDirection.HorizontaldRight, 1.0);

export default NoR;

/*
Thumb | No Curl | Diagonal Up dRight
Index | Full Curl | Diagonal Up dRight
Middle | Full Curl | Diagonal Up dRight
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/