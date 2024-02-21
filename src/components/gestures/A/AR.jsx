import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose";

const AR = new GestureDescription("A");

AR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
AR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

AR.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
AR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

AR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
AR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

AR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
AR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

AR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
AR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default AR;

/*
Thumb | No Curl | Diagonal Up Right
Index | Full Curl | Diagonal Up Right
Middle | Full Curl | Diagonal Up Right
Ring | Full Curl | Vertical Up
Pinky | Full Curl | Vertical Up
*/