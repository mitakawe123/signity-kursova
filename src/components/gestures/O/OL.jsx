import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const OL = new GestureDescription('О');

OL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
OL.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

OL.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
OL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

OL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
OL.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

OL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
OL.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

OL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
OL.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default OL;

/**
Thumb | Half Curl | Diagonal Up Left
Index | Full Curl | Diagonal Up Left
Middle | No Curl | Diagonal Up Left
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up 
*/