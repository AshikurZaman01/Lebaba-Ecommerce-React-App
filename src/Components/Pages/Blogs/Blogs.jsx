import blogsData from '../../../../src/assets/data/blogs.json'

const Blogs = () => {


    return (
        <div className='max-w-[var(--max-width-1400)] mx-auto px-4 py-20 bg-extra-light rounded-lg'>

            <h2 className='section__header'>Latest From Blog</h2>

            <p className='section__subheader '>Elevate Your Wardrobe With Our Freshest Style Tips, Trends And Inspiration On Our Blog.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12'>
                {
                    blogsData.map((blog, index) => (

                        <div key={index} className='blog__card  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>
                            <img src={blog.imageUrl} alt={blog.title} />

                            <div className='blog__card__content'>
                                <h6>{blog.subtitle}</h6>
                                <h4>{blog.title}</h4>
                                <p>{blog.date}</p>
                            </div>

                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Blogs