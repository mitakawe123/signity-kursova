import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const HelloR = new GestureDescription("Здравейте");

HelloR.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
HelloR.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

HelloR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
HelloR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

HelloR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
HelloR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

HelloR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
HelloR.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);

HelloR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
HelloR.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

export default HelloR;

/*
Thumb | No Curl | Diagonal Up Right
Index | No Curl | Diagonal Up Right
Middle | No Curl | Diagonal Up Right
Ring | No Curl | Diagonal Up Right
Pinky | No Curl | Diagonal Up Right
*/