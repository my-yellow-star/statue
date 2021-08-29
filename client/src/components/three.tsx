import { useGLTF } from '@react-three/drei';
import { Canvas, GroupProps, MeshProps, useFrame } from '@react-three/fiber';
import React, { useCallback, useContext, useRef, useState } from 'react';

import { Device, DeviceContext } from '../App';
import { Color } from '../style/color';

const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
const COLOR_LIST = [Color.yellow, Color.pink, Color.blue]

let statueModel: any = null

function useLoadStatueModel() {
    if(statueModel) return statueModel

    // eslint-disable-next-line react-hooks/rules-of-hooks
    statueModel = useGLTF('https://chana-public.s3.ap-northeast-2.amazonaws.com/vierge.glb') as any
    return statueModel
}

function Statue({
    onClick,
}: {
    onClick?: () => void;
}) {

    const device = useContext(DeviceContext)
    const position = device === Device.Small ? [0.2, -2.3, 0] : [0.2, -2.7, 0]

    const model = useLoadStatueModel()
    const group = useRef() as React.MutableRefObject<GroupProps>
    const scale = [250, 250, 250]
    const [color, setColor] = useState(Color.grey)
    let colorIndex = useRef(0)

    const updateColor = useCallback(() => {
        if(device === Device.Small) return
        setColor(COLOR_LIST[colorIndex.current % 3])
        colorIndex.current += 1
    }, [device])

    useFrame(({ clock, mouse }) => {
        group.current.rotation.y = lerp(group.current.rotation.y, mouse.x * (Math.PI / 5), 0.005)
      })
    
    return <group dispose={null}>
        <group ref={group}>
            <mesh visible castShadow receiveShadow geometry={model.nodes.default.geometry} scale={scale} rotation={[ -1.5, 0, 0]} position={position}
                onPointerDown={onClick}
                onPointerOver={updateColor}
            >
                <meshStandardMaterial attach="material" roughness={0.9} metalness={0.5} color={ color } />
            </mesh>
            <Lights />
            { device === Device.Small && <><spotLight position={[0, 0, 8]} /></>}
        </group>
    </group>
}


function Box() {
    // This reference will give us direct access to the mesh
    const mesh = useRef() as React.MutableRefObject<MeshProps>
    // Set up state for the hovered and active state
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    const [color, setColor] = useState(COLOR_LIST[0])
    let colorIndex = useRef(0)
    let frame = useRef(0)
    useFrame((e) => {
        frame.current += 1
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
        mesh.current.rotation.z += 0.01
        if(frame.current % 100 === 0) {
            colorIndex.current += 1
            setColor(COLOR_LIST[colorIndex.current % 3])
        }
    })
  
    return <mesh
        ref={mesh}
        scale={ 0.2 }
        onClick={(event) => setActive(!active)}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={ color } />
      </mesh>
      
}

export function BoxComponent() {

    const group = useRef() as React.MutableRefObject<GroupProps>

    return <Canvas>
        <group ref={ group }>
        <Box />
        <spotLight position={[0, 0, 8]} />
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

export function StatueComponent({
    onStatueClick,
}: {
    onStatueClick?: () => void;
}) {
    
    return <Canvas style={ { 
        position: 'absolute',
    } }>
        <Statue onClick={ onStatueClick } />
    </Canvas>
  }