import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
          <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
           <img className='w-1/2 h-96 ' src="https://img.freepik.com/premium-vector/empty-state-light_22052-4894.jpg?w=740" alt="" />
        <div>
        </div>

            <div className='max-w-md text-center mt-5'>
              <Link
                to='/'
                className='px-8 py-3 font-semibold rounded bg-red-200  text-gray-900'
              >
                Back to homepage
              </Link>
              
            </div>
          </div>
        </section>
      )
};

export default ErrorPage;