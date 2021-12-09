const MenuButton = ({open, setOpenState}) => {

    return (
        <div onClick={setOpenState} className={open ? 'menu-button active' : 'menu-button'}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuButton