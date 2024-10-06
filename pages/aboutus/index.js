import Image from "next/image";
import photo from '../../public/images/aboutus/kafe.jpg'
import photo1 from '../../public/images/aboutus/aboutus1.jpg'



export default function Aboutus(){
    return(
        <>
        <div className=" relative h-[350px] ">
            <Image src={photo} fill alt="about us"  className="brightness-75 saturate-150 object-cover object-center" sizes='(max-width: 640px) 100vw,50vm'/>
        </div>
        <div className=" container mx-auto mt-20">
            <div className=" relative  h-[750px] lg:float-right lg:w-[650px] ml-10">
                 <Image src={photo1} fill alt="about us"/>
            </div>
            <p className="  text-xl text-[#46533B] text-center mt-5 lg:text-right ">به آفرینش خوش آمدید</p>
            <h1 className=" text-3xl font-iransB text-greenD text-center mt-8 lg:text-right">تلاش برای ایجاد تفاوت</h1>
            <p className=" text-lg text-[#46533B] mt-5 font-iransB leading-relaxed">هدف ما حمایت از افراد، زوج‌ها، خانواده‌ها و گروه‌هایی است که چالش‌هایی را در زمینه سلامت روانی، رفتاری یا عاطفی تجربه می‌کنند تا بر این چالش‌ها غلبه کنند، مهارت‌های جدید بیاموزند و در زندگی پیشرفت کنند.</p>
            <p className=" mt-10 leading-relaxed">در آفرینش خدمات تخصصی ویژه برای افراد در هر سنی است که برای مقابله با چالش ها یا بهبود عملکرد خود در زمینه های مرتبط با سلامت روان و مسائل عاطفی نیاز به حمایت دارند ارائه میشود.</p>
            <h1 className=" text-3xl font-iransB text-center text-greenD mt-10 lg:text-right">متخصصان روان شناس و سلامت رفتار</h1>
            <p className=" mt-6 leading-relaxed">آنچه که آفرینش را متمایز میکند،قدرت تیم درمانگر ما متشکل از بهترین متخصصان روانشناسی و سلامت رفتار یزداست.تیم سلامت رفتار، روان‌شناسان، مشاوران، متخصصان تغذیه و متخصصان آموزشی ما که دهه‌ها تجربه و دانش را به عنوان یک تیم یکپارچه و چند رشته‌ای گرد هم می‌آورند تا بهترین نتایج را برای هر فرد، خانواده ارائه کنند.</p>
            <h1 className=" text-3xl font-iransB text-center text-greenD mt-10 lg:text-right">برنامه های درمانی فردی</h1>
            <p className=" mt-5 leading-relaxed">هر فردی در آفرینش مورد بهترین و به روزترین ارزیابی ها قرار میگیرد.این به درمانگر شما امکان می‌دهد تا مشکلات شما و آنچه را که می‌خواهید از درمان به دست آورید را به طور کامل درک کند.نتایج ارزیابی های ما به گونه‌ای است که نیازهای خاص هر فرد، خانواده یا گروه را برآورده می‌کند. </p>
            <h1 className=" text-3xl font-iransB text-center text-greenD mt-16 lg:text-right">انواع مسائل سلامت عاطفی، رفتاری و روانی</h1>  
            <p className=" mt-5 leading-relaxed">ما طیف گسترده ای از مسائل عاطفی، رفتاری و سلامت روان را درمان می کنیم، از جمله اختلالات اضطرابی و افسردگی، حملات پانیک، اختلالات خوردن، اختلال بدشکلی بدن، تروما، اختلالات شخصیت، اختلال وسواس فکری عملی، اختلال کمبود توجه، بیش فعالی، اختلال طیف اوتیسم، اختلالات دوقطبی، و همچنین اختلالات روان پریشی مانند اسکیزوفرنی و اختلالات اسکیزوافکتیو. ما همچنین از افراد، زوج ها و خانواده هایی با نیازهای منحصر به فرد مانند فرزندان با استعداد، مدیران ارشد و افراد حرفه ای با عملکرد بالا پشتیبانی تخصصی ارائه می دهیم. ما همچنین ارزیابی‌های تشخیصی اختلالات طیف اوتیسم را با استفاده از ابزارهای تشخیصی خاص ارائه می‌کنیم و برنامه‌های مدیریتی ایمن و سازنده را برای افراد در هر سنی ارائه می‌کنیم. در همه موارد، هدف این است که برای هر فرد ابزارهایی را فراهم کنیم که برای غلبه بر چالش‌ها و پیشرفت در زندگی نیاز دارند. در صورت نیاز و با رضایت، ما از نزدیک با والدین، اعضای خانواده و مراقبین کار می کنیم و در صورت نیاز با خدمات خارجی از جمله پزشکان خانواده، پزشکان اطفال، متخصصان مراقبت های اجتماعی، مدارس و سایرین همکاری می کنیم .</p>  
            <h1 className=" text-5xl font-iransB text-greenD mt-20 text-center" >ارزش های ما</h1>
            <p className=" text-center text-lg text-[#46533B] mt-8 font-iransB" >ارزش های ما زیربنای همه چیزها و کارهایی است که آفرینش به آن اعتقاد دارد.</p>  
            <h1 className=" text-3xl font-iransB text-greenD mt-16 text-center">فلسفه ما</h1> 
            <p className=" text-center mt-2">سلامت روانی به همان اندازه سلامت جسمانی مهم است – و توجه به سلامت روان و سلامت عاطفی برای داشتن یک زندگی واقعی ضروری است.</p>    
            <h1 className=" text-3xl font-iransB text-greenD mt-11 text-center">مردم</h1>
            <p className=" text-center mt-2">اولویت اول ما مردم هستند. همه تیم ما با هم کار میکنند تا محیطی ایجاد کنیم که افراد و پیشرفت آنها در اولویت قرار بگیرند.</p>
            <h1 className=" text-3xl font-iransB text-greenD mt-11 text-center">توانمند سازی</h1>
            <p className=" text-center mt-2">ما مشتریان خود را قادر می‌سازیم تا تصمیمات آگاهانه بگیرند و با یک بینش و مهارت قدرتمند بهترین نتایج را برای خود و خانواده بدست آورند.</p>
            <h1 className=" text-3xl font-iransB text-greenD mt-11 text-center">رشد و تعالی</h1>
            <p className=" text-center mt-2">ما در کاری که انجام می‌دهیم بهترین هستیم - اما همیشه به دنبال این هستیم که از طریق یادگیری مداوم، رویکردهای جدید و به‌روز ماندن، سطوح عالی‌تری را ارائه دهیم.</p>
            <h1 className=" text-3xl font-iransB text-greenD mt-11 text-center">اعتماد</h1>
            <p className=" text-center mt-2">ما فرهنگ شفافیت، صراحت و صداقت را در همه سطوح و همیشه ترویج میکنیم.</p>
        </div>
        </>
    )
}