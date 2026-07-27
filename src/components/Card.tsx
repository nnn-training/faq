import Link from 'next/link';

export default function Card({ children, href, hover, flex }){
  return (
    <div className={flex ? "flex" : ""}>
      <Link href={href}>
        {hover ?
          <div className="bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50 transition duration-300">
            {children}
          </div>
          :
          <div className="bg-white rounded-lg shadow cursor-pointer">
            {children}
          </div>
        }
      </Link>
    </div>
  );
};
