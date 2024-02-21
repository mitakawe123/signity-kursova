import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

const ML = new GestureDescription("М");

ML.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ML.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

ML.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ML.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

ML.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
ML.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

ML.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
ML.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

ML.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
ML.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default ML;

/*
Thumb | No Curl | Diagonal Down Left
Index | No Curl | Diagonal Down Left
Middle | No Curl | Vertical Down
Ring | No Curl | Vertical Down
Pinky | Full Curl | Vertical Down
*/