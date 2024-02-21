import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

const QR = new GestureDescription('Я');

QR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
QR.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

QR.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
QR.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

QR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
QR.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

QR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
QR.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

QR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
QR.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default QR;

/*
Thumb | Half Curl | Diagonal Up Left
Index | No Curl | Diagonal Up Left
Middle | No Curl | Diagonal Up Left
Ring | Full Curl | Diagonal Up Left
Pinky | Full Curl | Diagonal Up Left
*/