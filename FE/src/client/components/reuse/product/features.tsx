import { useState } from "react";
import ModalCompare from "./modal_compare";
import ModalDetail from "./modal_detail";
import useProductContext from "../../../context/ContextProduct";

const ProductFeatures = () => {
	const { feature } = useProductContext();

	const [loading, setLoading] = useState<Boolean>(false);
	const [like, setLike] = useState<Boolean>(false);

	const loadCart = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	const pressLike = () => {
		setLike(true);
		setTimeout(() => {
			setLike(false);
		}, 1500);
	};

	return (
		<div
			className={`${
				feature ? "bottom-[30%] opacity-1" : "bottom-[20%] opacity-0"
			} absolute ease-in duration-200 h-[58px] left-[10%] bg-white shadow-md rounded-sm w-[80%] py-[15px]`}
		>
			<div className="grid grid-cols-4 w-full h-full *:border-r *:grid *:place-items-center *:cursor-pointer *:text-zinc-700">
				<div className="" role="status">
					<i
						onClick={loadCart}
						className={`${loading ? "hidden" : "block"} hover:text-[#00BFC5] fa-solid fa-bag-shopping`}
					></i>
					<svg
						aria-hidden="true"
						className={`${
							loading ? "inline" : "hidden"
						} w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#00BFC5]`}
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				</div>
				<div onClick={pressLike}>
					<i className={`${like && "text-[#00BFC5]"} hover:text-[#00BFC5] fa-solid fa-heart`}></i>
				</div>
				{/* Compare */}
				<ModalCompare />
				{/* Mini Detail */}
				<ModalDetail />
			</div>
		</div>
	);
};

export default ProductFeatures;
