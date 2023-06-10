import { FaUsers } from 'react-icons/fa';
import { motion } from "framer-motion"

const ClassesSection = () => {
    return (
        <motion.div  initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
            <h2 className="text-5xl text-center my-16 font-serif font-medium text-orange-500 uppercase">Popular Classes Section</h2>

            <div className="grid md:grid-cols-3 gap-6 mx-16 mt-10 mb-20">

           {/* card1 */}
           <div className="card card-compact w-full hover:bg-orange-800 bg-base-100 shadow-xl">
            <figure><img className="w-full h-72 hover:scale-110" src="https://img.freepik.com/free-vector/english-teacher-concept-illustration_114360-7477.jpg?w=740&t=st=1686241702~exp=1686242302~hmac=2c424efe46d353b9568669013c00c90205b359a2d9a16fc7bf479950a3936151" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Classes Section: Learn English</h2>
                <div className='flex'>
                <p className="font-medium">Number Of Students: 545 </p>
                <FaUsers className='text-xl text-orange-500 '></FaUsers>
                </div>
                <p className="font-medium">Description: The Global Language of Communication </p> 
            </div>
            </div>
           {/* card1 */}

           {/* card2 */}
           <div className="card card-compact w-full hover:bg-purple-800 bg-base-100 shadow-xl">
            <figure><img className="w-full h-72 hover:scale-110" src="https://img.freepik.com/free-vector/arab-muslim-woman-traditional-clothing-with-blank-banner_1308-47570.jpg?w=740&t=st=1686242427~exp=1686243027~hmac=bb8668bfdba47057ed4e5e839ca271f5b2dc9fcc940f3fac8e12ee5be9350870" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Classes Section: Learn Arabic</h2>
                <div className='flex'>
                <p className="font-medium">Number Of Students: 545 </p>
                <FaUsers className='text-xl text-orange-500'></FaUsers>
                </div>
                <p className="font-medium">Description: Unlocking the Language of the Middle East </p>
            </div>
            </div>
           {/* card2 */}

           {/* card3 */}
           <div className="card card-compact w-full hover:bg-orange-800 bg-base-100 shadow-xl">
            <figure><img className="w-full h-72 hover:scale-110" src="https://img.freepik.com/free-vector/indian-hindi-diwas-hindi-book-tree-alphabets-words-background_1035-24858.jpg?w=740&t=st=1686242500~exp=1686243100~hmac=94eee0f1f3afefe03f32fed9c326e745087201da077dfbdd804c82e8ea8caf97" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Classes Section: Learn Hindi</h2>
                <div className='flex'>
                <p className="font-medium">Number Of Students: 545 </p>
                <FaUsers className='text-xl text-orange-500'></FaUsers>
                </div>
                <p className="font-medium">Description: Indias Vibrant and Diverse Language</p>
            </div>
            </div>
           {/* card3 */}
           {/* card4 */}
           <div className="card card-compact w-full hover:bg-purple-800 bg-base-100 shadow-xl">
            <figure><img className="w-full h-72 hover:scale-110" src="https://img.freepik.com/premium-vector/colorful-profession-illustration_277904-8327.jpg?w=740" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Classes Section: Learn French</h2>
                <div className='flex'>
                <p className="font-medium">Number Of Students: 545 </p>
                <FaUsers className='text-xl text-orange-500'></FaUsers>
                </div>
                <p className="font-medium">Description: The Language of Culture and Elegance</p>
            </div>
            </div>
           {/* card4 */}

           {/* card5 */}
           <div className="card card-compact w-full hover:bg-orange-800 bg-base-100 shadow-xl">
            <figure><img className="w-full h-72 hover:scale-110" src="https://img.freepik.com/premium-photo/portrait-indian-lady-teacher-saree-stands-against-green-white-blackboard_466689-7102.jpg?w=740" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Classes Section: Learn Bangla</h2>
                <div className='flex'>
                <p className="font-medium">Number Of Students: 545 </p>
                <FaUsers className='text-xl text-orange-500'></FaUsers>
                </div>
                <p className="font-medium">Description: Exploring the Richness of the Bengali Language</p>
            </div>
            </div>
           {/* card5 */}

           {/* card6 */}
           <div className="card card-compact w-full  hover:bg-purple-800 bg-base-100 shadow-xl">
            <figure><img className="w-full h-72 hover:scale-110" src="https://img.freepik.com/premium-photo/blackboard-with-text-learn-spanish-flag-spain-books-pencils-compass_656538-1861.jpg?w=740" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Classes Section: Learn Spanish</h2>
                <div className='flex'>
                <p className="font-medium">Number Of Students: 545 </p>
                <FaUsers className='text-xl text-orange-500'></FaUsers>
                </div>
                <p className="font-medium">Description:  From Madrid to Mexico City</p>
            </div>
            </div>
           {/* card6 */}

            </div>
            
        </motion.div>
    );
};

export default ClassesSection;