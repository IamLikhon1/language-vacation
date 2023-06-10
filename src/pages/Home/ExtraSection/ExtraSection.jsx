import { motion } from "framer-motion"
const ExtraSection = () => {
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
        className="my-20">
            <h2 className="text-5xl text-orange-400 my-10 text-center font-serif">LATEST NEWS</h2>

            <div className="grid md:grid-cols-3 gap-5 mx-16 ">

                {/* card 1 */}
                <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full h-72" src="https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?w=740&t=st=1686282177~exp=1686282777~hmac=ed27353bfa7a4d5259d538acd1eb9dd6457ffa8e0ced000834104e1557fd8c6d" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title flex flex-col items-center my-3 text-orange-400">June 1 , 2023</h2>
                    <p className="hover:text-orange-600 font-semibold">7 Reasons Why You Admit Our Camp</p>
                   
                </div>
                </div>
                {/* card 1 */}

                {/* card 2 */}
                <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full h-72" src="https://img.freepik.com/free-vector/hand-hold-stack-books-genius-boy-hand-drawn-sketch-vector-illustration_460848-14902.jpg?w=740&t=st=1686282711~exp=1686283311~hmac=0c57af6948de63fd3ce35262426b62440d93ded5468c71bd5cb393a62b6d5387" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title flex flex-col items-center my-3 text-orange-400">May 22 , 2023</h2>
                    <p className="hover:text-orange-600 font-semibold">Test of Interactive English: Personal Experience</p>
                   
                </div>
                </div>
                {/* card 2 */}

                {/* card 3 */}
                <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full h-72" src="https://img.freepik.com/premium-vector/children-class-doing-homework_7710-93.jpg?w=740" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title flex flex-col items-center my-3 text-orange-400">April 24, 2021</h2>
                    <p className="hover:text-orange-600 font-semibold">5 Reasons Why You Should Learn Foreign Language</p>
                   
                </div>
                </div>
                {/* card 3 */}

            </div>
            
        </motion.div>
    );
};

export default ExtraSection;