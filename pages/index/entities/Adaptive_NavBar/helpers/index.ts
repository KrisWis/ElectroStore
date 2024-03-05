export const closeNavbar = (setActiveNavbar: React.Dispatch<React.SetStateAction<boolean>>, setNavBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>): void => {
    setActiveNavbar(false);
    setNavBarIsOpen(false);
}

export const dropdown__window__texts: string[] = ["Shop", "Single Product", "Blog", "Single Post", "Single Post w/sidebar", "About", "Cart", "Checkout", "My Account", "Order Tracking", "Wishlist"];