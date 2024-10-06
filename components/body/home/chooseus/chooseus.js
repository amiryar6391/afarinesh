import imgch1 from '../../../../public/images/chooseus/chs1.svg'
import imgch2 from '../../../../public/images/chooseus/chs2.svg'
import imgch3 from '../../../../public/images/chooseus/chs3.svg'
import imgch4 from '../../../../public/images/chooseus/chs4.svg'
import imgch5 from '../../../../public/images/chooseus/chs5.svg'
import imgch6 from '../../../../public/images/chooseus/chs6.svg'
import CardChooseUs from './cardchooseus'

export default function ChooseUs(){

    let chooseitemes=[
        {id:1,chooseimg:imgch1 , choosetitle:'نیازی به انتظار نیست' , choosedesc:'شما مطمئن خواهید شد که یک مشاوره در اولین فرصت رزرو شده است'},
        {id:2,chooseimg:imgch2 , choosetitle:'برنامه های درمانی' , choosedesc:'درمان های ما بر اساس نیازهای فردی شما طراحی شده است، ما برای همه گروه های سنی مراقبت می کنیم'},
        {id:3,chooseimg:imgch3 , choosetitle:'دارای صلاحیت بالا' , choosedesc:'متخصصان آفرینش چندین دهه تجربه و دانش را در زمینه سلامت روان گرد هم می آورند'},
        {id:4,chooseimg:imgch4 , choosetitle:'قرار داد با بیمه های درمانی' , choosedesc:'ما با بیمه های درمانی قرار داریم و بیمه های مکمل هم میپذیریم.'},
        {id:5,chooseimg:imgch5 , choosetitle:'دسترسی آسان' , choosedesc:'موقعیت مناسبی در مرکز شهر یزد با دسترسی آسان و محل پارک ماشین.'},
        {id:6,chooseimg:imgch6 , choosetitle:'رویکرد مشارکتی' , choosedesc:'ارتباط نزدیک با پزشکان عمومی، پزشکان اطفال و سایر متخصصان مراقبت های بهداشتی (در صورت لزوم)'}

    ]



    return(
        <section className=" bg-[#f8f8f8]">
            <div className=" container mx-auto">
            <h5 className=" text-[#46533B] text-center font-iransB text-2xl mb-8 pt-7">چرا ما را انتخاب می کنید</h5>
            <h1 className=" text-greenD text-center text-5xl font-iransB" >جلسات درمانی شخصی و فردی</h1>
            <div className=" grid grid-cols-12 mt-12">
                {chooseitemes.map((item)=>(
                <div className=" col-span-12 md:col-span-6 lg:col-span-4" key={item.id}>
                    <CardChooseUs {...item} />
                </div>

                ))}
            </div>
            </div>
        </section>
    )
}