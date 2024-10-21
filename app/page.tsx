import Image from "next/image";
import image1 from '../public/images/image1.png';
import image2 from '../public/images/image2.png';
import image3 from '../public/images/image3.png';
import image4 from '../public/images/image4.png';


export default function Home() {
  return (
    <div>
      <nav>
        <ul className="h-32 flex bg-blue-200 justify-center items-center">
          <li className=" mx-10 p-3 bg-neutral-100 border-4 border-double border-black rounded-2xl p-1 py-0 hover:bg-slate-300"><a href="#">Home</a></li>
          <li className=" mx-10 p-3 bg-neutral-100 border-4 border-double border-black rounded-2xl p-1 py-0 hover:bg-slate-300"><a href="#">About</a></li>
          <li className=" mx-10 p-3 bg-neutral-100 border-4 border-double border-black rounded-2xl p-1 py-0 hover:bg-slate-300"><a href="#">Contact us</a></li>
        </ul>
      </nav>
      <nav>
        <h1 className="font-bold text-3xl bg-green-100"> All Types Of Transport :</h1>
        <h2 className="text-3xl italic font-semibold mx-80 text-blue-800"> All types of tickets are available here!!</h2>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, inventore recusandae culpa porro minima aliquid distinctio debitis earum quod quidem suscipit nihil laudantium esse dolor ipsa quasi ad. Adipisci, esse .
      </nav>

      <div>
        <ul>
          <li className="font-semibold text-2xl bg-purple-100">Car </li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus vitae praesentium similique commodi iusto odit nobis nesciunt impedit laborum, optio beatae error dolor tenet.
          <Image src={image1} alt="image1" width={300} height={400} />

          <li className="font-semibold text-2xl bg-purple-100">Bus</li>


          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione ducimus voluptatem accusantium atque unde officiis distinctio minima quas praesentium similique, ipsum veniam sint architecto asperiores non recusandae beatae earum blanditiis cumque assumenda?
          <Image src={image2} alt="image2" width={300} height={400} />

          <li className="font-semibold text-2xl bg-purple-100">Train</li>

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aliquid harum dolore mollitia veniam, et repellat odit dolorem sequi cum architecto nemo minus vitae voluptatem. Molestiae quas rerum reprehenderit vero debitis, earum delectus repellendus ab perferendis assumenda autem consequatur hic.
          <Image src={image3} alt="image3" width={300} height={400} />

          <li className="font-semibold text-2xl bg-purple-100">Aeroplane</li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, id officiis odio quibusdam dignissimos, maxime officia, iusto cum aspernatur neque quaerat qui voluptatem unde alias! Rerum maxime praesentium, tempora est iure eum enim sequi, debitis dicta facilis repellendus modi nemo, quis voluptatem excepturi voluptas accusamus? Molestias ex autem dolorum necessitatibus!
          <Image src={image4} alt="image4" width={300} height={400} />

        </ul>
        <div className="text-3xl italic font-semibold mx-28 text-blue-800">
          Have a safe journey!!
        </div>
      </div>
      <footer className="font-medium bg-zinc-300" >
        &nbsp;&nbsp;&nbsp;Copyright claim &copy; |&nbsp;&nbsp;&nbsp;All rights reserved
      </footer>
    </div>
  )
}
