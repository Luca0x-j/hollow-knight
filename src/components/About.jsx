import "../index.css";
import AnimatedTitle from './AnimatedTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); 

const About =() => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

  return (
    <div id="about" className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <p className='font-general text-sm uppercase md:text-[10px]'>
                Bem-vindo a Hallownest
            </p>
            
            <AnimatedTitle
                title="Emb<b>a<b/>rque  em  uma <br/> Jornada nas Profundezas"
                containerClass="mt-5 !text-black text-center"
            />
            
            <div className="about-subtext">
                <p>O Jogo das Sombras começa — sua jornada, agora, uma lenda nas profundezas</p>
                <p className="text-gray-900">
                    Em Hallownest, cada passo ecoa entre reinos esquecidos, unindo cavaleiros, sonhos
                    e memórias em um mesmo destino.
                </p>
            </div>
        </div>

        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <img 
                    src="../public/img/1184115.jpg" 
                    alt="Background"
                    className='absolute left-0 top-0 size-full object-cover' 
                />
            </div>
        </div>
    </div>
  )
}

export default About;