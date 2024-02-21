import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const HR = new GestureDescription("Х");

HR.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
HR.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

HR.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
HR.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

HR.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
HR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

HR.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
HR.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

HR.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
HR.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

export default HR;

/*
Thumb | No Curl | Diagonal Up Right
Index | Half Curl | Diagonal Up Right
Middle | Full Curl | Diagonal Up Right
Ring | Full Curl | Diagonal Up Right
Pinky | Full Curl | Diagonal Up Right
*/