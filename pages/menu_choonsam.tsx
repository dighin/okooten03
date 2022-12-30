import Link from 'next/link';
import Analytics from 'components/metrics/Analytics';
import Container from 'components/Container';
import GitHub from 'components/metrics/Github';
import Unsplash from 'components/metrics/Unsplash';
import YouTube from 'components/metrics/Youtube';
import TopTracks from 'components/TopTracks';

export default function Menu_choonsam() {

  const onclickHandler = (name) => alert(`hi ${name}`);


  // const sc = () => document.c

  // const textRef = useRef('hoithobit');

//   const focusHandler = () => {
//     textRef.current.hoithobi
    
// };

// const resetHandler = () => {
//   textRef.current.disabled = true;
//   textRef.current.value = "";
// };




  return (
    <Container
      title="Dashboard – Lee Robinson"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          춘삼 MENU
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
          </p>
        </div>



            <div className="grid grid-cols-4 gap-4 w-full">
                    <div className="font-bold  text-black dark:text-white  rounded-xl border-2  flex flex-wrap content-center 
                     border-black dark:border-purple-400">
                      <a href='#set' className='font-medium  dark:text-white hover:underline m-auto w-100'
                      // onClick={focusHandler}
                      >세트
                      </a></div>
                    <div className="font-bold  text-black dark:text-white rounded-xl border-2 border-black dark:border-purple-400 flex flex-wrap content-center">
                      <a href='#drink' className='font-medium  dark:text-white hover:underline m-auto w-100'>음료
                      </a></div>
                    <div className="font-bold  text-black dark:text-white rounded-xl border-2 border-black dark:border-purple-400 flex flex-wrap content-center">
                      <a href='#alcohol' className='font-medium  dark:text-white hover:underline m-auto w-100'>주류
                      </a></div>
                    <div className="font-bold  text-black dark:text-white rounded-xl border-2 border-black dark:border-purple-400 flex flex-wrap content-center">
                      <a href='#cook' className='font-medium  dark:text-white hover:underline m-auto w-100'>식사
                      </a></div>
                   
          </div>
          
       

        <div className='h-8'></div>
        
        <div className='h-4'></div> 
        <div className='hoithobit hidden'>
          <div className="grid grid-cols-4 gap-4  w-full text-black dark:text-white" id='set'>
          
            {/* <div className="col-start-1 col-end-4 flex flex-wrap content-center" >
              <div className='m-auto w-100' > 세트 메뉴</div>
            </div> */}

            <div className="col-start-1 col-end-4 dark:text-purple-500" >
              <div className='m-auto w-100 font-bold underline text-[20px]' > 세트</div>
            </div>

            <div className='col-start-1 col-end-3'>아메리카노 세트</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>15,000</div>
            <div className='col-start-1 col-end-3'>와인 파스타 세트</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>20,000</div>
            <div className='col-start-1 col-end-3'>하이볼 샤베트 세트</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>23,000</div>
            <div className='col-start-1 col-end-3'>소맥 불닭 세트</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>22,000</div>
            <div className='col-start-1 col-end-3'>소맥 가라아게 세트</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>24,000</div>
            <div className='col-start-1 col-end-3'>소맥 오다리 세트</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>21,000</div>
            <div className='col-start-1 col-end-7'></div>
            <div className='col-start-1 col-end-7 text-red-800'>* 레드락 생맥주 2잔 변경 시 + 3,000</div>
            <div className='col-start-1 col-end-7 text-red-800'>* 스텔라 생맥주 2잔 변경 시 + 5,000</div>
           
          </div>
          </div>

          <div className='h-20'></div>
          <div className="grid grid-cols-4 gap-4 w-full  text-black dark:text-white" id='drink'>
          
          <div className="col-start-1 col-end-4 dark:text-purple-500" >
            <div className='m-auto w-100 font-bold underline text-[20px]' >음료</div>
          </div>

          <div className='col-start-1 col-end-3'>아메리카노</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>5,000</div>
          <div className='col-start-1 col-end-3'>아이스티</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
          <div className='col-start-1 col-end-3'>카페라떼</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
          <div className='col-start-1 col-end-3'>초코라떼</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
          <div className='col-start-1 col-end-3'>생딸기라떼</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
          <div className='col-start-1 col-end-3'>밀크티</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
          <div className='col-start-1 col-end-3'>체리콕</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
         
          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-7 font-bold '>
            <div className='m-auto w-100'>차</div>
          </div>
          <div className='col-start-1 col-end-3'>얼그레이</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
          <div className='col-start-1 col-end-3'>페퍼민트</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
          <div className='col-start-1 col-end-3'>카모마일</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
          <div className='col-start-1 col-end-3'>히비스커스</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>
        </div>


        <div className='h-20 '></div>
          <div className="grid grid-cols-4 gap-4  w-full text-black dark:text-white" id='alcohol'>
          
          <div className="col-start-1 col-end-4 dark:text-purple-500" >
            <div className='m-auto w-100 font-bold underline text-[20px]' >주류</div>
          </div>

          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-7 font-bold '>
            <div className='m-auto w-100'>칵테일 & 하이볼</div>
          </div>
          <div className='col-start-1 col-end-3'>제임슨 하이볼</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>8,000</div>
          <div className='col-start-1 col-end-3'>후르츠 하이볼</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9,000</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300'>자몽 / 레몬 / 복숭아</div>
          <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>진토닉</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>

          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-7 font-bold '>
            <div className='m-auto w-100'>생맥주</div>
          </div>
          <div className='col-start-1 col-end-3'>레드락소맥 330ml</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>5,000</div>
          <div className='col-start-1 col-end-3'>레드락 500ml</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7,000</div>
          <div className='col-start-1 col-end-3'>스텔라 330ml</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9,000</div>

          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-7 font-bold '>
            <div className='m-auto w-100'>와인</div>
          </div>
          <div className='col-start-1 col-end-3'>하우스 와인</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>9,000</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300'>RED / WHITE</div>

          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-7 font-bold '>
            <div className='m-auto w-100'>위스키</div>
          </div>
          <div className='col-start-1 col-end-3'>JAMESON</div>  <div></div>  <div className='col-end-5  col-span-1'></div>
          <div className='col-start-1 col-end-3  text-gray-600 dark:text-gray-300'>- BOTTLE</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>60,000</div>
          <div className='col-start-1 col-end-3  text-gray-6 00 dark:text-gray-300'>- GLASS</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>5,000</div>
          </div>




          <div className='h-20'></div>
          <div className="grid grid-cols-4 gap-4  w-full text-black dark:text-white" id='cook'>
          
          <div className="col-start-1 col-end-4 dark:text-purple-500" >
            <div className='m-auto w-100 font-bold underline text-[20px]' >식사</div>
          </div>

          <div className='col-start-1 col-end-7 font-bold '>
            <div className='m-auto w-100'>파스타</div>
          </div>
          <div className='col-start-1 col-end-3'>토마토 파스타</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>12,000</div>


        <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-7 font-bold '>
            <div className='m-auto w-100'>케이크 </div></div>
         
          <div className='col-start-1 col-end-3'>조각 케이크</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7,000</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300'>초코티라미수 / 수플레치즈</div>

          <div className='col-start-1 col-end-3'>크레이프 조각 케이크</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7,000</div>
          <div className='col-start-1 col-end-7 text-gray-800 dark:text-gray-300'>딸기 / 밀크</div>
          <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-7'></div>
          <div className='col-start-1 col-end-7 font-bold '>
            <div className='m-auto w-100'>밥</div></div>
          <div className='col-start-1 col-end-3'>춘삼 카레밥</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7,000</div>
          <div className='col-start-1 col-end-3'>가라아게 치킨밥</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>7,000</div>

          <div className='col-start-1 col-end-7'></div>

          <div className='col-start-1 col-end-3'>라볶이</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>6,000</div>  
          <div className='col-start-1 col-end-7'></div>

         
          <div className='col-start-1 col-end-7 font-bold '>
            <div className='m-auto w-100'>요리</div>
          </div>
          <div className='col-start-1 col-end-3'>치즈 불닭</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>15,000</div>
          <div className='col-start-1 col-end-3'>데리야끼 치킨가라게</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>15,000</div>
          <div className='col-start-1 col-end-3'>통살 오징어다리튀김</div>  <div>ㆍㆍㆍ</div>  <div className='col-end-5  col-span-1'>15,000</div>
          
          </div>


    <div>
      <div> </div>


    </div>



      </div>
    </Container>
  );
}
