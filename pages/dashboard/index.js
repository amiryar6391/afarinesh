
import Sidebar from "@/components/dashboard/side/sidebar";
import { getSession } from "next-auth/react";


export default function Dashboard(){
    return(
        <>
        <div className=" bg-greenD">
            <h1 className=" text-3xl text-center p-8 text-white">به پنل مدیریت خوش آمدید</h1>
        </div>
        <div className=" container mx-auto grid grid-cols-12 mt-6 gap-4">
            <div className=" col-span-5 sm:col-span-3">
                <Sidebar />
             </div>
             <div className=" col-span-7 sm:col-span-9 border rounded-lg p-4">
                <p className=" text-gray-500 mt-6"><span className=" text-black font-iransB">پیام ها :</span>در این محیط شما میتوانید نظرات،انتقادات،پیشنهادهایی که مراجعه کنندگان به سایت و مرکز آفرینش در صفحه تماس با ما گذاشته اند را مشاهده کنید.پیام های جدیدتر در بالای صفحه قرار میگیرند و هر پیام را با فشردن دکمه حذف می توان حذف کرد</p>
                <p className=" text-gray-500 mt-6"><span className=" text-black font-iransB">همکاران :</span>در این محیط میتوانید تیم درمانگر مرکز آفرینش را مشاهده کنید و در صورت عدم همکاری با هر کدام با فشردن دکمه حذف آن را حذف کنید و در پایین صفحه از قسمت اضافه کردن همکار جدید میتوانید یک همکار را به لیست خود اضافه کنید.توجه داشته باشید با اضافه یا کم کردن همکار یا همکاران قسمت تیم مجرب ما در صفحه خانه به روز میشود و احتیاجی به تنظیمات دیگر نیست.در قسمت اضافه کردن همکار جدید حتما باید هر سه فیلد پر شود و عکس را با توجه به مشخصاتی که ذکر شده بارگذاری کنید.</p>
                <p className=" text-gray-500 mt-6"><span className=" text-black font-iransB">مقاله ها :</span>در این محیط میتوانید همه مقاله های موجود در سایت را مشاهده کنید و در صورت لزوم هر کدام از آنها را حذف کنید.در پایین صفحه قسمت مقاله ها میتوانید مقاله جدیدی را به سایت اضافه کنید.توجه داشته باشید هر سه فیلد مخصوص اضافه کردن مقاله حتما باید پر شود و فایل مربوط به متن مقاله باید ورد با پسوند docx باشد.</p>
                <p className=" text-gray-500 mt-6"><span className=" text-black font-iransB">خدمات :</span>در این محیط میتوانید خدمات جدیدی را که به موسسه اضافه شده است را به قسمت خدمات سایت اضافه کنید در اینجا هم توجه داشته باشید همه فیلدها پر شود و فایل متن خدمت حتما ورد با پسوند docx باشد..</p>
                <p className=" text-gray-500 mt-6"><span className=" text-black font-iransB">تغییر رمز عبور :</span>در این محیط می توانید رمز عبور را تغییر دهید و برای این تغییر توجه داشته باشید وارد کردن رمز فعلی الزامی است.توصیه میشود در دوره های زمانی معین برای امنیت بیشتر سایت رمز عبور مدیریت را تغییر دهید .</p>
                <p className=" text-gray-500 mt-6"><span className=" text-black font-iransB">توجه :</span>بعد از اتمام کار با پنل مدیریت برای خارج شدن حتما دکمه خروج را استفاده کنید که از این محیط logout شوید.</p>



             </div>
        </div>
       </>
    )
}

export async function getServerSideProps(context){
    const session = await getSession(context)

    if(!session){
        return {
            redirect : {
                destination : '/admin/login',
                permanent : false
            }
        }
    }
    return {
        props : {}
    }
}