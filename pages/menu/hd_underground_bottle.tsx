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


        
 
        <div className='h-8 '></div>
        <div className='h-4 '></div>
          <div className="grid grid-cols-4 gap-2 w-full text-black dark:text-white" id='alcohol'>
          
          <div className="col-start-1 col-end-4 dark:text-purple-500" >
            <div className='m-auto w-100 font-bold underline text-[20px]' >BOTTLE</div>
          </div>

          
          <div className='col-start-1 col-end-3'>보드카믹서</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>30.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>VODKA MIXER</div>

          <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>말리부믹서</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>40.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>MALIBU MIXER</div>

          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>하우스 샴페인</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>35.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>HOUSE CHAMPAGNE</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>하우스 보드카</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>49.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>HOUSE VODKA</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>하우스 럼</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>49.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>HOUSE RUM</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>하우스 진</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>49.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>HOUSE GIN</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>하우스 데킬라</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>59.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>HOUSE TEQUILA</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>말리부</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>69.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>MALIBU</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>바카디 모히또</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>69.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>BACADI MOJITO</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>예거 마이스터</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>79.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>YEGERMEISTER</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>호세쿠엘보</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>79.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>JOSE CUERVO</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>아구와</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>89.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>AGWA</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>잭다니엘/허니</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>89.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>JACK DANIEL/HONEY</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>제임슨</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>89.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>JAMESON</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>데블스 브뤼</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>89.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>DEVIL'S BRUT</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>엑스레이티드</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>140.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>X-RATED</div>
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>헤네시</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>170.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>HENNESSY</div>

                                 
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-7'></div>

          </div>




         


    <div>
      <div> </div>


    </div>



      </div>
    </Container>
  );
}
