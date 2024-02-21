import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { LoopOnce } from "three";

export default function Model({ ...props }) {
  const { transcript, listening, resetTranscript } = props;
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/signLanguage.glb");
  const { actions } = useAnimations(animations, group);

  let array = transcript.split(" ").map((x) => x.toUpperCase());
  let words = [];
  const actionsAnim = Object.keys(actions);

  useEffect(() => {
    if (!listening) {
      for (let i = 0; i < array.length; i++) {
        if (actionsAnim.includes(array[i])) {
          words.push(array[i]);
        } else {
          for (let j = 0; j < array[i].length; j++) {
            words.push(array[i][j]);
          }
        }
      }
      //making two callbacks to insert animation and fade it out when it finish
      if (words.length > 0) {
        let startInteval = setInterval(() => {
          actions[words[0]]
            .reset()
            .fadeIn(1)
            .setDuration(2)
            .setLoop(LoopOnce)
            .play().clampWhenFinished = true;

          let prevAction = words.shift();

          setTimeout(() => {
            actions[prevAction].fadeOut(1);
          }, 2500);
          //when user stop the microphone delete the message
          if (words[0] === undefined) {
            clearInterval(startInteval);
            resetTranscript();
          }
        }, 3000);
      }
    }
  }, [words]);

  //the hero
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Ctrl_Hand_IK_Left} />
      <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
      <primitive object={nodes.Ctrl_Hand_IK_Right} />
      <primitive object={nodes.mixamorigHips} />
      <primitive object={nodes.Ctrl_Master} />
      <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
      <primitive object={nodes.Ctrl_Foot_IK_Left} />
      <primitive object={nodes.Ctrl_LegPole_IK_Left} />
      <primitive object={nodes.Ctrl_Foot_IK_Right} />
      <primitive object={nodes.Ctrl_LegPole_IK_Right} />
      <skinnedMesh
        translateX={200}
        geometry={nodes.Ch03.geometry}
        material={materials.Ch03_Body}
        skeleton={nodes.Ch03.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/signLanguage.glb");
