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
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className=''>
      <div className=' xl:w-[79.688rem] md:w-[48rem] w-[23.438rem] card h-[40rem] '>
        <img src={logo} alt='logo' className='mb-[100px]'></img>
        <div className='xl:w-[45.188rem] xl:h-[31.813rem] pt-[4.5rem] md:w-[39.688rem] w-[20.438rem] bg-card absolute bottom-[5.625rem] items-end'>
          <h1 className='xl:text-[3.25rem] md:text-[3rem] text-[1.625rem] font-light text-[#54E6AF] leading-1 mb-5'>
            PUBLISH YOUR PODCASTS <span className='text-white'>EVERYWHERE</span>
          </h1>{" "}
          <p className='text-[#C2CBE5] text-[18px] md:w-[27.813rem]  w-[20.438rem] mb-8'>
            Upload your audio to Pod with a single click. We’ll then distribute
            your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
            Casts and more!
          </p>
          <form className='font-bold mb-8'>
            <input
              className='md:w-[427px] w-[327px] bg-[#2C344B] p-[13px] rounded-full input font-bold text-white'
              placeholder='    Email Adress'
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className='btn font-bold text-[14px]'
              onClick={(e) => {
                e.preventDefault()
                setIsClicked(!isClicked)
              }}
            >
              Request access
            </button>
            {input.indexOf("@") ? (
              <></>
            ) : (
              <>
                <br />
                <span className='red'>Oops! Please check your email</span>
              </>
            )}
          </form>
          <div className='xl:w-[33.438rem] flex justify-between p-3'>
            <img src={spotify} alt='spotify'></img>
            <img src={apple} alt='apple'></img>
            <img src={google} alt='google'></img>
            <img src={pocket} alt='pocket'></img>
          </div>
        </div>
      </div>
      <img
        src={dots}
        alt='dots'
        className='absolute xl:right-0 xl:bottom-10'
      ></img>
    </div>
  )
}

export default App
