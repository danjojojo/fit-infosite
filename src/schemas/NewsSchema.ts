interface NewsArticleSchema {
    id: string;
    image: string;
    location: string;
    title: string;
    description: string;
}

interface NewsSchema { 
    originalText: string;
    highlightedText: string[];
    newsArticles: NewsArticleSchema[];
}

export interface NewsArticlesDataSchema {
    newsArticles: NewsArticleSchema[];
}

export interface NewsDataSchema {
    data: NewsSchema;
}