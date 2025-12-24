import { MdFavoriteBorder } from 'react-icons/md'
import { FaRegEye } from 'react-icons/fa'
import { TbArrowsRightLeft } from 'react-icons/tb'
import { RiShoppingBag4Line } from 'react-icons/ri'
const ProductCartBar = () => {
    return <div>
        <div className='border shadow-md bg-white p-2 rounded-xl hover:bg-darkBlue hover:text-white hoverEffect'>
            <MdFavoriteBorder />
            <FaRegEye />
            <TbArrowsRightLeft />
            <RiShoppingBag4Line />
        </div>
    </div>
}

export default ProductCartBar