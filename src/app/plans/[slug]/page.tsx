import React from 'react'
import Form from './Form'

const page = ({ params }: { params: { slug: String } }) => {
  return (
    <main className='flex sm:flex-row flex-col w-full h-full bg-red-600'>
      <section className='flex-1 flex justify-center h-full items-center bg-white text-black'>
        <div className='max-w-[650px] sm:py-0 py-16'>
          <Form />
        </div>
      </section>
      <section
        className="flex-1 bg-black lg:px-24 px-10 py-44 sm:inline-flex xl:flex-[0.6] 
        flex justify-center items-center text-[1.2rem] xl:text-[1.4rem]"
      >
        <div className="flex justify-start flex-col gap-7">
          {/* header */}
          <h1
            className="xl:w-[450px] w-[440px] text-[1.1rem] sm:text-[1.3rem] 
          xl:text-[1.8rem] font-bold"
          >
            We value flexibility and transparency in payments. Our process is simple :
          </h1>
          <div>
            <h3 className='font-semibold text-[1.3rem]'>1 - Contact Us : </h3>
            <p>Reach out to us, and we{"'"}ll  discuss your project needs.</p>
          </div>
          <div>
            <h3 className='font-semibold text-[1.3rem]'>2 - Taillored Solution : </h3>
            <p>We{ "'"}ll create a custom plan based on your requirements and budget.</p>
          </div>
          <div>
            <h3 className='font-semibold text-[1.3rem]'>3 - Agreement & Payment : </h3>
            <p>Once we agree on the details you can proceed with payment.</p>
          </div>
          <p>
            If you{"'"}d prefer to email us directly, send us a message at
            <span className="text-highlight cursor-pointer">
              hello@viralpit.com
            </span>
          </p>
        </div>
        {/* <Reveal width="fit-content" showHighlight="transparent">
          <Image className="w-full h-full" src={contact} alt="contact" />
        </Reveal> */}
      </section>
    </main>
  )
}

export default page