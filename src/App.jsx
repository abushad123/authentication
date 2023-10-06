import React, {useState, useEffect, useRef} from 'react'
import { shake } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import Welcome from './components/Welcome';


function App() {
    const styles = StyleSheet.create({
        shake: {
          animationName: shake,
          animationDuration: '1s'
        }
      })
      const point1 = useRef("");
      const point2 = useRef("");
    const [email, setEmail] = useState("")  
    const [password, setPassword] = useState("")  
    const [wel, setWel] = useState(false)  
    const [anime, setAnime] = useState(false)  


    const handleSubmit = (e) => {
        if (email != "" && password != "") {
             setWel(true)
        }
        console.log(point1.current.value)
        if (point1.current.value == "") {
            setAnime(true)
        }
        if (point2.current.value == "") {
            setAnime(true)
        }
    }
    const handleOver = () => {
        setAnime(false)
    };

    const logout = () => {
        setWel(false)
    };

  return (
    <>
    {!wel ? 
     (<section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8" >
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Authentication
              </h1>
            
                  <div className={anime? css(styles.shake): null }>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your email</label>
                      <input type="text" name="email" ref={point1}  onInput={(e)=> setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div className={anime? css(styles.shake): null }>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Password</label>
                      <input type="text" name="password" ref={point2}  onInput={(e)=> setPassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button type="buttton" onClick={handleSubmit} onMouseOver={handleOver} className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>

          </div>
      </div>
  </div>
</section>) : <Welcome handleLogOut={logout}/>}
    </>
  )
}

export default App
