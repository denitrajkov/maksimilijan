import { WineProps } from "@/interface/type";
import Image from "next/image";
import Link from "next/link";

function Card({ id, name, color, image }: WineProps) {
  return (
    <div className="relative text-wine bg-white shadow-md bg-clip-border rounded-lg w-80 mb-12 transform transition duration-500 hover:scale-110">
      <div className="relative rounded-t-lg overflow-hidden text-gray-700 bg-white bg-clip-border h-64 ">
        <Image
          src={`${image}`}
          alt="card-image"
          width={600}
          height={400}
          layout="responsive"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="text-center">
          <p className="text-2xl">{name}</p>
        </div>
      </div>

      <div className="py-3 flex">
        <Link href={`/products/${id}`} className="w-full max-w-96">
          <button className="border px-10 py-3 border-wine text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out">
            детали
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
