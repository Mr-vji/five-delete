import { Float, Trail } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Color, Vector3 } from "three";

const tmpVec = new Vector3();
const bColor = new Color('red')
bColor.addScalar(5)

export const Cur = () => {
    const target = useRef();
    const { viewport, camera } = useThree(); // Use viewport from useThree() hook

    useFrame(({ pointer }, delta) => {
        if (target.current) {
            tmpVec.set(
                (pointer.x * viewport.width) / 2,
                (pointer.y * viewport.height) / 2,
                0
            );
            target.current.position.lerp(tmpVec, delta * 12);
        }
    });

    return (
        <>
            <Trail
                width={0.3} // Width of the line
                color={bColor} // Color of the line
                length={1} // Length of the line
                decay={1} // How fast the line fades away
                local={false} // Whether to use the target's world or local positions
                stride={0} // Min distance between previous and current point
                interval={1} // Number of frames to wait before the next calculation
                target={target.current} // Use the moving sphere (target) as the trail's target
                attenuation={(width) => width} // Define width in each point along the trail
            >
                <mesh scale={0.02} ref={target}>
                    <sphereGeometry />
                    <meshBasicMaterial color={bColor} />
                </mesh>
            </Trail>
        </>
    );
};
