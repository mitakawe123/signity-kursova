import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const ThreeL = new GestureDescription("3");

ThreeL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ThreeL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

ThreeL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ThreeL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

ThreeL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ThreeL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

ThreeL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
ThreeL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

ThreeL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
ThreeL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default ThreeL;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Diagonal Up Left
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/