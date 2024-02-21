import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const NoL = new GestureDescription("Не!");

NoL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
NoL.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

NoL.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
NoL.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

NoL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
NoL.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

NoL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
NoL.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

NoL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
NoL.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);

export default NoL;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/