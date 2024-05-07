"use client"
import React, { useEffect, useState } from "react";
import ProductApis from '../../_utils/ProductApis'
import { Breadcrumb } from "@/app/_components/Breadcrumb";
import { ProductInfo } from "./_components/ProductInfo";
import { ProductBanner } from "./_components/ProductBanner";
import { Product } from "@/app/_components/Product";

export default function ProductDetail({ params }) {

	const [product, setProduct] = useState({})
	const [relatedProducts, setRelatedProducts] = useState([])

	const { productID } = params

	const getProductByID_ = () => {
		ProductApis.getProductByID(productID).then(res => {
			setProduct(res.data);
			getRelatedProducts_(res.data)
		})
	}

	const getRelatedProducts_ = (product) => {
		ProductApis.getRelatedProductByCategory(product?.attributes.category).then(res => {
			setRelatedProducts(res.data)
		}).catch(error => console.log(`Error Cause of : ${error}`))
		
	}

	useEffect(() => {
		getProductByID_()
		
	}, [productID])


	if (product && product.attributes) {
		const { title, banner } = product?.attributes
		const { url } = banner?.data.attributes
		return (
			<div className="container  md:p-0 p-3 grid gap-4 mx-auto mt-12">
				{/* Breadcrumb */}
				<Breadcrumb productTitle={title} />
				<div className="grid md:grid-cols-2 gap-6">
					<ProductBanner banner={url} />
					<ProductInfo product={product} />
				</div>
				<h3 className="mt-6 font-medium text-slate-900 text-2xl">Realted Products</h3>

				<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
				{
					relatedProducts.map(product => (
						<Product key={product.id} product={product} />
					))
				}
				</div>
			</div>
		)
	}


}