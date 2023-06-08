import Swal from "sweetalert2";

const InstructorsSection = () => {
    const handleClick=()=>{
        Swal.fire({
            title: 'Hello!!',
            text: 'Dear Student Welcome,',
            icon: 'success',
            confirmButtonText: 'Welcome'
          })
    }
    return (
        <div>
             <h2 className="text-5xl my-10 text-center font-serif font-medium text-orange-500 ">Our Popular Instructors Section</h2>

             <div className="grid md:grid-cols-3 gap-10 mx-16 my-20 ">

                {/* card 1 */}
                <div className="card card-compact w-full hover:bg-orange-300 bg-base-100 shadow-xl">
                        <figure><img className="h-72" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1686112596~exp=1686113196~hmac=39c258cc203aea8881b0943990f5252fcef848a5a9d60068dc7fb0c47c82f205" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Instructor: Mr.David Miller</h2>
                            <p className="font-medium text-lg">Instructor of: <span className="text-orange-500 font-semibold">Learning English</span> </p>
                            <div className="card-actions justify-end">
                            <button onClick={handleClick} className="btn btn-primary my-5">Click ME</button>
                            </div>
                        </div>
            </div>
                {/* card 1 */}
                {/* card 2 */}
                <div className="card card-compact w-full hover:bg-orange-300 bg-base-100 shadow-xl">
                        <figure><img className="h-72" src="https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg?w=740" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Instructor: Md. Habib Basar</h2>
                            <p className="font-medium text-lg">Instructor of: <span className="text-orange-500 font-semibold">Learning Arabic</span> </p>
                            <div className="card-actions justify-end">
                            <button onClick={handleClick} className="btn btn-primary my-5">Click ME</button>
                            </div>
                        </div>
            </div>
                {/* card 2 */}

                {/* card 3 */}
                <div className="card card-compact w-full hover:bg-orange-300 bg-base-100 shadow-xl">
                        <figure><img className="h-72" src="https://img.freepik.com/free-vector/donald-trump-portrait-with-flat-design_23-2147940891.jpg?w=740&t=st=1686112998~exp=1686113598~hmac=594e5b0024a061324e75842d16bd86a3061e0bbbc8453e5d91e106fb44b4060b" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Instructor: Mr.Trump</h2>
                            <p className="font-medium text-lg">Instructor of: <span className="text-orange-500 font-semibold">Learning Hindi</span> </p>
                            <div className="card-actions justify-end">
                            <button onClick={handleClick} className="btn btn-primary my-5">Click ME</button>
                            </div>
                        </div>
            </div>
                {/* card 3 */}

                {/* card 4 */}
                <div className="card card-compact w-full hover:bg-orange-300 bg-base-100 shadow-xl">
                        <figure><img className="h-72" src="https://img.freepik.com/premium-vector/person-avatar-icon-design-vector-multiple-use-vector-illustration_625349-280.jpg?w=740" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Instructor: Mr.Watson Smith</h2>
                            <p className="font-medium text-lg">Instructor of: <span className="text-orange-500 font-semibold">Learning French</span> </p>
                            <div className="card-actions justify-end">
                            <button onClick={handleClick} className="btn btn-primary my-5">Click ME</button>
                            </div>
                        </div>
            </div>
                {/* card 4 */}

                {/* card 5 */}
                <div className="card card-compact w-full hover:bg-orange-300 bg-base-100 shadow-xl">
                        <figure><img className="h-72" src="https://img.freepik.com/premium-vector/people-profile-graphic_24911-21374.jpg?w=740" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Instructor: Ms.Kylie Jenner</h2>
                            <p className="font-medium text-lg">Instructor of: <span className="text-orange-500 font-semibold">Learning Bangla</span> </p>
                            <div className="card-actions justify-end">
                            <button onClick={handleClick} className="btn btn-primary my-5">Click ME</button>
                            </div>
                        </div>
            </div>
                {/* card 5 */}

                {/* card 6 */}
                <div className="card card-compact w-full hover:bg-orange-300 bg-base-100 shadow-xl">
                        <figure><img className="h-72" src="https://img.freepik.com/premium-vector/avatar-cute-little-boy-isolated-vector-illustration-cartoon-style_174639-55036.jpg?w=740" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Instructor: Mr. Asaduzzaman</h2>
                            <p className="font-medium text-lg">Instructor of: <span className="text-orange-500 font-semibold">Learning Spanish</span> </p>
                            <div className="card-actions justify-end">
                            <button onClick={handleClick} className="btn btn-primary my-5">Click ME</button>
                            </div>
                        </div>
            </div>
                {/* card 6 */}

             </div>
                
               
            </div>
            
       
    );
};

export default InstructorsSection;