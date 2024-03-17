import Mail from '/public/mail.png'
import Instagram from '/public/instagram.png'
import LinkDin from '/linkdin.png'
import FooterLogo from '/footer_logo.png'
export default function Footer() {
  return (
    <>
      <footer className="bg-[#1D1D1D]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center mb-4">
                <img
                  src={FooterLogo}
                  className="h-8 me-3"
                  alt="Trion Tech Solution Logo"
                />
                <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
                  Trion <span className="text-[#02B7F8] capitalize">Tech</span>  Solution
                </span>
              </a>
              <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
                <a href="mailto:triontechsolution@gmail.com" className='flex items-center gap-4'>
                    <img src={Mail} alt="" />
                    <span className='text-white text-base'>triontechsolution@gmail.com</span>
                </a>
                <a href="#" className='flex items-center gap-4'>
                    <img src={Instagram} alt="" />
                    <span className='text-white text-base'>triontechsolution</span>
                </a>
                <a href="#" className='flex items-center gap-4'>
                    <img src={LinkDin} alt="" />
                    <span className='text-white text-base'>trion tech solution</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1 justify-end">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-white uppercase text-base font-bold">
                    How it works
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-white uppercase text-base font-bold">
                    About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-white uppercase text-base font-bold">
                    Our work
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-white uppercase text-base font-bold">
                    Blog
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-white uppercase text-base font-bold">
                    Contact us
                    </a>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
          
        </div>
      </footer>
    </>
  );
}
