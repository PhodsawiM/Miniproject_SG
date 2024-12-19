import React from 'react'

export default function Home() {
  return (
    <div className='relative h-screen bg-[url(./public/image3.jpg)] bg-cover bg-center'>
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className='flex flex-col items-center space-y-5 h-screen my-5 text-white'>  
            <div className='flex flex-col items-center'>
                <h1 className='text-blue-200 text-8xl font-bold'>Home</h1>
                <p>dasdas</p>
            </div>
            <div className='flex flex-row justify-between w-[80%] min-h-screen'>
                <div className='flex flex-col item-center w-full p-5'>
                    <p className='text-3xl font-bold'>content 1</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, itaque. At fugit commodi veritatis a sint. Iste adipisci neque, accusamus nesciunt sint voluptate possimus libero officia culpa asperiores reiciendis architecto quis vero obcaecati reprehenderit natus! Soluta hic dolores, nihil fugiat iusto dolore eius inventore? Nulla distinctio quisquam deleniti exercitationem obcaecati maxime iusto ut quas cum dolorum iste, sunt natus error voluptatem inventore sit praesentium et voluptas minus nemo laboriosam deserunt dolor aperiam saepe. Soluta, sequi voluptas! Maiores vitae, iusto officia aut omnis rerum nesciunt eveniet est debitis modi? Totam nam, laudantium eveniet corrupti rerum reiciendis aperiam rem id ipsam numquam.</p>
                </div>
                <hr className='bg-gray-400 border-none mt-3 h-[70%] w-1' />
                <div className='flex flex-col item-center w-full p-5'>
                    <p className='text-3xl font-bold'>content 2</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloremque veritatis asperiores corrupti fugit, at nulla eum dolorum. Reiciendis recusandae quia tempore illum quis explicabo dignissimos, iusto sed consequuntur tenetur voluptatibus aliquid, quod rerum veritatis fugiat suscipit expedita ipsam placeat quas excepturi molestiae voluptatum magni quo! Incidunt atque ea vel, assumenda suscipit voluptate voluptatum recusandae, dicta doloremque quidem optio sapiente animi temporibus, illo impedit nihil at velit harum alias repudiandae quaerat! Blanditiis iure, neque voluptatibus quam qui eveniet voluptatem enim soluta, quibusdam praesentium sed facilis repellat ab nihil quidem! Autem rerum excepturi sunt facere repellendus eum ad, adipisci quae laudantium.</p>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}
