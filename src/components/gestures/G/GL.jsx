import { Finger, FingerCurl, FingerDirection, GestureDescription } from "fingerpose"; 

const GL = new GestureDescription("Г");

GL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
GL.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);

GL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
GL.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

GL.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
GL.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

GL.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
GL.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

GL.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
GL.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default GL;

/*
Thumb | No Curl | Diagonal Down Left
Index | No Curl | Vertical Down
Middle | Full Curl | Vertical Down
Ring | Full Curl | Vertical Down
Pinky | Full Curl | Vertical Down
*/