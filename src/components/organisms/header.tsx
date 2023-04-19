import { useNavigationContext } from '@context/navigation'

const Header = () => {
  const { header } = useNavigationContext()

  if (!header.visible) return <></>

  return (
    <div className="fixed top-0 left-0 bg-white shadow-md w-full h-14 flex flex-row justify-between items-center px-4 rounded-b-xl">
      <div onClick={header.leftButton.onClick}>{header.leftButton.icon}</div>
      {header.title}
      <div onClick={header.rightButton.onClick}>{header.rightButton.icon}</div>
    </div>
  )
}

export default Header
