type Props = {
    count: number;
};

const BlogSkeleton = ({ count }: Props) => {
    const skeletonItems = Array.from({ length: count }, (_, index) => (
        <div key={index} className="bg-gray-200 rounded-md h-8 mb-2 animate-pulse"></div>
    ));

    return <div>{skeletonItems}</div>;
};

export default BlogSkeleton