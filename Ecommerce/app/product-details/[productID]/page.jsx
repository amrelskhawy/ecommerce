"use client"
import React, { useEffect, useState } from "react";
import ProductApis from '../../_utils/ProductApis'
import Image from "next/image";
import { Breadcrumb } from "@/app/_components/Breadcrumb";
import { ProductInfo } from "./_components/ProductInfo";
import { ProductBanner } from "./_components/ProductBanner";

export default function ProductDetail({ params }) {

	const [product, setProduct] = useState({})

	const { productID } = params

	const getProductByID_ = () => {
		ProductApis.getProductByID(productID).then(res => {
			setProduct(res.data);
		})
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
			</div>
		)
	}


}