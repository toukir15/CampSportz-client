export default function OurWork() {
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold text-center">CHECK OUR WORK</h1>
      <p className="mb-8 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ligula
        leo. Aliquam suscipit sed purus.
      </p>

      <div className="grid grid-cols-4 gap-4 my-20 w-full">
        <div className="bg-yellow-200 w-full ">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/12/11/surfer-1838958_1280.jpg"
            alt=""
          />
        </div>
        <div className="bg-yellow-200 w-full row-span-2 col-span-2  border-red-500 border-2">
          <img
            className="object-contain border-red-500 border-2"
            src="https://img.freepik.com/free-photo/high-angle-male-swimmer-water-pool_23-2148687635.jpg?size=626&ext=jpg&ga=GA1.2.431432617.1673875862&semt=sph"
            alt=""
          />
        </div>
        <div className="bg-yellow-200   row-span-2">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/02/14/32/golf-2571830_1280.jpg"
            alt=""
          />
        </div>
        <div className="bg-yellow-200 w-full ">
          <img
            src="https://media.istockphoto.com/id/1212046612/photo/young-boy-at-the-skatepark.jpg?s=612x612&w=0&k=20&c=h4v0IzDShOEy2MM-NchMk649yx1598Tgl4SqNuNGHEk="
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
