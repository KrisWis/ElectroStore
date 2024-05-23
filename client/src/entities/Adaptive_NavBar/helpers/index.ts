export const closeNavbar = (setActiveNavbar: React.Dispatch<React.SetStateAction<boolean>>, setNavBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>): void => {
    setActiveNavbar(false);
    setNavBarIsOpen(false);
}