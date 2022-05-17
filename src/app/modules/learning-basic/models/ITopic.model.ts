interface IArticles {
    contentId: number,
    contentTitle: string,
    contentBody: string
}

export interface ITopic {
    id: number,
    title: string,
    content: IArticles
}