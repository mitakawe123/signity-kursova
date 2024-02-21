import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const EL = new GestureDescription("Е");

EL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
EL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

EL.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
EL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

EL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
EL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

EL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
EL.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

EL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
EL.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default EL;

/*
Thumb | Half Curl | Vertical Up
Index | Full Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Diagonal Up Right
Pinky | Full Curl | Diagonal Up Right
*/