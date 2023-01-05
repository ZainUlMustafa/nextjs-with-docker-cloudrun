import useSWR from "swr";

export default function About() {
    const { data, error } = useSWR("/api/about", (apiURL) =>
        fetch(apiURL).then((res) => res.json())
    );
    if (!data) return <div>loading...</div>;
    return (
        <div>
            <h1>About us</h1>
            <p>{data.name}</p>
        </div>
    )
}