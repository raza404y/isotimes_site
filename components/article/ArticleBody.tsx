interface ArticleBodyProps {
    content: string;
}

export default function ArticleBody({ content }: ArticleBodyProps) {
    return (
        <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
