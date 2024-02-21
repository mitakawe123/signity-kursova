import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const NR = new GestureDescription('Н');

NR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
NR.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

NR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
NR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

NR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
NR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

NR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
NR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

NR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
NR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default NR;

/*
Thumb | Half Curl | Vertical Up
Index | No Curl | Diagonal Up Right
Middle | No Curl | Diagonal Up Right
Ring | Full Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/