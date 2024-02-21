import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const RR = new GestureDescription('Р');

RR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
RR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

RR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
RR.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

RR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
RR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

RR.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
RR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

RR.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
RR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

export default RR;

/*
Thumb | Half Curl | Vertical Up
Index | No Curl | Diagonal Up Right
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/