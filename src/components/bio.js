import {
  Link
} from 'gatsby'
import React from 'react'
import profile from "../assets/profile.png" // Tell Webpack this JS file uses this image


const Bio = () => ( <
  div >
  <
  h4 > About the Author < /h4> <
  div className = "flex-container" >
  <
  div className = "col-2" >
  <
  img src = {
    profile
  }
  alt = "Violet"
  id = "profile-pic" / >
  <
  /div> <
  div className = "col-10" >
  <
  p > Violet Lingenfelter is a student at Northeastern University studying Environmental Science with a concentration in Urban Studies.She is interested in
  public transportation and general urban design. < Link to = "/about/" > See more about her < /Link> < /
  p > < /
  div > <
  /div> < /
  div >
)



export default Bio