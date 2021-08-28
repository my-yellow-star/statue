import { useGLTF } from '@react-three/drei';
import { Canvas, GroupProps, MeshProps, useFrame } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';

import CAText from './text';

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

function Statue() {
 
    const model = useGLTF('https://chana-s3.s3.ap-northeast-2.amazonaws.com/vierge.glb') as any
    const group = useRef() as React.MutableRefObject<GroupProps>

    useFrame(({ clock, mouse }) => {
        group.current.rotation.y = lerp(group.current.rotation.y, mouse.x * (Math.PI / 5), 0.005)
      })
    
    return <group dispose={null}>
        <group ref={group}>
            <mesh visible castShadow receiveShadow geometry={model.nodes.default.geometry} scale={[300, 300, 300]} rotation={[ -1.5, 0, 0]} position={[0.2, -2.7, 0]}>
                <meshStandardMaterial attach="material" roughness={0.9} metalness={0.5} color="#474747" />
            </mesh>
            <Lights />
        </group>
    </group>
}


function Box() {
    // This reference will give us direct access to the mesh
    const mesh = useRef() as React.MutableRefObject<MeshProps>
    // Set up state for the hovered and active state
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame((e) => {
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
        mesh.current.rotation.z += 0.01
    })
  
    return <Canvas style={ { 
        position: 'absolute',
        bottom: 10,
    } }><group>
      <mesh
        ref={mesh}
        scale={ 0.2 }
        onClick={(event) => setActive(!active)}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={ '#EB1E99' } />
      </mesh>
      <ambientLight />
    </group>
    </Canvas> 
}

function Lights() {
    const groupL = useRef() as React.MutableRefObject<GroupProps>
    const groupR = useRef() as React.MutableRefObject<GroupProps>
    const front = useRef() as React.MutableRefObject<GroupProps>  
  
    useFrame(({ clock, mouse }) => {
        if(mouse.x === 0) mouse.x = 1
        if(mouse.y === 0) mouse.y = 1
        groupL.current.rotation.y = lerp(groupL.current.rotation.y, -mouse.x * (Math.PI / 2), 0.1)
        groupR.current.rotation.y = lerp(groupR.current.rotation.y, mouse.x * (Math.PI / 2), 0.1)
        front.current.position.x = lerp(front.current.position.x, mouse.x * 12, 0.4)
        front.current.position.y = lerp(front.current.position.y,  mouse.y * 12, 0.4)
    })
  
    return (
      <>
        <group ref={groupL}>
          <pointLight position={[0, 7, -15]} distance={15} intensity={4} />
        </group>
        <group ref={groupR}>
          <pointLight position={[0, 7, -15]} distance={15} intensity={4} />
        </group>
        <spotLight
          castShadow
          ref={front}
          penumbra={1}
          angle={Math.PI / 3}
          position={[0, 0, 8]}
          distance={11}
          intensity={4}
          shadow-mapSize-width={100}
          shadow-mapSize-height={100}
        />
      </>
    )
  }

export function ThreeComponent() {

    const [hovered, setHovered] = useState(false)
    const group = useRef() as React.MutableRefObject<GroupProps>
    
    return <Suspense fallback={ <CAText msg='She is comming ..' /> }>
        <Canvas style={ { 
        height: '100vh',
        position: 'absolute',
    } }>
        <Statue />
        {/* <group dispose={null}>
            <group ref={ group }>
                {/* <Box setHover={ setHovered} />
                <Lights />
            </group>
        </group> */}
    </Canvas>
    </Suspense>
  }