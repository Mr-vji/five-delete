import { Instance, Instances, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react"
import { AdditiveBlending, Color } from "three"
import { lerp, randFloat, randFloatSpread } from "three/src/math/MathUtils.js"

export const Snow = ({ npParticles = 1000 }) => {

    const texture = useTexture('textures/magic_04.png')




    const randomGenFunction = useMemo(() => Array.from({ length: npParticles },
        (_, index) => ({
            position: [randFloatSpread(8), randFloat(0, 10), randFloatSpread(5) - 1,],
            scale: randFloat(0.01, 0.1),
            lifeTime: randFloat(1, 6),
            speed: randFloat(0.1, 1)
        })))

    return (
        <>
            <Instances range={npParticles} limit={npParticles} frustumCulled={false} instanceColor >
                <planeGeometry />
                <meshBasicMaterial
                    alphaMap={texture}
                    transparent
                    depthWrite={false}
                    blending={AdditiveBlending}
                />
                {
                    randomGenFunction.map((props, i) => (
                        <Particles key={i} {...props} />
                    ))
                }
            </Instances>

        </>)

};

useTexture.preload('textures/magic_04.png');

const colorStar = new Color('skyblue').multiplyScalar(30);
const colorEnd = new Color('white').multiplyScalar(30);

const Particles = ({ position, scale, lifeTime, speed }) => {
    const ref = useRef();
    const age = useRef(0);

    useFrame(({ camera }, delta) => {
        age.current += delta;

        if (!ref.current) {
            return;
        }
        ref.current.position.y -= speed * delta
        ref.current.position.x += Math.sin(age.current * speed) * delta
        ref.current.position.z += Math.cos(age.current * speed) * delta

        if (age.current > lifeTime) {
            ref.current.position.set(position[0], position[1], position[2])
            age.current = 0;
        }
        const lifetimeProgression = age.current / lifeTime;
        ref.current.scale.x = ref.current.scale.y = ref.current.scale.z =
            lifetimeProgression < 0.5
                ? lerp(0, scale, lifetimeProgression)
                : lerp(scale, 0, lifetimeProgression)

        ref.current.color.r = lerp(colorStar.r, colorEnd.r, lifetimeProgression)
        ref.current.color.g = lerp(colorStar.g, colorEnd.g, lifetimeProgression)
        ref.current.color.b = lerp(colorStar.b, colorEnd.b, lifetimeProgression)

        ref.current.lookAt(camera.position)
    })
    return <Instance ref={ref} position={position} scale={scale} />
}