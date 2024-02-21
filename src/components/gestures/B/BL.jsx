import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const BL = new GestureDescription("Б");

BL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
BL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

BL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
BL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

BL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
BL.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

BL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
BL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

BL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
BL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default BL;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Vertical Up
Middle | Full Curl | Vertical Up
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/