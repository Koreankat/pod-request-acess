import logo from "./assets/desktop/logo.svg"
import { useState } from "react"
import dots from "./assets/desktop/bg-pattern-dots.svg"
import apple from "./assets/desktop/apple-podcast.svg"
import google from "./assets/desktop/google-podcasts.svg"
import spotify from "./assets/desktop/spotify.svg"
import pocket from "./assets/desktop/pocket-casts.svg"
import "./App.css"

function App() {
  const [input, setInput] = useState("")
  const [isClicked, setIsClicked] = useState(true)
  return (
    <>
      <div className='bg-mobile'></div>
      <div className=' xl:w-[79.688rem] md:w-[48rem] w-[23.438rem] card h-[40rem]'>
        <img
          src={logo}
          alt='logo'
          className='mb-[100px] xl:mt-0 md:mt-5 z-x'
        ></img>
        <div className='xl:w-[45.188rem] xl:h-[31.813rem] pt-[4.5rem] md:w-[39.688rem] w-full bg-card absolute xl:bottom-[5.625rem] md:bottom-[15.625rem]   '>
          <h1 className='xl:text-[3.25rem] md:text-[3rem] text-[1.625rem] font-light md:text-left text-center text-[#54E6AF] leading-1 mb-5'>
            PUBLISH YOUR PODCASTS <span className='text-white'>EVERYWHERE</span>
          </h1>{" "}
          <p className='text-[#C2CBE5] md:text-[18px] text-[15px] md:w-[27.813rem] md:ml-0 ml-5  w-[20.438rem] md:mb-8 mb-2 text-center'>
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </p>
          <div className=' flex md:flex-col flex-col-reverse md:ml-0 ml-5'>
            <form className='font-bold mb-8'>
              <input
                className='md:w-[427px] w-[327px] bg-[#2C344B] p-[13px] rounded-full input font-bold text-white'
                placeholder='    Email Adress'
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className='btn font-bold text-[14px]'
                onClick={(e) => {
                  setIsClicked(!isClicked)
                  e.preventDefault()
                }}
              >
                Request access
              </button>
              {isClicked
                ? input.includes("@") && <></>
                : !input.includes("@") && (
                    <>
                      <br />
                      <span className='red'>Oops! Please check your email</span>
                    </>
                  )}
            </form>
            <div className='md:w-[33.438rem] w-[19.688rem] flex justify-between p-3  md:-mb-0 mb-10'>
              <img
                src={spotify}
                alt='spotify'
                className='md:w-[96px] w-[56px]'
              ></img>
              <img
                src={apple}
                alt='apple'
                className=' md:w-[78px] w-[45px]'
              ></img>
              <img
                src={google}
                alt='google'
                className=' md:w-[125px] w-[73px]'
              ></img>
              <img
                src={pocket}
                alt='pocket'
                className='md:w-[129px] w-[77px]'
              ></img>
            </div>
          </div>
        </div>
      </div>
      <img
        src={dots}
        alt='dots'
        className=' md:visible absolute xl:right-0 xl:bottom-10 md:bottom-5 invisible '
      ></img>
    </>
  )
}

export default App
