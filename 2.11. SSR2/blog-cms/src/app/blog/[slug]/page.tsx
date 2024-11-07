import Wrapper from "@/components/wrapper";
import { getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";

export const generateStaticParams = async () => {
    const blogs: IBlog[] =await getBlogs()

    return blogs.map((item) => 
    ({ slug: item.fields.slug  })
    )
}

export async function  generateMetadata({params} : { params: {slug : string} }) {
    const blog: IBlog = await getBlogSlug(params.slug)
    
    return {
        title : blog.fields.title,
        description : blog.fields.title,
        authors: blog.fields.author.fields.name,
        openGraph:{
            images:[`https:${blog.fields.thumbnail.fields.file.url}`]
        }
    }
}

export default async function BlogDetail({params} : {params: {slug: string}}) {
    const blog: IBlog = await getBlogSlug(params.slug)

    const option: Options ={
        renderNode: {
            [BLOCKS.PARAGRAPH]: (Node, children) => <p className="pb-4">{children}</p>,
        },
        renderMark: {
            [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>
        }
    };

    return (
        <div className="flex p-10 pt-10 justify-between bg-neutral-100">
            <div className="w-1/3 bg-white">
                kembali
            </div>
            <div className=" w-[900px]">
            <div className="flex flex-col gap-2">
                <div className="border border-[#D85F30] p-1 rounded-md w-max ">
                <p className="text-base font-bold text-[#D85F30]">{blog.fields.category}</p>
                </div>
                <h1 className="font-bold text-3xl">{blog.fields.title}</h1>
                <div className="flex items-center p-4">
                    <div className="rounded-full overflow-hidden w-[40px] h-[40px]">
                    <Image
                    src={`https:${blog.fields.author.fields.avatar.fields.file.url}`}
                    alt="author"
                    width={100}
                    height={100}
                    />
                    </div>
                    <p className="font-semibold p-2">{blog.fields.author.fields.name} </p>
                    <p className="p-2">|</p>
                    <p className="text-xs p-2"> {blog.fields.date}</p>

                </div>
                    <Image
                    src={`http:${blog.fields.thumbnail.fields.file.url}`}
                    alt={blog.fields.slug}
                    width={800}
                    height={800}
                    />
                </div>
                <div className="w-[800px] pt-4">
                { documentToReactComponents(blog.fields.content, option) }
                </div>
            </div>
        </div>
    )
}