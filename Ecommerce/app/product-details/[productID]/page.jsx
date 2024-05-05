import React from "react";

export default function ProductDetail({ params }) {
	return (
		<div>
			{params?.productID}
		</div>
	)
}