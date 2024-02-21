import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const IR = new GestureDescription('И');

IR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
IR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

IR.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
IR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

IR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
IR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

IR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
IR.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

IR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
IR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default IR;

/*
Thumb | Half Curl | Horizontal Right
Index | Full Curl | Diagonal Up Right
Middle | Half Curl | Diagonal Up Right
Ring | No Curl | Diagonal Up Right
Pinky | No Curl | Vertical Up
*/