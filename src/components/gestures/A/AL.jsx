import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const AL = new GestureDescription("A");

AL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
AL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

AL.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
AL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

AL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
AL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

AL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
AL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

AL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
AL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default AL;

/*
Thumb | No Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | Full Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/