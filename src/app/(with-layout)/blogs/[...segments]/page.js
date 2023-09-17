import Link from 'next/link';
import React from 'react';

const SingleBlog = ({params}) => {
    console.log(params.segments);
    const [year, id] = params.segments;
    return (
        <div>
            {year} for {id}
            <Link href={'/blogs'} ><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Go blog page </button></Link>
        </div>
    );
};

export default SingleBlog;