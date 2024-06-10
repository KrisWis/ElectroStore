export interface SearchModalProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    modalIsOpen: boolean
}

export interface SearchItemInterface {
    id: number,
    caption: string
}