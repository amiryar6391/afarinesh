import Image from "next/image";
import logo from "../../public/logo/Logo_Afarinesh.svg";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";



export default function Navbar() {

  const route = useRouter().route;
  
  const [open, setOpen] = useState(true);

  const clickHandlerOpen = () => {
    setOpen(false);
  };


  const clickHandlerClose = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(true);
  }, [route]);

  return ( 
   <>
    { open ? (
      <nav className=" bg-white sticky top-0 z-10">
        <div className=" container mx-auto flex items-center justify-between p-5">
          <ul className=" flex space-x-5 space-x-reverse">
            <li
              className=" text-greenD md:hidden cursor-pointer"
              onClick={clickHandlerOpen}
            >
              <MdOutlineMenu size="30px" />
            </li>
            <Link href="/">
              {route == "/" ? (
                <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD ">
                  خانه
                </li>
              ) : (
                <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB">
                  خانه
                </li>
              )}
            </Link>

            <Link href="/services">
              {route == "/services" ? (
                <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD">
                  خدمات
                </li>
              ) : (
                <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB ">
                  خدمات
                </li>
              )}
            </Link>

            <Link href="/articles">
              {route == "/articles" ? (
                <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD">
                  مقالات
                </li>
              ) : (
                <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB">
                  مقالات
                </li>
              )}
            </Link>

            <Link href="/aboutus">
              {route == "/aboutus" ? (
                <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD">
                  درباره ما
                </li>
              ) : (
                <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB">
                  درباره ما
                </li>
              )}
            </Link>

            <Link href="/contactus">
              {route == "/contactus" ? (
                <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD">
                  تماس با ما
                </li>
              ) : (
                <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB">
                  تماس با ما
                </li>
              )}
            </Link>
          </ul>

          <div>
            <Link href="/">
              <Image src={logo} width={50} height={50} alt="logo"/>
            </Link>
          </div>
        </div>
      </nav>
    ) : (
      
        <>
          <nav className=" bg-white sticky top-0 z-10">
            <div className=" container mx-auto flex items-center justify-between p-5">
              <ul className=" flex space-x-5 space-x-reverse">
                <li
                  className=" text-greenD md:hidden cursor-pointer"
                  onClick={clickHandlerOpen}
                >
                  <MdOutlineMenu size="30px" />
                </li>
                <Link href="/">
                  {route == "/" ? (
                    <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD ">
                      خانه
                    </li>
                  ) : (
                    <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB">
                      خانه
                    </li>
                  )}
                </Link>

                <Link href="/services">
                  {route == "/services" ? (
                    <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD">
                      خدمات
                    </li>
                  ) : (
                    <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB ">
                      خدمات
                    </li>
                  )}
                </Link>

                <Link href="/articles">
                  {route == "/articles" ? (
                    <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD">
                      مقالات
                    </li>
                  ) : (
                    <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB">
                      مقالات
                    </li>
                  )}
                </Link>

                <Link href="/aboutus">
                  {route == "/aboutus" ? (
                    <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD">
                      درباره ما
                    </li>
                  ) : (
                    <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB">
                      درباره ما
                    </li>
                  )}
                </Link>

                <Link href="/contactus">
                  {route == "/contactus" ? (
                    <li className=" hidden md:block md:text-greenD md:text-xl md:font-iransB md:pb-2 md:border-b-2 md:border-b-greenD">
                      تماس با ما
                    </li>
                  ) : (
                    <li className=" hidden md:block md:text-greenD md:pb-2 md:text-xl md:font-iransB">
                      تماس با ما
                    </li>
                  )}
                </Link>
              </ul>

              <div>
                <Link href="/">
                  <Image src={logo} width={50} height={50} alt="logo" />
                </Link>
              </div>
            </div>
          </nav>
          <aside className=" sticky top-0 z-20">
            <div className="w-80 h-screen border absolute top-0 z-10 bg-white rounded-md md:hidden">
              <div className=" flex justify-between items-center p-3 mt-2">
                <p className=" text-greenD font-iransB text-lg">
                  مرکز مشاوره آفرینش
                </p>
                <p>
                  <span
                    className=" text-greenD cursor-pointer"
                    onClick={clickHandlerClose}
                  >
                    <IoClose size="30px" />
                  </span>
                </p>
              </div>

              <ul className=" p-3 mt-6 ">
                <Link href="/">
                  <li className=" font-iransB border-b">خانه</li>
                </Link>
                <Link href="/services">
                  <li className=" font-iransB mt-4 border-b">خدمات</li>
                </Link>
                <Link href="/articles">
                  <li className=" font-iransB  mt-4 border-b">مقالات</li>
                </Link>
                <Link href="/aboutus">
                  <li className=" font-iransB  mt-4 border-b">درباره ما</li>
                </Link>
                <Link href="/contactus">
                  <li className=" font-iransB  mt-4 border-b">تماس با ما</li>
                </Link>
              </ul>
            </div>
          </aside>
        </>
      
    )}
  </>
  );
}
