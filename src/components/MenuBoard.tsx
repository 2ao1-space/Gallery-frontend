export default function MenuBoard({
  closeMenuBtn,
}: {
  closeMenuBtn: () => void;
}) {
  return (
    <div className="bg-black absolute top-0 left-0 w-full h-screen flex-1 z-50 text-background md:grid grid-cols-12  grid-rows-12 gap-4 p-4">
      <button
        onClick={closeMenuBtn}
        className="absolute md:position-none top-4 right-4 md:col-start-12 text-background font-Losta_Masta transition-all duration-500 hover:text-main "
      >
        Close
      </button>

      <div className="row-span-9 md:row-span-5 col-span-11 row-start-1 md:row-start-6 flex flex-col-reverse md:grid md:grid-cols-12 justify-start items-start">
        {/* platform title */}
        <div className="md:col-span-8 flex flex-col">
          <h1 className="text-4xl md:text-[80px] lg:text-[150px] font-Losta_Masta text-main pt-10 md:py-0">
            AO Gallery
          </h1>
          <div className="flex justify-center md:-mt-6 lg:-my-10">
            <p className="hidden md:block md:w-1/2 text-sm text-justify">
              A sanctuary where creativity breathes freely, where every stroke
              tells a story, and where passionate hearts discover the art that
              speaks their language.
            </p>
          </div>
        </div>
        {/* sitemap */}
        <div className="col-span-2 col-start-11 my-auto md:text-xl flex items-center justify-center ">
          <div className="w-full">
            <span className="py-4 flex items-center text-xs text-gray-400">
              SITEMAP
            </span>
            <ul>
              <li>
                <a
                  href="/gallary"
                  className="font-Losta_Masta  hover:text-main"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/marketplace"
                  className="font-Losta_Masta  hover:text-main"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="font-Losta_Masta  hover:text-main"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/login" className="font-Losta_Masta  hover:text-main">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-11 row-span-4 row-start-1 md:grid grid-cols-12 grid-rows-3 items-center ">
        {/* slogan */}
        <div className="row-span-3 col-start-3 col-span-3">
          <span className="py-4 hidden md:flex items-center text-xs text-gray-400">
            WHO WE ARE
          </span>
          <p className="text-xs">
            We're more than a platform—we're a movement. A space where
            creativity isn't just displayed, it's celebrated. Where artists
            aren't just sellers, they're storytellers. Where collectors aren't
            just buyers, they're guardians of beauty.
          </p>
        </div>

        {/* contact us */}
        <div className="py-10 md:py-0 row-span-3 col-span-2 col-start-11 text-xl ">
          <span className="py-4 flex items-center text-xs text-gray-400">
            CONTACT US
          </span>
          <ul className="text-xs">
            <li className="grid">
              <span>Email:</span>
              <span className="text-gray-400 indent-12">
                contact@aogallery.com
              </span>
            </li>
            <li className="grid">
              <span>Phone:</span>
              <span className="text-gray-400 indent-12">(123) 456-7890</span>
            </li>
          </ul>
        </div>
      </div>

      {/* copy right */}
      <div className="col-start-1 col-end-13 row-span-1 row-start-12  text-background text-sm font-Losta_Masta ">
        <div className="flex justify-between items-end">
          <span>@2025</span>
          <span className="text-background">Created By Ahmed Omran</span>
        </div>
      </div>
    </div>
  );
}
