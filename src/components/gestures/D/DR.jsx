import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const DR = new GestureDescription("Д");

DR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
DR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

DR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
DR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

DR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
DR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

DR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
DR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

DR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
DR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default DR;

/*
Thumb | No Curl | Diagonal Up Right
Index | No Curl | Vertical Up
Middle | No Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Diagonal Up Left
*/