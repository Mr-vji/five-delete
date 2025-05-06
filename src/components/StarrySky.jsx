import { Instance, Instances } from "@react-three/drei"
import { useMemo, useRef } from "react"
import { randFloat, randFloatSpread } from "three/src/math/MathUtils.js"

export const StarrySky = ({ nbParticles = 1000 }) => {

    const particles = useMemo(
        () => Array.from(
            { length: nbParticles },
            (_, index) => (
                {
                    position: [
                        randFloat(5, 15), // X
                        randFloatSpread(20), // Y
                        randFloatSpread(20), // Z
                    ],
                    size: randFloat(0.1, 0.25)
                }
            )
        )); // ===>  create random positions and sizes for each particle

    return (
        <Instances range={nbParticles} >
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial />
            {particles.map((props, index) => {
                return <Particle key={index} {...props} />
            })}
        </Instances>
    ) // ===> render a Particle for each object in the particles array
}

const Particle = ({ position, size }) => {
    const ref = useRef();

    return <Instance ref={ref} scale={size} position={position} />
} // ===> this creates a single particle instance with position and scale