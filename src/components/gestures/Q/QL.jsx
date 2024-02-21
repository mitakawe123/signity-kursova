import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const QL = new GestureDescription('Я');

QL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
QL.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

QL.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
QL.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

QL.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
QL.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

QL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
QL.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

QL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
QL.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default QL;

/*
Thumb | Half Curl | Diagonal Up Right
Index | No Curl | Diagonal Up Right
Middle | No Curl | Diagonal Up Right
Ring | Full Curl | Diagonal Up Right
Pinky | Full Curl | Diagonal Up Right
*/