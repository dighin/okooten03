import Link from 'next/link';

import Analytics from 'components/metrics/Analytics';
import Container from 'components/Container';
import GitHub from 'components/metrics/Github';
import Unsplash from 'components/metrics/Unsplash';
import YouTube from 'components/metrics/Youtube';
import TopTracks from 'components/TopTracks';
 
export default function menu_choonsam() {
  return (
    <Container
      title="Dashboard – Lee Robinson"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          홍대 언더그라운드 MENU
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
          </p>
        </div>

        


           
          <div className="grid grid-cols-s gap-3 w-full">
                    <div className="font-bold  text-black dark:text-white  rounded-xl border-2  flex flex-wrap content-center 
                     border-black dark:border-purple-400">
                      <div className='font-medium  dark:text-white hover:underline m-auto w-100'>
                      <Link
            href="/menu/hd_underground_set"
            className="font-bold  text-black dark:text-white  border-orange-400"
          > SET
                     </Link>
                      </div></div>

                      <div className="font-bold  text-black dark:text-white  rounded-xl border-2  flex flex-wrap content-center 
                     border-black dark:border-purple-400">
                      <div className='font-medium  dark:text-white hover:underline m-auto w-100'>
                      <Link
            href="/menu/hd_underground_bottle"
            className="font-bold  text-black dark:text-white  border-orange-400"
          > BOTTLE
                     </Link>
                      </div></div>

                      <div className="font-bold  text-black dark:text-white  rounded-xl border-2  flex flex-wrap content-center 
                     border-black dark:border-purple-400">
                      <div className='font-medium  dark:text-white hover:underline m-auto w-100'>
                      <Link
            href="/menu/hd_underground_cocktail"
            className="font-bold  text-black dark:text-white  border-orange-400"
          > COCKTAIL
                     </Link>
                      </div></div>

                      <div className="font-bold  text-black dark:text-white  rounded-xl border-2  flex flex-wrap content-center 
                     border-black dark:border-purple-400">
                      <div className='font-medium  dark:text-white hover:underline m-auto w-100'>
                      <Link
            href="/menu/hd_underground_shot"
            className="font-bold  text-black dark:text-white  border-orange-400"
          > SHOT
                     </Link>
                      </div></div>


                      <div className="font-bold  text-black dark:text-white  rounded-xl border-2  flex flex-wrap content-center 
                     border-black dark:border-purple-400">
                      <div className='font-medium  dark:text-white hover:underline m-auto w-100'>
                      <Link
            href="/menu/hd_underground_beer"
            className="font-bold  text-black dark:text-white  border-orange-400"
          > SOJU & BEER
                     </Link>
                      </div></div>

                      <div className="font-bold  text-black dark:text-white  rounded-xl border-2  flex flex-wrap content-center 
                     border-black dark:border-purple-400">
                      <div className='font-medium  dark:text-white hover:underline m-auto w-100'>
                      <Link
            href="/menu/hd_underground_beverage"
            className="font-bold  text-black dark:text-white  border-orange-400"
          > BEVERAGE
                     </Link>
                      </div></div>

                      <div className="font-bold  text-black dark:text-white  rounded-xl border-2  flex flex-wrap content-center 
                     border-black dark:border-purple-400">
                      <div className='font-medium  dark:text-white hover:underline m-auto w-100'>
                      <Link
            href="/menu/hd_underground_food"
            className="font-bold  text-black dark:text-white  border-orange-400"
          > FOOD
                     </Link>
                      </div></div>
                   
                   
          </div>






        <div className='h-8'></div>
        
        <div className='h-4'></div>
          
        
          <div className="grid grid-cols-4 gap-2  w-full text-black dark:text-white" id='cook'>
          
          <div className="col-start-1 col-end-4 dark:text-purple-500" >
            <div className='m-auto w-100 font-bold underline text-[20px]' >BEVERAGE</div>
          </div>

         
          <div className='col-start-1 col-end-3'>오렌지주스</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>8.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>ORANGE JUICE</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>파인애플주스</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>8.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>PINEAPPLE JUICE</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>크린베리주스</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>8.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>CRANBERRY JUICE</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>핫식스</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>3.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>HOTSIX</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>토닉워터</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>3.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>TONIC WATER</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>진저에일</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>3.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>GINGER ALE</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>콜라</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>4.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>COKE</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>웰치스</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>4.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>WELCHS</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>스프라이트</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>4.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>SPRITE</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>물</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>1.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>WATER</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>


          
          </div>


    <div>
      <div> </div>


    </div>



      </div>
    </Container>
  );
}
