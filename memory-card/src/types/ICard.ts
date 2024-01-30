export interface ICard {
    id: number
    title: string,
    src: string,
    handleClick: (id: number) => void,
}