import { Parallax, ParallaxLayer } from 'react-spring'

<Parallax pages={2}>
    <ParallaxLayer offset={0} speed={0.2}>
        first Page
    </ParallaxLayer>
    <ParallaxLayer offset={1} speed={0.5}>
        second Page
    </ParallaxLayer>
</Parallax>