import { createContext, useState } from "react"

export const MyContext = createContext();
function TheContext({ children }) {
   const [isDark, setDark] = useState(false);
   const [isOpenModal, setModal] = useState(false);
   return (
      <MyContext.Provider value={{ isDark, setDark, isOpenModal, setModal }}>
         {children}
      </MyContext.Provider>
   )
}
export default TheContext