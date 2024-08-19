"use client"
import Image from 'next/image';

const Diamonds = ({  }) => {
    return (
        <>
            <div className="hidden lg:block absolute right-5 top-0 mt-14">
                <div className="relative -left-[60%] ">
                    <div className="absolute rotate-45 w-[170px] h-[170px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-2xl">
                    </div>
                    <div className=" relative bg-clip-text border-gray-200 rounded-2xl  ">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={'/images/home_page_thumbnails/first.jpg'}
                            className="w-[250px]  aspect-square DiamondClipPath rounded-2xl "
                        />
                    </div>
                </div>

                <div className="relative -translate-y-[40%]">
                    <div className="absolute rotate-45 w-[170px] z-[-1] h-[170px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl">
                    </div>
                    <div className=" relative bg-clip-text border-gray-200 rounded-2xl">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={'/images/home_page_thumbnails/second.png'}
                            className="w-[250px] h-[250px] aspect-square DiamondClipPath rounded-2xl"
                        />
                    </div>
                </div>

                <div className="relative -left-[60%] -translate-y-[80%]">
                    <div className="absolute rotate-45 w-[170px] z-[-1] h-[170px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl">
                    </div>
                    <div className="bg-clip-text border-gray-200 rounded-2xl overflow-hidden">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={ '/images/home_page_thumbnails/third.jpeg'}
                            className="w-[250px] aspect-square DiamondClipPath rounded-2xl overflow-hidden "
                        />
                    </div>
                </div>
            </div>

            <div className="block lg:hidden h-[300px] right-14 bottom-4">
            </div>
            <div className="block h-[400px] lg:hidden absolute right-[50%] top-5">
                <div className="relative left-[50%]">
                    <div className="absolute rotate-45 w-[100px] h-[100px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl">
                    </div>
                    <div className="bg-clip-text border-gray-200 rounded-xl">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={ '/images/home_page_thumbnails/first.jpg'}
                            className="w-[150px] aspect-square DiamondClipPath rounded-2xl"
                        />
                    </div>
                </div>

                <div className="relative -left-[3%] bottom-[15%]">
                    <div className="absolute rotate-45 w-[100px] h-[100px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl">
                    </div>
                    <div className="bg-clip-text border-gray-200 rounded-xl overflow-hidden">
                        <Image
                            width={200}
                            height={200}
                            alt="Coding Image"
                            src={ '/images/home_page_thumbnails/second.png'}
                            className="w-[150px] aspect-square DiamondClipPath rounded-2xl"
                        />
                    </div>
                </div>

                <div className="relative left-[105%] bottom-[52.5%]">
                    <div className="absolute rotate-45 w-[100px] h-[100px] left-[15%] top-[15.4%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl">
                    </div>
                    <div className="bg-clip-text border-gray-200 rounded-xl">
                        <Image
                            width={190}
                            height={150}
                            alt="Coding Image"
                            src={ '/images/home_page_thumbnails/third.jpeg'}
                            className="w-[150px] aspect-square DiamondClipPath rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Diamonds;
