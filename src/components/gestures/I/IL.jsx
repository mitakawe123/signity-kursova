import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const IL = new GestureDescription('И');

IL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
IL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

IL.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
IL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

IL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
IL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

IL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
IL.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

IL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
IL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default IL;

/*
Thumb | Half Curl | Horizontal Left
Index | Full Curl | Diagonal Up Left
Middle | Half Curl | Diagonal Up Left
Ring | No Curl | Diagonal Up Left
Pinky | No Curl | Vertical Up
*/