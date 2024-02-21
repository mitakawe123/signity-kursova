import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const HelloL = new GestureDescription("Здравейте");

HelloL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
HelloL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

HelloL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
HelloL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

HelloL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
HelloL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

HelloL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
HelloL.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

HelloL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
HelloL.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

export default HelloL;

/*
Thumb | No Curl | Diagonal Up Left
Index | No Curl | Diagonal Up Left
Middle | No Curl | Diagonal Up Left
Ring | No Curl | Diagonal Up Left
Pinky | No Curl | Diagonal Up Left
*/