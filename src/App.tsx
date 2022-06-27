import React, { useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Section from './components/Section'
import GradientButton from './components/GradientButton'
import Button from './components/Button'
import Footer from './components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const animateCoin = () => {
    gsap.timeline({
      scrollTrigger:{
        trigger: "body",
        scrub:0.2,
        start: 'top top',
        end:'+=500',
        onUpdate: (self) => {
          const element:any = ref.current;
          let progress = Math.round(self.progress * 20)
          gsap.to('.img-seq', {backgroundPositionY: (element.clientHeight * -progress).toString() + 'px', duration: 0})
        },
      }
    })
  }

  useEffect(() => {
    animateCoin()
  }, [])

  return (
    <>
      <NavBar links={[
        { name: 'Markets', href: '/' },
        { name: 'Governance', href: '/' },
        { name: 'Prices', href: '/' },
        { name: 'Docs', href: '/' },
        { name: 'Hatom Token', href: '/', active: true },
      ]} />
      <HeroSection>
        <h1 className="hero-title">Hatom Token</h1>
        <p className="hero-sub-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="seq-cont">
          <div ref={ref} className="img-seq"/>
        </div>
      </HeroSection>
      <Section className="bg-white">
        <div className="dividends">
          <div className="numbers">
            <div>$9,449,627.26 <span>Dividends</span></div>
            <span>Paid out to Hatom Token Holders over 3 years</span>
          </div>
          <GradientButton title="Buy Hatom Tokens" />
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-20 hidden lg:block">
          <span className="text-indigo-500">Features</span> of Hatom Protocol
        </div>
        <div className="lg:grid grid-col grid-cols-4 mt-10 pb-20 hidden">
          <div>
            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-semibold">Earn</h3>
            <p className="mt-8 lg:mt-1 xl:mt-8 lg:text-sm xl:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-semibold mt-7 2xl:mt-48">Borrow</h3>
            <p className="mt-8 lg:mt-1 xl:mt-8 lg:text-sm xl:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
          </div>
          <div className="col-span-2 relative flex justify-center">
            <div className="absolute flex justify-center resp-image-cont">
              <img alt="token" src="token.svg" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-semibold">Dividends</h3>
            <p className="mt-8 lg:mt-1 xl:mt-8 lg:text-sm xl:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
            <ul className="list mt-8 lg:mt-1 xl:mt-8 lg:text-sm xl:text-base">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
            </ul>
          </div>
        </div>
        <div className="md:mt-12 pb-[100px] lg:hidden">
          <div className="relative flex justify-center items-start">
            <img alt="token" src="phone-token.svg" className="w-full max-w-[500px]" />
            <div className="absolute flex flex-col text-center pt-[40vw] md:pt-[20vw]">
              <div className="w-[260px] md:w-[380px] h-[30vw] flex justify-center items-center">
                <div className="text-3xl md:text-4xl font-semibold">
                  <span className="text-indigo-500">Features</span> of Hatom Protocol
                </div>
              </div>
              <div className="w-[260px] md:w-[380px] h-[45vw] md:h-[30vw] mt-[5vw] md:mt-[2vw]">
                <h3 className="text-2xl font-semibold -mt-[0.5vw] md:mt-[0.5vw]">Earn</h3>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  </p>
              </div>
              <div className="w-[260px] md:w-[380px] h-[50vw] md:h-[30vw] mt-[4.5vw] md:mt-[4vw]">
                <h3 className="text-2xl font-semibold -mt-[0.5vw] md:mt-[0.5vw]">Borrow</h3>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
              </div>
              <div className="w-[260px] md:w-[380px] h-[50vw] md:h-[30vw] mt-[3vw] md:mt-[7vw]">
                <h3 className="text-2xl font-semibold mt-[1vw] md:mt-[0.5vw]">Dividends</h3>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                <ul className="list mt-3">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="numbers mt-96 text-center text-2xl">
            <div>$9,449,627.26 <span>Dividends</span></div>
            <span>Paid out to Hatom Token Holders over 3 years</span>
            <div className="w-250px mt-10">
              <GradientButton title="Buy Hatom Tokens" />
            </div>
          </div>
        </div>
      </Section>
      <Section className="newsletter">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-semibold">Subscribe to Hatom newsletter</h1>
          <p className="text-white text-opacity-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do</p>
          <div className="rounded-lg p-2 bg-white bg-opacity-30 space-x-2 hidden md:flex">
            <input className="newsletter-input bg-transparent w-[200px] md:w-[450px] text-2xl indent-3" placeholder="Enter your email" />
            <GradientButton title="Subscribe" />
          </div>
          <div className="flex flex-col space-y-4 md:hidden">
            <div className="bg-white bg-opacity-30 rounded-lg p-2">
              <input className="newsletter-input bg-transparent w-[270px] md:w-[450px] text-2xl indent-3" placeholder="Enter your email" />
            </div>
            <div className="ml-auto mr-auto">
              <GradientButton title="Subscribe" />
            </div>
          </div>
        </div>
      </Section>
      <Footer>
        <div className="items-start flex md:hidden pb-10">
          <img alt="logo" src="favicon.svg" width="35" height="35" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 font-normal gap-10">
          <div className="items-start hidden md:flex">
            <img alt="logo" src="favicon.svg" width="35" height="35" />
          </div>
          <div className="flex text-white md:justify-start lg:justify-end">
            <div className="flex flex-col space-y-5">
              <span className="font-bold text-lg">Protocol</span>
              <span>Markets</span>
              <span>Prices</span>
              <span>Docs</span>
            </div>
          </div>
          <div className="flex text-white md:justify-start lg:justify-end">
            <div className="flex flex-col space-y-5">
              <span className="font-bold text-lg">Governance</span>
              <span>Overview</span>
              <span>Hatom token</span>
            </div>
          </div>
          <div className="flex text-white md:justify-start lg:justify-end">
            <div className="flex flex-col space-y-5">
              <span className="font-bold text-lg">Security</span>
              <span>Audits</span>
              <span>Formal Verifications</span>
              <span>Economic Security</span>
              <span>Bug Bounty</span>
            </div>
          </div>
          <div className="justify-end font-bold hidden md:flex">
            <div>
              <Button title="App" />
            </div>
          </div>
        </div>
        <div className="font-normal mt-5 opacity-60 border-b border-gray-100 border-opacity-30 pb-10">
          @2022 Hatom, LLC
        </div>
        <div className="flex items-center space-x-3 font-semibold text-gray-500 pt-10">
          <div className="w-3 h-3 rounded-full bg-green-300" />
          <span>Latest Block: 14296113</span>
        </div>
      </Footer>
    </>
  );
}

export default App;
