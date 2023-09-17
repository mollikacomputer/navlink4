import Link from "next/link";

const blogs = [
    {
        id:1,
        title:"Blog title 1",
        year:"2023",
        description:"Blog Description 1",
    },
    {
        id:2,
        title:"Blog title 2",
        year:"2022",
        description:"Blog Description 2",
    },
    {
        id:3,
        title:"Blog title 3",
        year:"2021",
        description:"Blog Description 3",
    },
    {
        id:4,
        title:"Blog title 4",
        year:"2020",
        description:"Blog Description 4",
    },
    {
        id:5,
        title:"Blog title 5",
        year:"2019",
        description:"Blog Description 5",
    },
    {
        id:6,
        title:"Blog title 6",
        year:"2018",
        description:"Blog Description 6",
    },
    {
        id:7,
        title:"Blog title 7",
        year:"2017",
        description:"Blog Description 7",
    },
    {
        id:8,
        title:"Blog title 8",
        year:"2020",
        description:"Blog Description 8",
    },
    {
        id:9,
        title:"Blog title 9",
        year:"2022",
        description:"Blog Description 9",
    },
    {
        id:10,
        title:"Blog title 10",
        year:"2023",
        description:"Blog Description 10",
    },
];
const BlogPage = () => {
    return (
        <div className="container mx-auto">
            {blogs.map(({id, title,year, description})=>(
                <Link key={id}
                href={{pathname:`/blogs/${year}/${id}`,
            query:{
                title:title,
            }
            }}
                >
                   <div className="block border p-2">
                    {title}
                   </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogPage;