interface NewsItemProps {
  content: string;
}

export function NewsItem({ content }: NewsItemProps) {
  return (
    <div className="whitespace-nowrap px-8 font-medium">
      {content}
    </div>
  );
}