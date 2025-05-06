import { Instance, Instances, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react"
import { AdditiveBlending, Color } from "three"
import { lerp, randFloat, randFloatSpread } from "three/src/math/MathUtils.js"

export const Starss = ({ npParticles = 1000 }) => {

    const texture = useTexture('textures/star_07.png')




    const randomGenFunction = useMemo(() => Array.from({ length: npParticles },
        (_, index) => ({
            position: [randFloat(5, 15), randFloatSpread(20), 0,],
            rotation: [0, randFloat(0, Math.PI * 2), 0],
            scale: randFloat(0.01, 0.1),
            lifeTime: randFloat(1, 6)
        })))


    return (<>
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

useTexture.preload('textures/star_07.png');

const colorStar = new Color('pink').multiplyScalar(30);
const colorEnd = new Color('white').multiplyScalar(30);

const Particles = ({ position, scale, rotation, lifeTime }) => {
    const ref = useRef();
    const age = useRef(0);

    useFrame(({ camera }, delta) => {
        age.current += delta;

        if (!ref.current) {
            return;
        }

        if (age.current > lifeTime) {
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

    return <group rotation={rotation}>
        <Instance ref={ref} position={position} scale={scale} />
    </group>
}