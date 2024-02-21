import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const RL = new GestureDescription('Р');

RL.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
RL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

RL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
RL.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

RL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
RL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

RL.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
RL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

RL.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
RL.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

export default RL;

/*
Thumb | Half Curl | Vertical Up
Index | No Curl | Diagonal Up Left
Middle | No Curl | Vertical Up
Ring | No Curl | Vertical Up
Pinky | No Curl | Vertical Up
*/