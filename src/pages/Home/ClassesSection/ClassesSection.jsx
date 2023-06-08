
const ClassesSection = () => {
    return (
        <div>
            <h2 className="text-4xl text-center my-16 font-serif font-medium text-orange-500">Popular Classes Section</h2>

            <div className="grid md:grid-cols-3">

           {/* card1 */}
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://img.freepik.com/free-vector/english-teacher-concept-illustration_114360-7477.jpg?w=740&t=st=1686241702~exp=1686242302~hmac=2c424efe46d353b9568669013c00c90205b359a2d9a16fc7bf479950a3936151" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Classes Section: Learning English</h2>
                <p className="font-medium">Number Of Students: 545</p>
            </div>
            </div>
           {/* card1 */}

           {/* card2 */}
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://img.freepik.com/free-vector/english-teacher-concept-illustration_114360-7477.jpg?w=740&t=st=1686241702~exp=1686242302~hmac=2c424efe46d353b9568669013c00c90205b359a2d9a16fc7bf479950a3936151" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Classes Section: Learning English</h2>
                <p className="font-medium">Number Of Students: 545</p>
            </div>
            </div>
           {/* card2 */}

            </div>
            
        </div>
    );
};

export default ClassesSection;