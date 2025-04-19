import phoneIcon from '../assets/svg/phone.svg';
import arrowDownIcon from '../assets/svg/arrow-down.svg';
import emailIcon from '../assets/svg/email.svg'
import geoIcon from '../assets/svg/geo.svg';

import vkLogo from '../assets/vk.png'

export function Footer() {
  return (
    <footer className="bg-[#333] w-full">
      <div className="ml-auto mr-auto container pl-9 pr-9">
        <div className="">
            <div className="rt_meta pt-12 pb-12">
                <div className="flex">
                    <div class="flex justify-between w-full flex-wrap">
                        <div className="flex lg:gap-12 flex-wrap container
                        md:gap-8 gap-4">
                            <div class="flex items-start gap-2">
                                <img src={phoneIcon} className='pt-1 mr-2'/>
                                <div className="flex items-start flex-col">
                                    <a href="tel:+78432392929" className="font-bold text-white" >+7 (843) 239-29-29</a>
                                    <span className="text-neutral-400 text-sm text-center cursor-pointer hover:text-white">Заказать звонок</span>
                                </div>
                                <img src={arrowDownIcon} className='pt-2'/>
                            </div>

                            {/* Можно компонентом реализовать и прокидывать данные,
                            но я не уверен понадобится ли тебе именно React, поэтому решил
                            оставить так, чтобы работало по Ctrl+C Ctrl+V */}
                            <div className="flex items-start">
                                <img className='pt-1.5 mr-4' src={emailIcon} alt="" />
                                <a href="mailto:info@rit-rt.ru" className="text-white">info@rit-rt.ru</a>
                            </div>

                            <div className="flex items-start">
                                <img className='pt-1.5 mr-4' src={geoIcon} alt="" />
                                <span className="text-white">ул. Маршала Чуйкова, 1а</span>
                            </div>

                            <div className="lg:ml-auto">
                                <ul className='flex gap-2'>
                                    <li>
                                        <a href="">
                                            <img src={vkLogo} alt="vk" className='w-10 h-10 rounded grayscale transition duration-400 hover:grayscale-0'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={vkLogo} alt="inst" className='w-10 h-10 rounded grayscale transition duration-400 hover:grayscale-0'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={vkLogo} alt="tg" className='w-10 h-10 rounded grayscale transition duration-400 hover:grayscale-0'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src={vkLogo} alt="wtsp" className='w-10 h-10 rounded grayscale transition duration-400 hover:grayscale-0'/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
        </div>


            <div className="
            p-6
            sm:p-8
            md:p-10
            lg:pt-14 lg:pb-9 lg:pl-16 lg:pr-16

            border-1 border-[#555555] rounded flex flex-wrap gap-5 relative
            [&>div]:flex-1
            ">
                {/* <div className="">
                    <a href="" className='text-white font-bold hover:text-[#999]'>Услуги</a>
                    <ul 
                    className='mt-5 
                    [&>li>a]:text-[#999]
                    [&>li>a]:text-sm [&>li>a:hover]:text-white
                    [&>li:not(:first-child)]:mt-2'>
                        <li>
                            <a href="">Организация похорон</a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <a href="" className='text-white font-bold hover:text-[#999]'>Каталог</a>
                    <ul 
                    className='mt-5 
                    [&>li>a]:text-[#999]
                    [&>li>a]:text-sm [&>li>a:hover]:text-white
                    [&>li:not(:first-child)]:mt-2'>
                        <li>
                            <a href="">Венки и Корзины</a>
                        </li>
                        <li>
                            <a href="">Кресты на могилу</a>
                        </li>
                        <li>
                            <a href="">Гробы</a>
                        </li>
                        <li>
                            <a href="">Обелиски</a>
                        </li>
                        <li>
                            <a href="">Мусульманские принадлежности</a>
                        </li>
                        <li>
                            <a href="">Памятники</a>
                        </li>
                        <li>
                            <a href="">Мемориальные комплесы</a>
                        </li>
                        <li>
                            <a href="">Изделия из металла</a>
                        </li>
                        <li>
                            <a href="">Изделия из камня</a>
                        </li>
                        <li>
                            <a href="">Ограды</a>
                        </li>
                        <li>
                            <a href="">Таблички</a>
                        </li>
                        <li>
                            <a href="">Фотокерамика/Металлокерамика</a>
                        </li>
                        <li>
                            <a href="">Урны для праха</a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <a href="" className='text-white font-bold hover:text-[#999]'>Компания</a>
                    <ul 
                    className='mt-5 
                    [&>li>a]:text-[#999]
                    [&>li>a]:text-sm [&>li>a:hover]:text-white
                    [&>li:not(:first-child)]:mt-2'>
                        <li>
                            <a href="">О компании</a>
                        </li>
                        <li>
                            <a href="">Сотрудники</a>
                        </li>
                        <li>
                            <a href="">Отзывы</a>
                        </li>
                        <li>
                            <a href="">Реквизиты</a>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <a href="" className='text-white font-bold hover:text-[#999]'>Информация</a>
                    <ul 
                    className='mt-5 
                    [&>li>a]:text-[#999]
                    [&>li>a]:text-sm [&>li>a:hover]:text-white
                    [&>li:not(:first-child)]:mt-2'>
                        <li>
                            <a href="">Вопрос-ответ</a>
                        </li>
                    </ul>
                </div> */}
                


                <div className="w-full max-w-7xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-[#999]">
                    {/* УСЛУГИ */}
                    <div className="">
                        <input type="checkbox" id="services" className="peer hidden lg:hidden" />
                        <label
                        htmlFor="services"
                        className="flex justify-between items-center cursor-pointer py-4 text-white font-bold lg:cursor-default lg:py-0"
                        >
                        Услуги
                        <svg
                            className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180 lg:hidden"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </label>
                        <div
                        className="
                            overflow-hidden max-h-0 transition-[max-height] duration-500 ease-in-out
                            peer-checked:max-h-96
                            lg:max-h-full lg:block
                        "
                        >
                        <ul className="[&>li]:mt-2 [&>li:hover]:text-white">
                            <li><a href="#">Организация похорон</a></li>
                        </ul>
                        </div>
                    </div>

                    {/* КАТАЛОГ */}
                    <div className="">
                        <input type="checkbox" id="catalog" className="peer hidden lg:hidden" />
                        <label
                        htmlFor="catalog"
                        className="flex justify-between items-center cursor-pointer py-4 text-white font-bold lg:cursor-default lg:py-0"
                        >
                        Каталог
                        <svg
                            className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180 lg:hidden"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </label>
                        <div
                        className="overflow-hidden max-h-0 transition-[max-height] duration-500 ease-in-out
                            peer-checked:max-h-fit
                            lg:max-h-full lg:block"
                        >
                        <ul className="[&>li]:mt-2 [&>li:hover]:text-white">
                            <li>
                                <a href="">Венки и Корзины</a>
                            </li>
                            <li>
                                <a href="">Кресты на могилу</a>
                            </li>
                            <li>
                                <a href="">Гробы</a>
                            </li>
                            <li>
                                <a href="">Обелиски</a>
                            </li>
                            <li>
                                <a href="">Мусульманские принадлежности</a>
                            </li>
                            <li>
                                <a href="">Памятники</a>
                            </li>
                            <li>
                                <a href="">Мемориальные комплесы</a>
                            </li>
                            <li>
                                <a href="">Изделия из металла</a>
                            </li>
                            <li>
                                <a href="">Изделия из камня</a>
                            </li>
                            <li>
                                <a href="">Ограды</a>
                            </li>
                            <li>
                                <a href="">Таблички</a>
                            </li>
                            <li>
                                <a href="">Фотокерамика/Металлокерамика</a>
                            </li>
                            <li>
                                <a href="">Урны для праха</a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* КОМПАНИЯ */}
                    <div className="">
                        <input type="checkbox" id="company" className="peer hidden lg:hidden" />
                        <label
                        htmlFor="company"
                        className="flex justify-between items-center cursor-pointer py-4 text-white font-bold lg:cursor-default lg:py-0"
                        >
                        Компания
                        <svg
                            className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180 lg:hidden"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </label>
                        <div
                        className="overflow-hidden max-h-0 transition-[max-height] duration-500 ease-in-out
                            peer-checked:max-h-96
                            lg:max-h-full lg:block"
                        >
                        <ul className="[&>li]:mt-2 [&>li:hover]:text-white">
                            <li>
                                <a href="">О компании</a>
                            </li>
                            <li>
                                <a href="">Сотрудники</a>
                            </li>
                            <li>
                                <a href="">Отзывы</a>
                            </li>
                            <li>
                                <a href="">Реквизиты</a>
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* ИНФОРМАЦИЯ */}
                    <div className="">
                        <input type="checkbox" id="info" className="peer hidden lg:hidden" />
                        <label
                        htmlFor="info"
                        className="flex justify-between items-center cursor-pointer py-4 text-white font-bold lg:cursor-default lg:py-0"
                        >
                        Информация
                        <svg
                            className="w-5 h-5 transition-transform duration-300 peer-checked:rotate-180 lg:hidden"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </label>
                        <div
                        className="overflow-hidden max-h-0 transition-[max-height] duration-500 ease-in-out
                            peer-checked:max-h-96
                            lg:max-h-full lg:block"
                        >
                        <ul className="[&>li]:mt-2 [&>li:hover]:text-white">
                            <li>
                                <a href="">Вопрос-ответ</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>

                
                <div className="absolute text-white bottom-[-2%] right-0 left-0 w-fit h-auto ml-auto mr-auto bg-[#333] pl-3 pr-3 md:pl-8 md:pr-8 flex gap-4 md:gap-8">
                    <img src={vkLogo} alt="icon" className='max-h-4'/>
                    <img src={vkLogo} alt="icon" className='max-h-4'/>
                    <img src={vkLogo} alt="icon" className='max-h-4'/>
                    <img src={vkLogo} alt="icon" className='max-h-4'/>
                    <img src={vkLogo} alt="icon" className='max-h-4'/>
                </div>
                
            </div>
            <div className="pt-12 pb-12 flex justify-between text-[#999] text-sm">
                <span>© 2025 Ритуальные услуги</span>
                <a href="" className='hover:text-white'>Политика конфиденциальности</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
