export interface Header {
    title: string,
    subtitle?: string,
    buttons: Array<Button>
}

export interface Button {
    text: string,
    to?: string,
    url?: string,
    type: string,
    target: string
}

export interface CardInterface {
    title: string,
    content?: string,
    intro?: string,
    id: number,
    button?: Button,
    buttons?: Button[],
    image: any,
}