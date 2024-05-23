import ContentLoader from "react-content-loader";

export const OurNewArrivals_Skeleton = (props: any) => (
    <ContentLoader
        speed={1}
        width={265}
        height={400}
        viewBox="0 0 265 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#bfbfbf"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="265" height="256" />
        <rect x="0" y="280" rx="10" ry="10" width="265" height="40" />
    </ContentLoader>
)