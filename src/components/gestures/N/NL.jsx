import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const NL = new GestureDescription('Н');

NL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
NL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

NL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
NL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

NL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
NL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

NL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
NL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

NL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
NL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default NL;

/*
Thumb | Half Curl | Vertical Up
Index | No Curl | Diagonal Up Left
Middle | No Curl | Diagonal Up Left
Ring | Full Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/