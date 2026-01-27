import { createContext, useState } from "react"

export const MyContext = createContext();
function TheContext({ children }) {
   const [isDark, setDark] = useState(false);
   return (
      <MyContext.Provider value={{ isDark, setDark }}>
         {children}
      </MyContext.Provider>
   )
}
export default TheContext