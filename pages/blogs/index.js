import Link from "next/link";
import useSWR from "swr";

export default function Blogs() {
    const { data, error } = useSWR("/api/blogs", (apiURL) =>
        fetch(apiURL).then((res) => res.json())
    );
    if (!data) return <div>loading...</div>;

    console.log(data)
    const list = [...data]
    return (
        <div>
            <h1>Blogs</h1>
            <ul>
            {list.map((e) => {
                return <Link key={e.defectId} href={"/blogs/"+e.defectId }><li>{e.chainage} - {e.defectNameToShow}</li></Link>
            })}
            </ul>
        </div>
    )
}