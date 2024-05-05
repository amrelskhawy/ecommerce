"use client"
import React, { useEffect, useState } from "react";
import ProductApis from '../../_utils/ProductApis'

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
		const { title, description, category, price, banner } = product?.attributes
		const { url } = banner?.data?.attributes?.formats?.thumbnail
		return (
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		)
	}


}