import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const ThreeR = new GestureDescription("3");

ThreeR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ThreeR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

ThreeR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ThreeR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

ThreeR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ThreeR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

ThreeR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
ThreeR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

ThreeR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ThreeR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default ThreeR;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Diagonal Up Left
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/