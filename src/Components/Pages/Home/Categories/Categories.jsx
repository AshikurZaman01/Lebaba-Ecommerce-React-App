import { Link } from 'react-router-dom';
import categoriesImg1 from '../../../../assets/images/category-1.jpg';
import categoriesImg2 from '../../../../assets/images/category-2.jpg';
import categoriesImg3 from '../../../../assets/images/category-3.jpg';
import categoriesImg4 from '../../../../assets/images/category-4.jpg';

const Categories = () => {

    const categories = [
        { id: 1, name: "Accessories", path: "accessories", image: categoriesImg1 },
        { id: 2, name: "Dress Collection", path: "dress", image: categoriesImg2 },
        { id: 3, name: "Jewellery", path: "jewellery", image: categoriesImg3 },
        { id: 4, name: "Cosmetecs", path: "cosmetics", image: categoriesImg4 },
    ];

    return (
        <div className="max-w-[var(--max-width-900)] mx-auto my-16">

            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore Our Categories</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {categories.map((item) => (

                    <Link
                        key={item.id}
                        to={`/categories/${item.path}`}
                        className="group relative overflow-hidden rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                    >

                        <div className="w-full h-56 md:h-64 lg:h-72 bg-cover bg-center group-hover:opacity-90" style={{ backgroundImage: `url(${item.image})` }}></div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-30"></div>

                        <h4 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold text-xl text-center group-hover:text-yellow-400 transition-colors">
                            {item.name}
                        </h4>

                    </Link>

                ))}
            </div>
        </div>
    );
}

export default Categories;
