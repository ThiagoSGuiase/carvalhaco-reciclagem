import { Menu } from "./menu"

const layout = ({children}) => {
  return (
    <>
      <Menu />
      {children}
    </>
  )
};

export default layout;