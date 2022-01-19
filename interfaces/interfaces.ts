export interface Header {
    title: string,
    buttons: Array<Button>
}

export interface Button {
    text: string,
    to: string,
    type: string,
}

export interface CardInterface {
    title: string,
    content: string,
    id: number,
    button: Button,
    image: any
}