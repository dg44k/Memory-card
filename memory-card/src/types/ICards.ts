export type ICards = {
    cards: {
        id: number;
        title: string;
        src: string;
    }[];
    onClick: (score: number) => void;
    updateBestScore: (bestScore: number) => void;
}
