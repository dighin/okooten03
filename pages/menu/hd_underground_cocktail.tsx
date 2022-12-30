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
         

       
          <div className="grid grid-cols-4 gap-2 w-full text-black dark:text-white" id='alcohol'>
          
          <div className="col-start-1 col-end-4 dark:text-purple-500" >
            <div className='m-auto w-100 font-bold underline text-[20px]' >COCKTAIL</div>
          </div>

         
          <div className='col-start-1 col-end-3'>말리부 오렌지/파인</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>MALIBU ORANGE/FINE</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>진토닉</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>GIN TONIC</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>


          <div className='col-start-1 col-end-3'>예거밤</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>JAGER BOMB</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>깔루아밀크</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>KHALUA MILK</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>아그와밤</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>AGWA BOMB</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>잭콕</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>JACK COKE</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>블랙러시안</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>BLACK RUSSIAN</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>데킬라 선라이즈</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>TEQUILA SUNRISE</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>모히또 스프라이트</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>MOJITO SPRITE</div>

          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>아디오스</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>ADIOS</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>체리봄버</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>CHERRY BOMBER</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-3'>롱티</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>LONG ISLAND ICED TEA</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>피치크러쉬</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>PEACH CRUSH</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>


          <div className='col-start-1 col-end-3'>미도리샤워</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>MIDORI SOUR</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>피치비치</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>PEACH BITCH</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>엑스핑크 밤/토닉</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>X-PINK BOMB/TONIC</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>오늘의 칵테일</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>10.0</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>HIDDEN COCKTAIL</div>
          <div className='col-start-1 col-end-7'></div>  <div className='col-start-1 col-end-7'></div>

 

          <div className='col-start-1 col-end-3'>논아이콜칵테일</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7.0</div>
          <div className='col-start-1 col-end-7'>(신데렐라)</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300 text-[14px]'>NON-ALCOHOL(Cinderella)</div>
      
      

         
                                 
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
