import { useRouter } from "next/router";
import useSWR from "swr";

const BlogPage = () => {
    // Use the useRouter hook
    const router = useRouter()

    // Grab our ID parameter
    const { id } = router.query
    const { data, error } = useSWR(`/api/indblog?defectId=${id}`, (apiURL) =>
        fetch(apiURL).then((res) => res.json())
    );
    if (!data) return <div>loading...</div>;

    console.log(data)

    return (
        <>
            <h1>Details</h1>
            <p>chainage: {data.chainage}</p>
            <p>name: {data.defectNameToShow}</p>
            <p>sub: {data.subDefectOfDefect}</p>
            <p>lane: {data.laneNumber}</p>
            <p>xps: {data.xps}</p>
            <p>lanes affected: {data.nola}</p>
            <p>lateral extent: {data.le}</p>
        </>
    );
}

export default BlogPage