import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const OR = new GestureDescription('О');

OR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
OR.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

OR.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
OR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

OR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
OR.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

OR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
OR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

OR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
OR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default OR;

/**
Thumb | Half Curl | Diagonal Up Right
Index | Full Curl | Diagonal Up Right
Middle | No Curl | Diagonal Up Right
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up 
*/