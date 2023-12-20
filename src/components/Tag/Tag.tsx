import { Tag } from "@/src/types/types";
import Image from "next/image";

export default async function Tag({ title, image, color }: Tag) {
    return (
        <div className="inline-flex rounded-lg p-1 justify-center items-center" style={{backgroundColor: color}}>
            <Image
                src={image}
                alt={title}
                width={35}
                height={35}
                className="p-2"
            />
            <p>{title}</p>
        </div>
    )
}